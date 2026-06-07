import { useRef, useState } from 'react';
import { faqs } from '../siteData';

/**
 * "Häufige Fragen" — accordion. Only one question open at a time; "+" rotates to
 * "×". The answer opens via a max-height transition (matching the Atem V5 CSS),
 * the height being measured from the panel's scrollHeight.
 */
export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);
  const answerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (i: number) => setOpen((cur) => (cur === i ? null : i));

  return (
    <section className="sec line" id="faq" aria-labelledby="faq-lc">
      <div className="narrow">
        <div className="sec-lead reveal">
          <span className="lc" id="faq-lc">häufige fragen</span>
        </div>
        <div className="faq">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;
            return (
              <div className={`q${isOpen ? ' open' : ''}`} key={item.q}>
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(i)}
                >
                  {item.q}
                  <span className="pm" aria-hidden="true">+</span>
                </button>
                <div
                  className="ans"
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  ref={(el) => {
                    answerRefs.current[i] = el;
                  }}
                  style={{
                    maxHeight: isOpen
                      ? answerRefs.current[i]?.scrollHeight ?? 600
                      : 0,
                  }}
                >
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
