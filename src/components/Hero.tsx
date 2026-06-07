/** Hero — kicker, headline with italic accent, lead, meta row and CTAs. */
export default function Hero() {
  return (
    <section className="hero wrap" aria-labelledby="hero-title">
      <span className="lc">psychologische psychotherapeutin · berlin-tempelhof</span>
      <h1 className="steady" id="hero-title">
        Verhaltenstherapie in <em>Berlin-Tempelhof</em>.
      </h1>
      <p className="lead">
        Psychotherapeutische Praxis für Erwachsene. Schwerpunkt Verhaltenstherapie,
        ergänzt durch Schematherapie und EMDR.
      </p>
      <div className="meta">
        <div>
          <b>Verhaltenstherapie</b>
          <span>Schwerpunkt</span>
        </div>
        <div>
          <b>Schematherapie · EMDR</b>
          <span>Methoden</span>
        </div>
        <div>
          <b>Privat &amp; Selbstzahler:innen</b>
          <span>Praxis</span>
        </div>
      </div>
      <div className="cta">
        <a href="#kontakt" className="pill">
          Erstgespräch anfragen
        </a>
        <a href="#ueber" className="lk">
          Mehr über mich
        </a>
      </div>
    </section>
  );
}
