"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Globe,
  LockKeyhole,
  Zap,
} from "lucide-react";

const cards = [
  {
    title: "SSL Certificate",
    subtitle: "256-bit Encryption",
    icon: ShieldCheck,
    position: "top-3 left-2",
    delay: 0,
  },
  {
    title: "Secure Hosting",
    subtitle: "Cloud Ready",
    icon: Globe,
    position: "top-14 right-2",
    delay: 0.2,
  },
  {
    title: "Website Security",
    subtitle: "Protected",
    icon: LockKeyhole,
    position: "bottom-14 left-2",
    delay: 0.4,
  },
  {
    title: "Fast Performance",
    subtitle: "Optimized",
    icon: Zap,
    position: "bottom-3 right-2",
    delay: 0.6,
  },
];

export default function HeroImage() {
  return (
    <div className="relative mx-auto flex h-[430px] w-full max-w-[470px] items-center justify-center lg:h-[470px] lg:max-w-[500px]">

      {/* Premium Background Glow */}

      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.22, 0.35, 0.22],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 -z-20 rounded-full blur-[70px]"
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,.18), transparent 70%)",
        }}
      />

      {/* Main Glow */}

      <motion.div
        animate={{
          scale: [1, 1.06, 1],
          opacity: [0.14, 0.24, 0.14],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-[340px] w-[340px] rounded-full bg-cyan-500/10 blur-[110px] lg:h-[380px] lg:w-[380px]"
      />

      {/* Secondary Glow */}

      <motion.div
        animate={{
          scale: [1.04, 0.96, 1.04],
          opacity: [0.10, 0.18, 0.10],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-[250px] w-[250px] rounded-full bg-blue-500/10 blur-[90px] lg:h-[300px] lg:w-[300px]"
      />

      {/* Outer Ring */}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[330px] w-[330px] rounded-full border border-cyan-400/10 lg:h-[370px] lg:w-[370px]"
      />

      {/* Inner Ring */}

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[260px] w-[260px] rounded-full border border-blue-400/10 lg:h-[290px] lg:w-[290px]"
      />

      {/* Floating Cards + Shield */}
            {/* Floating Cards */}

      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <motion.div
            key={card.title}
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -6, 0],
            }}
            transition={{
              opacity: {
                duration: 0.6,
                delay: card.delay,
              },
              scale: {
                duration: 0.6,
                delay: card.delay,
              },
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: card.delay,
              },
            }}
            whileHover={{
              scale: 1.04,
              y: -5,
            }}
            className={`absolute z-30 ${card.position}`}
          >
            <div className="flex items-center gap-3 rounded-2xl border border-cyan-400/20 bg-white/[0.05] px-3 py-2 backdrop-blur-xl shadow-[0_18px_40px_rgba(0,0,0,.30)] transition-all duration-300 hover:border-cyan-300/40 hover:bg-white/[0.08]">

              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/15">
                <Icon className="h-4 w-4 text-cyan-300" />
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white">
                  {card.title}
                </h3>

                <p className="text-[11px] text-zinc-400">
                  {card.subtitle}
                </p>
              </div>

            </div>
          </motion.div>
        );
      })}

      {/* Main Shield */}

      <motion.img
        src="/Image/cyber-shield.png"
        alt="WebSecur Shield"
        draggable={false}
        animate={{
          y: [0, -8, 0],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          relative
          z-20
          h-[250px]
          w-[250px]
          select-none
          object-contain
          drop-shadow-[0_0_35px_rgba(34,211,238,.22)]
          lg:h-[300px]
          lg:w-[300px]
        "
      />

    </div>
  );
}