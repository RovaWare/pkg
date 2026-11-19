import { useState, type FormEvent } from "react";
import { Send, CheckCircle2, AtSign, Phone, MapPin, CalendarHeart } from "lucide-react";
import Reveal from "./Reveal";
import { photoById } from "@/data/events";

const EVENT_TYPES = ["Birthday", "Wedding & Floral", "Haldi", "Anniversary", "Baby Shower", "Custom Celebration"];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", type: "Birthday", date: "", message: "" });
  const side = photoById("blue-stage");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="bg-[#f3ecdf] py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:gap-16 lg:px-8">
        {/* Info + image */}
        <Reveal variant="left" className="lg:col-span-2">
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-[#c9a227]">
            <span className="h-px w-10 bg-[#c9a227]" /> Book Your Date
          </p>
          <h2 className="mt-5 font-serif text-4xl font-bold leading-tight text-[#0e1b2e] sm:text-5xl">
            Let's style your <span className="italic text-[#c9a227]">next celebration</span>
          </h2>
          <p className="mt-4 leading-relaxed text-[#0e1b2e]/70">
            Tell us your date and theme — we will bring the backdrops, balloons, florals and drapes.
            The stage in this photograph is one of our own first-birthday setups.
          </p>

          <div className="group mt-8 overflow-hidden rounded-3xl shadow-xl shadow-[#0e1b2e]/15">
            <img
              src={side.src}
              alt={side.alt}
              loading="lazy"
              className="img-zoom aspect-[16/10] w-full object-cover"
              style={{ objectPosition: side.objectPosition }}
            />
          </div>

          <ul className="mt-7 space-y-3 text-sm font-semibold text-[#0e1b2e]">
            <li className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0e1b2e] text-[#e8c766]">
                <AtSign className="h-4 w-4" />
              </span>
              Follow our latest setups: @pkg_event
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0e1b2e] text-[#e8c766]">
                <Phone className="h-4 w-4" />
              </span>
              Call or message to check your date
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0e1b2e] text-[#e8c766]">
                <MapPin className="h-4 w-4" />
              </span>
              Home & venue decoration across the city
            </li>
          </ul>
        </Reveal>

        {/* Form */}
        <Reveal variant="right" delay={120} className="lg:col-span-3">
          <div className="rounded-[2rem] bg-white p-7 shadow-xl shadow-[#0e1b2e]/10 ring-1 ring-[#0e1b2e]/5 sm:p-10">
            {sent ? (
              <div className="fade-up flex min-h-[420px] flex-col items-center justify-center text-center">
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-[#c9a227]/15 text-[#c9a227]">
                  <CheckCircle2 className="h-10 w-10" />
                </span>
                <h3 className="mt-6 font-serif text-3xl font-bold text-[#0e1b2e]">Thank you, {form.name || "friend"}!</h3>
                <p className="mt-3 max-w-md leading-relaxed text-[#0e1b2e]/70">
                  Your {form.type} enquiry{form.date ? ` for ${form.date}` : ""} is noted. Reach us on
                  Instagram <span className="font-bold text-[#0e1b2e]">@pkg_event</span> to confirm your date
                  and theme — we will take it from there.
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setForm({ name: "", type: "Birthday", date: "", message: "" });
                  }}
                  className="mt-7 rounded-full border-2 border-[#0e1b2e] px-6 py-3 text-sm font-bold text-[#0e1b2e] transition hover:bg-[#0e1b2e] hover:text-white"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#c9a227]/15 text-[#c9a227]">
                    <CalendarHeart className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#0e1b2e]">Enquiry Form</h3>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#0e1b2e]/50">We reply with themes & availability</p>
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-bold text-[#0e1b2e]">Your name</span>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Priya Sharma"
                      className="w-full rounded-2xl border-2 border-[#0e1b2e]/10 bg-[#faf7f1] px-4 py-3.5 outline-none transition placeholder:text-[#0e1b2e]/35 focus:border-[#c9a227]"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-bold text-[#0e1b2e]">Event date</span>
                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      className="w-full rounded-2xl border-2 border-[#0e1b2e]/10 bg-[#faf7f1] px-4 py-3.5 outline-none transition focus:border-[#c9a227]"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-[#0e1b2e]">Celebration type</span>
                  <div className="flex flex-wrap gap-2">
                    {EVENT_TYPES.map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setForm({ ...form, type: t })}
                        aria-pressed={form.type === t}
                        className={
                          form.type === t
                            ? "rounded-full bg-[#0e1b2e] px-4 py-2.5 text-sm font-bold text-white"
                            : "rounded-full bg-[#faf7f1] px-4 py-2.5 text-sm font-bold text-[#0e1b2e]/70 ring-1 ring-[#0e1b2e]/10 transition hover:ring-[#c9a227]"
                        }
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-[#0e1b2e]">Tell us about your celebration</span>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Theme, colours, venue or home, number of guests…"
                    className="w-full resize-none rounded-2xl border-2 border-[#0e1b2e]/10 bg-[#faf7f1] px-4 py-3.5 outline-none transition placeholder:text-[#0e1b2e]/35 focus:border-[#c9a227]"
                  />
                </label>

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#c9a227] px-7 py-4 font-bold text-[#0e1b2e] transition hover:bg-[#e8c766]"
                >
                  Send Enquiry
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </button>
                <p className="text-center text-xs text-[#0e1b2e]/50">
                  Prefer Instagram? Message us at @pkg_event with your date and theme.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
