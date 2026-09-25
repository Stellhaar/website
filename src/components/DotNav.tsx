import { useScrollSpy } from '../hooks/useScrollSpy';

const DOTS: { id: string; label: string }[] = [
  { id: 'top', label: 'Start' },
  { id: 'ueber', label: 'Über mich' },
  { id: 'themen', label: 'Diagnosen & Themen' },
  { id: 'schwerpunkte', label: 'Therapeutische Verfahren' },
  { id: 'ketamin', label: 'Ketamin-gestützte Psychotherapie' },
  { id: 'werdegang', label: 'Ausbildung & Qualifikationen' },
  { id: 'ablauf', label: 'Ablauf & Kosten' },
  { id: 'kontakt', label: 'Kontakt' },
];

/** Fixed dot navigation (hidden under 1180px via CSS). */
export default function DotNav() {
  const active = useScrollSpy(DOTS.map((d) => d.id));

  return (
    <nav className="dots" aria-label="Abschnittsnavigation">
      {DOTS.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className={active === id ? 'on' : undefined}
          aria-label={label}
          aria-current={active === id ? 'true' : undefined}
        >
          <span aria-hidden="true">{label}</span>
        </a>
      ))}
    </nav>
  );
}
