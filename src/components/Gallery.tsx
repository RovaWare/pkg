import { useMemo, useState } from "react";
import { Expand, Images } from "lucide-react";
import Reveal from "./Reveal";
import { PHOTOS } from "@/data/events";
import { cn } from "@/utils/cn";

const FILTERS = [
  { key: "all", label: "All Photos" },
  { key: "birthday", label: "Birthday" },
  { key: "wedding", label: "Wedding & Floral" },
  { key: "haldi", label: "Haldi" },
  { key: "styling", label: "Custom Styling" },
] as const;

export default function Gallery({ onOpenPhoto }: { onOpenPhoto: (id: string) => void }) {
  const [filter, setFilter] = useState<string>("all");

  const visible = useMemo(
    () => (filter === "all" ? PHOTOS : PHOTOS.filter((p) => p.categoryKey === filter)),
    [filter]
  );

  return (
    <section id="gallery" className="bg-[#faf7f1] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <p className="flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-[#c9a227]">
              <span className="h-px w-10 bg-[#c9a227]" /> Portfolio Gallery <span className="h-px w-10 bg-[#c9a227]" />
            </p>
            <h2 className="mx-auto mt-5 max-w-2xl font-serif text-4xl font-bold leading-tight text-[#0e1b2e] sm:text-5xl">
              Six real setups, <span className="italic text-[#c9a227]">exactly as styled</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-[#0e1b2e]/70">
              Every image below is one of our original event photographs. Click any photo to open it
              full-screen with previous and next controls.
            </p>
          </div>
        </Reveal>

        {/* Filters */}
        <Reveal delay={100}>
          <div className="no-scrollbar mt-10 flex gap-2 overflow-x-auto pb-1 sm:justify-center">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                aria-pressed={filter === f.key}
                className={cn(
                  "shrink-0 rounded-full px-5 py-2.5 text-sm font-bold transition",
                  filter === f.key
                    ? "bg-[#0e1b2e] text-white shadow-md"
                    : "bg-white text-[#0e1b2e]/70 ring-1 ring-[#0e1b2e]/10 hover:ring-[#c9a227]"
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Asymmetric editorial grid */}
        <div className="mt-10 grid auto-rows-[240px] grid-cols-1 gap-4 sm:grid-cols-2 sm:auto-rows-[260px] lg:grid-cols-3">
          {visible.map((photo, i) => (
            <Reveal key={photo.id} delay={i * 80} className={cn("h-full", photo.span)}>
              <button
                onClick={() => onOpenPhoto(photo.id)}
                className="group relative block h-full w-full overflow-hidden rounded-3xl text-left shadow-md shadow-[#0e1b2e]/10"
                aria-label={`Open full-screen: ${photo.title}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="img-zoom h-full w-full object-cover"
                  style={{ objectPosition: photo.objectPosition }}
                />
                <span className="absolute inset-0 bg-gradient-to-t from-[#0e1b2e]/85 via-transparent to-transparent opacity-80 transition group-hover:opacity-100" />
                <span className="absolute left-4 top-4 rounded-full bg-black/50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#e8c766] backdrop-blur">
                  {photo.category}
                </span>
                <span className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-3 p-5">
                  <span>
                    <span className="block font-serif text-xl font-bold text-white">{photo.title}</span>
                    <span className="mt-1 line-clamp-2 block max-w-md text-xs leading-relaxed text-white/75">
                      {photo.caption}
                    </span>
                  </span>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#c9a227] text-[#0e1b2e] shadow-lg transition group-hover:scale-110">
                    <Expand className="h-5 w-5" />
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-8 flex items-center justify-center gap-2 text-center text-sm font-semibold text-[#0e1b2e]/60">
            <Images className="h-4 w-4 text-[#c9a227]" />
            Showing {visible.length} of {PHOTOS.length} original photographs · Use ← → keys inside the viewer
          </p>
        </Reveal>
      </div>
    </section>
  );
}
