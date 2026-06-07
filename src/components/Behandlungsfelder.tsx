import { behandlungsfelder } from '../siteData';

/** "Behandlungsfelder" — two-column diagnosis list. */
export default function Behandlungsfelder() {
  return (
    <section className="sec line" id="themen" aria-labelledby="themen-h">
      <div className="wrap">
        <div className="sec-lead reveal">
          <span className="lc">behandlungsfelder</span>
          <h2 id="themen-h" style={{ marginTop: 22 }}>
            Diagnosen &amp; <em>Themen</em>.
          </h2>
        </div>
        <div className="diag">
          {behandlungsfelder.map((label, i) => (
            <div className="di reveal" key={label}>
              <span className="ix">{String(i + 1).padStart(2, '0')}</span>
              <span className="lb">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
