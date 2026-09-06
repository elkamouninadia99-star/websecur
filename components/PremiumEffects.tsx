"use client";
import { animate, scroll } from "framer-motion";
import { useEffect } from "react";

/** Reveal once, retain readable server-rendered content, and honor live motion preferences. */
export default function PremiumEffects() {
  useEffect(() => {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = matchMedia("(min-width: 1024px) and (hover: hover) and (pointer: fine)");
    const controls = new Set<ReturnType<typeof animate>>();
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        const el = entry.target as HTMLElement;
        el.dataset.revealed = "true";
        if (reduced.matches || el.matches("footer")) return;
        const project = el.closest(".project-story");
        const preview = el.classList.contains("project-preview");
        const second = project?.previousElementSibling?.matches(".project-story");
        const heading = el.matches(".section-title");
        const card = el.matches(".premium-card");
        const delay = el.matches(".eyebrow") ? 0 : heading ? .08 : el.matches(".section-copy") ? .16 : Number(el.dataset.delay || 0);
        const control = animate(el, {
          opacity: [0, 1],
          y: [project && desktop.matches ? 0 : desktop.matches ? 24 : 18, 0],
          x: [project && desktop.matches ? (preview !== !!second ? 30 : -30) : 0, 0],
          ...(preview ? { scale: [.97, 1] } : {}),
          ...(heading ? { clipPath: ["inset(0 0 100% 0)", "inset(0 0 0% 0)"] } : {}),
        }, { duration: project || el.hasAttribute("data-reveal") ? .9 : card ? .55 : .8, delay, ease: [.16, 1, .3, 1], onComplete: () => {
          el.style.removeProperty("transform"); el.style.removeProperty("clip-path"); controls.delete(control);
        } });
        controls.add(control);
      });
    }, { threshold: .16 });
    document.querySelectorAll<HTMLElement>(".section .eyebrow, .section-title, .section-copy, #features article, #services .service-card, #work article > div > div, .why-details li.premium-card, #about .premium-card, .contact-form, [data-reveal]").forEach(el => {
      if (el.matches(".service-card, .why-details li.premium-card")) el.dataset.delay = String([...el.parentElement!.children].indexOf(el) * .1);
      observer.observe(el);
    });
    let cleanups: (() => void)[] = [];
    let frame = 0;
    const configure = () => {
      cleanups.forEach(cleanup => cleanup()); cleanups = [];
      if (reduced.matches) { controls.forEach(control => control.complete()); return; }
      if (!desktop.matches) return;
      document.querySelectorAll<HTMLElement>(".project-preview").forEach(el => {
        // Individual translate composes with entrance and hover transforms without moving the image crop.
        cleanups.push(scroll((progress: number) => { el.style.translate = `0 ${(progress - .5) * -20}px`; }, { target: el.closest("article")!, offset: ["start end", "end start"] }));
        cleanups.push(() => { el.style.removeProperty("translate"); });
      });
    };
    const pointer = (event: PointerEvent) => {
      if (reduced.matches || !desktop.matches || frame) return;
      const card = (event.target as Element).closest<HTMLElement>(".service-card");
      if (!card) return;
      frame = requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--pointer-x", `${event.clientX - rect.left}px`);
        card.style.setProperty("--pointer-y", `${event.clientY - rect.top}px`);
        frame = 0;
      });
    };
    configure();
    desktop.addEventListener("change", configure); reduced.addEventListener("change", configure);
    document.addEventListener("pointermove", pointer, { passive: true });
    return () => { observer.disconnect(); controls.forEach(control => control.stop()); cleanups.forEach(cleanup => cleanup()); cancelAnimationFrame(frame); desktop.removeEventListener("change", configure); reduced.removeEventListener("change", configure); document.removeEventListener("pointermove", pointer); };
  }, []);
  return <div className="ambient-background" aria-hidden="true" />;
}
