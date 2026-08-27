"use client";

import { motion } from "framer-motion";
import { LucideIcon, ArrowUpRight } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  index,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      className="group relative overflow-hidden rounded-3xl border border-cyan-500/10 bg-white/[0.04] p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 via-cyan-400/0 to-cyan-400/0 transition-all duration-500 group-hover:from-cyan-400/10 group-hover:to-blue-500/10" />

      {/* Icon */}
      <div className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300 transition-all duration-300 group-hover:bg-cyan-500/20">
<Icon className="h-7 w-7" />      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="mb-3 text-xl font-bold text-white">
          {title}
        </h3>

        <p className="leading-7 text-zinc-400">
          {description}
        </p>
      </div>

      {/* Arrow */}
      <motion.div
        whileHover={{ x: 4, y: -4 }}
        className="relative z-10 mt-8 flex justify-end"
      >
        <ArrowUpRight className="h-5 w-5 text-cyan-300 opacity-60 transition group-hover:opacity-100" />
      </motion.div>
    </motion.div>
  );
}