import type { ReactNode } from 'react';
import Footer from '../Footer';
import { business } from '../../siteData';

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
      <header className="topnav">
        <a className="brand" href="/">
          {business.shortName}
          <small>Psychotherapie · Berlin</small>
        </a>
        <a href="/" className="lk">Zur Startseite</a>
      </header>
      <main className="legal narrow">
        <h1 className="legal-title">{title}</h1>
        {updated && <p className="updated">Stand: {updated}</p>}
        {children}
      </main>
      <Footer />
    </>
  );
}
