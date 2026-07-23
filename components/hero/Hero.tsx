"use client";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroScroll from "./HeroScroll";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] overflow-hidden px-6 py-24 text-white sm:px-8 lg:px-10"
    >
      <HeroBackground />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
        <HeroContent />
        <HeroImage />
      </div>

      <HeroScroll />
    </section>
  );
}
