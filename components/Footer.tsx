import { FaPhoneAlt as FaPhone, FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";
import { site, waLink, telLink, mailLink } from "../lib/site";

const nav = [
  { href: "/#about", label: "Heritage" },
  { href: "/#rooms", label: "Rooms & Pricing" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#location", label: "Location" },
  { href: "/booking", label: "Booking" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1e0635] text-amber-50/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="mb-3 flex items-center gap-2 text-2xl font-semibold text-amber-50">
            <span className="text-[var(--rf-gold)]">♛</span>
            <span className="font-display">
              The <span className="rf-gold-text">Farmhouse</span>
            </span>
          </p>
          <p className="max-w-xs text-sm leading-relaxed text-amber-50/65">
            A royal heritage farm retreat where timeless hospitality meets the
            rolling green countryside.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--rf-gold-soft)]">
            Explore
          </h4>
          <ul className="space-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="rf-link transition hover:text-amber-50">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--rf-gold-soft)]">
            Reach Us
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={telLink()} className="transition hover:text-amber-50">
                <FaPhone className="mr-2 inline align-[-0.125em]" />{site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={waLink(`Hello ${site.name}!`)}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-amber-50"
              >
                <FaWhatsapp className="mr-2 inline align-[-0.125em]" />WhatsApp
              </a>
            </li>
            <li>
              <a href={mailLink(`Enquiry — ${site.name}`)} className="transition hover:text-amber-50">
                <FaEnvelope className="mr-2 inline align-[-0.125em]" />{site.email}
              </a>
            </li>
            <li>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-amber-50"
              >
                <FaInstagram className="mr-2 inline align-[-0.125em]" />Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="rf-divider" />
      <div className="mx-auto max-w-7xl px-4 py-6 text-center text-xs text-amber-50/55 sm:px-6">
        © {new Date().getFullYear()} {site.name} · Crafted with royal care.
      </div>
    </footer>
  );
}
