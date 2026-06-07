/** "Über mich" — narrow single-column intro with signature. */
export default function About() {
  return (
    <section className="sec narrow about" id="ueber" aria-labelledby="ueber-lc">
      <div className="sec-lead reveal">
        <span className="lc" id="ueber-lc">über mich</span>
      </div>
      <p className="reveal">
        Als psychologische Psychotherapeutin mit dem Schwerpunkt Verhaltenstherapie
        begleite ich Sie dabei, belastende Denk- und Verhaltensmuster wahrzunehmen,
        zu verstehen und schrittweise zu verändern.
      </p>
      <p className="muted reveal">
        Mir ist eine ressourcenorientierte Arbeitsweise ebenso wichtig wie eine
        wertschätzende und vertrauensvolle Atmosphäre. Wir arbeiten in Ihrem Tempo.
      </p>
      <p className="muted reveal">
        Emotionen nehmen in meiner Arbeit einen zentralen Stellenwert ein. Verletzten
        Gefühlen Raum zu geben, kann Veränderungsprozesse anstoßen.
      </p>
      <div className="sign reveal">Stella Savelsberg</div>
    </section>
  );
}
