import { useState } from "react";
import { Heart, Check, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { MILESTONES, photoById } from "@/data/events";
import { cn } from "@/utils/cn";

export default function Anniversary({ onOpenPhoto }: { onOpenPhoto: (id: string) => void }) {
  const [active, setActive] = useState(1);
  const milestone = MILESTONES[active];
  // Closest relevant original celebration image — honestly presented as inspiration, not an anniversary project.
  const photo = photoById("gold-birthday");

  return (
    <section id="anniversary" className="overflow-hidden bg-[#f3ecdf] py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Image side */}
        <Reveal variant="left" className="relative order-2 lg:order-1">
          <button
            onClick={() => onOpenPhoto(photo.id)}
            className="group relative block w-full overflow-hidden rounded-[2rem] text-left shadow-2xl shadow-[#0e1b2e]/25"
            aria-label={`View full-screen: ${photo.title}`}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="img-zoom aspect-[4/5] w-full object-cover sm:aspect-[5/6]"
              style={{ objectPosition: "center 42%" }}
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0e1b2e]/90 via-[#0e1b2e]/30 to-transparent p-6 pt-20">
              <span className="block font-serif text-xl text-white">{photo.title}</span>
              <span className="mt-1 block text-xs leading-relaxed text-white/75">
                Celebration inspiration — this gold sequin styling is exactly what we adapt for anniversaries.
                Tap to view full-screen.
              </span>
            </span>
          </button>
          <div className="absolute -right-3 -top-4 flex items-center gap-2 rounded-full bg-[#7a1f2b] px-4 py-2 text-xs font-bold text-white shadow-lg sm:-right-6">
            <Heart className="h-4 w-4 fill-current" /> Anniversary Inspiration
          </div>
        </Reveal>

        {/* Content side */}
        <Reveal variant="right" delay={120} className="order-1 lg:order-2">
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-[#7a1f2b]">
            <span className="h-px w-10 bg-[#7a1f2b]" /> Anniversary Inspiration
          </p>
          <h2 className="mt-5 font-serif text-4xl font-bold leading-tight text-[#0e1b2e] sm:text-5xl">
            Milestones deserve a <span className="italic text-[#c9a227]">golden backdrop</span>
          </h2>
          <p className="mt-5 leading-relaxed text-[#0e1b2e]/75">
            Choose a milestone to see how we would style it. The gold sequin wall and metallic balloon
            garland in our photograph is the styling we adapt for anniversary photo walls — we present it
            here as inspiration, not as a past anniversary project.
          </p>

          {/* Milestone selector */}
          <div className="mt-8 grid grid-cols-4 gap-2" role="tablist" aria-label="Anniversary milestones">
            {MILESTONES.map((m, i) => (
              <button
                key={m.years}
                role="tab"
                aria-selected={i === active}
                onClick={() => setActive(i)}
                className={cn(
                  "rounded-2xl border-2 px-2 py-3.5 text-center transition",
                  i === active
                    ? "border-[#c9a227] bg-[#0e1b2e] text-white shadow-lg"
                    : "border-[#0e1b2e]/10 bg-white text-[#0e1b2e] hover:border-[#c9a227]/60"
                )}
              >
                <span className={cn("block font-serif text-2xl font-bold", i === active ? "text-[#e8c766]" : "text-[#c9a227]")}>
                  {m.years}
                </span>
                <span className="mt-0.5 block text-[10px] font-bold uppercase tracking-wider opacity-70">Years</span>
              </button>
            ))}
          </div>

          <div key={milestone.years} className="fade-up mt-6 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#0e1b2e]/5 sm:p-7">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#7a1f2b]">{milestone.label}</p>
            <h3 className="mt-2 font-serif text-2xl font-bold text-[#0e1b2e]">{milestone.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#0e1b2e]/75">{milestone.text}</p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-3">
              {milestone.points.map((p) => (
                <li key={p} className="flex items-center gap-2 rounded-xl bg-[#faf7f1] px-3 py-2 text-xs font-semibold text-[#0e1b2e]">
                  <Check className="h-4 w-4 shrink-0 text-[#c9a227]" /> {p}
                </li>
              ))}
            </ul>
          </div>

          <a href="#contact" className="group mt-7 inline-flex items-center gap-2 font-bold text-[#0e1b2e] transition hover:text-[#c9a227]">
            Plan an anniversary setup
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
