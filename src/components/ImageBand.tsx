/**
 * Full-width hero image band.
 * ⚠️ assets/stella-sessel-fenster.jpg trägt noch ein Wasserzeichen
 *    ("NUR ZUR AUSWAHL") → vor Go-Live durch die lizenzierte Datei ersetzen
 *    (© Dieter Düvelmeyer), gleiche Maße/Ausschnitt.
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
