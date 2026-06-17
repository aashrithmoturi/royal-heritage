"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "./motion/Reveal";
import { FaWhatsapp, FaPhoneAlt as FaPhone, FaEnvelope } from "react-icons/fa";
import { site, waLink, telLink, mailLink } from "../lib/site";

const stays = ["Royal Suite", "Garden Cottage", "Family Manor", "Full Estate"];

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    guests: "2",
    checkin: "",
    checkout: "",
    stay: stays[0],
    notes: "",
  });

  const summary = () =>
    `Hello ${site.name}! I'd like to reserve a royal retreat.\n\nName: ${
      form.name || "—"
    }\nStay: ${form.stay}\nGuests: ${form.guests}\nCheck-in: ${
      form.checkin || "—"
    }\nCheck-out: ${form.checkout || "—"}\nNotes: ${form.notes || "—"}`;

  const field =
    "w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[var(--foreground)] outline-none transition focus:border-[var(--rf-gold)] focus:ring-2 focus:ring-[var(--rf-gold)]/30";
  const labelCls = "mb-1.5 block text-sm font-medium text-[var(--heading)]";

  return (
    <Reveal direction="lift">
      <div className="rf-ornate mx-auto max-w-2xl rounded-[2rem] bg-[var(--surface)] p-7 shadow-2xl sm:p-10">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block sm:col-span-2">
            <span className={labelCls}>Full Name</span>
            <input
              className={field}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your good name"
            />
          </label>

          <label className="block">
            <span className={labelCls}>Lodging</span>
            <select
              className={field}
              value={form.stay}
              onChange={(e) => setForm({ ...form, stay: e.target.value })}
            >
              {stays.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className={labelCls}>Guests</span>
            <input
              type="number"
              min={1}
              className={field}
              value={form.guests}
              onChange={(e) => setForm({ ...form, guests: e.target.value })}
            />
          </label>

          <label className="block">
            <span className={labelCls}>Check-in</span>
            <input
              type="date"
              className={field}
              value={form.checkin}
              onChange={(e) => setForm({ ...form, checkin: e.target.value })}
            />
          </label>

          <label className="block">
            <span className={labelCls}>Check-out</span>
            <input
              type="date"
              className={field}
              value={form.checkout}
              onChange={(e) => setForm({ ...form, checkout: e.target.value })}
            />
          </label>

          <label className="block sm:col-span-2">
            <span className={labelCls}>Special Requests</span>
            <textarea
              rows={3}
              className={field}
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              placeholder="Celebrations, dietary needs, arrival time…"
            />
          </label>
        </div>

        <p className="mt-7 mb-3 text-center text-sm font-medium text-[var(--muted)]">
          Send your request the way you prefer
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          <motion.a
            href={waLink(summary())}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="rf-sheen flex items-center justify-center rounded-full bg-[var(--rf-gold)] px-5 py-3.5 font-semibold text-[#1e0635] shadow-lg transition hover:brightness-110"
          >
            <FaWhatsapp className="mr-2 inline align-[-0.125em]" />
            WhatsApp
          </motion.a>
          <motion.a
            href={mailLink(`Booking enquiry — ${site.name}`, summary())}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="rf-sheen flex items-center justify-center rounded-full border border-[var(--rf-gold)]/60 px-5 py-3.5 font-semibold text-[var(--heading)] transition hover:bg-[var(--rf-gold)]/10"
          >
            <FaEnvelope className="mr-2 inline align-[-0.125em]" />
            Email
          </motion.a>
          <motion.a
            href={telLink()}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="rf-sheen flex items-center justify-center rounded-full border border-[var(--rf-gold)]/60 px-5 py-3.5 font-semibold text-[var(--heading)] transition hover:bg-[var(--rf-gold)]/10"
          >
            <FaPhone className="mr-2 inline align-[-0.125em]" />
            Call
          </motion.a>
        </div>
        <p className="mt-3 text-center text-xs text-[var(--muted)]">
          We confirm every royal booking personally.
        </p>
      </div>
    </Reveal>
  );
}
