import { werdegang } from '../siteData';

/** "Qualifikationen & Werdegang" — tabular CV. */
export default function Werdegang() {
  return (
    <section className="sec line" id="werdegang" aria-labelledby="werdegang-h">
      <div className="wrap">
        <div className="sec-lead reveal">
          <span className="lc">qualifikationen &amp; werdegang</span>
          <h2 id="werdegang-h" style={{ marginTop: 22 }}>
            Ausbildung &amp; <em>Stationen</em>.
          </h2>
        </div>
        <div className="led">
          {werdegang.map((station) => (
            <div className="r reveal" key={station.period + station.title}>
              <div className="yr">{station.period}</div>
              <div className="ti">
                {station.title}
                <span>{station.org}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
