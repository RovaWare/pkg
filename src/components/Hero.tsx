import { ArrowRight, ChevronDown, Play, Images } from "lucide-react";
import { photoById } from "@/data/events";

export default function Hero({ onOpenGallery }: { onOpenGallery: () => void }) {
  const hero = photoById("gold-birthday");

  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#0e1b2e]">
      {/* Real event photograph — cinematic reveal + slow zoom */}
      <div className="hero-reveal absolute inset-0">
        <img
          src={hero.src}
          alt={hero.alt}
          className="hero-zoom h-full w-full object-cover"
          style={{ objectPosition: "center 38%" }}
          fetchPriority="high"
        />
      </div>
      {/* Subtle dark overlay so white/gold headline stays readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0e1b2e]/88 via-[#0e1b2e]/55 to-[#0e1b2e]/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0e1b2e]/85 via-transparent to-black/30" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-28 pt-36 sm:px-6 lg:px-8">
        <p className="fade-up flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.35em] text-[#e8c766] sm:text-xs">
          <span className="h-px w-10 bg-[#e8c766]" />
          PKG Event · Dream Events · Real Setups, Real Photos
        </p>

        <h1 className="fade-up fade-up-1 mt-6 max-w-3xl font-serif text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
          We decorate your{" "}
          <span className="gold-text italic">happiest days</span>
        </h1>

        <p className="fade-up fade-up-2 mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
          Birthdays, weddings, Haldi ceremonies and anniversaries — every photograph on this page is from
          our own decoration setups. Gold sequin walls, floral homes and balloon art, styled around you.
        </p>

        <div className="fade-up fade-up-3 mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="group flex items-center gap-2 rounded-full bg-[#c9a227] px-7 py-3.5 font-bold text-[#0e1b2e] shadow-xl shadow-black/30 transition hover:bg-[#e8c766]"
          >
            Plan My Celebration
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <button
            onClick={onOpenGallery}
            className="group flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 font-bold text-white backdrop-blur transition hover:bg-white hover:text-[#0e1b2e]"
          >
            <Images className="h-4 w-4" />
            View Real Photos
          </button>
          <a href="#films" className="flex items-center gap-2 font-semibold text-white/85 transition hover:text-[#e8c766]">
            <span className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/40">
              <span className="pulse-ring absolute inset-0 rounded-full border border-[#e8c766]" />
              <Play className="h-4 w-4 fill-current" />
            </span>
            Watch Event Films
          </a>
        </div>

        <div className="fade-up fade-up-4 mt-12 flex flex-wrap gap-2.5">
          {["Birthdays", "Weddings", "Haldi", "Anniversaries", "Baby Showers", "Home Florals"].map((t) => (
            <span key={t} className="rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom strip */}
      <div className="absolute inset-x-0 bottom-0 z-10 border-t border-white/15 bg-black/25 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70 sm:px-6 sm:text-xs lg:px-8">
          <span className="hidden sm:block">6 Signature Looks · 3 Event Films</span>
          <span className="flex items-center gap-2">
            Scroll to explore <ChevronDown className="h-4 w-4 animate-bounce" />
          </span>
          <span className="hidden md:block">@pkg_event</span>
        </div>
      </div>
    </section>
  );
}
