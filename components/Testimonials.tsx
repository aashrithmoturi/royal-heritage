"use client";

import { Reveal } from "./motion/Reveal";

const reviews = [
  {
    name: "Aarav & Meera",
    role: "Anniversary Stay",
    text: "Like stepping into a royal painting. The sunrise chai on our suite balcony is a memory we'll keep forever.",
  },
  {
    name: "The Reddy Family",
    role: "Family Getaway",
    text: "The children rode bullock carts while we lounged by the pond. Pure, unhurried luxury.",
  },
  {
    name: "Sanjana K.",
    role: "Wellness Retreat",
    text: "Ayurveda at dawn, silence all around. I left lighter than I arrived. Truly regal calm.",
  },
  {
    name: "Vikram Estates",
    role: "Corporate Offsite",
    text: "Our team felt like royalty. Impeccable service and the most beautiful durbar-style dinners.",
  },
  {
    name: "Priya & Arjun",
    role: "Destination Wedding",
    text: "They staged our wedding like a maharaja's celebration. Every guest was spellbound.",
  },
];

function Card({ r }: { r: (typeof reviews)[number] }) {
  return (
    <div className="mx-3 w-[300px] shrink-0 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-md sm:w-[360px]">
      <div className="mb-3 text-[var(--rf-gold)]">★★★★★</div>
      <p className="mb-5 italic leading-relaxed text-[var(--muted)]">“{r.text}”</p>
      <p className="font-semibold text-[var(--heading)]">{r.name}</p>
      <p className="text-xs uppercase tracking-wide text-[var(--rf-wine)]">
        {r.role}
      </p>
    </div>
  );
}

export default function Testimonials() {
  const loop = [...reviews, ...reviews];
  return (
    <section
      id="testimonials"
      className="overflow-hidden bg-[var(--surface-soft)] py-20 sm:py-28"
    >
      <Reveal direction="lift" className="mx-auto mb-12 max-w-2xl px-4 text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--rf-wine)]">
          Whispers from Our Guests
        </p>
        <h2 className="mb-4 text-4xl font-semibold text-[var(--heading)] sm:text-5xl">
          Tales of <span className="rf-gold-text italic">Royal</span> Stays
        </h2>
        <div className="rf-divider mx-auto w-40" />
      </Reveal>

      <div className="rf-marquee-wrap relative">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[var(--surface-soft)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[var(--surface-soft)] to-transparent" />
        <div className="rf-marquee flex w-max">
          {loop.map((r, i) => (
            <Card key={i} r={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
