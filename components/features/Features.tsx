import { Activity, Cloud, Database, LockKeyhole, ShieldCheck, Zap } from "lucide-react";

const items = [
  [ShieldCheck, "Built for trust", "Modern encryption and careful hardening from day one."],
  [Zap, "Fast by default", "Lean builds and thoughtful optimization for responsive experiences."],
  [Cloud, "Made to scale", "Flexible cloud infrastructure that keeps pace with your business."],
  [LockKeyhole, "Security-aware", "Practical layers of protection against common online threats."],
  [Database, "Backup ready", "Reliable backup practices that keep your critical data recoverable."],
  [Activity, "Always visible", "Clear monitoring and responsive support when it matters."],
] as const;

export default function Features() {
  return <section id="features" className="section bg-[#081321]"><div className="container"><div className="max-w-2xl"><span className="eyebrow">The ProGuard Web standard</span><h2 className="section-title">A better foundation for everything you build online.</h2><p className="section-copy">Design, performance and protection should work together. We make the essentials feel effortless.</p></div><div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{items.map(([Icon, title, copy]) => <article key={title} className="surface premium-card rounded-2xl p-5"><Icon className="size-5 text-cyan-200"/><h3 className="mt-5 font-semibold text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{copy}</p></article>)}</div></div></section>;
}
