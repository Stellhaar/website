import type { ReactNode } from 'react';
import Footer from '../Footer';
import TopNav from '../TopNav';

/** Shared chrome for the Impressum / Datenschutz pages: brand header + footer. */
export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated?: string;
  children: ReactNode;
}) {
  return (
    <>
      <TopNav sticky />
      <main className="legal narrow">
        <nav className="crumbs" aria-label="Brotkrumen-Navigation">
          <a href="/">Startseite</a>
          <span aria-hidden="true">›</span>
          <span aria-current="page">{title}</span>
        </nav>
        <h1 className="legal-title">{title}</h1>
        {updated && <p className="updated">Stand: {updated}</p>}
        {children}
      </main>
      <Footer />
    </>
  );
}
