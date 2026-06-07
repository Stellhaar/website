import './index.css';
import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element #root not found');
}

const app = (
  <StrictMode>
    <App path={window.location.pathname} />
  </StrictMode>
);

// The build prerenders static markup into #root (see scripts/prerender.tsx).
// Hydrate it when present; in dev the element is empty, so mount fresh.
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}
