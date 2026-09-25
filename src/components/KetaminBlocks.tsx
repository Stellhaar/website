import { ketaminAblauf, ketaminAnwendungen } from '../siteData';

/** Anwendungsbereiche mit Kurzbeschreibung (gleiches Zeilenraster wie die Verfahren). */
export function KetaminAnwendungen() {
  return (
    <div className="swp">
      {ketaminAnwendungen.map((a, i) => (
        <div className="row reveal" key={a.title}>
          <div className="ix">{String(i + 1).padStart(2, '0')}</div>
          <h3>{a.title}</h3>
          <p>{a.text}</p>
        </div>
      ))}
    </div>
  );
}

/** Ablauf in vier Schritten (gleiches Raster wie „Ablauf"). */
export function KetaminAblauf() {
  return (
    <div className="steps">
      {ketaminAblauf.map((step, i) => (
        <div className="s reveal" key={step.title}>
          <div className="n">{String(i + 1).padStart(2, '0')}</div>
          <h3>{step.title}</h3>
          <p>{step.text}</p>
        </div>
      ))}
    </div>
  );
}
