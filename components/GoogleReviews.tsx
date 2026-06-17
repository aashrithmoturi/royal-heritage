"use client";

import { Reveal, Stagger, RevealItem } from "./motion/Reveal";
import { site } from "../lib/site";

const GoogleG = () => (
  <svg width="22" height="22" viewBox="0 0 48 48" aria-hidden>
    <path
      fill="#FFC107"
      d="M43.6 20.5H42V20H24v8h11.3C33.7 32.4 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.1 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 20-8.9 20-20 0-1.3-.1-2.3-.4-3.5z"
    />
    <path
      fill="#FF3D00"
      d="M6.3 14.7l6.6 4.8C14.7 16 19 13 24 13c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.1 29.6 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
    />
    <path
      fill="#4CAF50"
      d="M24 44c5.2 0 10-2 13.6-5.2l-6.3-5.3C29.2 35 26.7 36 24 36c-5.3 0-9.7-3.6-11.3-8.4l-6.5 5C9.6 39.6 16.2 44 24 44z"
    />
    <path
      fill="#1976D2"
      d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4 5.5l6.3 5.3C41 36.9 44 31 44 24c0-1.3-.1-2.3-.4-3.5z"
    />
  </svg>
);

const reviews = [
  { name: "Aarav Mehta", initial: "A", when: "2 weeks ago", stars: 5, text: "Felt like royalty from the moment we arrived. Sunrise chai on the balcony was magical." },
  { name: "Divya Rao", initial: "D", when: "1 month ago", stars: 5, text: "Spotless suites, warm staff and the most beautiful lantern-lit dinners. Will return." },
  { name: "Karthik N.", initial: "K", when: "1 month ago", stars: 5, text: "Perfect family getaway. Kids loved the bullock rides; we loved the calm by the pond." },
  { name: "Sneha & Rohan", initial: "S", when: "2 months ago", stars: 5, text: "Hosted our anniversary here — they made it feel like a maharaja's celebration." },
  { name: "Imran Q.", initial: "I", when: "3 months ago", stars: 4, text: "Gorgeous estate and great food. Truly unplugged from the city noise. Highly recommend." },
  { name: "Lakshmi P.", initial: "L", when: "3 months ago", stars: 5, text: "Wellness mornings and Ayurveda were the highlight. Left feeling completely renewed." },
];

const Stars = ({ n }: { n: number }) => (
  <span className="text-[#fbbc04]" aria-label={`${n} star rating`}>
    {"★".repeat(n)}
    <span className="text-[var(--muted)]/40">{"★".repeat(5 - n)}</span>
  </span>
);

export default function GoogleReviews() {
  return (
    <section id="reviews" className="bg-[var(--surface-soft)] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal direction="lift" className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--rf-wine)]">
            Loved on Google
          </p>
          <h2 className="mb-4 text-4xl font-semibold text-[var(--heading)] sm:text-5xl">
            What Guests <span className="rf-gold-text italic">Say</span>
          </h2>

          <div className="mt-6 inline-flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-6 py-4 shadow-md">
            <GoogleG />
            <div className="text-left">
              <p className="flex items-center gap-2 font-semibold text-[var(--heading)]">
                4.9 <Stars n={5} />
              </p>
              <p className="text-xs text-[var(--muted)]">Based on 180+ Google reviews</p>
            </div>
          </div>
        </Reveal>

        <Stagger gap={0.08} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <RevealItem key={r.name} direction="lift">
              <div className="rf-tilt flex h-full flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-md">
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[var(--rf-royal)] to-[var(--rf-wine)] font-semibold text-amber-50">
                    {r.initial}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate font-semibold text-[var(--heading)]">
                      {r.name}
                    </p>
                    <p className="text-xs text-[var(--muted)]">{r.when}</p>
                  </div>
                  <span className="ml-auto opacity-80">
                    <GoogleG />
                  </span>
                </div>
                <div className="mb-2 text-sm">
                  <Stars n={r.stars} />
                </div>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  {r.text}
                </p>
              </div>
            </RevealItem>
          ))}
        </Stagger>

        <div className="mt-10 text-center">
          <a
            href={site.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rf-sheen inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-3 font-semibold text-[var(--heading)] shadow transition hover:border-[var(--rf-gold)]"
          >
            <GoogleG />
            Read all reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
