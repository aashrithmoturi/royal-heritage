"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/**
 * The Farmhouse scroll-reveal vocabulary.
 * Unique directions: "unfurl" (a royal banner rotating open on its top edge),
 * "iris" (a circular reveal like a spotlight opening), "wipe" (a regal left
 * to right curtain wipe), "lift" (rise + settle), "tilt" (swing into place).
 * Tuned with buttery springs — distinct from the sibling sites.
 */
type Direction = "unfurl" | "iris" | "wipe" | "lift" | "tilt" | "fade";

export function Reveal({
  children,
  direction = "lift",
  delay = 0,
  className,
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();

  const hidden = {
    unfurl: { opacity: 0, rotateX: reduce ? 0 : -78, y: reduce ? 0 : 30 },
    iris: {
      opacity: 0,
      clipPath: reduce ? "circle(150% at 50% 50%)" : "circle(0% at 50% 50%)",
      scale: reduce ? 1 : 1.05,
    },
    wipe: {
      opacity: 0,
      clipPath: reduce ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
    },
    lift: { opacity: 0, y: reduce ? 0 : 56, scale: reduce ? 1 : 0.97 },
    tilt: { opacity: 0, rotate: reduce ? 0 : -5, y: reduce ? 0 : 40 },
    fade: { opacity: 0 },
  };

  const visible = {
    unfurl: { opacity: 1, rotateX: 0, y: 0 },
    iris: { opacity: 1, clipPath: "circle(150% at 50% 50%)", scale: 1 },
    wipe: { opacity: 1, clipPath: "inset(0 0% 0 0)" },
    lift: { opacity: 1, y: 0, scale: 1 },
    tilt: { opacity: 1, rotate: 0, y: 0 },
    fade: { opacity: 1 },
  };

  const variants = {
    hidden: hidden[direction],
    visible: {
      ...visible[direction],
      transition:
        direction === "iris" || direction === "wipe"
          ? { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }
          : { type: "spring", stiffness: 84, damping: 15, mass: 0.7, delay },
    },
  } satisfies Variants;

  return (
    <motion.div
      className={className}
      style={{ transformPerspective: 1000 }}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

/** Stagger container — children using <RevealItem> cascade into view. */
export function Stagger({
  children,
  className,
  gap = 0.12,
}: {
  children: ReactNode;
  className?: string;
  gap?: number;
}) {
  const variants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: gap, delayChildren: 0.1 } },
  };
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  direction = "lift",
}: {
  children: ReactNode;
  className?: string;
  direction?: "lift" | "tilt" | "unfurl";
}) {
  const reduce = useReducedMotion();

  const hidden = {
    lift: { opacity: 0, y: reduce ? 0 : 46, scale: reduce ? 1 : 0.96 },
    tilt: { opacity: 0, rotate: reduce ? 0 : -4, y: reduce ? 0 : 36 },
    unfurl: { opacity: 0, rotateX: reduce ? 0 : -70, y: reduce ? 0 : 26 },
  }[direction];

  const visible = {
    lift: { opacity: 1, y: 0, scale: 1 },
    tilt: { opacity: 1, rotate: 0, y: 0 },
    unfurl: { opacity: 1, rotateX: 0, y: 0 },
  }[direction];

  const variants: Variants = {
    hidden,
    visible: {
      ...visible,
      transition: { type: "spring", stiffness: 110, damping: 17 },
    },
  };

  return (
    <motion.div
      className={className}
      style={{ transformPerspective: 1000 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
