import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const root = document.getElementById("root")!;

// Every route is prerendered to full HTML at build time (scripts/prerender.mjs).
// Hydrate that markup rather than throwing it away, so the page never blanks
// while the route's chunk loads. A bare root (dev server) renders normally.
if (root.hasChildNodes()) {
  hydrateRoot(root, <App />);
} else {
  createRoot(root).render(<App />);
}
