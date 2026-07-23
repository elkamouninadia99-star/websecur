"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <h1 className="text-3xl font-bold text-cyan-400">
          WebSecur
        </h1>

        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#home" className="hover:text-cyan-400 transition">
            Home
          </a>

          <a href="#services" className="hover:text-cyan-400 transition">
            Services
          </a>

          <a href="#about" className="hover:text-cyan-400 transition">
            About
          </a>

          <a href="#contact" className="hover:text-cyan-400 transition">
            Contact
          </a>
        </div>

      </div>
    </nav>
  );
}