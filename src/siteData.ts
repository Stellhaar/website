/**
 * siteData.ts — Single source of truth for content + SEO/GEO metadata.
 *
 * Used both by the React components (rendering) and scripts/prerender.tsx
 * (static <head> meta + JSON-LD), so FAQ text, NAP data and business facts
 * never drift apart.
 *
 * ⚠️  Vor Go-Live prüfen / ersetzen:
 *   - SITE_URL: Produktiv-Domain www.psychotherapie-stella-savelsberg.de
 *     (DNS muss in Vercel + beim Registrar noch verbunden werden).
 *   - business.geo: Koordinaten sind angenähert → exakte Lat/Lng verifizieren
 *     (z. B. über Google Maps Rechtsklick auf die Praxis-Adresse).
 *   - legal.berufshaftpflicht: tatsächliche Versicherung eintragen.
 *   - legal.aufsicht: laut Kammer-Merkblatt zuständig – vor Go-Live bestätigen.
 *   - Hero-Foto: assets/stella-sessel-fenster.jpg trägt noch ein Wasserzeichen
 *     ("NUR ZUR AUSWAHL") → lizenzierte Datei einsetzen (© Dieter Düvelmeyer).
 */

export const SITE_URL = 'https://www.psychotherapie-stella-savelsberg.de';

export const business = {
  name: 'Stella Savelsberg – Psychologische Psychotherapeutin',
  shortName: 'Stella Savelsberg',
  person: 'Stella Savelsberg',
  jobTitle: 'Psychologische Psychotherapeutin (Verhaltenstherapie), M.Sc.',
  email: 'psychotherapie.savelsberg@gmail.com',
  phone: '+49 1573 8197504',
  phoneHref: '+4915738197504',
  street: 'Bosestraße 43',
  postalCode: '12103',
  city: 'Berlin',
  district: 'Berlin-Tempelhof',
  region: 'Berlin',
  country: 'DE',
  // ⚠️ Angenäherte Koordinaten – vor Go-Live exakt verifizieren.
  geo: { lat: 52.4663, lng: 13.3852 },
  openingHours: 'Nach Vereinbarung',
} as const;

/**
 * Berufsrechtliche Pflichtangaben für das Impressum.
 * Quelle: Merkblatt „Websites von P, PP und KJP" der Psychotherapeutenkammer
 * Berlin (psychotherapeutenkammer-berlin.de) — Stand 2026.
 */
export const legal = {
  berufsbezeichnung: 'Psychologische Psychotherapeutin',
  verleihStaat: 'Bundesrepublik Deutschland',
  kammer: {
    name: 'Psychotherapeutenkammer Berlin',
    street: 'Fehrbelliner Str. 12',
    city: '10119 Berlin',
    url: 'https://www.psychotherapeutenkammer-berlin.de',
  },
  // ⚠️ Vor Go-Live bestätigen (laut Kammer-Merkblatt zuständig).
  aufsicht: 'Senatsverwaltung für Wissenschaft, Gesundheit, Pflege und Gleichstellung, Abteilung Gesundheit, Berlin',
  regelungen: [
    'Psychotherapeutengesetz (PsychThG)',
    'Berufsordnung der Psychotherapeutenkammer Berlin',
    'Heilberufsgesetz Berlin (HeilBG Berlin)',
  ],
  regelungenFundstelle: 'https://www.psychotherapeutenkammer-berlin.de',
  // ⚠️ Platzhalter – tatsächliche Berufshaftpflicht eintragen.
  berufshaftpflicht: { versicherer: '— (vor Go-Live eintragen) —', geltungsbereich: 'Deutschland' },
} as const;

export interface FaqItem {
  q: string;
  a: string;
}

export const faqs: FaqItem[] = [
  {
    q: 'Wie nehme ich Kontakt auf?',
    a: 'Am einfachsten per E-Mail. Schildern Sie kurz Ihr Anliegen — ich melde mich zeitnah mit Terminvorschlägen für ein erstes Gespräch.',
  },
  {
    q: 'Für wen ist eine Verhaltenstherapie geeignet?',
    a: 'Verhaltenstherapie kann u. a. bei Ängsten, Depressionen, Stress- und Belastungsreaktionen, Selbstwertthemen sowie nach belastenden Erfahrungen unterstützen. Im Erstgespräch klären wir, ob mein Angebot passt.',
  },
  {
    q: 'Was ist Schematherapie?',
    a: 'Die Schematherapie ist eine Weiterentwicklung der Verhaltenstherapie. Sie geht davon aus, dass frühe Beziehungserfahrungen unser Denken, Fühlen und Handeln bis ins Erwachsenenalter prägen. Wir betrachten gemeinsam wiederkehrende Muster, die heute zu Belastungen führen, und entwickeln neue Wege im Umgang mit Bedürfnissen, Gefühlen und Beziehungen.',
  },
  {
    q: 'Was ist EMDR und wann setzen Sie es ein?',
    a: 'EMDR ist eine wissenschaftlich fundierte Methode zur Verarbeitung belastender oder traumatischer Erfahrungen. Sie lässt sich gut in eine verhaltenstherapeutische Behandlung integrieren.',
  },
  {
    q: 'Übernimmt meine Krankenkasse die Kosten?',
    a: 'Mein Angebot richtet sich an privat Versicherte, Beihilfeberechtigte und Selbstzahler:innen. Gesetzlich Versicherte können die Behandlung als Selbstzahler:innen wahrnehmen.',
  },
  {
    q: 'Wie lange dauert eine Therapie?',
    a: 'Das hängt von Ihrem Anliegen ab. Manche Themen lassen sich in einer Kurzzeittherapie bearbeiten, andere brauchen mehr Zeit. Wir planen den Rahmen gemeinsam.',
  },
  {
    q: 'Kann die Therapie auch online stattfinden?',
    a: 'Ja, einzelne Sitzungen sind nach Absprache auch per Video möglich. Ich arbeite jedoch bevorzugt vor Ort in der Praxis — der persönliche Kontakt trägt die therapeutische Beziehung am besten.',
  },
];

export const behandlungsfelder: string[] = [
  'Depression',
  'Angst & Phobie',
  'Trauma, Gewalt & Missbrauch',
  'Stress, Burnout & Mobbing',
  'Essstörungen',
  'Zwang',
  'Trauer',
];

export interface Schwerpunkt {
  title: string;
  subtitle: string;
  text: string;
}

export const schwerpunkte: Schwerpunkt[] = [
  {
    title: 'Verhaltenstherapie',
    subtitle: 'grundlage',
    text: 'Belastende Denk- und Verhaltensmuster bewusst wahrnehmen, verstehen und schrittweise verändern — ressourcenorientiert und alltagsnah.',
  },
  {
    title: 'Emotionsfokussiert',
    subtitle: 'emotionen im zentrum',
    text: 'Wir erkunden die biografischen Hintergründe und emotionalen Wurzeln aktueller Belastungen und geben verletzten Gefühlen mit Mitgefühl Raum.',
  },
  {
    title: 'Schematherapie',
    subtitle: 'dritte welle',
    text: 'Frühe Beziehungserfahrungen prägen uns bis ins Erwachsenenalter. Wir betrachten wiederkehrende Muster und entwickeln neue Wege im Umgang mit Bedürfnissen und Beziehungen.',
  },
  {
    title: 'EMDR',
    subtitle: 'traumaverarbeitung',
    text: 'Eine wissenschaftlich fundierte Methode zur Verarbeitung belastender oder traumatischer Erfahrungen — gut integrierbar in die Verhaltenstherapie.',
  },
];

export interface Station {
  period: string;
  title: string;
  org: string;
}

export const werdegang: Station[] = [
  { period: '03/2024 — heute', title: 'Selbstständige Tätigkeit', org: 'Psychotherapeutische Praxisgemeinschaft, Berlin-Tempelhof' },
  { period: '11/2025', title: 'EMDR Basic Training', org: 'EMDR Institut Deutschland, Berlin' },
  { period: '10/2023 — 02/2024', title: 'Festanstellung als psychologische Psychotherapeutin', org: 'Praxis Repina, Berlin-Mitte' },
  { period: '02/2019 — 08/2023', title: 'Ausbildung zur Psychologischen Psychotherapeutin', org: 'Verhaltenstherapie · DGVT Berlin' },
  { period: '10/2017 — 12/2018', title: 'Studium Psychologie (M.Sc.)', org: 'Ernst-Moritz-Arndt-Universität Greifswald' },
  { period: '2013 — 2018', title: 'Studium Psychologie (B.Sc.)', org: 'Ernst-Moritz-Arndt-Universität Greifswald' },
];

export interface Schritt {
  title: string;
  text: string;
}

export const ablauf: Schritt[] = [
  { title: 'Kontakt per E-Mail', text: 'Sie schildern mir kurz Ihr Anliegen. Ich melde mich zeitnah mit Terminvorschlägen.' },
  { title: 'Erstgespräch', text: 'Wir lernen uns kennen und klären, ob die therapeutische Beziehung für Sie stimmig ist.' },
  { title: 'Probatorik & Planung', text: 'Gemeinsam formulieren wir realistische Ziele und einen passenden Rahmen.' },
  { title: 'Therapie', text: 'In regelmäßigen Sitzungen arbeiten wir an Ihren Themen — in Ihrem Tempo.' },
];
