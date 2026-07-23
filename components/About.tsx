"use client";

import { motion } from "framer-motion";
import { Activity, Fingerprint, Radar, Shield } from "lucide-react";

const capabilities = [
  "Secure-by-default product architecture",
  "Performance-led frontend engineering",
  "Clear reports for founders and technical teams",
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-black px-6 py-24 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_45%,rgba(6,182,212,0.16),transparent_32%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 1, x: -34 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.35 }}
          className="relative mx-auto w-full max-w-[520px]"
        >
          <div className="absolute inset-8 rounded-full bg-cyan-400/15 blur-3xl" />
          <div className="relative rounded-lg border border-white/10 bg-zinc-950/80 p-6 shadow-[0_0_70px_rgba(6,182,212,0.12)] backdrop-blur">
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-cyan-300/10 text-cyan-300">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">WebSecur OS</p>
                  <p className="text-xs text-zinc-500">Live defense layer</p>
                </div>
              </div>
              <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300">
                Protected
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: Radar, label: "Threat Scan", value: "98%" },
                { icon: Fingerprint, label: "Identity Guard", value: "24/7" },
                { icon: Activity, label: "Response Time", value: "0.8s" },
                { icon: Shield, label: "Risk Level", value: "Low" },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.label} className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                    <Icon className="mb-5 h-5 w-5 text-cyan-300" />
                    <p className="text-sm text-zinc-500">{item.label}</p>
                    <p className="mt-1 text-2xl font-black text-white">{item.value}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 1, x: 34 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.35 }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            About WebSecur
          </p>
          <h2 className="mt-4 text-4xl font-black leading-tight text-white sm:text-5xl">
            We build digital products with security in their foundation.
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            WebSecur blends frontend craft with practical cybersecurity. We help
            businesses ship fast, polished websites and protect the systems
            behind them with focused audits, modern infrastructure, and clean
            implementation.
          </p>
          <div className="mt-8 grid gap-4">
            {capabilities.map((capability) => (
              <div
                key={capability}
                className="rounded-lg border border-white/10 bg-white/[0.035] p-4 text-zinc-200"
              >
                {capability}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
