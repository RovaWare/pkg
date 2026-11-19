import { Sparkles, Flower2, Palette } from "lucide-react";
import Reveal from "./Reveal";
import { photoById } from "@/data/events";

const DETAILS = [
  {
    photoId: "staircase-floral",
    icon: Flower2,
    kicker: "Detail to steal",
    title: "The staircase garland",
    text: "A single flowing garland of red and white roses along the railing, with hanging flower strings above — the staircase becomes the centrepiece of the living room.",
    objectPosition: "center 62%",
    layout: "aspect-[4/3]",
  },
  {
    photoId: "welcome-balloons",
    icon: Palette,
    kicker: "Colour story",
    title: "Blue, purple & gold",
    text: "Metallic blue, purple, gold and rose-gold balloons layered in clusters around the welcome board, finished with a full rose wall behind.",
    objectPosition: "center 38%",
    layout: "aspect-[4/3]",
  },
  {
    photoId: "haldi",
    icon: Sparkles,
    kicker: "Ceremony ready",
    title: "The urli at the heart",
    text: "Mustard and teal drapes frame the backdrop while a brass urli ringed with marigolds sits ready in the foreground — tradition, front and centre.",
    objectPosition: "center 68%",
    layout: "aspect-[4/3]",
  },
];

export default function Memories({ onOpenPhoto }: { onOpenPhoto: (id: string) => void }) {
  return (
    <section id="memories" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-[#c9a227]">
              <span className="h-px w-10 bg-[#c9a227]" /> Personal Touches & Client Memories
            </p>
            <h2 className="mt-5 font-serif text-4xl font-bold leading-tight text-[#0e1b2e] sm:text-5xl">
              Details worth <span className="italic text-[#c9a227]">remembering</span>
            </h2>
            <p className="mt-4 leading-relaxed text-[#0e1b2e]/70">
              No borrowed photos and no invented testimonials — just close-up details from our own
              celebrations, each one a styling idea you can ask for at your event.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {DETAILS.map((d, i) => {
            const photo = photoById(d.photoId);
            const Icon = d.icon;
            return (
              <Reveal key={d.photoId} delay={i * 120}>
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-[#faf7f1] ring-1 ring-[#0e1b2e]/5 transition hover:shadow-xl hover:shadow-[#0e1b2e]/10">
                  <button
                    onClick={() => onOpenPhoto(photo.id)}
                    className="relative block overflow-hidden text-left"
                    aria-label={`View full-screen: ${photo.title}`}
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      className={`img-zoom ${d.layout} w-full object-cover`}
                      style={{ objectPosition: d.objectPosition }}
                    />
                    <span className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#0e1b2e] backdrop-blur">
                      <Icon className="h-3.5 w-3.5 text-[#c9a227]" /> {d.kicker}
                    </span>
                  </button>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-serif text-2xl font-bold text-[#0e1b2e]">{d.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-[#0e1b2e]/70">{d.text}</p>
                    <p className="mt-4 border-t border-[#0e1b2e]/8 pt-3 text-xs font-semibold uppercase tracking-wider text-[#0e1b2e]/50">
                      From: {photo.title}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={150}>
          <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-3xl bg-[#0e1b2e] px-7 py-6 text-center sm:flex-row sm:text-left">
            <p className="max-w-xl text-sm leading-relaxed text-white/80">
              <span className="font-serif text-lg text-white">Every photo on this page is from our own setups.</span>
              <br />
              Your celebration will be photographed the same way — real, styled and ready to share.
            </p>
            <a href="#contact" className="shrink-0 rounded-full bg-[#c9a227] px-6 py-3 text-sm font-bold text-[#0e1b2e] transition hover:bg-[#e8c766]">
              Start Your Setup
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
