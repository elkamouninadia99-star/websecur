"use client";

import { Shield } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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

  return <><div ref={glowRef} className="cursor-glow" aria-hidden="true" />{visible && <div className="site-loader" aria-label="Loading ProGuard Web"><div className="site-loader-mark"><Shield className="size-5" /></div><span>ProGuard <span>Web</span></span></div>}</>;
}
