"use client";

import { Reveal, Stagger, RevealItem } from "./motion/Reveal";
import SmartImage from "./SmartImage";

const shots = [
  { src: "/images/gallery-1.jpg", alt: "Canopied royal suite", span: "lg:col-span-2 lg:row-span-2", label: "Suite photo" },
  { src: "/images/gallery-2.jpg", alt: "Lantern-lit courtyard", span: "", label: "Courtyard photo" },
  { src: "/images/gallery-3.jpg", alt: "Orchard pathway", span: "", label: "Orchard photo" },
  { src: "/images/gallery-4.jpg", alt: "Lily pond at dusk", span: "lg:col-span-2", label: "Pond photo" },
  { src: "/images/gallery-5.jpg", alt: "Farm-to-table feast", span: "", label: "Feast photo" },
  { src: "/images/gallery-6.jpg", alt: "Bonfire under the stars", span: "", label: "Bonfire photo" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-[var(--background)] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal direction="lift" className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--rf-wine)]">
            The Estate in Frames
          </p>
          <h2 className="mb-4 text-4xl font-semibold text-[var(--heading)] sm:text-5xl">
            A <span className="rf-gold-text italic">Glimpse</span> of Paradise
          </h2>
          <div className="rf-divider mx-auto w-40" />
        </Reveal>

        <Stagger
          gap={0.12}
          className="rf-stage grid auto-rows-[200px] grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4"
        >
          {shots.map((s) => (
            <RevealItem key={s.src} direction="lift" className={s.span}>
              <div className="rf-group rf-tilt relative h-full w-full overflow-hidden rounded-2xl shadow-lg">
                <SmartImage
                  src={s.src}
                  alt={s.alt}
                  label={s.label}
                  className="rf-img object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <span className="rf-veil" />
                <div className="absolute inset-x-0 bottom-0 z-10 translate-y-2 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="font-medium text-amber-50">{s.alt}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
