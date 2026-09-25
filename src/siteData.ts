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
 *   - legal.aufsicht: laut Kammer-Merkblatt zuständig – vor Go-Live bestätigen.
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

/**
 * Ketamin-gestützte Psychotherapie: Unterseite (/ketamin-gestuetzte-psychotherapie)
 * und ausführlicher Abschnitt auf der Startseite.
 *
 * ⚠️ Werberecht: Die Nennung des Wirkstoffs gegenüber Laien ist nach § 10 und
 * § 3a HWG (BGH I ZR 74/25) riskant, siehe Entwurf in
 * ~/Claude Code/stella-ketamin-entwurf/. Keine Suchterkrankungen nennen (§ 12 HWG),
 * keine Erfolgsversprechen, keine Preise, keine Patientenstimmen.
 */
export const KETAMIN_PATH = '/ketamin-gestuetzte-psychotherapie';

/** Sichtbares Stand-Datum der Ketamin-Seite; bei inhaltlichen Änderungen mitziehen. */
export const KETAMIN_STAND = 'September 2026';

/**
 * Hauptnavigation (Header, Desktop-Dropdowns und mobiles Panel).
 *
 * Absolute Ziele, damit dieselbe Navigation auf Startseite, Unterseite und
 * Rechtsseiten funktioniert. Die Linktexte tragen die Suchbegriffe — sie sind
 * bewusst sprechender als die früheren Kurzlabels („Themen", „Schwerpunkte").
 */
export interface NavItem {
  label: string;
  href: string;
  items?: { label: string; href: string }[];
}

export const mainNav: NavItem[] = [
  {
    label: 'Über mich',
    href: '/#ueber',
    items: [
      { label: 'Über mich', href: '/#ueber' },
      { label: 'Ausbildung & Qualifikationen', href: '/#werdegang' },
    ],
  },
  {
    label: 'Therapieangebot',
    href: '/#themen',
    items: [
      { label: 'Diagnosen & Themen', href: '/#themen' },
      { label: 'Therapeutische Verfahren', href: '/#schwerpunkte' },
      { label: 'Ketamin-gestützte Psychotherapie', href: KETAMIN_PATH },
      { label: 'Ablauf & Kosten', href: '/#ablauf' },
    ],
  },
  { label: 'Kontakt', href: '/#kontakt' },
];

export const kooperationArzt = {
  name: 'Dr. med. Johannes Brandl',
  fach: 'Facharzt für Neurologie, Berlin',
  praxis: 'Neurologische Praxis Tempelhof Dr. Brandl',
  street: 'Friedrich-Wilhelm-Straße 68',
  city: '12103 Berlin',
} as const;

export const ketaminIntro: string[] = [
  'Ketamin-gestützte Psychotherapie verbindet eine psychotherapeutische Begleitung mit einer ärztlich durchgeführten Ketaminbehandlung. Ziel ist es, therapeutische Prozesse insbesondere bei psychischen Belastungen zu unterstützen.',
  `Die Behandlung erfolgt in Kooperation mit der neurologischen Praxis von ${kooperationArzt.name} in unmittelbarer Umgebung. Gemeinsam wird ein individueller Behandlungsplan erstellt, der auf Ihre persönliche Situation und Ihre therapeutischen Ziele abgestimmt ist.`,
];

export interface Anwendung {
  title: string;
  text: string;
}

/** Anwendungsbereiche der Ketamintherapie. Bewusst beschreibend, ohne Wirkversprechen (§ 3 HWG). */
export const ketaminAnwendungen: Anwendung[] = [
  {
    title: 'Depressionen',
    text: 'Anhaltende Niedergeschlagenheit, Antriebslosigkeit und Freudlosigkeit, besonders wenn mehrere Behandlungsversuche bisher nicht ausreichend geholfen haben.',
  },
  {
    title: 'Angststörungen',
    text: 'Starke Ängste, Panikattacken oder Vermeidungsverhalten, die den Alltag und das Berufsleben einschränken.',
  },
  {
    title: 'Traumafolgestörungen',
    text: 'Belastungen nach schwierigen oder traumatischen Erfahrungen, etwa aufdrängende Erinnerungen, Schreckhaftigkeit und innere Anspannung.',
  },
  {
    title: 'Zwangsstörungen',
    text: 'Wiederkehrende Gedanken und Handlungen, die sich nur schwer unterbrechen lassen und viel Zeit kosten.',
  },
  {
    title: 'Burn-out',
    text: 'Anhaltende Erschöpfung nach langer Überlastung, oft verbunden mit Schlafproblemen, Reizbarkeit und innerem Rückzug.',
  },
];

export const ketaminAblauf: Schritt[] = [
  {
    title: 'Psychotherapeutisches Vorgespräch',
    text: 'Klärung Ihrer Anliegen, Ziele und der persönlichen Situation sowie Vorbereitung auf die Behandlung.',
  },
  {
    title: 'Ärztliches Vorgespräch',
    text: `Medizinische Abklärung und Aufklärung über die Ketaminbehandlung in der neurologischen Praxis von ${kooperationArzt.name}.`,
  },
  {
    title: 'Ketamin-Infusion',
    text: 'Die medizinisch überwachte Infusion findet in der neurologischen Praxis statt.',
  },
  {
    title: 'Psychotherapeutische Integration',
    text: '24 bis 48 Stunden nach der Infusion ordnen wir gemeinsam ein, was Sie während der Behandlung erlebt haben, und lassen diese Erfahrungen in Ihren weiteren therapeutischen Prozess einfließen.',
  },
];

export interface Rolle extends Schritt {
  name: string;
  role: string;
  photo: string;
}

export const kooperationRollen: Rolle[] = [
  {
    name: business.person,
    role: 'Psychologische Psychotherapeutin',
    photo: '/assets/stella-savelsberg-portrait.jpg',
    title: 'Psychotherapeutische Begleitung',
    text: 'Meine Aufgabe: Vorbereitung im Gespräch, Begleitung rund um die ärztliche Behandlung und Integration, damit das Erlebte in Ihre laufende Psychotherapie einfließen kann.',
  },
  {
    name: kooperationArzt.name,
    role: 'Facharzt für Neurologie',
    photo: '/assets/dr-johannes-brandl.jpg',
    title: 'Ärztliche Verantwortung',
    text: `${kooperationArzt.name}, ${kooperationArzt.fach}: Untersuchung, Entscheidung über die Behandlung, ärztliche Aufklärung, Durchführung der Ketamin-Infusion und medizinische Überwachung, in seiner Verantwortung und in seinen Praxisräumen.`,
  },
];

export const ketaminFaqs: FaqItem[] = [
  {
    q: 'Was ist Ketamintherapie?',
    a: 'Die Ketamintherapie ist ein alternativer Behandlungsansatz bei psychischen Erkrankungen. Dabei wird das Medikament Ketamin mit gezielt darauf abgestimmten psychotherapeutischen Maßnahmen verbunden. Bei manchen Patient:innen kann Ketamin die Stimmung verbessern und Depressionen, Ängste, Zwänge oder chronische Schmerzen lindern.',
  },
  {
    q: 'Bei welchen psychischen Erkrankungen kann Ketamintherapie helfen?',
    a: 'Ketamintherapie kann bei verschiedenen psychischen Erkrankungen gut wirken, etwa bei Depressionen, Angststörungen, posttraumatischen Belastungsstörungen (PTBS), Zwangsstörungen und chronischen Schmerzen.',
  },
  {
    q: 'Wie wird Ketamin bei der Therapie verabreicht?',
    a: `${kooperationArzt.name} richtet die Behandlung eng an wissenschaftlichen und medizinischen Standards aus. Ketamin wird deshalb über etwa 40 Minuten als Infusion in die Vene gegeben. Das hat mehrere Vorteile: Die Dosis lässt sich sehr genau steuern, und die Wirkung bleibt während der gesamten Infusion gleichmäßig. Die intravenöse Gabe ist gut kontrollierbar und geht meist mit weniger Nebenwirkungen einher. Wenn Sie sich während der Behandlung unwohl fühlen, kann die Infusion sofort gestoppt werden, und die Wirkung lässt in der Regel rasch nach.`,
  },
  {
    q: 'Wo findet die ärztliche Behandlung statt?',
    a: `Ärztliches Vorgespräch und Ketamin-Infusion finden in der Neurologischen Praxis Tempelhof statt: ${kooperationArzt.praxis}, ${kooperationArzt.street}, ${kooperationArzt.city}. Die Praxis liegt in unmittelbarer Nähe meiner Praxis in der Bosestraße.`,
  },
  {
    q: 'Werde ich während der Ketaminbehandlung beaufsichtigt?',
    a: 'Ja. Während der gesamten Behandlung werden Sie ärztlich persönlich betreut und medizinisch überwacht. Fühlen Sie sich unwohl, kann die Ketamingabe jederzeit unterbrochen werden, und die Wirkung klingt innerhalb weniger Minuten ab.',
  },
  {
    q: 'Wie schnell wirkt Ketamin?',
    a: 'Ketamin kann sehr schnell wirken, teilweise schon wenige Minuten nach Beginn der Infusion. Bei wiederholter Gabe mit psychotherapeutischer Begleitung können die Effekte nach wissenschaftlichen Studien über mehrere Monate oder länger anhalten. Wie lange die Wirkung anhält, ist von Person zu Person unterschiedlich.',
  },
  {
    q: 'Gibt es Nebenwirkungen bei der Ketaminbehandlung?',
    a: 'Über mögliche Nebenwirkungen klärt Sie der behandelnde Arzt medizinisch sorgfältig auf. Wie bei jedem medizinischen Verfahren können auch bei der Ketaminbehandlung Nebenwirkungen auftreten, zum Beispiel leichte Übelkeit, Schwindel und manchmal Kopfschmerzen oder ein erhöhter Blutdruck. Häufig tritt Mundtrockenheit auf, gelegentlich vermehrter Speichelfluss oder ein verändertes Geschmacksempfinden. Diese Beschwerden sind meist vorübergehend und klingen nach der Behandlung wieder ab.',
  },
  {
    q: 'Gibt es eine Altersbegrenzung für die Ketamintherapie?',
    a: 'Sie müssen mindestens 18 Jahre alt sein. Eine obere Altersgrenze gibt es im Grunde nicht: Entscheidend ist, dass der behandelnde Arzt keine Gegenanzeigen feststellt und Sie zur Behandlung zulässt.',
  },
  {
    q: 'Wer entscheidet, ob eine Ketaminbehandlung für mich infrage kommt?',
    a: 'Das entscheidet ausschließlich der Arzt nach persönlicher Untersuchung und ausführlicher Aufklärung über Nutzen, Risiken und Alternativen. Es gibt Gegenanzeigen, die Behandlung ist nicht für alle Menschen geeignet.',
  },
  {
    q: 'Mit welchen Kosten muss ich rechnen?',
    a: 'Das ärztliche Vorgespräch bei Dr. Brandl kostet 90,49 €. Für die Ketamin-Infusion fallen pro Behandlung 210,19 € an. Eine psychotherapeutische Sitzung kostet zwischen 120 und 140 €. Wie viele Termine sinnvoll sind, besprechen wir vorab gemeinsam, sodass Sie die Gesamtkosten gut einschätzen können.',
  },
  {
    q: 'Übernimmt die Krankenkasse die Kosten?',
    a: 'Es handelt sich um eine Selbstzahlerleistung. Private Versicherungen und Beihilfe entscheiden im Einzelfall. Über die voraussichtlichen Kosten informiere ich Sie vor Beginn schriftlich.',
  },
  {
    q: 'Was passiert im Erstgespräch?',
    a: 'Wir sprechen über Ihre bisherige Behandlung, Ihre aktuelle Situation und Ihre Erwartungen. Danach klären wir gemeinsam, ob eine Ketamin-gestützte Psychotherapie sinnvoll sein kann und ob das ärztliche Vorgespräch der nächste Schritt ist.',
  },
];
