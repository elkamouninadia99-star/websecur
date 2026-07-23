"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, Shield, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const { scrollY } = useScroll();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter(
        (section): section is HTMLElement => section instanceof HTMLElement
      );

    const updateActiveLink = () => {
      const current = sections.findLast(
        (section) => section.getBoundingClientRect().top <= 120
      );

      setActiveLink(current ? `#${current.id}` : "#home");
    };

    updateActiveLink();

    window.addEventListener("scroll", updateActiveLink, { passive: true });
    window.addEventListener("resize", updateActiveLink);

    return () => {
      window.removeEventListener("scroll", updateActiveLink);
      window.removeEventListener("resize", updateActiveLink);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        isScrolled || isOpen
          ? "border-b border-white/10 bg-[#050816]/75 backdrop-blur-2xl shadow-[0_18px_60px_rgba(0,0,0,.35)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 lg:px-10">

        <a href="#home" className="flex items-center gap-3">

          <span className="grid h-11 w-11 place-items-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 shadow-[0_0_25px_rgba(34,211,238,.2)]">
            <Shield className="h-6 w-6 text-cyan-300" />
          </span>

          <span className="text-xl font-extrabold tracking-wide text-white">
            Web<span className="text-cyan-300">Secur</span>
          </span>

        </a>
                {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => {
            const isActive = activeLink === link.href;

            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`group relative text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "text-cyan-300"
                    : "text-zinc-200 hover:text-cyan-300"
                }`}
              >
                {link.label}

                <span
                  className={`absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-cyan-300 transition-all duration-300 ${
                    isActive
                      ? "scale-x-100 opacity-100"
                      : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                  }`}
                />
              </a>
            );
          })}

          <a
            href="#contact"
            className="rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(34,211,238,.35)]"
          >
            Start Project
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
        >
          {isOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>

      </div>
            {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed left-4 right-4 top-20 z-40 rounded-2xl border border-white/10 bg-[#0b1220]/95 p-4 shadow-2xl backdrop-blur-2xl lg:hidden">

          <div className="flex flex-col gap-2">

            {links.map((link) => {
              const isActive = activeLink === link.href;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-cyan-400/10 text-cyan-300"
                      : "text-zinc-200 hover:bg-white/5 hover:text-cyan-300"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 text-center text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02]"
            >
              Start Project
            </a>

          </div>
        </div>
      )}
    </motion.nav>
  );
}
