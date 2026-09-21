import { ketaminAblauf, ketaminAnwendungen } from '../siteData';

/** Anwendungsbereiche als nummerierte Liste (gleiches Raster wie „Behandlungsfelder"). */
export function KetaminAnwendungen() {
  return (
    <div className="diag">
      {ketaminAnwendungen.map((label, i) => (
        <div className="di reveal" key={label}>
          <span className="ix">{String(i + 1).padStart(2, '0')}</span>
          <span className="lb">{label}</span>
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
