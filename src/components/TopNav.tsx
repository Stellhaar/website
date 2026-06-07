import { business } from '../siteData';

/** Header word-mark + in-page nav (nav links hidden under 820px via CSS). */
export default function TopNav() {
  return (
    <header className="topnav" id="top">
      <div className="brand">
        {business.shortName}
        <small>Psychotherapie · Berlin</small>
      </div>
      <nav aria-label="Hauptnavigation">
        <a href="#ueber">Über mich</a>
        <a href="#themen">Themen</a>
        <a href="#schwerpunkte">Schwerpunkte</a>
        <a href="#werdegang">Werdegang</a>
        <a href="#kontakt">Kontakt</a>
      </nav>
      <a href="#kontakt" className="lk">
        E-Mail schreiben
      </a>
    </header>
  );
}
