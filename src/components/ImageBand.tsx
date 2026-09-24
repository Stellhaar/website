/**
 * Full-width hero image band.
 * Foto © Dieter Düvelmeyer (lizenzierte Datei, ohne Wasserzeichen).
 *
 * WebP in drei Breiten mit JPEG-Rückfall; das Band ist immer volle Viewport-Breite,
 * daher sizes="100vw".
 */
export default function ImageBand() {
  return (
    <div className="band">
      <picture>
        <source
          type="image/webp"
          sizes="100vw"
          srcSet="/assets/stella-sessel-fenster-800.webp 800w, /assets/stella-sessel-fenster-1200.webp 1200w, /assets/stella-sessel-fenster-1600.webp 1600w"
        />
        <img
          src="/assets/stella-sessel-fenster-1200.jpg"
          alt="Stella Savelsberg, Psychologische Psychotherapeutin, in ihrer Praxis in Berlin-Tempelhof"
          width={2000}
          height={1333}
          fetchPriority="high"
        />
      </picture>
    </div>
  );
}
