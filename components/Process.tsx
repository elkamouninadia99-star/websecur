"use client";
import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, useReducedMotion } from "framer-motion";
const steps = [["01", "Discover", "We map your goals, audience and technical needs."], ["02", "Design", "We shape a focused experience and secure project plan."], ["03", "Build", "We develop, test and optimize every important detail."], ["04", "Protect", "We launch confidently and provide dependable ongoing care."]] as const;

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 45%"] });
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);
  useMotionValueEvent(scrollYProgress, "change", value => {
    const next = Math.min(3, Math.floor(value * 3 + .03));
    if (next !== activeRef.current) { activeRef.current = next; setActive(next); }
  });
  return <section id="process" className="section"><div className="container">
    <div className="text-center"><span className="eyebrow">Our process</span><h2 className="section-title mx-auto">Simple on the surface. Thorough underneath.</h2><p className="section-copy mx-auto">A clear four-step path from first conversation to a safer, stronger online presence.</p></div>
    <div ref={ref} className="process-timeline mt-9" data-scroll-timeline>
      <div className="timeline-track" aria-hidden="true"><motion.span className="timeline-horizontal" style={{ scaleX: reduced ? 1 : scrollYProgress }} /><motion.span className="timeline-vertical" style={{ scaleY: reduced ? 1 : scrollYProgress }} /></div>
      <ol className="grid gap-5 md:grid-cols-4">{steps.map(([number, title, copy], index) => <li key={number} className="process-step relative" data-state={reduced ? "complete" : index === active ? "active" : index < active ? "complete" : "future"} aria-current={!reduced && active === index ? "step" : undefined}>
        <span className="step-number text-xs font-bold tracking-widest">{number}</span><div className="step-copy"><h3 className="mt-7 font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{copy}</p></div>
      </li>)}</ol>
    </div>
  </div></section>;
}
