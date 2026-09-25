import { useEffect, useRef, useState } from 'react';
import { business, mainNav, type NavItem } from '../siteData';

/**
 * Kopfzeile für alle Seiten: Wortmarke, Navigation mit Aufklappmenüs und CTA.
 *
 * Die Menüpunkte stehen immer im HTML und werden nur per CSS aus- und
 * eingeblendet — das statische Prerendering (scripts/prerender.tsx) liefert sie
 * damit auch ohne JavaScript an Crawler aus.
 *
 * `sticky` lässt die Leiste beim Scrollen oben stehen (Unterseiten).
 */
export default function TopNav({ sticky = false }: { sticky?: boolean }) {
  const [open, setOpen] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  // Klick außerhalb und Escape schließen jedes geöffnete Menü.
  useEffect(() => {
    if (!open && !menuOpen) return;

    const onPointerDown = (e: MouseEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) {
        setOpen(null);
        setMenuOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(null);
        setMenuOpen(false);
      }
    };

    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open, menuOpen]);

  const header = (
    <header className="topnav" id="top" ref={headerRef}>
      {sticky ? (
        <a className="brand" href="/">
          {business.shortName}
          <small>Psychotherapie · Berlin</small>
        </a>
      ) : (
        <div className="brand">
          {business.shortName}
          <small>Psychotherapie · Berlin</small>
        </div>
      )}

      <nav aria-label="Hauptnavigation">
        {mainNav.map((entry) => (
          <NavEntry
            key={entry.label}
            entry={entry}
            open={open === entry.label}
            onToggle={() => setOpen((cur) => (cur === entry.label ? null : entry.label))}
            onClose={() => setOpen(null)}
          />
        ))}
      </nav>

      <button
        type="button"
        className="navtoggle"
        aria-expanded={menuOpen}
        aria-controls="mobilnav"
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span className="sr-only">Menü</span>
        <span className="bars" aria-hidden="true">
          <span />
          <span />
        </span>
        Menü
      </button>

      <a href="/#kontakt" className="pill topnav-cta">
        Erstgespräch anfragen
      </a>

      <div className={`mobilnav${menuOpen ? ' open' : ''}`} id="mobilnav">
        {mainNav.map((entry) => (
          <div className="group" key={entry.label}>
            {entry.items ? (
              <>
                <span className="grouptitle">{entry.label}</span>
                {entry.items.map((item) => (
                  <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                    {item.label}
                  </a>
                ))}
              </>
            ) : (
              <a href={entry.href} onClick={() => setMenuOpen(false)}>
                {entry.label}
              </a>
            )}
          </div>
        ))}
      </div>
    </header>
  );

  return sticky ? <div className="stickybar">{header}</div> : header;
}

/** Ein Eintrag der Desktop-Navigation: einfacher Link oder Aufklappmenü. */
function NavEntry({
  entry,
  open,
  onToggle,
  onClose,
}: {
  entry: NavItem;
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  if (!entry.items) {
    return <a href={entry.href}>{entry.label}</a>;
  }

  const panelId = `nav-${entry.href.replace(/\W/g, '')}`;

  return (
    <div className={`navgroup${open ? ' open' : ''}`}>
      <button type="button" aria-expanded={open} aria-controls={panelId} onClick={onToggle}>
        {entry.label}
        <svg viewBox="0 0 10 6" width="10" height="6" aria-hidden="true">
          <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      </button>
      <div className="navpanel" id={panelId}>
        {entry.items.map((item) => (
          <a key={item.href} href={item.href} onClick={onClose}>
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}
