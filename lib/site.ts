// Central place for contact / booking details so every section stays in sync.
// Replace these placeholders with the real details.

export const site = {
  name: "The Farmhouse",
  // Booking channels
  phoneDisplay: "+91 00000 00000",
  phone: "+910000000000", // tel: target
  whatsapp: "910000000000", // wa.me target
  email: "stay@thefarmhouse.in",
  instagram: "https://instagram.com",
  // Location
  address: "Heritage Greens, Countryside",
  // Google Maps embed src (replace with your own place embed URL).
  mapEmbed:
    "https://www.google.com/maps?q=Hyderabad&output=embed",
  mapDirections: "https://www.google.com/maps/dir/?api=1&destination=Hyderabad",
  googleReviewsUrl: "https://www.google.com/maps",
} as const;

export const waLink = (text?: string) =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const telLink = () => `tel:${site.phone}`;

export const mailLink = (subject?: string, body?: string) =>
  `mailto:${site.email}${
    subject || body
      ? `?${[
          subject ? `subject=${encodeURIComponent(subject)}` : "",
          body ? `body=${encodeURIComponent(body)}` : "",
        ]
          .filter(Boolean)
          .join("&")}`
      : ""
  }`;
