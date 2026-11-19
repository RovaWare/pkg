import { Check, Heart, Camera } from "lucide-react";
import Reveal from "./Reveal";
import { photoById } from "@/data/events";

export default function About() {
  const main = photoById("house-floral");
  const inset = photoById("staircase-floral");

  return (
    <section id="about" className="relative overflow-hidden bg-[#faf7f1] py-20 sm:py-28">
      <div className="pointer-events-none absolute -right-24 top-10 select-none font-serif text-[11rem] font-bold leading-none text-[#0e1b2e]/[0.04]">
        PKG
      </div>
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        {/* Editorial image composition */}
        <Reveal variant="left" className="relative">
          <div className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] border-2 border-[#c9a227]/50" aria-hidden />
          <div className="group relative overflow-hidden rounded-[2rem] shadow-2xl shadow-[#0e1b2e]/25">
            <img
              src={main.src}
              alt={main.alt}
              loading="lazy"
              className="img-zoom aspect-[4/5] w-full object-cover sm:aspect-[5/6]"
              style={{ objectPosition: main.objectPosition }}
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0e1b2e]/85 to-transparent p-5 pt-16">
              <p className="font-serif text-lg text-white">{main.title}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-[#e8c766]">{main.category} · Our own setup</p>
            </div>
          </div>

          {/* Overlapping detail crop */}
          <div className="group absolute -bottom-10 -right-2 w-44 overflow-hidden rounded-2xl border-4 border-white shadow-xl sm:-right-8 sm:w-60">
            <img
              src={inset.src}
              alt={inset.alt}
              loading="lazy"
              className="img-zoom aspect-[4/5] w-full object-cover"
              style={{ objectPosition: "center 60%" }}
            />
          </div>

          <div className="floaty absolute -left-3 top-8 flex items-center gap-2 rounded-full bg-[#0e1b2e] px-4 py-2 text-xs font-bold text-white shadow-lg sm:-left-6">
            <Camera className="h-4 w-4 text-[#e8c766]" /> Real photos only
          </div>
        </Reveal>

        {/* Text */}
        <Reveal variant="right" delay={120}>
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-[#c9a227]">
            <span className="h-px w-10 bg-[#c9a227]" /> About PKG Event
          </p>
          <h2 className="mt-5 font-serif text-4xl font-bold leading-tight text-[#0e1b2e] sm:text-5xl">
            Your home becomes the <span className="italic text-[#c9a227]">venue</span>
          </h2>
          <p className="mt-6 leading-relaxed text-[#0e1b2e]/75">
            We are PKG Event — Dream Events, a decoration studio that styles real homes, venues and
            celebrations across birthdays, weddings, Haldi ceremonies and anniversaries. The house wrapped
            in red and white roses and the staircase flowing with florals in these photographs are our own
            work — no stock, no borrowed pictures.
          </p>
          <p className="mt-4 leading-relaxed text-[#0e1b2e]/75">
            From a gold sequin birthday wall to a mustard-and-teal Haldi backdrop, every setup is designed
            around your colours, your names and your space — then photographed exactly as your guests saw it.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Custom themes & colour stories",
              "Balloon garlands & backdrops",
              "Fresh & artificial floral styling",
              "Full setup, styling & cleanup",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm font-semibold text-[#0e1b2e]">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#c9a227]/15 text-[#c9a227]">
                  <Check className="h-4 w-4" />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a
              href="#gallery"
              className="rounded-full bg-[#0e1b2e] px-7 py-3.5 font-bold text-white transition hover:bg-[#16294a]"
            >
              See Our Work
            </a>
            <p className="flex items-center gap-2 text-sm font-semibold text-[#0e1b2e]/70">
              <Heart className="h-4 w-4 fill-[#7a1f2b] text-[#7a1f2b]" />
              Styled with love, photographed as-is
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
