"use client";

import { Reveal } from "./motion/Reveal";
import {
  FaPhoneAlt as FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
  FaMapMarkerAlt,
  FaDirections,
} from "react-icons/fa";
import { site, waLink, telLink, mailLink } from "../lib/site";

export default function LocationMap() {
  const channels = [
    { icon: <FaPhone />, label: "Call", value: site.phoneDisplay, href: telLink() },
    { icon: <FaWhatsapp />, label: "WhatsApp", value: "Chat with us", href: waLink(`Hello ${site.name}!`) },
    { icon: <FaEnvelope />, label: "Email", value: site.email, href: mailLink(`Enquiry — ${site.name}`) },
    { icon: <FaInstagram />, label: "Instagram", value: "Follow us", href: site.instagram },
  ];

  return (
    <section id="location" className="bg-[var(--background)] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal direction="lift" className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--rf-wine)]">
            Find Your Way
          </p>
          <h2 className="mb-4 text-4xl font-semibold text-[var(--heading)] sm:text-5xl">
            Reach the <span className="rf-gold-text italic">Estate</span>
          </h2>
          <div className="rf-divider mx-auto w-40" />
        </Reveal>

        <div className="grid items-stretch gap-8 lg:grid-cols-2">
          {/* Map */}
          <Reveal direction="iris">
            <div className="rf-ornate relative h-[320px] overflow-hidden rounded-[2rem] shadow-2xl sm:h-[420px] lg:h-full">
              <iframe
                title={`${site.name} location map`}
                src={site.mapEmbed}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>

          {/* Details + channels */}
          <Reveal direction="wipe">
            <div className="flex h-full flex-col justify-center rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-7 shadow-xl sm:p-10">
              <p className="flex items-start gap-3 text-lg text-[var(--foreground)]">
                <FaMapMarkerAlt className="mt-1 text-[var(--rf-gold)]" />
                <span>
                  <span className="block font-semibold text-[var(--heading)]">
                    {site.name}
                  </span>
                  {site.address}
                </span>
              </p>

              <a
                href={site.mapDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="rf-sheen mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[var(--rf-gold)] px-6 py-3 font-semibold text-[#1e0635] shadow-lg transition hover:brightness-110"
              >
                <FaDirections />
                Get Directions
              </a>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {channels.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="rf-tilt flex items-center gap-3 rounded-2xl border border-[var(--border)] p-4 transition hover:border-[var(--rf-gold)]"
                  >
                    <span className="text-xl text-[var(--rf-gold)]">{c.icon}</span>
                    <span className="min-w-0">
                      <span className="block text-xs uppercase tracking-wide text-[var(--muted)]">
                        {c.label}
                      </span>
                      <span className="block truncate text-sm font-medium text-[var(--heading)]">
                        {c.value}
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
