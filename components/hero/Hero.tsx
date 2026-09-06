"use client";

import Image from "next/image";
import { ArrowDown, ArrowRight, CheckCircle2, LockKeyhole } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform, useScroll, useInView } from "framer-motion";
import { useEffect, useRef, type PointerEvent } from "react";

import HeroMetrics from "./HeroMetrics";

const proof = ["SSL-ready", "Secure hosting", "Continuous support"];
const capabilities = ["Design", "Development", "Security"];

export default function Hero() {
  const showcaseRef = useRef<HTMLElement>(null);
  const showcaseVisible = useInView(showcaseRef, { once: true, amount: .15 });
  const heroRef = useRef<HTMLElement>(null);
  const scrollEnabled = useMotionValue(0);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const headlineY = useTransform(() => scrollYProgress.get() * scrollEnabled.get() * -20);
  const headlineOpacity = useTransform(() => 1 - scrollYProgress.get() * scrollEnabled.get() * .15);
  const showcaseY = useTransform(() => scrollYProgress.get() * scrollEnabled.get() * 15);
  const showcaseScale = useTransform(() => 1 - scrollYProgress.get() * scrollEnabled.get() * .02);
  const pointerEnabled = useRef(false);
  const bounds = useRef<DOMRect | null>(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const x = useSpring(pointerX, { stiffness: 90, damping: 25, mass: .6 });
  const y = useSpring(pointerY, { stiffness: 90, damping: 25, mass: .6 });
  const cardX = useTransform(x, value => value * 2.25);
  const cardY = useTransform(y, value => value * 1.8);
  const rearX = useTransform(x, value => value * 1.75);
  const rearY = useTransform(y, value => value * 1.75);
  const lightX = useTransform(x, value => value * 3);
  const lightY = useTransform(y, value => value * 2.5);

  useEffect(() => {
    const media = matchMedia("(min-width: 1024px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    const sync = () => {
      pointerEnabled.current = media.matches;
      scrollEnabled.set(media.matches ? 1 : 0);
      bounds.current = null;
      pointerX.set(0); pointerY.set(0);
      if (!media.matches) { x.jump(0); y.jump(0); }
    };
    const invalidate = () => { bounds.current = null; };
    sync();
    media.addEventListener("change", sync);
    window.addEventListener("resize", invalidate, { passive: true });
    window.addEventListener("scroll", invalidate, { passive: true });
    return () => {
      media.removeEventListener("change", sync);
      window.removeEventListener("resize", invalidate);
      window.removeEventListener("scroll", invalidate);
    };
  }, [pointerX, pointerY, x, y, scrollEnabled]);

  function movePointer(event: PointerEvent<HTMLElement>) {
    if (!pointerEnabled.current) return;
    bounds.current ??= event.currentTarget.getBoundingClientRect();
    const rect = bounds.current;
    pointerX.set(Math.max(-1, Math.min(1, (event.clientX - rect.left) / rect.width * 2 - 1)) * 4);
    pointerY.set(Math.max(-1, Math.min(1, (event.clientY - rect.top) / rect.height * 2 - 1)) * 5);
  }

  return (
    <section ref={heroRef} id="home" className="agency-hero" onPointerMove={movePointer} onPointerLeave={() => { pointerX.set(0); pointerY.set(0); bounds.current = null; }}>
      <motion.div className="hero-light" style={{ x: lightX, y: lightY }} aria-hidden="true" />
      <div className="container hero-composition">
        <div className="hero-copy">
          <div className="hero-eyebrow"><span className="status-dot" />Secure digital foundations</div>
          <motion.h1 className="hero-headline" style={{ y: headlineY, opacity: headlineOpacity }}>
            <span className="hero-line"><span>Websites that move</span></span>{" "}
            <span className="hero-line"><span>your business</span></span>{" "}
            <span className="hero-line"><span>forward &mdash; <em>securely.</em></span></span>
          </motion.h1>
          <p className="hero-description">ProGuard Web designs high-performing websites, protects every connection, and keeps your online infrastructure dependable.</p>
          <div className="hero-actions">
            <a href="#contact" className="hero-button hero-button-primary">Start a secure project <ArrowRight aria-hidden="true" /></a>
            <a href="#services" className="hero-button hero-button-secondary">Explore services <ArrowRight aria-hidden="true" /></a>
          </div>
          <ul className="hero-proof" aria-label="Our commitments">
            {proof.map(item => <li key={item}><CheckCircle2 aria-hidden="true" />{item}</li>)}
          </ul>
          <ul className="hero-capabilities" aria-label="Our capabilities">
            {capabilities.map(item => <li key={item}>{item}</li>)}
          </ul>
        </div>

        <motion.figure ref={showcaseRef} data-visible={showcaseVisible} style={{ y: showcaseY, scale: showcaseScale }} className="hero-showcase" aria-label="Website design by ProGuard Web">
          <div className="hero-technical-ring" aria-hidden="true" />
          <motion.div className="hero-rear-depth" style={{ x: rearX, y: rearY }} aria-hidden="true">
            <div className="hero-rear-entrance"><div className="hero-rear-browser">
              <div className="hero-rear-toolbar"><span/><span/><span/><i/></div>
              <Image src="/Image/everpeak-roofing-preview.png" alt="" width={1901} height={900} sizes="(min-width: 1440px) 670px, (min-width: 1024px) 50vw, 700px" />
            </div></div>
          </motion.div>
          <div className="hero-code-layer" aria-hidden="true"><span>Built with intention</span><code>&lt;main&gt; design. develop. protect. &lt;/main&gt;</code><i/></div>
          <motion.div className="hero-browser-depth" style={{ x, y }}>
            <div className="hero-browser-entrance">
              <div className="hero-browser">
                <div className="hero-browser-toolbar" aria-hidden="true">
                  <span className="hero-window-controls"><i /><i /><i /></span>
                  <span className="hero-browser-url"><LockKeyhole />everpeak-roofing.vercel.app</span>
                  <span className="hero-browser-menu"><i /><i /></span>
                </div>
                <a href="#work" className="hero-browser-link" aria-label="Explore EverPeak Roofing in our selected work">
                  <Image src="/Image/everpeak-roofing-preview.png" alt="EverPeak Roofing website designed by ProGuard Web, featuring a full-width photograph, clear navigation and prominent calls to action" width={1901} height={900} sizes="(min-width: 1440px) 670px, (min-width: 1024px) 50vw, (min-width: 768px) 700px, 100vw" preload />
                  <span className="hero-preview-link">Explore the project <ArrowRight aria-hidden="true" /></span>
                </a>
                <div className="hero-browser-footer"><span><span className="status-dot" />EverPeak Roofing</span><span>Web design &amp; development</span></div>
              </div>
            </div>
          </motion.div>
          <motion.div className="hero-signal-layer" style={{ x: cardX, y: cardY }}>
            <HeroMetrics />
          </motion.div>
          <p className="sr-only">Illustrative quality targets, not measured results.</p>
        </motion.figure>
      </div>
      <div className="container hero-bottom"><span>Premium websites. Secure digital foundations.</span><a href="#features">Discover the ProGuard standard <ArrowDown aria-hidden="true" /></a></div>
    </section>
  );
}
