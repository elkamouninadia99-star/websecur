"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";

const trustItems = [
  "SSL Hardening",
  "Cloud Deployment",
  "24/7 Monitoring",
];

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex w-full max-w-[650px] flex-col items-center text-center lg:items-start lg:text-left"
    >
      {/* Badge */}

      <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold text-cyan-200 backdrop-blur-xl shadow-[0_0_30px_rgba(34,211,238,.12)] sm:text-sm">
        <ShieldCheck className="h-4 w-4" />

        Secure Websites • SSL • Cloud Hosting
      </div>

      {/* Heading */}

      <h1 className="mt-5 max-w-[650px] text-balance text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.4rem] xl:text-[3.8rem]">
        Launch Faster Websites
        <br />

        <span className="bg-gradient-to-r from-cyan-200 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
          with Security Built In
        </span>
      </h1>

      {/* Description */}

      <p className="mt-4 max-w-[580px] text-base leading-7 text-zinc-300 sm:text-lg">
        WebSecur helps businesses launch modern websites with enterprise-grade
        security, SSL certificates, cloud infrastructure and continuous
        monitoring to keep every project fast, reliable and protected.
      </p>

      {/* Buttons */}

      <div className="mt-6 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
        <a
          href="#contact"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-sm font-bold text-white shadow-[0_18px_45px_rgba(6,182,212,.25)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_22px_60px_rgba(6,182,212,.35)]"
        >
          Start a Secure Project

          <ArrowRight className="h-4 w-4" />
        </a>

        <a
          href="#services"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-6 py-3 text-sm font-bold text-zinc-100 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.08]"
        >
          View Services

          <LockKeyhole className="h-4 w-4" />
        </a>
      </div>

      {/* Trust Badges */}

      <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
        {trustItems.map((item) => (
          <div
            key={item}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-zinc-300 backdrop-blur-xl"
          >
            <CheckCircle2 className="h-4 w-4 text-cyan-300" />

            {item}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
