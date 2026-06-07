import { useEffect } from 'react';

/**
 * Fades in every `.reveal` element once it scrolls into view (IntersectionObserver,
 * threshold .1), staggered by index % 4 * 55ms — mirroring the Atem V5 handoff.
 *
 * Respects `prefers-reduced-motion`: those users get the content immediately
 * (the CSS already neutralises the transform), so we skip the observer entirely.
 */
export function useScrollReveal(): void {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));

    const prefersReduced =
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
    if (prefersReduced) {
      nodes.forEach((el) => el.classList.add('in'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    nodes.forEach((el, i) => {
      el.style.transitionDelay = `${(i % 4) * 55}ms`;
      io.observe(el);
    });

    return () => io.disconnect();
  }, []);
}
