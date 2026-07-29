"use client";
import { Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const testimonials = [["WebSecur gave us a polished site and a much clearer picture of how to keep it protected.", "Operations lead", "Professional services"], ["The process was exceptionally focused. We launched faster, and the finished experience feels genuinely premium.", "Founder", "Growing business"], ["They communicate in plain language and take care of the technical details with real diligence.", "Marketing director", "Local brand"]] as const;

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  useEffect(() => { const timer = window.setInterval(() => { if (window.matchMedia("(max-width: 1023px)").matches) setActive((current) => (current + 1) % testimonials.length); }, 5000); return () => window.clearInterval(timer); }, []);
  useEffect(() => { if (window.matchMedia("(max-width: 1023px)").matches) (trackRef.current?.children[active] as HTMLElement | undefined)?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" }); }, [active]);
  return <section className="section bg-[#07111f]"><div className="container"><div className="max-w-2xl"><span className="eyebrow">Client perspective</span><h2 className="section-title">Trusted when the details matter.</h2></div><div ref={trackRef} role="region" aria-label="Client testimonials" aria-roledescription="carousel" className="mt-10 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 lg:grid lg:grid-cols-3 lg:overflow-visible">{testimonials.map(([quote, name, role], index) => <figure key={name} className={`surface premium-card flex min-h-56 w-[85%] shrink-0 snap-start flex-col rounded-2xl p-6 sm:w-[48%] lg:w-auto ${active === index ? "border-cyan-200/30" : ""}`}><Quote className="size-5 text-cyan-200"/><blockquote className="mt-5 text-[15px] leading-7 text-slate-200">{quote}</blockquote><figcaption className="mt-auto pt-6 text-sm"><p className="font-medium text-white">{name}</p><p className="mt-1 text-slate-500">{role}</p></figcaption></figure>)}</div></div></section>;
}
