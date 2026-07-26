import { Quote } from "lucide-react";

const testimonials = [["WebSecur gave us a polished site and a much clearer picture of how to keep it protected.", "Operations lead", "Professional services"], ["The process was exceptionally focused. We launched faster, and the finished experience feels genuinely premium.", "Founder", "Growing business"], ["They communicate in plain language and take care of the technical details with real diligence.", "Marketing director", "Local brand"]] as const;

export default function Testimonials() {
  return <section className="section bg-[#07111f]"><div className="container"><div className="max-w-2xl"><span className="eyebrow">Client perspective</span><h2 className="section-title">Trusted when the details matter.</h2></div><div className="mt-10 grid gap-3 lg:grid-cols-3">{testimonials.map(([quote, name, role]) => <figure key={name} className="surface flex min-h-56 flex-col rounded-2xl p-6"><Quote className="size-5 text-cyan-200"/><blockquote className="mt-5 text-[15px] leading-7 text-slate-200">{quote}</blockquote><figcaption className="mt-auto pt-6 text-sm"><p className="font-medium text-white">{name}</p><p className="mt-1 text-slate-500">{role}</p></figcaption></figure>)}</div></div></section>;
}
