import { Code2, Gauge, LifeBuoy, PenTool, ShieldCheck } from "lucide-react";
import type { CSSProperties } from "react";
const nodes = [["Design", PenTool], ["Development", Code2], ["Performance", Gauge], ["Security", ShieldCheck], ["Support", LifeBuoy]] as const;

export default function Foundation() {
  return <div className="foundation surface rounded-3xl" data-reveal>
    <div className="foundation-caption"><span className="status-dot" /> THE DIGITAL PRODUCT ECOSYSTEM</div>
    <div className="foundation-map" role="img" aria-label="A website connects design, development, performance, security and support into one digital product.">
      <svg className="foundation-lines" viewBox="0 0 400 320" preserveAspectRatio="none" aria-hidden="true"><path pathLength="1" d="M200 155 L80 65 M200 155 L320 65 M200 155 L65 235 M200 155 L335 235 M200 155 L200 292" /></svg>
      <div className="foundation-core" aria-hidden="true"><div className="product-chrome"><i /><i /><i /></div><div className="product-canvas"><div><span /><span /><span /></div><i /></div><div className="product-grid"><i /><i /><i /></div></div>
      {nodes.map(([label, Icon], index) => <div key={label} className={`foundation-node foundation-node-${index}`} style={{ "--node-delay": `${550 + index * 130}ms` } as CSSProperties} aria-hidden="true"><Icon /><span>{label}</span><i /></div>)}
    </div>
    <p className="foundation-title">Secure foundations for ambitious companies.</p>
    <p className="foundation-note">Considered design. Connected expertise.</p>
  </div>;
}
