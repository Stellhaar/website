# Stella Savelsberg · Psychotherapie (Atem V5)

One-Page-Website für **Stella Savelsberg**, Psychologische Psychotherapeutin
(Verhaltenstherapie) in Berlin-Tempelhof. Umsetzung des High-Fidelity-Designs
„Atem V5" in **React 19 + Vite + TypeScript**, responsive und SEO-/GEO-optimiert.

## Entwicklung

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # vite build + statisches Prerendering (dist/)
npm run preview  # gebautes Ergebnis lokal prüfen
```

## Architektur
- `src/App.tsx` – setzt die Sektionen zusammen (siehe `src/components/`).
- `src/siteData.ts` – **eine Quelle der Wahrheit** für Inhalte + Geschäftsdaten
  (FAQ, Adresse, Telefon). Wird von Komponenten *und* dem Prerendering genutzt.
- `src/hooks/` – `useScrollReveal` (Fade-in beim Scrollen), `useScrollSpy`
  (aktiver Punkt der Punkt-Navigation). Beide respektieren `prefers-reduced-motion`.
- `scripts/prerender.tsx` – rendert die Seite nach dem Build statisch in
  `dist/index.html` und injiziert JSON-LD (LocalBusiness/MedicalBusiness, Person,
  FAQPage). So sehen Suchmaschinen **und** Antwort-Engines vollständigen Inhalt.

## SEO / GEO
- Vollständige Meta-Tags + Open Graph/Twitter in `index.html`.
- Lokale Geo-Signale (`geo.*`, `ICBM`) für Berlin-Tempelhof.
- Statisches Prerendering → echter HTML-Inhalt ohne JavaScript.
- `public/llms.txt` – Zusammenfassung für generative Antwort-Engines (GEO).
- `public/sitemap.xml`, `public/robots.txt`.
- DSGVO-konforme Google-Maps-Karte (Laden erst nach Klick/Einwilligung).

## Rechtsseiten
Impressum (`/impressum`) und Datenschutzerklärung (`/datenschutz`) sind angelegt,
statisch vorgerendert und im Footer verlinkt. Inhalte recherchiert nach dem
Merkblatt der Psychotherapeutenkammer Berlin (Impressumspflicht für PP) und der
DSGVO (Hosting & Web Analytics via Vercel cookielos, einwilligungsbasiertes
Google Maps). **Keine Rechtsberatung** — vor Go-Live anwaltlich bzw. über die
Kammer prüfen lassen.

## ⚠️ Vor Go-Live klären (Platzhalter)
1. ✅ **Domain:** `www.psychotherapie-stella-savelsberg.de` ist live (Vercel + DNS
   verbunden, SSL aktiv, apex → www).
2. **Geo-Koordinaten:** `business.geo` exakt verifizieren.
3. **Aufsichtsbehörde:** `legal.aufsicht` bestätigen (laut Kammer-Merkblatt).
4. **Hero-Foto:** `public/assets/stella-sessel-fenster.jpg` trägt ein
   „NUR ZUR AUSWAHL"-Wasserzeichen → lizenzierte Datei einsetzen (© Dieter Düvelmeyer).
5. **Rechtstexte** final anwaltlich prüfen (siehe oben).

> Hinweis: Die Berufshaftpflicht-Angabe ist keine Impressumspflicht (§ 5 DDG);
> sie wird gemäß § 2 DL-InfoV persönlich vor dem Erstgespräch mitgeteilt.
