import Faq from './Faq';
import Footer from './Footer';
import { KetaminAblauf, KetaminAnwendungen } from './KetaminBlocks';
import { business, ketaminFaqs, ketaminIntro, kooperationRollen } from '../siteData';

/**
 * Unterseite „Ketamin-gestützte Psychotherapie".
 * ⚠️ Werberecht: siehe Kommentar bei KETAMIN_PATH in siteData.ts.
 */
export default function KetaminPage() {
  return (
    <>
      {/* Sticky, damit „Erstgespräch anfragen" beim Scrollen immer erreichbar bleibt. */}
      <div className="stickybar">
      <header className="topnav">
        <a className="brand" href="/">
          {business.shortName}
          <small>Psychotherapie · Berlin</small>
        </a>
        <a href="/#kontakt" className="pill topnav-cta">
          Erstgespräch anfragen
        </a>
      </header>
      </div>

      <main>
        <section className="hero wrap" aria-labelledby="ketamin-title">
          <span className="lc">in kooperation mit einer neurologischen praxis</span>
          <h1 className="steady" id="ketamin-title">
            Ketamin-gestützte <em>Psychotherapie</em>.
          </h1>
          <p className="lead">{ketaminIntro[0]}</p>
        </section>

        <section className="sec line narrow about" aria-labelledby="ketamin-was">
          <div className="sec-lead reveal">
            <span className="lc">was ist das</span>
            <h2 id="ketamin-was" style={{ marginTop: 22 }}>
              Ein individueller <em>Behandlungsplan</em>.
            </h2>
          </div>
          <p className="reveal">{ketaminIntro[1]}</p>
        </section>

        <section className="sec line" aria-labelledby="ketamin-anw">
          <div className="wrap">
            <div className="sec-lead reveal">
              <span className="lc">anwendungsbereiche</span>
              <h2 id="ketamin-anw" style={{ marginTop: 22 }}>
                Wobei die Behandlung <em>eingesetzt</em> wird.
              </h2>
            </div>
            <KetaminAnwendungen />
          </div>
        </section>

        <section className="sec line" aria-labelledby="ketamin-ablauf">
          <div className="wrap">
            <div className="sec-lead reveal">
              <span className="lc">ablauf</span>
              <h2 id="ketamin-ablauf" style={{ marginTop: 22 }}>
                In vier <em>Schritten</em>.
              </h2>
            </div>
            <KetaminAblauf />
          </div>
        </section>

        <section className="sec line" aria-labelledby="ketamin-rollen">
          <div className="wrap">
            <div className="sec-lead reveal">
              <span className="lc">aufgabenteilung</span>
              <h2 id="ketamin-rollen" style={{ marginTop: 22 }}>
                Klare <em>Zuständigkeiten</em>.
              </h2>
            </div>
            <div className="steps">
              {kooperationRollen.map((rolle, i) => (
                <div className="s reveal" key={rolle.title}>
                  <div className="n">{String(i + 1).padStart(2, '0')}</div>
                  <h3>{rolle.title}</h3>
                  <p>{rolle.text}</p>
                  <figure className="rolle-foto">
                    <img
                      src={rolle.photo}
                      alt={`Porträt ${rolle.name}`}
                      width={600}
                      height={538}
                      loading="lazy"
                    />
                    <figcaption>
                      <b>{rolle.name}</b>
                      <span>{rolle.role}</span>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
            <div className="kost reveal">
              <span className="tag">In ärztlicher Kooperation</span>
              <span className="tag">Selbstzahler:innen</span>
              <p>
                Die Kosten übernimmt die gesetzliche Krankenversicherung in der Regel
                nicht. Über die voraussichtlichen Kosten informiere ich Sie vor Beginn
                schriftlich.
              </p>
            </div>
          </div>
        </section>

        <section className="sec line narrow about" aria-labelledby="ketamin-grenzen">
          <div className="sec-lead reveal">
            <span className="lc">grenzen &amp; sicherheit</span>
            <h2 id="ketamin-grenzen" style={{ marginTop: 22 }}>
              Nicht für <em>alle</em> geeignet.
            </h2>
          </div>
          <p className="reveal">
            Ob eine Ketaminbehandlung für Sie infrage kommt, entscheidet allein der Arzt
            nach persönlicher Untersuchung und ausführlicher Aufklärung über Nutzen,
            Risiken und Alternativen.
          </p>
        </section>

        <Faq items={ketaminFaqs} />

        <section className="sec line narrow about" aria-labelledby="ketamin-krise">
          <div className="sec-lead reveal">
            <span className="lc">in einer akuten krise</span>
            <h2 id="ketamin-krise" style={{ marginTop: 22 }}>
              Sofort <em>Hilfe</em> holen.
            </h2>
          </div>
          <p className="reveal">
            Diese Seite ersetzt keine ärztliche oder psychotherapeutische Beratung. Bei
            Suizidgedanken oder in einer akuten Krise wenden Sie sich bitte sofort an:
          </p>
          <div className="krise reveal">
            <p>
              Notruf <b>112</b> · Ärztlicher Bereitschaftsdienst <b>116 117</b>
              <br />
              TelefonSeelsorge <b>0800 111 0 111</b> oder <b>0800 111 0 222</b>{' '}
              (kostenfrei, rund um die Uhr)
              <br />
              <a href="https://www.berliner-krisendienst.de/" rel="noopener">
                Berliner Krisendienst
              </a>{' '}
              (rund um die Uhr, regionale Telefonnummern auf der Website)
              <br />
              oder die Rettungsstelle der nächsten psychiatrischen Klinik.
            </p>
          </div>
        </section>

        <section className="sec line narrow about" aria-labelledby="ketamin-kontakt">
          <div className="sec-lead reveal">
            <span className="lc">kontakt</span>
            <h2 id="ketamin-kontakt" style={{ marginTop: 22 }}>
              Ein erstes <em>Gespräch</em>.
            </h2>
          </div>
          <p className="reveal">
            Im Erstgespräch klären wir gemeinsam, ob eine Ketamin-gestützte
            Psychotherapie für Sie sinnvoll sein kann.
          </p>
          <div className="reveal" style={{ marginTop: 34 }}>
            <a href="/#kontakt" className="pill">
              Erstgespräch anfragen
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
