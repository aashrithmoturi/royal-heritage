import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

// Regal display face — Cormorant Garamond reads like engraved heritage
// signage, deliberately distinct from the sibling sites.
const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

// Clean, airy geometric body face for crisp modern legibility.
const bodyFont = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thefarmhouse.in"),
  title: {
    default: "The Farmhouse | A Royal Heritage Farm Retreat",
    template: "%s | The Farmhouse",
  },
  description:
    "The Farmhouse — a regal heritage farm retreat where royal hospitality meets rolling green countryside. Luxurious stays, curated farm experiences, and timeless celebrations.",
  keywords: [
    "farmhouse",
    "luxury farmhouse stay",
    "royal farm retreat",
    "heritage farmhouse",
    "weekend getaway farmhouse",
    "farm stay",
  ],
  openGraph: {
    title: "The Farmhouse | A Royal Heritage Farm Retreat",
    description:
      "Where royal hospitality meets rolling green countryside. Luxurious stays and curated farm experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${displayFont.variable} ${bodyFont.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('rf-theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`,
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
