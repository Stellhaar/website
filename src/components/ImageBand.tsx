/**
 * Full-width hero image band.
 * Foto © Dieter Düvelmeyer (lizenzierte Datei, ohne Wasserzeichen).
 */
export default function ImageBand() {
  return (
    <div className="band">
      <img
        src="/assets/stella-sessel-fenster.jpg"
        alt="Stella Savelsberg, Psychologische Psychotherapeutin, in ihrer Praxis in Berlin-Tempelhof"
        width={1500}
        height={1000}
        fetchPriority="high"
      />
    </div>
  );
}
