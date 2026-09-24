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
import {
  SITE_URL,
  KETAMIN_PATH,
  business,
  faqs,
  ketaminAnwendungen,
  ketaminFaqs,
  ketaminIntro,
  kooperationArzt,
} from '../src/siteData';

const DIST = path.join(process.cwd(), 'dist');
const TEMPLATE = fs.readFileSync(path.join(DIST, 'index.html'), 'utf-8');
const IMAGE = `${SITE_URL}/assets/stella-sessel-fenster.jpg`;
const OG_IMAGE = `${SITE_URL}/assets/og-praxis.jpg`;
const OG_IMAGE_KETAMIN = `${SITE_URL}/assets/og-ketamin.jpg`;
const PORTRAIT = `${SITE_URL}/assets/stella-savelsberg-portrait.jpg`;

/** Build-Datum als dateModified / lastmod (ISO, ohne Uhrzeit). */
const UPDATED = new Date().toISOString().slice(0, 10);

const DESCRIPTION =
  'Verhaltenstherapie, Schematherapie und EMDR in Berlin-Tempelhof. Privatpraxis für privat Versicherte, Beihilfe und Selbstzahler:innen.';

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
  /** Eigenes Vorschaubild; ohne Angabe bleibt das Praxis-Bild aus index.html stehen. */
  image?: string;
  ogType?: string;
}

function applyHead(html: string, h: Head): string {
  let out = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(h.title)}</title>`);
  // `\s+` between name and content: index.html wraps the description tags over
  // several lines, a single space would silently leave the homepage text in place.
  out = sub(out, /(<meta\s+name="description"\s+content=")[^"]*(")/, h.description);
  out = sub(out, /(<link\s+rel="canonical"\s+href=")[^"]*(")/, h.canonical);
  out = sub(out, /(<meta\s+property="og:title"\s+content=")[^"]*(")/, h.title);
  out = sub(out, /(<meta\s+property="og:description"\s+content=")[^"]*(")/, h.description);
  out = sub(out, /(<meta\s+property="og:url"\s+content=")[^"]*(")/, h.canonical);
  out = sub(out, /(<meta\s+name="twitter:title"\s+content=")[^"]*(")/, h.title);
  out = sub(out, /(<meta\s+name="twitter:description"\s+content=")[^"]*(")/, h.description);
  if (h.image) {
    out = sub(out, /(<meta\s+property="og:image"\s+content=")[^"]*(")/, h.image);
    out = sub(out, /(<meta\s+name="twitter:image"\s+content=")[^"]*(")/, h.image);
  }
  if (h.ogType) {
    out = sub(out, /(<meta\s+property="og:type"\s+content=")[^"]*(")/, h.ogType);
  }
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
  areaServed: [
    { '@type': 'City', name: 'Berlin' },
    { '@type': 'AdministrativeArea', name: 'Berlin-Tempelhof' },
    { '@type': 'AdministrativeArea', name: 'Berlin-Schöneberg' },
    { '@type': 'AdministrativeArea', name: 'Berlin-Mariendorf' },
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    description: business.openingHours,
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Terminanfrage',
    email: business.email,
    telephone: business.phoneHref,
    availableLanguage: ['de'],
  },
  sameAs: [
    // Google-Unternehmensprofil (Teilen-Link, Knowledge-Graph-ID /g/11ltpzqzv4)
    'https://share.google/dRY4yqkHucodUGwlK',
    // Verzeichniseintrag; Telefonnummer und Website dort noch ergänzen (siehe Plan, B3)
    'https://www.therapie.de/profil/savelsberg/',
  ],
  knowsAbout: [
    'Verhaltenstherapie',
    'Schematherapie',
    'EMDR',
    'Emotionsfokussierte Psychotherapie',
    'Depression',
    'Angststörungen',
    'Phobien',
    'Trauma',
    'Burnout',
    'Essstörungen',
    'Zwangsstörungen',
    'Trauer',
    'Ketamin-gestützte Psychotherapie',
  ],
  availableService: [
    therapy('Verhaltenstherapie', 'Belastende Denk- und Verhaltensmuster wahrnehmen, verstehen und schrittweise verändern.'),
    therapy('Schematherapie', 'Weiterentwicklung der Verhaltenstherapie, die frühe Beziehungserfahrungen und wiederkehrende Muster bearbeitet.'),
    therapy('EMDR', 'Wissenschaftlich fundierte Methode zur Verarbeitung belastender oder traumatischer Erfahrungen.'),
    therapy('Emotionsfokussierte Psychotherapie', 'Arbeit an den emotionalen Wurzeln aktueller Belastungen.'),
    therapy(
      'Ketamin-gestützte Psychotherapie',
      'Psychotherapeutische Vorbereitung und Integration einer ärztlich durchgeführten Ketaminbehandlung, in Kooperation mit einer neurologischen Praxis.',
    ),
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
  knowsAbout: ['Verhaltenstherapie', 'Schematherapie', 'EMDR', 'Psychotherapie'],
  sameAs: ['https://share.google/dRY4yqkHucodUGwlK'],
  image: PORTRAIT,
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Ernst-Moritz-Arndt-Universität Greifswald' },
};

const faqPage = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${SITE_URL}/#faq`,
  mainEntityOfPage: SITE_URL,
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

// ── Structured data (Ketamin-Unterseite) ─────────────────────────────────────

const ketaminUrl = `${SITE_URL}${KETAMIN_PATH}`;

const ketaminProcedure = {
  '@context': 'https://schema.org',
  '@type': 'MedicalProcedure',
  '@id': `${ketaminUrl}#behandlung`,
  name: 'Ketamin-gestützte Psychotherapie',
  description: ketaminIntro[0],
  procedureType: 'https://schema.org/NoninvasiveProcedure',
  howPerformed:
    'Psychotherapeutisches Vorgespräch, ärztliches Vorgespräch, medizinisch überwachte Ketamin-Infusion in der kooperierenden neurologischen Praxis und psychotherapeutische Integration 24 bis 48 Stunden danach.',
  relevantSpecialty: 'Psychiatric',
  availableService: ketaminAnwendungen.map((name) => ({ '@type': 'MedicalCondition', name })),
  performer: [{ '@id': personId }, { '@id': `${ketaminUrl}#arzt` }],
};

const ketaminPhysician = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  '@id': `${ketaminUrl}#arzt`,
  name: kooperationArzt.name,
  medicalSpecialty: 'Neurologic',
  worksFor: {
    '@type': 'MedicalOrganization',
    name: kooperationArzt.praxis,
    address: {
      '@type': 'PostalAddress',
      streetAddress: kooperationArzt.street,
      postalCode: kooperationArzt.city.split(' ')[0],
      addressLocality: 'Berlin',
      addressCountry: 'DE',
    },
  },
};

const ketaminFaqPage = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${ketaminUrl}#faq`,
  mainEntityOfPage: ketaminUrl,
  mainEntity: ketaminFaqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const ketaminPage = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  '@id': `${ketaminUrl}#webpage`,
  url: ketaminUrl,
  name: 'Ketamin-gestützte Psychotherapie in Berlin-Tempelhof',
  description: ketaminIntro[0],
  inLanguage: 'de-DE',
  dateModified: UPDATED,
  isPartOf: { '@id': praxisId },
  about: { '@id': `${ketaminUrl}#behandlung` },
  provider: { '@id': praxisId },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Ketamin-gestützte Psychotherapie', item: ketaminUrl },
    ],
  },
};

const ld = (schema: object, id: string) =>
  `<script type="application/ld+json" id="${id}">${JSON.stringify(schema)}</script>`;

// ── Render pages ──────────────────────────────────────────────────────────────

// Home (dist/index.html): keep the rich head from index.html, add JSON-LD.
{
  let html = applyHead(TEMPLATE, {
    title: 'Psychotherapie Berlin-Tempelhof · Stella Savelsberg',
    description: DESCRIPTION,
    canonical: `${SITE_URL}/`,
    image: OG_IMAGE,
  });
  html = injectBody(html, renderToString(<App path="/" />));
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
    title: 'Impressum · Stella Savelsberg, Psychotherapie Berlin',
    description: 'Impressum und Anbieterkennzeichnung der psychotherapeutischen Praxis Stella Savelsberg in Berlin-Tempelhof.',
    canonical: `${SITE_URL}/impressum`,
  });
  html = injectBody(html, renderToString(<App path="/impressum" />));
  write('impressum', html);
}

// Datenschutz
{
  let html = applyHead(TEMPLATE, {
    title: 'Datenschutz · Stella Savelsberg, Psychotherapie Berlin',
    description: 'Datenschutzerklärung nach DSGVO der psychotherapeutischen Praxis Stella Savelsberg in Berlin-Tempelhof.',
    canonical: `${SITE_URL}/datenschutz`,
  });
  html = injectBody(html, renderToString(<App path="/datenschutz" />));
  write('datenschutz', html);
}

// Ketamin-gestützte Psychotherapie
{
  let html = applyHead(TEMPLATE, {
    title: 'Ketamin-gestützte Psychotherapie · Berlin-Tempelhof',
    description:
      'Ketamin-gestützte Psychotherapie in Berlin-Tempelhof: ärztlich durchgeführte Behandlung mit psychotherapeutischer Begleitung. Ablauf, Anwendung, Kosten.',
    canonical: ketaminUrl,
    image: OG_IMAGE_KETAMIN,
    ogType: 'article',
  });
  html = injectBody(html, renderToString(<App path={KETAMIN_PATH} />));
  html = injectJsonLd(html, [
    ld(ketaminPage, 'ld-webpage'),
    ld(ketaminProcedure, 'ld-procedure'),
    ld(ketaminPhysician, 'ld-physician'),
    ld(ketaminFaqPage, 'ld-faq'),
  ]);
  write(KETAMIN_PATH.slice(1), html);
}

// sitemap.xml mit lastmod erzeugen (überschreibt die Kopie aus public/).
{
  const urls: { loc: string; priority: string; changefreq: string }[] = [
    { loc: `${SITE_URL}/`, priority: '1.0', changefreq: 'monthly' },
    { loc: ketaminUrl, priority: '0.8', changefreq: 'monthly' },
    { loc: `${SITE_URL}/impressum`, priority: '0.2', changefreq: 'yearly' },
    { loc: `${SITE_URL}/datenschutz`, priority: '0.2', changefreq: 'yearly' },
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map(
      (u) =>
        `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${UPDATED}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`,
    )
    .join('\n')}\n</urlset>\n`;
  fs.writeFileSync(path.join(DIST, 'sitemap.xml'), xml, 'utf-8');
  console.log('  ✓  /sitemap.xml');
}

console.log('✅ Prerender complete — home + impressum + datenschutz + ketamin + sitemap written to dist/');
