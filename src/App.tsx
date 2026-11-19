import { useCallback, useState } from "react";
import { Sparkles, MessagesSquare, PenTool, PartyPopper, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Anniversary from "@/components/Anniversary";
import Gallery from "@/components/Gallery";
import Memories from "@/components/Memories";
import Films from "@/components/Films";
import Contact from "@/components/Contact";
import Lightbox from "@/components/Lightbox";
import Reveal from "@/components/Reveal";
import { PHOTOS } from "@/data/events";

const MARQUEE = ["Birthday", "Wedding", "Haldi", "Anniversary", "Baby Shower", "Home Florals", "Balloon Art", "Sequin Walls"];

const STEPS = [
  { icon: MessagesSquare, title: "Share your date", text: "Tell us the occasion, venue or home, and the colours you love." },
  { icon: PenTool, title: "We design it", text: "Backdrops, balloons, florals and drapes — styled around your names and theme." },
  { icon: Sparkles, title: "We set it up", text: "Full installation and styling on the day, photographed exactly as guests see it." },
  { icon: PartyPopper, title: "You celebrate", text: "Walk in, take the photos, enjoy the day — we handle the rest." },
];

export default function App() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openPhoto = useCallback((id: string) => {
    const idx = PHOTOS.findIndex((p) => p.id === id);
    setLightboxIndex(idx >= 0 ? idx : 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#faf7f1]">
      <Navbar />
      <main>
        <Hero onOpenGallery={() => setLightboxIndex(0)} />
        <About />
        <Services onOpenPhoto={openPhoto} />

        {/* Marquee */}
        <div className="overflow-hidden border-y border-[#0e1b2e]/10 bg-[#c9a227] py-3.5" aria-hidden>
          <div className="marquee-track flex w-max items-center gap-8">
            {[...MARQUEE, ...MARQUEE].map((item, i) => (
              <span key={i} className="flex items-center gap-8 whitespace-nowrap font-serif text-lg font-bold italic text-[#0e1b2e]">
                {item} <Sparkles className="h-4 w-4" />
              </span>
            ))}
          </div>
        </div>

        <Anniversary onOpenPhoto={openPhoto} />
        <Gallery onOpenPhoto={openPhoto} />
        <Memories onOpenPhoto={openPhoto} />
        <Films />

        {/* Process */}
        <section className="bg-[#faf7f1] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="text-center">
                <p className="flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-[#c9a227]">
                  <span className="h-px w-10 bg-[#c9a227]" /> How It Works <span className="h-px w-10 bg-[#c9a227]" />
                </p>
                <h2 className="mx-auto mt-5 max-w-xl font-serif text-4xl font-bold text-[#0e1b2e] sm:text-5xl">
                  From enquiry to <span className="italic text-[#c9a227]">celebration</span>
                </h2>
              </div>
            </Reveal>
            <div className="relative mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="absolute left-0 right-0 top-10 hidden border-t-2 border-dashed border-[#c9a227]/40 lg:block" aria-hidden />
              {STEPS.map((step, i) => {
                const Icon = step.icon;
                return (
                  <Reveal key={step.title} delay={i * 120}>
                    <div className="relative flex flex-col items-center rounded-3xl bg-white p-7 text-center shadow-sm ring-1 ring-[#0e1b2e]/5">
                      <span className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#e8c766] to-[#c9a227] text-[#0e1b2e] shadow-lg">
                        <Icon className="h-8 w-8" />
                      </span>
                      <span className="mt-4 font-serif text-sm font-bold uppercase tracking-[0.25em] text-[#c9a227]">
                        Step {i + 1}
                      </span>
                      <h3 className="mt-1 font-serif text-xl font-bold text-[#0e1b2e]">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#0e1b2e]/65">{step.text}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
            <Reveal delay={150}>
              <div className="mt-10 text-center">
                <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-[#0e1b2e] px-8 py-4 font-bold text-white transition hover:bg-[#16294a]">
                  Start with Step 1
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <Contact />
      </main>

      <footer className="bg-[#0e1b2e] py-12 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#e8c766] to-[#c9a227] text-[#0e1b2e]">
              <Sparkles className="h-5 w-5" />
            </span>
            <span className="text-left leading-tight">
              <span className="block font-serif text-xl font-bold">PKG Event</span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.3em] text-[#e8c766]">Dream Events</span>
            </span>
          </a>
          <nav className="flex flex-wrap justify-center gap-x-7 gap-y-2 text-sm font-semibold text-white/70" aria-label="Footer">
            <a href="#about" className="transition hover:text-[#e8c766]">About</a>
            <a href="#services" className="transition hover:text-[#e8c766]">Celebrations</a>
            <a href="#anniversary" className="transition hover:text-[#e8c766]">Anniversaries</a>
            <a href="#gallery" className="transition hover:text-[#e8c766]">Gallery</a>
            <a href="#films" className="transition hover:text-[#e8c766]">Films</a>
            <a href="#contact" className="transition hover:text-[#e8c766]">Contact</a>
          </nav>
          <p className="max-w-md text-xs leading-relaxed text-white/50">
            All photographs and films on this website are from PKG Event's own decoration setups.
            Follow @pkg_event for our latest work.
          </p>
          <p className="text-xs text-white/40">© {new Date().getFullYear()} PKG Event — Dream Events. All rights reserved.</p>
        </div>
      </footer>

      <Lightbox index={lightboxIndex} onClose={() => setLightboxIndex(null)} onNavigate={setLightboxIndex} />
    </div>
  );
}
