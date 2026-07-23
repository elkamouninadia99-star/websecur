"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Cloud,
  Code2,
  ShieldCheck,
  Zap,
} from "lucide-react";const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Modern, responsive websites built for speed, SEO, and converting visitors into customers.",
    points: [
      "Responsive Design",
      "Next.js Development",
      "SEO Ready",
    ],
  },
  {
    icon: ShieldCheck,
    title: "SSL & Security",
    description:
      "Protect your website with SSL certificates, HTTPS encryption, and advanced security hardening.",
    points: [
      "SSL Installation",
      "HTTPS Encryption",
      "Security Hardening",
    ],
  },
  {
    icon: Cloud,
    title: "Hosting & Cloud",
    description:
      "Reliable cloud hosting, deployment, backups, monitoring, and maintenance for maximum uptime.",
    points: [
      "Cloud Hosting",
      "Automatic Backups",
      "24/7 Monitoring",
    ],
  },
];
export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-zinc-950 px-6 py-24 sm:py-28"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,145,178,0.08),transparent_45%)]" />
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 1, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200">
            <Zap className="h-4 w-4" />
Premium Web & Security Solutions          </div>
          <h2 className="text-4xl font-black sm:text-5xl">
  <span className="text-white">
    Web Development &
  </span>{" "}
  <span className="bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">
    SSL Security
  </span>
</h2>
          <p className="mt-5 text-base leading-8 text-zinc-400 sm:text-lg">
           We build high-performance websites, secure them with professional SSL
protection, and keep them running on reliable cloud infrastructure.
          </p>
        </motion.div>

        <div className="mt-16 grid items-stretch gap-6 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 1, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -12, scale: 1.01 }}
                transition={{ duration: 0.55, delay: index * 0.12, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.35 }}
                className="group relative flex h-full min-h-[330px] overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] p-[1px] shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl transition duration-500 hover:border-cyan-300/35 hover:shadow-[0_24px_80px_rgba(6,182,212,0.18)]"
              >
                <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(103,232,249,0.34),transparent)] opacity-0 blur-xl transition duration-500 group-hover:opacity-100" />
                <div className="absolute inset-px rounded-lg bg-gradient-to-b from-white/[0.08] to-white/[0.025]" />
                <div className="relative flex h-full w-full flex-col rounded-lg bg-zinc-950/70 p-7 ring-1 ring-white/10 transition duration-500 group-hover:bg-zinc-950/55 group-hover:ring-cyan-300/25 sm:p-8">
                  <div className="mb-8 flex items-center justify-between">
                    <motion.div
                      whileHover={{ rotate: -6, scale: 1.08 }}
                      transition={{ type: "spring", stiffness: 320, damping: 16 }}
                      className="grid h-16 w-16 place-items-center rounded-lg border border-cyan-300/20 bg-cyan-300/10 text-cyan-300 shadow-[0_0_30px_rgba(6,182,212,0.14)] transition duration-500 group-hover:border-cyan-200/45 group-hover:bg-cyan-300/15 group-hover:shadow-[0_0_38px_rgba(6,182,212,0.28)]"
                    >
                      <Icon className="h-7 w-7 transition duration-500 group-hover:scale-110" />
                    </motion.div>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-bold text-zinc-400 transition duration-300 group-hover:border-cyan-300/20 group-hover:text-cyan-200">
                      0{index + 1}
                    </span>
                  </div>

                 <h3 className="text-2xl font-black leading-tight text-white">
  {service.title}
</h3>

<p className="mt-4 flex-1 text-base leading-7 text-zinc-400">
  {service.description}
</p>

<div className="mt-8 space-y-3 border-t border-white/10 pt-6">
  {service.points.map((point) => (
    <div
      key={point}
      className="flex items-center gap-3 text-sm font-medium text-zinc-300"
    >
      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-cyan-300/10 text-cyan-300 transition duration-300 group-hover:bg-cyan-300/15">
        <CheckCircle2 className="h-4 w-4" />
      </span>

      <span>{point}</span>
    </div>
  ))}
</div>

<button className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200">
  Learn More →
</button>

</div>
</motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
