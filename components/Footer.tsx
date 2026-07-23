"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Shield,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Globe,
  AtSign,
  Send,
} from "lucide-react";

const quickLinks = [
  {
    title: "Home",
    href: "#home",
  },
  {
    title: "Services",
    href: "#services",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

const services = [
  "Website Development",
  "SSL Certificates",
  "Cloud Hosting",
  "Cyber Security",
];

const socialLinks = [
  {
    icon: Globe,
    href: "#",
  },
  {
    icon: AtSign,
    href: "#",
  },
  {
    icon: Send,
    href: "#",
  },
];

const containerVariants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 1,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-zinc-950 text-white">

      {/* Aurora Background */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.06),transparent_60%)]" />

      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative mx-auto max-w-7xl px-6 py-20"
      >

        <div className="grid gap-14 lg:grid-cols-4">
                    {/* Brand */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-1"
          >
            {/* Logo */}
            <Link
              href="/"
              className="inline-flex items-center gap-4"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(6,182,212,.25)]">
                <Shield className="h-7 w-7 text-cyan-300" />
              </div>

              <span className="text-4xl font-black tracking-tight">
                <span className="text-white">
                  Web
                </span>

                <span className="bg-gradient-to-r from-cyan-300 to-sky-400 bg-clip-text text-transparent">
                  Secur
                </span>
              </span>
            </Link>

            {/* Description */}
            <p className="mt-7 max-w-sm text-[15px] leading-7 text-zinc-400">
              We build premium websites, secure online
              experiences, SSL protection and cloud hosting
              solutions for businesses that value performance,
              reliability and security.
            </p>

            {/* Social */}
            <div className="mt-8 flex items-center gap-4">

              {socialLinks.map(({ icon: Icon, href }, index) => (

                <motion.a
                  key={index}
                  href={href}
                  whileHover={{
                    y: -4,
                    scale: 1.08,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-zinc-300 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-cyan-300"
                >
                  <Icon className="h-5 w-5" />
                </motion.a>

              ))}

            </div>

          </motion.div>
                    {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="mb-6 text-lg font-bold text-white">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-zinc-400 transition-all duration-300 hover:text-cyan-300"
                  >
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />

                    <span>
                      {link.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="mb-6 text-lg font-bold text-white">
              Services
            </h3>

            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <div className="group inline-flex items-center gap-2 cursor-default text-zinc-400 transition-all duration-300 hover:text-cyan-300">
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />

                    <span>
                      {service}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
                    {/* Contact */}
          <motion.div variants={itemVariants}>
            <h3 className="mb-6 text-lg font-bold text-white">
              Contact
            </h3>

            <div className="space-y-4">

              {/* Email */}
              <motion.a
                whileHover={{ x: 4 }}
                href="mailto:contact@websecur.ma"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-300 transition-all duration-300 group-hover:scale-110">
                  <Mail className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wide text-zinc-500">
                    Email
                  </p>

                  <p className="text-sm text-zinc-300">
                    contact@websecur.ma
                  </p>
                </div>
              </motion.a>

              {/* Phone */}
              <motion.a
                whileHover={{ x: 4 }}
                href="tel:+212600000000"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-300 transition-all duration-300 group-hover:scale-110">
                  <Phone className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wide text-zinc-500">
                    Phone
                  </p>

                  <p className="text-sm text-zinc-300">
                    +212 6 XX XX XX XX
                  </p>
                </div>
              </motion.a>

              {/* Location */}
              <motion.div
                whileHover={{ x: 4 }}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-300 transition-all duration-300 group-hover:scale-110">
                  <MapPin className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wide text-zinc-500">
                    Location
                  </p>

                  <p className="text-sm text-zinc-300">
                    Casablanca, Morocco
                  </p>
                </div>
              </motion.div>

            </div>

            {/* CTA */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group mt-8 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 px-6 py-3.5 font-semibold text-white shadow-[0_15px_40px_rgba(6,182,212,.35)] transition-all duration-300 hover:shadow-[0_25px_60px_rgba(6,182,212,.45)]"
            >
              Get Started

              <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </motion.a>

          </motion.div>
                  </div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-sm text-zinc-400 md:flex-row"
        >
          {/* Copyright */}
          <p className="text-center md:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-white">
              Web
              <span className="bg-gradient-to-r from-cyan-300 to-sky-400 bg-clip-text text-transparent">
                Secur
              </span>
            </span>
            . All rights reserved.
          </p>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link
              href="/privacy"
              className="transition-colors duration-300 hover:text-cyan-300"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition-colors duration-300 hover:text-cyan-300"
            >
              Terms of Service
            </Link>

            <Link
              href="/cookies"
              className="transition-colors duration-300 hover:text-cyan-300"
            >
              Cookie Policy
            </Link>
          </div>
        </motion.div>
                {/* Back To Top */}
        <motion.button
          type="button"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          whileHover={{
            y: -5,
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-white/10 text-cyan-300 shadow-[0_15px_40px_rgba(6,182,212,.25)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:shadow-[0_20px_50px_rgba(6,182,212,.4)]"
          aria-label="Back to top"
        >
          <ArrowUpRight className="-rotate-45 h-6 w-6" />
        </motion.button>

      </motion.div>
    </footer>
  );
}
