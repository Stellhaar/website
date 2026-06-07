import { useEffect, useState } from 'react';

/**
 * Tracks which section is currently in the viewport and returns its id, so the
 * fixed dot navigation can highlight the active anchor (IntersectionObserver,
 * rootMargin -45% / -50% — mirroring the Atem V5 handoff).
 *
 * @param ids Section ids to observe, in document order.
 */
export function useScrollSpy(ids: string[]): string {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? '');

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );

    elements.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ids]);

  return activeId;
}
