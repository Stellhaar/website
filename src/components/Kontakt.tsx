import { useState } from 'react';
import { business } from '../siteData';

const MapPin = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

/**
 * "Kontakt & Anfahrt".
 *
 * DSGVO-konforme Karte: Der Google-Maps-iframe wird **erst nach Klick** geladen.
 * Vorher findet kein Datentransfer zu Google statt. Dieses Verhalten muss
 * erhalten bleiben.
 */
export default function Kontakt() {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [name, setName] = useState('');
  const [telefon, setTelefon] = useState('');
  const [nachricht, setNachricht] = useState('');
  const addr = `${business.street}, ${business.postalCode} ${business.city}`;
  const mapQuery = encodeURIComponent(addr);

  // Öffnet das E-Mail-Programm der/des Besucher:in mit vorausgefüllter Nachricht
  // an Stella (mailto). Es werden keine Daten an die Website oder einen Server
  // übertragen.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = 'Anfrage über die Website';
    const lines: string[] = [];
    if (telefon.trim()) {
      lines.push(`Telefon für Rückruf: ${telefon.trim()}`, '');
    }
    lines.push(nachricht.trim());
    if (name.trim()) {
      lines.push('', 'Viele Grüße', name.trim());
    }
    const body = lines.join('\r\n');
    window.location.href = `mailto:${business.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="sec ct" id="kontakt" aria-labelledby="kontakt-h">
      <div className="wrap ct-grid">
        <div className="reveal">
          <span className="lc">kontakt &amp; anfahrt</span>
          <h2 id="kontakt-h" style={{ marginTop: 22 }}>
            So erreichen Sie <em>mich</em>.
          </h2>
          <p className="intro">
            Schreiben Sie mir eine kurze Nachricht mit Ihrem Anliegen. Ich melde mich
            mit Terminvorschlägen.
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="cf-name">Name</label>
            <input
              id="cf-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="cf-telefon">
              Telefon <span className="opt">(optional, für einen Rückruf)</span>
            </label>
            <input
              id="cf-telefon"
              name="telefon"
              type="tel"
              autoComplete="tel"
              value={telefon}
              onChange={(e) => setTelefon(e.target.value)}
            />

            <label htmlFor="cf-nachricht">Ihre Nachricht</label>
            <textarea
              id="cf-nachricht"
              name="nachricht"
              rows={5}
              required
              value={nachricht}
              onChange={(e) => setNachricht(e.target.value)}
            />

            <button type="submit" className="pill">
              E-Mail schreiben
            </button>
            <p className="form-hint">
              Beim Absenden öffnet sich Ihr eigenes E-Mail-Programm mit einer
              vorbereiteten Nachricht an mich. Es werden keine Daten an diese Website
              übertragen. Bitte senden Sie zunächst keine sensiblen Gesundheitsdaten.
            </p>
          </form>
        </div>
        <div className="reveal">
          <div className="r">
            <span className="k">E-Mail</span>
            <a href={`mailto:${business.email}`}>{business.email}</a>
          </div>
          <div className="r">
            <span className="k">Telefon</span>
            <a href={`tel:${business.phoneHref}`}>{business.phone}</a>
          </div>
          <div className="r">
            <span className="k">Praxis</span>
            <span>{addr}</span>
          </div>
          <div className="r">
            <span className="k">Termine</span>
            <span>{business.openingHours}</span>
          </div>
        </div>
      </div>

      <div className="wrap anf">
        <span className="lc">anfahrt</span>
        <div className="mapconsent reveal">
          {mapLoaded ? (
            <iframe
              title="Standort der Praxis auf Google Maps"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${mapQuery}&z=15&output=embed`}
            />
          ) : (
            <div className="mapinner">
              <div className="pin">
                <MapPin />
              </div>
              <b>
                {business.street} · {business.postalCode} {business.district}
              </b>
              <p>
                Mit dem Laden der Karte akzeptieren Sie die Datenschutzerklärung von
                Google. Dabei werden Daten an Google übertragen.
              </p>
              <button className="pill" type="button" onClick={() => setMapLoaded(true)}>
                Karte laden
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
