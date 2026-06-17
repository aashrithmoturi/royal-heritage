"use client";

import { Reveal, Stagger, RevealItem } from "./motion/Reveal";

const experiences = [
  {
    icon: "🌅",
    title: "Royal Sunrise Stays",
    text: "Wake in canopied suites overlooking the orchards, with butler-served chai at dawn.",
  },
  {
    icon: "🍯",
    title: "Farm-to-Table Feasts",
    text: "Heirloom recipes plated under lantern light, sourced from our own gardens.",
  },
  {
    icon: "🐎",
    title: "Estate Adventures",
    text: "Horseback trails, bullock rides, fishing by the lily pond and starlit bonfires.",
  },
  {
    icon: "🎉",
    title: "Regal Celebrations",
    text: "Weddings, retreats and soirées staged like a maharaja's durbar.",
  },
  {
    icon: "🌿",
    title: "Wellness & Ayurveda",
    text: "Herbal therapies, yoga at sunrise and slow living amidst the green.",
  },
  {
    icon: "✦",
    title: "Curated Privacy",
    text: "Acres of seclusion — your own kingdom of calm, far from the noise.",
  },
];

export default function Experiences() {
  return (
    <section
      id="experiences"
      className="rf-aurora relative overflow-hidden py-20 text-amber-50 sm:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, rgba(212,175,55,0.12), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal direction="lift" className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--rf-gold-soft)]">
            The Experience
          </p>
          <h2 className="mb-4 text-4xl font-semibold sm:text-5xl">
            Curated <span className="rf-gold-text italic">Indulgences</span>
          </h2>
          <div className="rf-divider mx-auto w-40" />
        </Reveal>

        <Stagger gap={0.1} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((e) => (
            <RevealItem key={e.title} direction="unfurl">
              <div className="rf-tilt group h-full rounded-2xl border border-[var(--rf-gold)]/25 bg-white/5 p-7 backdrop-blur-sm">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--rf-gold)]/15 text-3xl transition group-hover:scale-110">
                  {e.icon}
                </div>
                <h3 className="mb-2 text-2xl font-semibold text-amber-50">
                  {e.title}
                </h3>
                <p className="leading-relaxed text-amber-50/75">{e.text}</p>
              </div>
            </RevealItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
