"use client";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto mt-4 flex h-16 max-w-7xl items-center justify-between rounded-2xl border border-cyan-500/20 bg-slate-950/70 px-6 backdrop-blur-xl">
        <h1 className="text-2xl font-bold tracking-tight text-cyan-400">
          WebSecur
        </h1>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#home"
            className="text-zinc-300 transition hover:text-cyan-400"
          >
            Home
          </a>

          <a
            href="#services"
            className="text-zinc-300 transition hover:text-cyan-400"
          >
            Services
          </a>

          <a
            href="#about"
            className="text-zinc-300 transition hover:text-cyan-400"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-zinc-300 transition hover:text-cyan-400"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}