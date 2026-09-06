"use client";

import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const links = [["#services", "Services"], ["#process", "Process"], ["#work", "Our Work"], ["#about", "About"], ["#contact", "Contact"]] as const;

export default function Navbar() {
  const reduced = useReducedMotion();
  const menuButton = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const sections = ["#home", ...links.map(([href]) => href)]
      .map(href => document.querySelector<HTMLElement>(href))
      .filter((section): section is HTMLElement => section !== null);
    let frame = 0;
    let navBottom = 80;
    const measure = () => {
      navBottom = navRef.current?.getBoundingClientRect().bottom ?? 80;
      document.documentElement.style.setProperty("--nav-bottom", `${navBottom}px`);
      scheduleUpdate();
    };
    const updateActive = () => {
      setScrolled(window.scrollY > 28);
      const current = sections.findLast(section => section.getBoundingClientRect().top <= navBottom + 25);
      const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
      setActive(atBottom ? "#contact" : current ? "#" + current.id : "#home");
      frame = 0;
    };
    const scheduleUpdate = () => { if (!frame) frame = requestAnimationFrame(updateActive); };
    const observer = new ResizeObserver(measure);
    if (navRef.current) observer.observe(navRef.current);
    measure();
    updateActive();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", measure);
    return () => { observer.disconnect(); window.removeEventListener("resize", measure); window.removeEventListener("scroll", scheduleUpdate); cancelAnimationFrame(frame); };
  }, []);

  useEffect(() => {
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) { setOpen(false); menuButton.current?.focus(); }
    };
    const resize = () => { if (window.innerWidth >= 1024) setOpen(false); };
    window.addEventListener("keydown", escape);
    window.addEventListener("resize", resize);
    return () => { window.removeEventListener("keydown", escape); window.removeEventListener("resize", resize); };
  }, [open]);

  return (
    <header className="navbar-shell">
      <nav ref={navRef} aria-label="Main navigation" className={["site-nav", scrolled || open ? "is-scrolled" : ""].join(" ")}>
        <a href="#home" className="navbar-brand" aria-label="ProGuard Web home" onClick={() => setOpen(false)}>
          <Image src="/proguard-mark.svg" alt="" width={40} height={40} loading="eager" className="navbar-mark" />
          <span className="navbar-wordmark">ProGuard <span>Web</span></span>
        </a>
        <div className="navbar-desktop">
          {links.map(([href, label]) => <a key={href} href={href} aria-current={active === href ? "location" : undefined} className="nav-link">{label}</a>)}
          <a href="#contact" className="navbar-cta">Start a project <ArrowUpRight aria-hidden="true" /></a>
        </div>
        <button ref={menuButton} type="button" aria-controls={open ? "mobile-menu" : undefined} onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} className="navbar-toggle">
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>
      <AnimatePresence>
        {open && <motion.div id="mobile-menu" initial={{ opacity: 0, y: reduced ? 0 : -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: reduced ? 0 : -8 }} transition={{ duration: reduced ? 0 : .22 }} className="navbar-mobile">
          {links.map(([href, label]) => <a onClick={() => setOpen(false)} key={href} href={href} aria-current={active === href ? "location" : undefined} className="nav-link">{label}<ArrowUpRight aria-hidden="true" /></a>)}
          <a onClick={() => setOpen(false)} href="#contact" className="navbar-cta">Start a project <ArrowUpRight aria-hidden="true" /></a>
        </motion.div>}
      </AnimatePresence>
    </header>
  );
}
