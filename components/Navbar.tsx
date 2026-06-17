"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/#about", label: "Heritage" },
  { href: "/#rooms", label: "Rooms" },
  { href: "/#experiences", label: "Experiences" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#location", label: "Location" },
  { href: "/booking", label: "Booking" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 78, damping: 15 }}
      className={`sticky top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-[#1e0635]/90 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.6)] backdrop-blur"
          : "bg-gradient-to-b from-[#1e0635]/85 via-[#1e0635]/40 to-transparent backdrop-blur-[2px]"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <motion.a
          href="/"
          whileHover={{ scale: 1.04 }}
          className="flex items-center gap-2 text-2xl font-semibold tracking-wide text-amber-50 sm:text-3xl"
        >
          <span className="rf-pulse text-[var(--rf-gold)]">♛</span>
          <span className="font-display">
            The <span className="rf-gold-text">Farmhouse</span>
          </span>
        </motion.a>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="text-2xl text-amber-50 focus:outline-none"
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rf-link text-sm font-medium uppercase tracking-[0.18em] text-amber-50/85 transition hover:text-amber-50"
            >
              {l.label}
            </a>
          ))}
          <ThemeToggle />
          <a
            href="/booking"
            className="rf-sheen rounded-full border border-[var(--rf-gold)]/70 bg-[var(--rf-gold)]/15 px-5 py-2 text-sm font-semibold tracking-wide text-amber-100 transition hover:bg-[var(--rf-gold)]/25"
          >
            Reserve
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden border-t border-[var(--rf-gold)]/20 bg-[#1e0635]/97 lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ x: -24, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06 }}
                  className="py-2 text-sm font-medium uppercase tracking-[0.18em] text-amber-50/85 transition hover:text-amber-50"
                >
                  {l.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
