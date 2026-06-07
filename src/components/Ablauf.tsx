import { ablauf } from '../siteData';

/** "Ablauf & Kosten" — 2×2 step grid + cost tags. */
export default function Ablauf() {
  return (
    <section className="sec line" id="ablauf" aria-labelledby="ablauf-h">
      <div className="wrap">
        <div className="sec-lead reveal">
          <span className="lc">ablauf &amp; kosten</span>
          <h2 id="ablauf-h" style={{ marginTop: 22 }}>
            In vier <em>Schritten</em>.
          </h2>
        </div>
        <div className="steps">
          {ablauf.map((step, i) => (
            <div className="s reveal" key={step.title}>
              <div className="n">{String(i + 1).padStart(2, '0')}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
        <div className="kost reveal">
          <span className="tag">Privat Krankenversicherte</span>
          <span className="tag">Beihilfeberechtigte</span>
          <span className="tag">Selbstzahler:innen</span>
          <p>
            Die Abrechnung erfolgt nach der Gebührenordnung für Psychotherapeuten
            (GOP). Details bespreche ich gern persönlich.
          </p>
        </div>
      </div>
    </section>
  );
}
