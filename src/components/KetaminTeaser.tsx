import { KETAMIN_PATH, ketaminIntro } from '../siteData';

/**
 * Startseiten-Abschnitt „Ketamin-gestützte Psychotherapie": nur Einleitung + Link.
 * Anwendungsbereiche, Ablauf und FAQ stehen ausschließlich auf der Unterseite.
 */
export default function KetaminTeaser() {
  return (
    <section className="sec line" id="ketamin" aria-labelledby="ketamin-h">
      <div className="wrap">
        <div className="sec-lead reveal">
          <span className="lc">in kooperation mit einer neurologischen praxis</span>
          <h2 id="ketamin-h" style={{ marginTop: 22 }}>
            Ketamin-gestützte <em>Psychotherapie</em>.
          </h2>
        </div>
        <div className="about">
          {ketaminIntro.map((text, i) => (
            <p className={i === 0 ? 'reveal' : 'muted reveal'} key={i}>
              {text}
            </p>
          ))}
        </div>
        <div className="kost reveal" style={{ marginTop: 0 }}>
          <span className="tag">In ärztlicher Kooperation</span>
          <span className="tag">Selbstzahler:innen</span>
        </div>
        <div className="reveal" style={{ marginTop: 34 }}>
          <a href={KETAMIN_PATH} className="pill">
            Mehr zur Ketamin-gestützten Psychotherapie
          </a>
        </div>
      </div>
    </section>
  );
}
