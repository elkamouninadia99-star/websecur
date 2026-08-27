import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const projectTags = ["Web Design", "Development", "Responsive"];

export default function Work() {
  return (
    <section id="work" className="section">
      <div className="container">
        <div className="grid gap-5 md:grid-cols-[.8fr_1.2fr] md:items-end">
          <div>
            <span className="eyebrow">Selected work</span>
            <h2 className="section-title">Websites built to make businesses stand out.</h2>
          </div>
          <p className="section-copy md:justify-self-end">
            A selection of modern, conversion-focused websites designed for real-world businesses.
          </p>
        </div>

        <article className="surface premium-card mt-9 overflow-hidden rounded-3xl p-3 sm:p-5 lg:p-6">
          <div className="grid gap-7 lg:grid-cols-[1.25fr_.75fr] lg:items-center lg:gap-9">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 shadow-[0_20px_45px_rgba(0,0,0,.28)]">
              <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[.035] px-4 py-3" aria-hidden="true">
                <span className="size-2 rounded-full bg-rose-300/70" />
                <span className="size-2 rounded-full bg-amber-200/70" />
                <span className="size-2 rounded-full bg-emerald-300/70" />
                <span className="ml-3 h-5 flex-1 rounded-md border border-white/8 bg-slate-950/50" />
              </div>
              <Image
                src="/Image/everpeak-roofing-preview.png"
                alt="EverPeak Roofing website homepage preview"
                width={1901}
                height={900}
                sizes="(min-width: 1024px) 720px, (min-width: 640px) 640px, 100vw"
                className="h-auto w-full"
              />
            </div>

            <div className="px-2 pb-2 sm:px-3 lg:px-0 lg:pb-0">
              <p className="text-sm font-medium text-cyan-200">Roofing Website / Web Design &amp; Development</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">EverPeak Roofing</h3>
              <p className="mt-4 max-w-md text-sm leading-7 text-slate-300 sm:text-base">
                A premium roofing website built to establish trust, showcase services, and turn visitors into qualified leads.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {projectTags.map((tag) => (
                  <span key={tag} className="rounded-full border border-cyan-200/15 bg-cyan-300/[.06] px-3 py-1.5 text-xs font-medium text-slate-200">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="https://everpeak-roofing.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-xl bg-cyan-300 px-5 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-200 hover:shadow-[0_12px_28px_rgba(34,211,238,.18)]"
              >
                View Live Site <ExternalLink className="size-4" aria-hidden="true" />
              </a>
              <div className="mt-7 flex items-center gap-2 text-xs text-slate-500">
                <ArrowUpRight className="size-3.5 text-cyan-200" aria-hidden="true" /> Portfolio project · USA market
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
