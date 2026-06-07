import LegalLayout from './LegalLayout';
import { business, legal } from '../../siteData';

/**
 * Impressum (Anbieterkennzeichnung) nach § 5 DDG + heilberufliche Pflichtangaben.
 *
 * ⚠️ Rechtshinweis: Dieser Text ist ein sorgfältig recherchierter Entwurf, keine
 * Rechtsberatung. Inhalte (insb. Aufsichtsbehörde, Berufshaftpflicht) vor
 * Veröffentlichung anwaltlich/durch die Psychotherapeutenkammer prüfen lassen.
 * Quelle der Pflichtangaben: Merkblatt „Websites von P, PP und KJP" der
 * Psychotherapeutenkammer Berlin.
 */
export default function Impressum() {
  return (
    <LegalLayout title="Impressum">
      <h2>Angaben gemäß § 5 DDG</h2>
      <p>
        <strong>{business.person}</strong>
        <br />
        {legal.berufsbezeichnung}
        <br />
        {business.street}
        <br />
        {business.postalCode} {business.city}
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon: <a href={`tel:${business.phoneHref}`}>{business.phone}</a>
        <br />
        E-Mail: <a href={`mailto:${business.email}`}>{business.email}</a>
      </p>

      <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
      <p>
        <strong>Gesetzliche Berufsbezeichnung:</strong> {legal.berufsbezeichnung}
        <br />
        <strong>Verliehen in:</strong> {legal.verleihStaat}
      </p>
      <p>
        <strong>Zuständige Kammer:</strong>
        <br />
        {legal.kammer.name}
        <br />
        {legal.kammer.street}
        <br />
        {legal.kammer.city}
        <br />
        <a href={legal.kammer.url} target="_blank" rel="noopener noreferrer">
          {legal.kammer.url.replace(/^https?:\/\//, '')}
        </a>
      </p>
      <p>
        <strong>Zuständige Aufsichtsbehörde:</strong>
        <br />
        {legal.aufsicht}
      </p>
      <p>Es gelten folgende berufsrechtliche Regelungen:</p>
      <ul>
        {legal.regelungen.map((r) => (
          <li key={r}>{r}</li>
        ))}
      </ul>
      <p>
        Die berufsrechtlichen Regelungen sind einsehbar auf der Website der
        Psychotherapeutenkammer Berlin:{' '}
        <a href={legal.regelungenFundstelle} target="_blank" rel="noopener noreferrer">
          {legal.regelungenFundstelle.replace(/^https?:\/\//, '')}
        </a>
      </p>

      <h2>Berufshaftpflichtversicherung</h2>
      <p>
        <strong>Versicherer:</strong> {legal.berufshaftpflicht.versicherer}
        <br />
        <strong>Räumlicher Geltungsbereich:</strong>{' '}
        {legal.berufshaftpflicht.geltungsbereich}
      </p>

      <h2>Umsatzsteuer</h2>
      <p>
        Heilbehandlungen im Bereich der Humanmedizin sind gemäß § 4 Nr. 14 UStG von
        der Umsatzsteuer befreit. Eine Umsatzsteuer-Identifikationsnummer besteht
        daher nicht.
      </p>

      <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
      <p>
        {business.person}
        <br />
        {business.street}, {business.postalCode} {business.city}
      </p>

      <h2>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
      <p>
        Ich bin nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor
        einer Verbraucherschlichtungsstelle teilzunehmen (§ 36 VSBG).
      </p>

      <h2>Bildnachweis</h2>
      <p>Foto: © Dieter Düvelmeyer</p>

      <h2>Haftung für Inhalte und Links</h2>
      <p>
        Die Inhalte dieser Seiten wurden mit größter Sorgfalt erstellt. Für die
        Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine
        Gewähr übernommen werden. Diese Website enthält ggf. Links zu externen
        Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Für die Inhalte
        der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
        verantwortlich.
      </p>
    </LegalLayout>
  );
}
