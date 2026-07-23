"use client";

import { motion } from "framer-motion";
import { Headset, ShieldCheck, Zap } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description:
      "SSL certificates, HTTPS encryption, firewall configuration, and security best practices.",
  },
  {
    icon: Zap,
    title: "High Performance",
    description:
      "Lightning-fast websites optimized for SEO, Core Web Vitals, and excellent user experience.",
  },
  {
    icon: Headset,
    title: "Dedicated Support",
    description:
      "Continuous maintenance, updates, monitoring, and technical support whenever you need it.",
  },
];

export default function WhyChooseUs() {
  return (
    <motion.section
      className="relative overflow-hidden bg-zinc-950 px-6 py-24 text-center"
      initial={{ opacity: 1, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,145,178,0.08),transparent_45%)]" />
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-5 py-2 text-sm font-semibold text-cyan-200 backdrop-blur-xl">
          Why Choose WebSecur
        </div>

        <h2 className="text-4xl font-black text-white lg:text-6xl">
          Why Businesses Trust Us
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
          We combine modern web development with professional security
          practices to build fast, secure and reliable websites that help
          businesses grow with confidence.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 1, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  y: -15,
                  scale: 1.04,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-white/[0.03] p-[1px] backdrop-blur-xl shadow-[0_15px_60px_rgba(0,0,0,.35)]"
              >
                <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(103,232,249,.30),transparent)] opacity-0 blur-xl transition duration-700 group-hover:opacity-100" />

                <div className="relative flex min-h-[290px] flex-col items-center rounded-2xl bg-gradient-to-b from-zinc-900/90 to-black/90 p-8 ring-1 ring-white/10 transition duration-500 group-hover:ring-cyan-300/25">
                  <motion.div
                    whileHover={{ rotate: -8, scale: 1.12 }}
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 16,
                    }}
                    className="grid h-20 w-20 place-items-center rounded-2xl border border-cyan-400/25 bg-cyan-400/10 text-cyan-300 shadow-[0_0_35px_rgba(6,182,212,.20)] transition duration-500 group-hover:border-cyan-200/40 group-hover:bg-cyan-300/15 group-hover:shadow-[0_0_55px_rgba(6,182,212,.35)]"
                  >
                    <Icon className="h-9 w-9 transition duration-500 group-hover:scale-110" />
                  </motion.div>
                                      <h3 className="mt-8 text-3xl font-bold text-white transition duration-300 group-hover:text-cyan-300">
                      {feature.title}
                    </h3>

                    <p className="mt-5 flex-1 text-base leading-7 text-zinc-400">
                      {feature.description}
                    </p>

                    <motion.button
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.97 }}
                      className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300 transition duration-300 hover:text-cyan-200"
                    >
                      Explore Service
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </motion.button>
                  </div>
                </motion.article>
              );
            })}
        </div>
      </div>

      {/* Bottom Glow */}
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[160px]" />
    </motion.section>
  );
}
