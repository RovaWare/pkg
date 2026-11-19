import { ArrowUpRight, Check } from "lucide-react";
import Reveal from "./Reveal";
import { SERVICES, photoById } from "@/data/events";
import { cn } from "@/utils/cn";

export default function Services({ onOpenPhoto }: { onOpenPhoto: (id: string) => void }) {
  return (
    <section id="services" className="bg-[#0e1b2e] py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-[#e8c766]">
                <span className="h-px w-10 bg-[#e8c766]" /> Celebration Services
              </p>
              <h2 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl">
                Four ways we <span className="gold-text italic">transform</span> a celebration
              </h2>
              <p className="mt-4 leading-relaxed text-white/70">
                Each service below is illustrated with the exact photograph from our own setup — tap any
                image to view it full-screen.
              </p>
            </div>
            <a href="#gallery" className="hidden items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-bold transition hover:bg-white hover:text-[#0e1b2e] sm:flex">
              Browse all photos <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {SERVICES.map((service, i) => {
            const photo = photoById(service.photoId);
            return (
              <Reveal key={service.id} delay={i * 110}>
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white/[0.06] ring-1 ring-white/10 transition hover:bg-white/[0.09] hover:ring-[#c9a227]/50">
                  <button
                    onClick={() => onOpenPhoto(photo.id)}
                    className="relative block overflow-hidden text-left"
                    aria-label={`View full-screen: ${photo.title}`}
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      className="img-zoom aspect-[4/3] w-full object-cover"
                      style={{ objectPosition: photo.objectPosition }}
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-black/55 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#e8c766] backdrop-blur">
                      {photo.category}
                    </span>
                    <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#c9a227] text-[#0e1b2e] opacity-0 shadow-lg transition group-hover:opacity-100">
                      <ArrowUpRight className="h-5 w-5" />
                    </span>
                  </button>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-serif text-2xl font-bold">{service.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">{service.tagline}</p>
                    <ul className="mt-4 space-y-2">
                      {service.includes.map((inc) => (
                        <li key={inc} className="flex items-center gap-2 text-sm text-white/85">
                          <Check className="h-4 w-4 shrink-0 text-[#e8c766]" /> {inc}
                        </li>
                      ))}
                    </ul>
                    <p className={cn("mt-5 border-t border-white/10 pt-4 text-xs italic leading-relaxed text-white/55")}>
                      {service.note}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
