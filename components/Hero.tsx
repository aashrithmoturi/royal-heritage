"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

// Deterministic gold embers (SSR-safe) that orbit & float in the hero.
const embers = [
  { left: "12%", top: "30%", size: 5, delay: 0, dur: 7 },
  { left: "24%", top: "66%", size: 3, delay: 2.4, dur: 9 },
  { left: "38%", top: "20%", size: 6, delay: 1, dur: 8 },
  { left: "52%", top: "74%", size: 4, delay: 3.2, dur: 10 },
  { left: "63%", top: "26%", size: 7, delay: 0.7, dur: 7.5 },
  { left: "72%", top: "60%", size: 3, delay: 4, dur: 9.5 },
  { left: "82%", top: "34%", size: 5, delay: 1.7, dur: 8.5 },
  { left: "90%", top: "68%", size: 4, delay: 2.1, dur: 9 },
];

const title = ["The", "Farmhouse"];

export default function Hero() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.16, delayChildren: 0.25 } },
  };
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 30, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 88, damping: 16 },
    },
  };
  const word: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 60, rotateX: reduce ? 0 : -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { type: "spring", stiffness: 70, damping: 14 },
    },
  };

  return (
    <section className="rf-aurora relative flex min-h-[92vh] items-center justify-center overflow-hidden px-4 text-center">
      {/* Royal vignette for depth */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 35%, transparent 40%, rgba(12,4,28,0.78) 100%)",
        }}
      />

      {/* Drifting royal blobs + breathing halo */}
      <span className="rf-blob left-[8%] top-[16%] h-44 w-44 bg-[#8a2d6b]/50" />
      <span
        className="rf-blob right-[10%] bottom-[14%] h-56 w-56 bg-[var(--rf-gold)]/40"
        style={{ animationDelay: "3s" }}
      />
      <span className="rf-halo pointer-events-none absolute left-1/2 top-1/2 h-[48vmin] w-[48vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--rf-gold)]/25 blur-3xl" />

      {/* Orbiting embers around the centre */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-0 w-0 sm:block">
        {[140, 220, 300].map((r, i) => (
          <span
            key={r}
            className="rf-orbit absolute rounded-full bg-amber-200"
            style={
              {
                "--rf-r": `${r}px`,
                width: 6 - i,
                height: 6 - i,
                animationDuration: `${16 + i * 6}s`,
                boxShadow: "0 0 12px 3px rgba(232,205,122,0.8)",
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      {/* Floating embers */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {embers.map((e, i) => (
          <span
            key={i}
            className={reduce ? "absolute rounded-full bg-amber-200" : "rf-float absolute rounded-full bg-amber-200"}
            style={{
              left: e.left,
              top: e.top,
              width: e.size,
              height: e.size,
              animationDelay: `${e.delay}s`,
              animationDuration: `${e.dur}s`,
              boxShadow: "0 0 10px 2px rgba(232,205,122,0.75)",
            }}
          />
        ))}
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-3xl"
      >
        <motion.p
          variants={fadeUp}
          className="mb-5 text-xs font-medium uppercase tracking-[0.4em] text-[var(--rf-gold-soft)] sm:text-sm"
        >
          A Royal Heritage Farm Retreat
        </motion.p>

        <h1 className="mb-4 flex flex-wrap items-center justify-center gap-x-4 text-5xl font-semibold text-amber-50 drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)] sm:text-7xl md:text-8xl">
          {title.map((w, i) => (
            <motion.span
              key={w}
              variants={word}
              style={{ transformPerspective: 800 }}
              className={i === 1 ? "rf-gold-text font-display italic" : "font-display"}
            >
              {w}
            </motion.span>
          ))}
        </h1>

        <motion.div variants={fadeUp} className="rf-divider mx-auto mb-6 w-52" />

        <motion.p
          variants={fadeUp}
          className="mx-auto mb-9 max-w-xl text-lg text-amber-50/85 sm:text-xl"
        >
          Where royal hospitality meets rolling green countryside — luxurious
          stays, curated farm experiences, and celebrations worthy of legend.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="/booking"
            className="rf-sheen rounded-full bg-[var(--rf-gold)] px-8 py-3.5 font-semibold tracking-wide text-[#1e0635] shadow-[0_12px_30px_-10px_rgba(212,175,55,0.7)] transition hover:brightness-110"
          >
            Reserve Your Retreat
          </a>
          <a
            href="https://wa.me/910000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="rf-sheen inline-flex items-center justify-center rounded-full border border-[var(--rf-gold)]/60 px-8 py-3.5 font-semibold tracking-wide text-amber-50 transition hover:bg-white/5"
          >
            <FaWhatsapp className="mr-2 inline align-[-0.125em]" />
            Enquire Now
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: reduce ? 0 : [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-10 w-6 items-start justify-center rounded-full border border-amber-50/40 p-1"
        >
          <span className="h-2 w-1 rounded-full bg-[var(--rf-gold)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
