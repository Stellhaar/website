import { schwerpunkte } from '../siteData';

/** "Therapeutische Schwerpunkte" — four therapy approaches. */
export default function Schwerpunkte() {
  return (
    <section className="sec line" id="schwerpunkte" aria-labelledby="schwerpunkte-h">
      <div className="wrap">
        <div className="sec-lead reveal">
          <span className="lc">therapeutische schwerpunkte</span>
          <h2 id="schwerpunkte-h" style={{ marginTop: 22 }}>
            Vier <em>Verfahren</em>.
          </h2>
        </div>
        <div className="swp">
          {schwerpunkte.map((s, i) => (
            <div className="row reveal" key={s.title}>
              <div className="ix">{String(i + 1).padStart(2, '0')}</div>
              <h3>
                {s.title}
                <small>{s.subtitle}</small>
              </h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
