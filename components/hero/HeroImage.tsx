import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="relative mx-auto flex w-full max-w-[260px] items-center justify-center sm:max-w-[360px] md:max-w-[430px] lg:max-w-[600px]">
      <div
        className="relative aspect-square w-full"
      >
        {/* Glow */}
        <div className="absolute inset-0 rounded-full bg-emerald-500/15 blur-[90px]" />

        <div className="absolute inset-8 rounded-full bg-white/5 blur-[90px]" />

        {/* Ring */}
        <div className="absolute inset-5 rounded-full border border-white/10" />

        {/* Image */}
        <Image
          src="/Image/cyber-shield.png"
          alt="Cyber Shield"
          fill
          priority
          className="object-contain drop-shadow-[0_0_70px_rgba(16,185,129,.35)]"
        />

        {/* Card 1 */}
        <div
          className="absolute left-0 top-8 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
            Security
          </p>

          <p className="mt-1 text-lg font-bold text-emerald-400">
            SSL Secured
          </p>
        </div>

        {/* Card 2 */}
        <div
          className="absolute bottom-8 right-0 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
            Performance
          </p>

          <p className="mt-1 text-lg font-bold text-white">
            99.9% Uptime
          </p>
        </div>

        {/* Floating Badge */}
        <div
          className="absolute right-10 top-1/2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 backdrop-blur-xl"
        >
          <span className="text-sm font-semibold text-emerald-300">
            Trusted
          </span>
        </div>
      </div>
    </div>
  );
}
