import Image from "next/image";
import { motion } from "framer-motion";
import { Activity, Cloud, LockKeyhole, ShieldCheck } from "lucide-react";

const cards = [
  {
    icon: LockKeyhole,
    title: "SSL Secured",
    meta: "Encrypted traffic",
    className: "-left-2 top-14 sm:left-0 lg:-left-6",
  },
  {
    icon: Activity,
    title: "Live Monitor",
    meta: "Monitored hosting",
    className: "bottom-12 -right-2 sm:right-0 lg:-right-3",
  },
  {
    icon: Cloud,
    title: "Cloud Ready",
    meta: "Fast deployment",
    className: "right-8 top-6 hidden sm:flex lg:right-3",
  },
];

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="relative mx-auto flex w-full max-w-[280px] items-center justify-center sm:max-w-[380px] md:max-w-[430px] lg:max-w-[455px] xl:max-w-[500px]"
    >
      <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-[110px]" />
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="relative aspect-square w-full"
      >
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.20),transparent_58%)] blur-[44px]" />
        <div className="absolute inset-5 rounded-full border border-cyan-300/15" />
        <div className="absolute inset-12 rounded-full border border-white/10" />
        <div className="absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.035] shadow-[inset_0_0_70px_rgba(255,255,255,0.04)] backdrop-blur-sm" />

        <Image
          src="/Image/cyber-shield.png"
          alt="Cyber shield protecting a secure website"
          fill
          priority
          sizes="(min-width: 1280px) 500px, (min-width: 1024px) 455px, (min-width: 640px) 380px, 280px"
          className="object-contain drop-shadow-[0_0_70px_rgba(34,211,238,0.28)]"
        />

        {cards.map((card, index) => {
          const Icon = card.icon;

          return (
            <motion.div
              key={card.title}
              animate={{ y: [0, index % 2 === 0 ? -6 : 6, 0] }}
              transition={{
                duration: 5 + index,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.3,
              }}
              className={`absolute ${card.className} flex items-center gap-3 rounded-lg border border-white/10 bg-[#07111f]/80 px-3 py-2.5 shadow-[0_18px_55px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:px-4 sm:py-3`}
            >
              <span className="grid h-9 w-9 place-items-center rounded-lg border border-cyan-300/20 bg-cyan-300/10 text-cyan-300 sm:h-10 sm:w-10">
                <Icon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs font-bold text-white sm:text-sm">
                  {card.title}
                </span>
                <span className="block text-[11px] font-medium text-zinc-400 sm:text-xs">
                  {card.meta}
                </span>
              </span>
            </motion.div>
          );
        })}

        <div className="absolute bottom-4 left-8 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-2 text-xs font-bold text-cyan-200 backdrop-blur-xl">
          <ShieldCheck className="h-4 w-4" aria-hidden="true" />
          Trusted
        </div>
      </motion.div>
    </motion.div>
  );
}
