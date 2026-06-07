import { Analytics } from '@vercel/analytics/react';
import DotNav from './components/DotNav';
import TopNav from './components/TopNav';
import Hero from './components/Hero';
import ImageBand from './components/ImageBand';
import About from './components/About';
import Behandlungsfelder from './components/Behandlungsfelder';
import Schwerpunkte from './components/Schwerpunkte';
import Werdegang from './components/Werdegang';
import Ablauf from './components/Ablauf';
import Faq from './components/Faq';
import Kontakt from './components/Kontakt';
import Footer from './components/Footer';
import Impressum from './components/legal/Impressum';
import Datenschutz from './components/legal/Datenschutz';
import { useScrollReveal } from './hooks/useScrollReveal';

export type Route = 'home' | 'impressum' | 'datenschutz';

/** Minimal path → route mapping (the legal pages are prerendered as static files). */
export function routeFromPath(pathname: string): Route {
  const p = pathname.replace(/\/+$/, '');
  if (p.endsWith('/impressum')) return 'impressum';
  if (p.endsWith('/datenschutz')) return 'datenschutz';
  return 'home';
}

function HomeView() {
  return (
    <>
      <DotNav />
      <TopNav />
      <main>
        <Hero />
        <ImageBand />
        <About />
        <Behandlungsfelder />
        <Schwerpunkte />
        <Werdegang />
        <Ablauf />
        <Faq />
        <Kontakt />
      </main>
      <Footer />
    </>
  );
}

export default function App({ path }: { path?: string }) {
  // No-op on the legal pages (they contain no `.reveal` elements).
  useScrollReveal();

  const pathname =
    path ?? (typeof window !== 'undefined' ? window.location.pathname : '/');
  const route = routeFromPath(pathname);

  return (
    <>
      {route === 'impressum' ? (
        <Impressum />
      ) : route === 'datenschutz' ? (
        <Datenschutz />
      ) : (
        <HomeView />
      )}
      {/* Cookieless, datensparsame Reichweitenmessung (siehe Datenschutzerklärung). */}
      <Analytics />
    </>
  );
}
