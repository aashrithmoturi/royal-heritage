"use client";

import { Reveal, Stagger, RevealItem } from "./motion/Reveal";
import SmartImage from "./SmartImage";

const stats = [
  { value: "25", suffix: "acres", label: "of green estate" },
  { value: "12", suffix: "suites", label: "royal lodgings" },
  { value: "40+", suffix: "years", label: "of heritage" },
  { value: "5★", suffix: "", label: "guest rating" },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[var(--background)] py-20 sm:py-28">
      <span className="rf-blob -left-10 top-10 h-56 w-56 bg-[#3b0d60]/15" />
      <span className="rf-blob -right-10 bottom-10 h-64 w-64 bg-[var(--rf-gold)]/20" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        {/* Image with ornate rotating gold frame */}
        <Reveal direction="iris">
          <div className="rf-ornate rf-group relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl">
            <SmartImage
              src="/images/estate.jpg"
              alt="The Farmhouse heritage estate"
              label="Add estate photo"
              className="rf-img object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <span className="rf-veil" />
          </div>
        </Reveal>

        <div>
          <Reveal direction="wipe">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--rf-wine)]">
              Our Heritage
            </p>
            <h2 className="mb-5 text-4xl font-semibold text-[var(--heading)] sm:text-5xl">
              A Legacy of <span className="rf-gold-text italic">Regal</span> Hospitality
            </h2>
            <div className="rf-divider mb-6 w-40" />
          </Reveal>

          <Reveal direction="lift" delay={0.1}>
            <p className="mb-5 text-lg leading-relaxed text-[var(--muted)]">
              Set amidst orchards, lily ponds and emerald meadows, The Farmhouse
              is a heritage estate reimagined as a royal retreat. Every sunrise
              brings birdsong; every evening, a lantern-lit feast under the stars.
            </p>
            <p className="mb-8 text-lg leading-relaxed text-[var(--muted)]">
              We blend timeless courtly elegance with the honest charm of farm
              life — hand-tended gardens, heirloom recipes, and the unhurried
              luxury of space, silence and sky.
            </p>
          </Reveal>

          <Stagger className="grid grid-cols-2 gap-5 sm:grid-cols-4">
            {stats.map((s) => (
              <RevealItem key={s.label} direction="lift">
                <div className="rf-tilt rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 text-center shadow-sm">
                  <p className="text-3xl font-semibold text-[var(--heading)]">
                    {s.value}
                    <span className="ml-1 text-sm font-medium text-[var(--rf-wine)]">
                      {s.suffix}
                    </span>
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-[var(--muted)]">
                    {s.label}
                  </p>
                </div>
              </RevealItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
