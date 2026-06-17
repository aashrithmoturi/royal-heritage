"use client";

import { Reveal, Stagger, RevealItem } from "./motion/Reveal";
import SmartImage from "./SmartImage";
import { FaWhatsapp, FaPhoneAlt as FaPhone, FaEnvelope } from "react-icons/fa";
import { site, waLink, telLink, mailLink } from "../lib/site";

type Room = {
  name: string;
  img: string;
  label: string;
  price: string;
  unit: string;
  tag?: string;
  features: string[];
};

const rooms: Room[] = [
  {
    name: "Royal Suite",
    img: "/images/room-1.jpg",
    label: "Suite photo",
    price: "₹9,500",
    unit: "/ night",
    tag: "Most Loved",
    features: ["King canopy bed", "Private balcony", "Butler chai service", "Sleeps 2"],
  },
  {
    name: "Garden Cottage",
    img: "/images/room-2.jpg",
    label: "Cottage photo",
    price: "₹6,800",
    unit: "/ night",
    features: ["Orchard view", "Outdoor sit-out", "Breakfast included", "Sleeps 2–3"],
  },
  {
    name: "Family Manor",
    img: "/images/room-3.jpg",
    label: "Manor photo",
    price: "₹14,500",
    unit: "/ night",
    tag: "For Groups",
    features: ["Two bedrooms", "Living lounge", "Bonfire access", "Sleeps 4–6"],
  },
  {
    name: "Full Estate",
    img: "/images/room-4.jpg",
    label: "Estate photo",
    price: "On request",
    unit: "",
    features: ["Whole property", "Event-ready lawns", "Dedicated staff", "Sleeps 20+"],
  },
];

export default function Rooms() {
  return (
    <section id="rooms" className="bg-[var(--background)] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal direction="lift" className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--rf-wine)]">
            Stay With Us
          </p>
          <h2 className="mb-4 text-4xl font-semibold text-[var(--heading)] sm:text-5xl">
            Rooms &amp; <span className="rf-gold-text italic">Pricing</span>
          </h2>
          <div className="rf-divider mx-auto w-40" />
        </Reveal>

        <Stagger gap={0.1} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {rooms.map((r) => {
            const enquiry = `Hello ${site.name}! I'd like to book the ${r.name} (${r.price} ${r.unit}).`;
            return (
              <RevealItem key={r.name} direction="unfurl">
                <div className="rf-tilt flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-lg">
                  <div className="rf-group relative aspect-[4/3] overflow-hidden">
                    <SmartImage
                      src={r.img}
                      alt={r.name}
                      label={r.label}
                      className="rf-img object-cover"
                      sizes="(max-width: 1024px) 100vw, 25vw"
                    />
                    <span className="rf-veil" />
                    {r.tag && (
                      <span className="absolute left-3 top-3 z-10 rounded-full bg-[var(--rf-gold)] px-3 py-1 text-xs font-semibold text-[#1e0635] shadow">
                        {r.tag}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-2xl font-semibold text-[var(--heading)]">
                      {r.name}
                    </h3>
                    <p className="mt-1 mb-4">
                      <span className="text-2xl font-semibold text-[var(--rf-wine)]">
                        {r.price}
                      </span>
                      <span className="ml-1 text-sm text-[var(--muted)]">
                        {r.unit}
                      </span>
                    </p>

                    <ul className="mb-5 space-y-1.5 text-sm text-[var(--muted)]">
                      {r.features.map((f) => (
                        <li key={f} className="flex items-center gap-2">
                          <span className="text-[var(--rf-gold)]">✦</span>
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto flex items-center gap-2">
                      <a
                        href={waLink(enquiry)}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`WhatsApp to book ${r.name}`}
                        className="flex flex-1 items-center justify-center rounded-full bg-[var(--rf-gold)] py-2.5 text-sm font-semibold text-[#1e0635] transition hover:brightness-110"
                      >
                        <FaWhatsapp className="mr-1.5 inline align-[-0.125em]" />
                        Book
                      </a>
                      <a
                        href={telLink()}
                        aria-label={`Call to book ${r.name}`}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--rf-gold)]/60 text-[var(--heading)] transition hover:bg-[var(--rf-gold)]/10"
                      >
                        <FaPhone />
                      </a>
                      <a
                        href={mailLink(`Booking — ${r.name}`, enquiry)}
                        aria-label={`Email to book ${r.name}`}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--rf-gold)]/60 text-[var(--heading)] transition hover:bg-[var(--rf-gold)]/10"
                      >
                        <FaEnvelope />
                      </a>
                    </div>
                  </div>
                </div>
              </RevealItem>
            );
          })}
        </Stagger>

        <p className="mt-8 text-center text-sm text-[var(--muted)]">
          Tariffs are indicative and may vary on weekends &amp; festivals. Reach us for the best rate.
        </p>
      </div>
    </section>
  );
}
