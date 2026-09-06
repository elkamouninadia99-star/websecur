import { Gauge, LifeBuoy, MousePointer2, Server } from "lucide-react";
import type { CSSProperties } from "react";
const qualities = [
  ["Conversion", "A clear next step", MousePointer2],
  ["Performance", "Fast by design", Gauge],
  ["Reliability", "Ready every day", Server],
  ["Support", "People behind it", LifeBuoy],
] as const;
const connections = ["M200 140 L72 48", "M200 140 L328 48", "M200 140 L72 232", "M200 140 L328 232"];

export default function QualityDashboard() {
  return <div className="quality-system" data-reveal>
    <div className="quality-system-heading"><span className="status-dot" /> WEBSITE QUALITY SYSTEM</div>
    <div className="quality-system-map" role="group" aria-label="A website built around conversion, performance, reliability and support">
      <svg className="quality-connections" viewBox="0 0 400 280" preserveAspectRatio="none" aria-hidden="true">
        {connections.map((path, index) => <g key={path} data-branch={index}><path className="quality-connection" d={path} pathLength="1" /><path className="quality-pulse" d={path} pathLength="1" /></g>)}
      </svg>
      <div className="quality-browser" aria-hidden="true"><div className="product-chrome"><i /><i /><i /></div><div className="quality-browser-body"><span>YOUR WEBSITE</span><strong>Built around<br />your business.</strong><div className="quality-browser-action" /><div className="quality-browser-grid"><i /><i /><i /></div></div></div>
      <ul aria-label="Website quality areas">{qualities.map(([title, copy, Icon], index) => <li key={title} tabIndex={0} className={`quality-area quality-area-${index}`} style={{ "--node-delay": `${500 + index * 120}ms` } as CSSProperties}><Icon aria-hidden="true" /><span><strong>{title}</strong><small>{copy}</small></span></li>)}</ul>
    </div>
  </div>;
}
