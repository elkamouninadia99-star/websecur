"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-[#020617]">

      {/* Animated Aurora */}
      <motion.div
        animate={{
          backgroundPosition: [
            "0% 50%",
            "100% 50%",
            "0% 50%",
          ],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 opacity-90"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 25%, rgba(34,211,238,.16), transparent 30%),
            radial-gradient(circle at 80% 18%, rgba(59,130,246,.18), transparent 30%),
            radial-gradient(circle at 55% 80%, rgba(14,165,233,.10), transparent 28%)
          `,
          backgroundSize: "180% 180%",
        }}
      />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.08]" />

      {/* Top Light Line */}
      <div className="absolute left-1/2 top-0 h-px w-[88%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />

      {/* Left Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.18, 0.28, 0.18],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-cyan-400/15 blur-[170px]"
      />

      {/* Right Glow */}
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-32 top-16 h-[480px] w-[480px] rounded-full bg-blue-500/15 blur-[180px]"
      />

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-zinc-950" />
    </div>
  );
}