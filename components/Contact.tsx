"use client";

import { Reveal, Stagger, RevealItem } from "./motion/Reveal";
import {
  FaPhoneAlt as FaPhone,
  FaWhatsapp,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import { site, waLink, telLink, mailLink } from "../lib/site";

const details = [
  { icon: <FaPhone />, label: "Call", value: site.phoneDisplay, href: telLink() },
  { icon: <FaEnvelope />, label: "Email", value: site.email, href: mailLink(`Enquiry — ${site.name}`) },
  { icon: <FaMapMarkerAlt />, label: "Estate", value: site.address, href: site.mapDirections },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="rf-aurora relative overflow-hidden py-20 text-amber-50 sm:py-28"
    >
      <span className="rf-blob left-[6%] top-[16%] h-48 w-48 bg-[var(--rf-gold)]/30" />
      <span className="rf-blob right-[8%] bottom-[12%] h-56 w-56 bg-[#8a2d6b]/40" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal direction="lift" className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--rf-gold-soft)]">
            Begin Your Royal Escape
          </p>
          <h2 className="mb-4 text-4xl font-semibold sm:text-5xl">
            Reserve Your <span className="rf-gold-text italic">Retreat</span>
          </h2>
          <div className="rf-divider mx-auto w-40" />
        </Reveal>

        <Stagger className="grid gap-5 sm:grid-cols-3">
          {details.map((d) => (
            <RevealItem key={d.label} direction="lift">
              <a
                href={d.href}
                className="rf-tilt flex h-full flex-col items-center gap-3 rounded-2xl border border-[var(--rf-gold)]/25 bg-white/5 p-7 text-center backdrop-blur-sm"
              >
                <span className="text-2xl text-[var(--rf-gold)]">{d.icon}</span>
                <span className="text-xs uppercase tracking-[0.2em] text-amber-50/70">
                  {d.label}
                </span>
                <span className="font-medium text-amber-50">{d.value}</span>
              </a>
            </RevealItem>
          ))}
        </Stagger>

        <Reveal direction="lift" delay={0.15}>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
            <a
              href={telLink()}
              className="rf-sheen inline-flex items-center justify-center rounded-full bg-[var(--rf-gold)] px-8 py-3.5 font-semibold text-[#1e0635] shadow-lg transition hover:brightness-110"
            >
              <FaPhone className="mr-2 inline align-[-0.125em]" />
              Call to Book
            </a>
            <a
              href={waLink(`Hello ${site.name}! I'd like to book a stay.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="rf-sheen inline-flex items-center justify-center rounded-full border border-[var(--rf-gold)]/60 px-8 py-3.5 font-semibold text-amber-50 transition hover:bg-white/5"
            >
              <FaWhatsapp className="mr-2 inline align-[-0.125em]" />
              WhatsApp Us
            </a>
            <a
              href={mailLink(`Booking enquiry — ${site.name}`)}
              className="rf-sheen inline-flex items-center justify-center rounded-full border border-[var(--rf-gold)]/60 px-8 py-3.5 font-semibold text-amber-50 transition hover:bg-white/5"
            >
              <FaEnvelope className="mr-2 inline align-[-0.125em]" />
              Email Us
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="rf-sheen inline-flex items-center justify-center rounded-full border border-[var(--rf-gold)]/60 px-8 py-3.5 font-semibold text-amber-50 transition hover:bg-white/5"
            >
              <FaInstagram className="mr-2 inline align-[-0.125em]" />
              Follow
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
