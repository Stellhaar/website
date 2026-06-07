import { business } from '../siteData';

/**
 * Footer. Impressum & Datenschutz sind in Deutschland gesetzlich verpflichtend
 * (Impressumspflicht, DSGVO). ⚠️ Eigene Seiten anlegen und hier verlinken
 * (aktuell Platzhalter "#").
 */
export default function Footer() {
  return (
    <footer className="wrap">
      <div className="foot">
        <div className="brand">{business.shortName} · Psychotherapie</div>
        <nav className="foot-links" aria-label="Rechtliches">
          <a href="/#ueber">Über mich</a>
          <a href="/#kontakt">Kontakt</a>
          <a href="/impressum">Impressum</a>
          <a href="/datenschutz">Datenschutz</a>
        </nav>
      </div>
      <div className="foot" style={{ marginTop: 24, fontSize: '12.5px' }}>
        <span>
          © {new Date().getFullYear()} {business.shortName} · {business.street},{' '}
          {business.postalCode} {business.district}
        </span>
      </div>
    </footer>
  );
}
