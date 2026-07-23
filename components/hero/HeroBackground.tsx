"use client";

export default function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-[#020617]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(34,211,238,0.13),transparent_30%),radial-gradient(circle_at_78%_20%,rgba(59,130,246,0.16),transparent_28%),linear-gradient(180deg,rgba(2,6,23,0.1),#020617_84%)]" />
      <div className="absolute left-1/2 top-0 h-px w-[88%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300/35 to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.08]" />
      <div className="absolute -left-32 top-24 h-80 w-80 rounded-full bg-cyan-400/10 blur-[120px]" />
      <div className="absolute -right-20 top-20 h-96 w-96 rounded-full bg-blue-500/10 blur-[140px]" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-zinc-950" />
    </div>
  );
}
