import LegalLayout from './LegalLayout';
import { business } from '../../siteData';

/**
 * Datenschutzerklärung nach DSGVO.
 *
 * ⚠️ Rechtshinweis: Sorgfältig recherchierter Entwurf, keine Rechtsberatung.
 * Deckt die tatsächlich eingesetzten Dienste ab: Hosting & Web Analytics über
 * Vercel (cookielos) sowie einwilligungsbasiertes Google Maps. Vor
 * Veröffentlichung anwaltlich prüfen lassen — insbesondere wegen der besonderen
 * Kategorien personenbezogener Daten (Gesundheitsdaten) im Therapie-Kontext.
 */
export default function Datenschutz() {
  return (
    <LegalLayout title="Datenschutzerklärung" updated="Juni 2026">
      <h2>1. Verantwortlicher</h2>
      <p>
        Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der
        Datenschutz-Grundverordnung (DSGVO) ist:
      </p>
      <p>
        <strong>{business.person}</strong>
        <br />
        {business.street}
        <br />
        {business.postalCode} {business.city}
        <br />
        Telefon: <a href={`tel:${business.phoneHref}`}>{business.phone}</a>
        <br />
        E-Mail: <a href={`mailto:${business.email}`}>{business.email}</a>
      </p>

      <h2>2. Hinweis zu Gesundheitsdaten und Schweigepflicht</h2>
      <p>
        Als Psychotherapeutin unterliege ich der gesetzlichen Schweigepflicht
        (§ 203 StGB). Gesundheitsdaten sind besonders schützenswerte Daten im Sinne
        des Art. 9 DSGVO. Bitte übermitteln Sie mir bei der ersten Kontaktaufnahme
        per E-Mail keine sensiblen Gesundheitsdaten, da der Versand unverschlüsselter
        E-Mails nicht vollständig vor dem Zugriff Dritter geschützt ist. Für die
        Übermittlung sensibler Informationen vereinbaren wir gern einen
        telefonischen oder persönlichen Termin.
      </p>

      <h2>3. Ihre Rechte als betroffene Person</h2>
      <p>Ihnen stehen gegenüber mir folgende Rechte hinsichtlich Ihrer Daten zu:</p>
      <ul>
        <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
        <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
        <li>Recht auf Löschung (Art. 17 DSGVO)</li>
        <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
        <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
        <li>Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
        <li>Recht auf Widerruf einer erteilten Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
      </ul>
      <p>
        Ihnen steht zudem ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde
        zu. Zuständig ist:
      </p>
      <p>
        Berliner Beauftragte für Datenschutz und Informationsfreiheit
        <br />
        Alt-Moabit 59–61, 10555 Berlin
        <br />
        <a href="https://www.datenschutz-berlin.de" target="_blank" rel="noopener noreferrer">
          datenschutz-berlin.de
        </a>
      </p>

      <h2>4. Hosting</h2>
      <p>
        Diese Website wird bei der Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA
        91789, USA („Vercel") gehostet. Beim Aufruf der Website verarbeitet Vercel
        technisch erforderliche Daten (insbesondere IP-Adresse, Datum und Uhrzeit des
        Zugriffs, Browsertyp), um die Auslieferung der Website zu ermöglichen und
        deren Sicherheit und Stabilität zu gewährleisten. Rechtsgrundlage ist Art. 6
        Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer zuverlässig und sicher
        bereitgestellten Website).
      </p>
      <p>
        Mit Vercel besteht ein Vertrag zur Auftragsverarbeitung (Data Processing
        Addendum). Soweit dabei personenbezogene Daten in die USA übertragen werden,
        erfolgt dies auf Grundlage der EU-Standardvertragsklauseln (Art. 46 DSGVO).
        Das DPA ist abrufbar unter{' '}
        <a href="https://vercel.com/legal/dpa" target="_blank" rel="noopener noreferrer">
          vercel.com/legal/dpa
        </a>
        .
      </p>

      <h3>Server-Logfiles</h3>
      <p>
        Der Hosting-Anbieter erhebt und speichert automatisch Informationen in
        sogenannten Server-Logfiles, die Ihr Browser automatisch übermittelt. Dies
        sind insbesondere: Browsertyp und -version, verwendetes Betriebssystem,
        Referrer-URL, Uhrzeit der Serveranfrage und IP-Adresse. Eine Zusammenführung
        dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
      </p>

      <h2>5. Vercel Web Analytics</h2>
      <p>
        Zur Analyse der Websitenutzung setze ich Vercel Web Analytics ein, einen
        Dienst der Vercel Inc. Vercel Web Analytics arbeitet{' '}
        <strong>ohne Cookies</strong> und erhebt ausschließlich aggregierte,
        anonymisierte Daten (z. B. aufgerufene Seiten, ungefähre Herkunftsregion,
        Gerätetyp). Es werden keine über mehrere Websites hinweg
        wiedererkennbaren Profile gebildet und keine Daten verwendet, die eine
        Identifizierung einzelner Besucher:innen ermöglichen.
      </p>
      <p>
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an
        einer bedarfsgerechten und datensparsamen Auswertung der Reichweite). Da
        keine Endgeräte-Informationen ausgelesen oder gespeichert werden, die über
        das technisch Erforderliche hinausgehen, ist keine Einwilligung nach § 25
        TDDDG erforderlich. Eine etwaige Datenübertragung in die USA erfolgt auf
        Grundlage der EU-Standardvertragsklauseln.
      </p>

      <h2>6. Google Maps (einwilligungsbasiert)</h2>
      <p>
        Auf dieser Website binde ich zur Darstellung der Anfahrt eine Karte des
        Dienstes Google Maps ein. Anbieter ist die Google Ireland Limited, Gordon
        House, Barrow Street, Dublin 4, Irland („Google").
      </p>
      <p>
        Die Karte wird <strong>erst nach Ihrer ausdrücklichen Einwilligung</strong>{' '}
        geladen: Solange Sie nicht auf die Schaltfläche „Karte laden" klicken, wird
        keine Verbindung zu Google-Servern hergestellt und es werden keine Daten an
        Google übertragen. Erst mit Ihrem Klick werden die Karteninhalte geladen;
        dabei wird unter anderem Ihre IP-Adresse an Google übermittelt und ggf. in
        Drittländer (u. a. USA) übertragen.
      </p>
      <p>
        Rechtsgrundlage für diese Verarbeitung ist Ihre Einwilligung nach Art. 6 Abs.
        1 lit. a DSGVO sowie § 25 Abs. 1 TDDDG. Sie können Ihre Einwilligung
        jederzeit mit Wirkung für die Zukunft widerrufen, indem Sie die Seite neu
        laden, ohne die Karte zu aktivieren. Weitere Informationen finden Sie in der
        Datenschutzerklärung von Google:{' '}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
          policies.google.com/privacy
        </a>
        .
      </p>

      <h2>7. Kontaktaufnahme</h2>
      <p>
        Wenn Sie mit mir per E-Mail oder Telefon Kontakt aufnehmen, werden die von
        Ihnen mitgeteilten Daten (z. B. Name, Kontaktdaten, Inhalt Ihrer Anfrage) zur
        Bearbeitung Ihres Anliegens verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1
        lit. b DSGVO (Durchführung vorvertraglicher Maßnahmen) bzw. Art. 6 Abs. 1
        lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen). Die
        Daten werden gelöscht, sobald Ihre Anfrage abschließend bearbeitet ist und
        keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
      </p>
      <p>
        Das Kontaktformular auf dieser Website nutzt die „mailto"-Funktion: Beim
        Absenden öffnet sich Ihr eigenes E-Mail-Programm mit einer vorausgefüllten
        Nachricht. Es werden dabei <strong>keine</strong> Formulardaten an den Server
        dieser Website oder an Dritte übertragen; der Versand erfolgt ausschließlich
        über Ihr eigenes E-Mail-Konto.
      </p>

      <h2>8. SSL-/TLS-Verschlüsselung</h2>
      <p>
        Diese Website nutzt aus Sicherheitsgründen eine SSL-/TLS-Verschlüsselung. Eine
        verschlüsselte Verbindung erkennen Sie am „https://" in der Adresszeile Ihres
        Browsers.
      </p>

      <h2>9. Speicherdauer</h2>
      <p>
        Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer
        genannt wurde, verbleiben Ihre personenbezogenen Daten bei mir, bis der Zweck
        für die Datenverarbeitung entfällt. Gesetzliche Aufbewahrungsfristen bleiben
        unberührt.
      </p>

      <h2>10. Änderungen dieser Datenschutzerklärung</h2>
      <p>
        Ich behalte mir vor, diese Datenschutzerklärung anzupassen, damit sie stets
        den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen meiner
        Leistungen umzusetzen. Für Ihren erneuten Besuch gilt dann die neue
        Datenschutzerklärung.
      </p>
    </LegalLayout>
  );
}
