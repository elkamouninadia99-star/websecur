"use client";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, LockKeyhole, ShieldCheck, Zap } from "lucide-react";

const proof = ["SSL-ready", "Secure hosting", "Continuous support"];
export default function Hero() {
  return <section id="home" className="site-grid relative isolate min-h-[650px] overflow-hidden bg-[#07111f] px-6 pb-12 pt-28 sm:px-8 lg:min-h-[720px] lg:pt-32"><div className="absolute left-[12%] top-20 -z-10 size-[26rem] rounded-full bg-cyan-400/10 blur-[120px]"/><div className="absolute right-[6%] top-20 -z-10 size-[30rem] rounded-full bg-blue-500/10 blur-[140px]"/>
    <div className="container grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-12"><motion.div initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.5}}>
      <div className="eyebrow"><ShieldCheck className="size-3.5"/> Secure digital foundations</div>
      <h1 className="mt-5 max-w-2xl text-balance text-4xl font-bold leading-[1.03] tracking-[-.055em] text-white sm:text-5xl lg:text-[3.5rem]">Websites that move your business forward — <span className="text-cyan-300">securely.</span></h1>
      <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-slate-300 sm:text-lg">WebSecur designs high-performing websites, protects every connection, and keeps your online infrastructure dependable.</p>
      <div className="mt-7 flex flex-col gap-3 sm:flex-row"><a href="#contact" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-cyan-300 px-5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200">Start a secure project <ArrowRight className="size-4"/></a><a href="#services" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/5 px-5 text-sm font-semibold text-white transition hover:bg-white/10">Explore services <LockKeyhole className="size-4"/></a></div>
      <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">{proof.map(item => <span key={item} className="inline-flex items-center gap-1.5 text-xs text-slate-300"><CheckCircle2 className="size-3.5 text-cyan-300"/>{item}</span>)}</div>
    </motion.div>
    <motion.div initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} transition={{duration:.65,delay:.1}} className="relative mx-auto w-full max-w-md">
      <div className="surface relative overflow-hidden rounded-3xl p-4 sm:p-5">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/70 to-transparent"/>
        <div className="flex items-center justify-between border-b border-white/10 pb-4"><span className="text-sm font-semibold">WebSecur Control</span><span className="inline-flex items-center gap-1 rounded-full bg-emerald-400/10 px-2 py-1 text-[10px] font-bold text-emerald-300"><span className="size-1.5 rounded-full bg-emerald-300"/> Protected</span></div>
        <div className="mt-5 grid grid-cols-2 gap-3"><div className="rounded-2xl border border-cyan-300/15 bg-cyan-300/[.07] p-4"><ShieldCheck className="size-6 text-cyan-200"/><p className="mt-6 text-xs text-slate-400">Connection</p><p className="mt-1 font-semibold text-white">SSL secured</p></div><div className="rounded-2xl border border-white/10 bg-white/[.035] p-4"><Zap className="size-6 text-blue-300"/><p className="mt-6 text-xs text-slate-400">Performance</p><p className="mt-1 font-semibold text-white">Optimized</p></div></div>
        <div className="mt-3 rounded-2xl border border-white/10 bg-white/[.035] p-4"><div className="flex items-center justify-between text-xs text-slate-400"><span>Infrastructure health</span><span className="text-cyan-200">99.9% uptime</span></div><div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-800"><div className="h-full w-[94%] rounded-full bg-gradient-to-r from-cyan-300 to-blue-400"/></div></div>
      </div>
    </motion.div>
    </div>
  </section>;
}
