import { ArrowUpRight, Cloud, Globe, ShieldCheck, Wrench } from "lucide-react";
const services = [[Globe, "Website development", "Distinct, conversion-minded websites engineered for speed and a clear brand story."], [ShieldCheck, "SSL certificates", "Trusted certificates and clean HTTPS setup that give every visitor confidence."], [Cloud, "Secure hosting", "Dependable cloud hosting, sensible configurations and proactive maintenance."], [Wrench, "Cyber security", "Focused security reviews and practical protection for the risks that matter most."]] as const;

export default function Services() {
  return <section id="services" className="section"><div className="container">
    <div className="grid gap-5 md:grid-cols-[1.1fr_.9fr] md:items-end"><div><span className="eyebrow">What we do</span><h2 className="section-title">Exceptional websites.<br />Every detail considered.</h2></div><p className="section-copy md:justify-self-end">A concise set of expert services to launch, secure and sustain your online presence.</p></div>
    <div className="services-grid mt-9">{services.map(([Icon, title, copy], index) => <a href="#contact" key={title} data-primary={index === 0 || undefined} className="surface premium-card service-card group rounded-2xl">
      <div className="service-top"><span className="service-icon"><Icon aria-hidden="true" /></span><span className="service-number">0{index + 1}</span>{index === 0 && <span className="core-service">Core service</span>}<ArrowUpRight className="service-arrow" aria-hidden="true" /></div>
      <h3>{title}</h3><p className="service-description">{copy}</p>
      {index === 0 && <div className="service-site" aria-hidden="true"><div className="service-site-chrome"><i /><i /><i /><span>YOUR NEXT CHAPTER</span></div><div className="service-site-body"><div><span className="service-site-kicker">DISTINCT BY DESIGN</span><strong>A better first<br />impression.</strong><span className="service-site-cta">Built around your business <ArrowUpRight /></span></div><div className="service-site-art"><div /><div /><div /></div></div><div className="service-site-bottom"><span>Thoughtful design</span><span>Responsive by default</span></div></div>}
    </a>)}</div>
  </div></section>;
}
