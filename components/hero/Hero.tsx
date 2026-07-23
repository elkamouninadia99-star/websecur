"use client";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const stats = [
  { value: "99.9%", label: "Uptime-focused hosting" },
  { value: "HTTPS", label: "Secure by default" },
  { value: "24/7", label: "Monitoring ready" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] overflow-hidden bg-[#020617] px-6 pb-10 pt-24 text-white sm:px-8 sm:pb-12 sm:pt-28 lg:px-10 lg:pb-14 lg:pt-24"
    >
      <HeroBackground />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.04fr)_minmax(390px,0.82fr)] xl:gap-16">
          <HeroContent />
          <HeroImage />
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-3 lg:mt-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg border border-white/10 bg-white/[0.035] px-5 py-4 shadow-[0_18px_55px_rgba(0,0,0,0.18)] backdrop-blur-xl"
            >
              <div className="text-2xl font-black leading-none text-white sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm font-medium text-zinc-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
