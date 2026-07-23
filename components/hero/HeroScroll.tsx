"use client";

import { motion } from "framer-motion";

export default function HeroScroll() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:flex"
    >
      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex h-14 w-8 items-start justify-center rounded-full border border-white/10 bg-white/5 p-2 backdrop-blur-xl"
      >
        <div className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,.8)]" />
      </motion.div>
    </motion.div>
  );
}