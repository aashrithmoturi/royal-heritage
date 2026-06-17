"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/910000000000"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, rotate: -30 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 14, delay: 1 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      style={{ position: "fixed", right: "1.5rem", bottom: "1.5rem", left: "auto", zIndex: 50 }}
      className="rf-sheen inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 font-semibold text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,0.7)]"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="text-xl" />
      <span className="hidden sm:inline">WhatsApp</span>
    </motion.a>
  );
}
