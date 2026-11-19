import { useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, X, Expand } from "lucide-react";
import { PHOTOS } from "@/data/events";
import { cn } from "@/utils/cn";

type Props = {
  index: number | null;
  onClose: () => void;
  onNavigate: (i: number) => void;
};

export default function Lightbox({ index, onClose, onNavigate }: Props) {
  const open = index !== null;
  const current = open ? PHOTOS[index!] : null;

  const next = useCallback(() => {
    if (index === null) return;
    onNavigate((index + 1) % PHOTOS.length);
  }, [index, onNavigate]);

  const prev = useCallback(() => {
    if (index === null) return;
    onNavigate((index - 1 + PHOTOS.length) % PHOTOS.length);
  }, [index, onNavigate]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose, next, prev]);

  if (!open || !current) return null;

  return (
    <div
      className="fixed inset-0 z-[90] flex flex-col bg-[#070d18]/97 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`Photo viewer: ${current.title}`}
      onClick={onClose}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-4 sm:px-8" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center gap-3 text-white">
          <Expand className="h-5 w-5 text-[#e8c766]" />
          <div>
            <p className="font-serif text-lg leading-tight">{current.title}</p>
            <p className="text-xs uppercase tracking-[0.2em] text-white/60">
              {current.category} · {index! + 1} / {PHOTOS.length}
            </p>
          </div>
        </div>
        <button
          onClick={onClose}
          aria-label="Close photo viewer"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition hover:bg-white hover:text-[#0e1b2e]"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Image */}
      <div className="relative flex flex-1 items-center justify-center px-4 pb-2 sm:px-24" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={prev}
          aria-label="Previous photo"
          className="absolute left-3 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-black/40 text-white transition hover:bg-[#c9a227] hover:text-[#0e1b2e] sm:left-6"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <img
          key={current.id}
          src={current.src}
          alt={current.alt}
          className="lightbox-in max-h-[68vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
          style={{ objectPosition: current.objectPosition }}
        />

        <button
          onClick={next}
          aria-label="Next photo"
          className="absolute right-3 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-black/40 text-white transition hover:bg-[#c9a227] hover:text-[#0e1b2e] sm:right-6"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Caption + thumbnails */}
      <div className="px-4 pb-6 pt-2" onClick={(e) => e.stopPropagation()}>
        <p className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-white/80">{current.caption}</p>
        <div className="no-scrollbar mx-auto mt-4 flex max-w-2xl gap-2 overflow-x-auto pb-1">
          {PHOTOS.map((p, i) => (
            <button
              key={p.id}
              onClick={() => onNavigate(i)}
              aria-label={`View ${p.title}`}
              className={cn(
                "h-14 w-20 shrink-0 overflow-hidden rounded-md border-2 transition",
                i === index ? "border-[#e8c766]" : "border-transparent opacity-50 hover:opacity-90"
              )}
            >
              <img src={p.src} alt="" loading="lazy" className="h-full w-full object-cover" style={{ objectPosition: p.objectPosition }} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
