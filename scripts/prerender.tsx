/**
 * prerender.tsx — Static HTML generator (runs after `vite build`).
 *
 * Crawlers and LLM/answer engines that don't execute JavaScript still receive
 * the full page content and structured data. The script:
 *   1. Renders <App path> to static HTML for each route (home, impressum,
 *      datenschutz) and injects it into #root.
 *   2. Writes each route to its own dist/[route]/index.html with route-specific
 *      <head> meta (title, description, canonical, OG/Twitter).
 *   3. Injects JSON-LD (LocalBusiness/MedicalBusiness, Person, FAQPage) on the
 *      homepage.
 *
 * The client then hydrates the same markup (see src/main.tsx).
 */

import fs from 'node:fs';
import path from 'node:path';
import { renderToString } from 'react-dom/server';
import App from '../src/App';
import { SITE_URL, business, faqs } from '../src/siteData';

const DIST = path.join(process.cwd(), 'dist');
const TEMPLATE = fs.readFileSync(path.join(DIST, 'index.html'), 'utf-8');
const IMAGE = `${SITE_URL}/assets/stella-sessel-fenster.jpg`;

const DESCRIPTION =
  'Psychotherapeutische Praxis in Berlin-Tempelhof. Stella Savelsberg (M.Sc.), Psychologische Psychotherapeutin mit Schwerpunkt Verhaltenstherapie, ergänzt durch Schematherapie und EMDR. Für privat Versicherte, Beihilfeberechtigte und Selbstzahler:innen.';

// ── Helpers ─────────────────────────────────────────────────────────────────

function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/** Replace the content of a single tag matched by `regex` (capture groups 1 + 2 wrap the value). */
function sub(html: string, regex: RegExp, value: string): string {
  return html.replace(regex, (_full, pre: string, post: string) => pre + esc(value) + post);
}

interface Head {
  title: string;
  description: string;
  canonical: string;
}

function applyHead(html: string, h: Head): string {
  let out = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(h.title)}</title>`);
  out = sub(out, /(<meta name="description" content=")[^"]*(")/, h.description);
  out = sub(out, /(<link rel="canonical" href=")[^"]*(")/, h.canonical);
  out = sub(out, /(<meta property="og:title" content=")[^"]*(")/, h.title);
  out = sub(out, /(<meta property="og:description" content=")[^"]*(")/, h.description);
  out = sub(out, /(<meta property="og:url" content=")[^"]*(")/, h.canonical);
  out = sub(out, /(<meta name="twitter:title" content=")[^"]*(")/, h.title);
  out = sub(out, /(<meta name="twitter:description" content=")[^"]*(")/, h.description);
  return out;
}

function injectBody(html: string, appHtml: string): string {
  return html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
}

function injectJsonLd(html: string, scripts: string[]): string {
  return html.replace('</head>', `    ${scripts.join('\n    ')}\n  </head>`);
}

function write(routeDir: string, html: string): void {
  const dir = routeDir ? path.join(DIST, routeDir) : DIST;
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf-8');
  console.log(`  ✓  /${routeDir}`);
}

// ── Structured data (homepage) ───────────────────────────────────────────────

const praxisId = `${SITE_URL}/#praxis`;
const personId = `${SITE_URL}/#stella`;

const therapy = (name: string, description: string) => ({ '@type': 'MedicalTherapy', name, description });

const localBusiness = {
  '@context': 'https://schema.org',
  '@type': ['MedicalBusiness', 'ProfessionalService'],
  '@id': praxisId,
  name: business.name,
  description: DESCRIPTION,
  url: SITE_URL,
  email: business.email,
  telephone: business.phoneHref,
  image: IMAGE,
  priceRange: '€€',
  currenciesAccepted: 'EUR',
  medicalSpecialty: 'Psychiatric',
  address: {
    '@type': 'PostalAddress',
    streetAddress: business.street,
    postalCode: business.postalCode,
    addressLocality: 'Berlin',
    addressRegion: 'Berlin',
    addressCountry: 'DE',
  },
  geo: { '@type': 'GeoCoordinates', latitude: business.geo.lat, longitude: business.geo.lng },
  hasMap: `https://www.google.com/maps?q=${encodeURIComponent(
    `${business.street}, ${business.postalCode} ${business.city}`,
  )}`,
  areaServed: { '@type': 'City', name: 'Berlin' },
  knowsAbout: [
    'Verhaltenstherapie',
    'Schematherapie',
    'EMDR',
    'Emotionsfokussierte Psychotherapie',
    'Depression',
    'Angststörungen',
    'Trauma',
    'Burnout',
  ],
  availableService: [
    therapy('Verhaltenstherapie', 'Belastende Denk- und Verhaltensmuster wahrnehmen, verstehen und schrittweise verändern.'),
    therapy('Schematherapie', 'Weiterentwicklung der Verhaltenstherapie, die frühe Beziehungserfahrungen und wiederkehrende Muster bearbeitet.'),
    therapy('EMDR', 'Wissenschaftlich fundierte Methode zur Verarbeitung belastender oder traumatischer Erfahrungen.'),
    therapy('Emotionsfokussierte Psychotherapie', 'Arbeit an den emotionalen Wurzeln aktueller Belastungen.'),
  ],
  founder: { '@id': personId },
  employee: { '@id': personId },
};

const person = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': personId,
  name: business.person,
  jobTitle: business.jobTitle,
  worksFor: { '@id': praxisId },
  url: SITE_URL,
  image: IMAGE,
  knowsAbout: ['Verhaltenstherapie', 'Schematherapie', 'EMDR', 'Psychotherapie'],
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Ernst-Moritz-Arndt-Universität Greifswald' },
};

const faqPage = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const ld = (schema: object, id: string) =>
  `<script type="application/ld+json" id="${id}">${JSON.stringify(schema)}</script>`;

// ── Render pages ──────────────────────────────────────────────────────────────

// Home (dist/index.html): keep the rich head from index.html, add JSON-LD.
{
  let html = injectBody(TEMPLATE, renderToString(<App path="/" />));
  html = injectJsonLd(html, [
    ld(localBusiness, 'ld-localbusiness'),
    ld(person, 'ld-person'),
    ld(faqPage, 'ld-faq'),
  ]);
  write('', html);
}

// Impressum
{
  let html = applyHead(TEMPLATE, {
    title: 'Impressum · Stella Savelsberg Psychotherapie Berlin',
    description: 'Impressum und Anbieterkennzeichnung der psychotherapeutischen Praxis Stella Savelsberg in Berlin-Tempelhof.',
    canonical: `${SITE_URL}/impressum`,
  });
  html = injectBody(html, renderToString(<App path="/impressum" />));
  write('impressum', html);
}

// Datenschutz
{
  let html = applyHead(TEMPLATE, {
    title: 'Datenschutzerklärung · Stella Savelsberg Psychotherapie Berlin',
    description: 'Datenschutzerklärung nach DSGVO der psychotherapeutischen Praxis Stella Savelsberg in Berlin-Tempelhof.',
    canonical: `${SITE_URL}/datenschutz`,
  });
  html = injectBody(html, renderToString(<App path="/datenschutz" />));
  write('datenschutz', html);
}

console.log('✅ Prerender complete — home + impressum + datenschutz written to dist/');
