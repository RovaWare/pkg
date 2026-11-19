import { useRef, useState } from "react";
import { Play, Film as FilmIcon, Pause } from "lucide-react";
import Reveal from "./Reveal";
import { FILMS } from "@/data/events";
import { cn } from "@/utils/cn";

function FilmCard({ film, featured }: { film: (typeof FILMS)[number]; featured?: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      void v.play();
    } else {
      v.pause();
    }
  };

  return (
    <article
      className={cn(
        "group overflow-hidden rounded-3xl bg-[#0e1b2e] ring-1 ring-white/10",
        featured && "sm:col-span-2 lg:col-span-1"
      )}
    >
      <div className="relative aspect-video overflow-hidden bg-black">
        <video
          ref={videoRef}
          src={film.src}
          poster={film.poster}
          preload="metadata"
          playsInline
          controls
          className="h-full w-full object-cover"
          aria-label={`${film.title} — event film`}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
        />
        {/* Play overlay (poster frame + button) */}
        <button
          onClick={toggle}
          aria-label={playing ? `Pause ${film.title}` : `Play ${film.title}`}
          className={cn(
            "absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-t from-black/55 via-black/10 to-black/25 transition",
            playing && "pointer-events-none opacity-0"
          )}
        >
          <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#c9a227] text-[#0e1b2e] shadow-2xl transition group-hover:scale-110">
            <span className="pulse-ring absolute inset-0 rounded-full border-2 border-[#e8c766]" />
            {playing ? <Pause className="h-6 w-6 fill-current" /> : <Play className="ml-1 h-6 w-6 fill-current" />}
          </span>
          <span className="rounded-full bg-black/60 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur">
            {playing ? "Playing" : "Play Film"}
          </span>
        </button>
        <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-bold text-white backdrop-blur">
          {film.duration}
        </span>
      </div>
      <div className="flex items-start gap-4 p-6">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#c9a227]/15 text-[#e8c766]">
          <FilmIcon className="h-5 w-5" />
        </span>
        <div>
          <h3 className="font-serif text-xl font-bold text-white">{film.title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-white/65">{film.subtitle}</p>
          <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#e8c766]">{film.src}</p>
        </div>
      </div>
    </article>
  );
}

export default function Films() {
  return (
    <section id="films" className="bg-[#0e1b2e] py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-[#e8c766]">
                <span className="h-px w-10 bg-[#e8c766]" /> Event Films
              </p>
              <h2 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl">
                See the setups <span className="gold-text italic">in motion</span>
              </h2>
              <p className="mt-4 leading-relaxed text-white/70">
                Three short films from our own celebrations — press play and use the video controls to
                watch, pause or scrub through each setup.
              </p>
            </div>
            <span className="rounded-full border border-white/25 px-5 py-2.5 text-sm font-bold text-white/85">
              3 Films · v11 · v22 · v33
            </span>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FILMS.map((film, i) => (
            <Reveal key={film.id} delay={i * 120}>
              <FilmCard film={film} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <p className="mt-8 text-center text-sm text-white/55">
            Films are rendered from the original event photographs above — the same setups you see in the gallery.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
