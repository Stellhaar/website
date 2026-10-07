import { agentur, business, KETAMIN_PATH } from '../siteData';

/**
 * Footer. Impressum & Datenschutz sind in Deutschland gesetzlich verpflichtend
 * (Impressumspflicht, DSGVO). Die untere Zeile trägt zusätzlich den dezenten
 * Hinweis auf die umsetzende Agentur (Details im Impressum).
 */
export default function Footer() {
  return (
    <footer className="wrap">
      <div className="foot">
        <div className="brand">{business.shortName} · Psychotherapie</div>
        <nav className="foot-links" aria-label="Rechtliches">
          <a href="/#ueber">Über mich</a>
          <a href={KETAMIN_PATH}>Ketamin-gestützte Psychotherapie</a>
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
        <span className="credit">
          Website von{' '}
          <a href={agentur.url} rel="noopener">
            {agentur.name}
          </a>
        </span>
      </div>
    </footer>
  );
}
