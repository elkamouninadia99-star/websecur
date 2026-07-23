"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";

const trustItems = ["SSL hardening", "Cloud deployment", "24/7 monitoring"];

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="flex w-full max-w-[680px] flex-col items-center text-center lg:items-start lg:text-left"
    >
      <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-bold text-cyan-200 shadow-[0_0_34px_rgba(34,211,238,0.12)] backdrop-blur-xl sm:text-sm">
        <ShieldCheck className="h-4 w-4" aria-hidden="true" />
        Secure websites, hosting, and SSL
      </div>

      <h1 className="mt-6 max-w-[680px] text-balance text-4xl font-black leading-[1.08] tracking-normal text-white sm:text-5xl lg:text-[3.5rem] xl:text-[4rem]">
        Launch a faster website with{" "}
        <span className="bg-gradient-to-r from-cyan-200 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
          security built in
        </span>
      </h1>

      <p className="mt-5 max-w-[560px] text-base leading-8 text-zinc-300 sm:text-lg">
        WebSecur creates high-performance websites, configures professional SSL
        protection, and keeps your digital presence reliable on modern cloud
        infrastructure.
      </p>

      <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
        <a
          href="#contact"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 text-sm font-bold text-white shadow-[0_18px_48px_rgba(6,182,212,0.22)] transition duration-300 hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(6,182,212,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#020617]"
        >
          Start a Secure Project
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
        <a
          href="#services"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 text-sm font-bold text-zinc-100 backdrop-blur-xl transition duration-300 hover:border-cyan-300/30 hover:bg-white/[0.08] hover:text-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#020617]"
        >
          View Services
          <LockKeyhole className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>

      <div className="mt-7 flex flex-wrap justify-center gap-2.5 lg:justify-start">
        {trustItems.map((item) => (
          <div
            key={item}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 text-xs font-semibold text-zinc-300 backdrop-blur-xl"
          >
            <CheckCircle2 className="h-4 w-4 text-cyan-300" aria-hidden="true" />
            {item}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
