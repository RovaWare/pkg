import { useEffect, useState } from "react";
import { Menu, X, Sparkles, ArrowRight } from "lucide-react";
import { cn } from "@/utils/cn";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Celebrations", href: "#services" },
  { label: "Anniversaries", href: "#anniversary" },
  { label: "Gallery", href: "#gallery" },
  { label: "Films", href: "#films" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "bg-[#0e1b2e]/92 shadow-lg shadow-black/20 backdrop-blur-md" : "bg-gradient-to-b from-black/55 to-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3 text-white">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#e8c766] to-[#c9a227] text-[#0e1b2e] shadow-lg">
            <Sparkles className="h-5 w-5" />
          </span>
          <span className="leading-tight">
            <span className="block font-serif text-xl font-bold tracking-wide">PKG Event</span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.3em] text-[#e8c766]">Dream Events · @pkg_event</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-semibold text-white/85 transition hover:text-[#e8c766]">
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="group flex items-center gap-2 rounded-full bg-[#c9a227] px-5 py-2.5 text-sm font-bold text-[#0e1b2e] transition hover:bg-[#e8c766]"
          >
            Book Your Date
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </nav>

        <button
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-[#0e1b2e]/97 px-6 py-4 backdrop-blur-md lg:hidden" aria-label="Mobile">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/5 py-3 font-serif text-lg text-white last:border-0 hover:text-[#e8c766]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#c9a227] px-5 py-3 font-bold text-[#0e1b2e]"
          >
            Book Your Date <ArrowRight className="h-4 w-4" />
          </a>
        </nav>
      )}
    </header>
  );
}
