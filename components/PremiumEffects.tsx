"use client";

import { Shield } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const particles = Array.from({ length: 36 }, (_, index) => ({
  left: `${(index * 37 + 11) % 100}%`,
  top: `${(index * 53 + 7) % 100}%`,
  delay: `${-(index % 7) * 2.3}s`,
  duration: `${18 + (index % 5) * 3}s`,
  opacity: 0.15 + (index % 4) * 0.04,
}));

export default function PremiumEffects() {
  const glowRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const moveGlow = (event: PointerEvent) => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      }
    };
    window.addEventListener("pointermove", moveGlow, { passive: true });
    const timer = window.setTimeout(() => setVisible(false), 700);
    return () => {
      window.removeEventListener("pointermove", moveGlow);
      window.clearTimeout(timer);
    };
  }, []);

  return <><div className="ambient-background" aria-hidden="true"><div className="ambient-particles">{particles.map((particle, index) => <span key={index} className="ambient-particle" style={{ left: particle.left, top: particle.top, opacity: particle.opacity, animationDelay: particle.delay, animationDuration: particle.duration }} />)}</div></div><div ref={glowRef} className="cursor-glow" aria-hidden="true" />{visible && <div className="site-loader" aria-label="Loading ProGuard Web"><div className="site-loader-mark"><Shield className="size-5" /></div><span>ProGuard <span>Web</span></span></div>}</>;
}
