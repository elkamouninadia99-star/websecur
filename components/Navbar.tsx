"use client";
import { Menu, Shield, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [["#services", "Services"], ["#process", "Process"], ["#about", "About"], ["#contact", "Contact"]] as const;
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  useEffect(() => {
    const updateActive = () => {
      const current = ["#home", ...links.map(([href]) => href)]
        .map((href) => document.querySelector(href))
        .filter((section): section is HTMLElement => section instanceof HTMLElement)
        .findLast((section) => section.getBoundingClientRect().top <= 120);
      setActive(current ? `#${current.id}` : "#home");
    };
    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    return () => window.removeEventListener("scroll", updateActive);
  }, []);
  return <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3"><nav className="surface mx-auto flex h-14 max-w-6xl items-center justify-between rounded-2xl px-4 sm:px-5">
    <a href="#home" className="flex items-center gap-2.5 font-bold tracking-tight"><span className="grid size-8 place-items-center rounded-lg bg-cyan-300 text-slate-950"><Shield className="size-4" /></span>ProGuard <span className="text-cyan-300">Web</span></a>
    <div className="hidden items-center gap-6 md:flex">{links.map(([href,label]) => <a key={href} href={href} aria-current={active === href ? "page" : undefined} className={`text-sm transition hover:text-cyan-200 ${active === href ? "text-cyan-200" : "text-slate-300"}`}>{label}</a>)}<a href="#contact" className="rounded-lg bg-cyan-300 px-3.5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200">Start a project</a></div>
    <button onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open} className="grid size-9 place-items-center rounded-lg border border-white/10 text-white md:hidden">{open ? <X className="size-4"/> : <Menu className="size-4"/>}</button>
  </nav>{open && <div className="surface mx-auto mt-2 max-w-6xl rounded-2xl p-3 md:hidden"><div className="grid gap-1">{links.map(([href,label]) => <a onClick={() => setOpen(false)} key={href} href={href} aria-current={active === href ? "page" : undefined} className={`rounded-lg px-3 py-2.5 text-sm hover:bg-white/5 ${active === href ? "bg-cyan-300/10 text-cyan-200" : "text-slate-200"}`}>{label}</a>)}<a onClick={() => setOpen(false)} href="#contact" className="rounded-lg bg-cyan-300 px-3 py-2.5 text-center text-sm font-semibold text-slate-950">Start a project</a></div></div>}</header>;
}
