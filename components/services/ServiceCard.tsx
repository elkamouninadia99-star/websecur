"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  index,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      className="group relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-white/[0.04] p-7 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(34,211,238,.12)]"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 via-cyan-400/0 to-blue-500/0 transition-all duration-500 group-hover:from-cyan-400/10 group-hover:to-blue-500/10" />

      {/* Icon */}
      <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300 transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan-500/20">
        <Icon className="h-8 w-8" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="mb-3 text-2xl font-bold text-white">
          {title}
        </h3>

        <p className="leading-8 text-zinc-400">
          {description}
        </p>
      </div>

      {/* Footer */}
      <div className="relative z-10 mt-8 flex items-center justify-between">
        <span className="text-sm font-medium text-cyan-300">
          Learn More
        </span>

        <ArrowUpRight className="h-5 w-5 text-cyan-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
    </motion.div>
  );
}