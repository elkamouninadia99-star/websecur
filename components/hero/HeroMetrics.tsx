"use client";

import Image from "next/image";
import { animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { MonitorSmartphone } from "lucide-react";

/** One timeline drives both counters and the ring; no React renders per frame. */
export default function HeroMetrics() {
  const ref = useRef<HTMLDivElement>(null);
  const performance = useRef<HTMLSpanElement>(null);
  const responsive = useRef<HTMLSpanElement>(null);
  const circle = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    let animation: ReturnType<typeof animate> | undefined;
    let started = false;
    const update = (progress: number) => {
      if (performance.current) performance.current.textContent = String(Math.round(progress * 98));
      if (responsive.current) responsive.current.textContent = String(Math.round(progress * 100));
      circle.current?.setAttribute("stroke-dashoffset", String(100 - progress * 98));
    };
    const finish = () => {
      if (!reduced.matches) return;
      animation?.stop();
      update(1);
      element.dataset.motion = "complete";
      started = true;
    };
    finish();
    const observer = new IntersectionObserver(entries => {
      if (!entries.some(entry => entry.isIntersecting) || started) return;
      started = true;
      observer.disconnect();
      element.dataset.motion = "running";
      update(0);
      animation = animate(0, 1, {
        duration: 1.25, delay: .45, ease: [.22, 1, .36, 1], onUpdate: update,
        onComplete: () => { element.dataset.motion = "complete"; },
      });
    }, { threshold: .2 });
    observer.observe(element);
    reduced.addEventListener("change", finish);
    return () => { observer.disconnect(); animation?.stop(); reduced.removeEventListener("change", finish); };
  }, []);

  return <div ref={ref} className="hero-metrics" aria-label="Illustrative website quality targets">
    <div className="hero-signal hero-signal-performance">
      <div className="hero-signal-inner">
        <div className="hero-performance-ring" aria-hidden="true">
          <svg viewBox="0 0 64 64"><circle className="hero-ring-track" cx="32" cy="32" r="27"/><circle ref={circle} className="hero-ring-progress" cx="32" cy="32" r="27" pathLength="100" strokeDasharray="100" strokeDashoffset="100"/></svg>
          <span ref={performance} className="hero-count-animated" data-metric="performance">0</span><span className="hero-count-static">98</span>
        </div>
        <div><span>Performance</span><strong>Optimized</strong><span className="sr-only">Target score: 98 out of 100.</span></div>
      </div>
    </div>
    <div className="hero-signal hero-signal-security">
      <div className="hero-signal-inner">
        <span className="hero-ssl-mark"><Image src="/proguard-mark.svg" alt="" loading="eager" width={32} height={32}/><svg viewBox="0 0 16 16" aria-hidden="true"><path d="m3 8 3 3 7-7" pathLength="1"/></svg></span>
        <div><span>SSL connection</span><strong className="hero-ssl-text">Secured <span aria-hidden="true">✓</span></strong></div>
      </div>
    </div>
    <div className="hero-signal hero-signal-responsive">
      <div className="hero-signal-inner">
        <span className="hero-responsive-icon"><MonitorSmartphone aria-hidden="true"/></span>
        <div><span>Responsive</span><strong className="hero-responsive-value" aria-hidden="true"><span ref={responsive} className="hero-count-animated" data-metric="responsive">0</span><span className="hero-count-static">100</span><span>%</span></strong><span className="sr-only">Target: 100 percent responsive.</span></div>
      </div>
    </div>
    <noscript><style>{`.hero-showcase .hero-browser-entrance,.hero-metrics .hero-signal{opacity:1!important}.hero-count-animated{display:none!important}.hero-count-static{display:inline!important}.hero-ring-progress{stroke-dashoffset:2!important}.hero-ssl-text,.hero-ssl-mark{opacity:1!important}.hero-ssl-mark path{stroke-dashoffset:0!important}`}</style></noscript>
  </div>;
}
