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
import KetaminTeaser from './components/KetaminTeaser';
import KetaminPage from './components/KetaminPage';
import Impressum from './components/legal/Impressum';
import Datenschutz from './components/legal/Datenschutz';
import { useScrollReveal } from './hooks/useScrollReveal';
import { KETAMIN_PATH } from './siteData';

export type Route = 'home' | 'impressum' | 'datenschutz' | 'ketamin';

/** Minimal path → route mapping (every subpage is prerendered as a static file). */
export function routeFromPath(pathname: string): Route {
  const p = pathname.replace(/\/+$/, '');
  if (p.endsWith('/impressum')) return 'impressum';
  if (p.endsWith('/datenschutz')) return 'datenschutz';
  if (p.endsWith(KETAMIN_PATH)) return 'ketamin';
  return 'home';
}

function renderRoute(route: Route) {
  switch (route) {
    case 'impressum':
      return <Impressum />;
    case 'datenschutz':
      return <Datenschutz />;
    case 'ketamin':
      return <KetaminPage />;
    default:
      return <HomeView />;
  }
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
        <KetaminTeaser />
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

  return (
    <>
      {renderRoute(routeFromPath(pathname))}
      {/* Cookieless, datensparsame Reichweitenmessung (siehe Datenschutzerklärung). */}
      <Analytics />
    </>
  );
}
