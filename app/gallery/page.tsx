import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Gallery from "../../components/Gallery";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A visual journey through The Farmhouse — royal suites, lantern-lit courtyards, orchards, lily ponds and starlit feasts.",
};

export default function GalleryPage() {
  return (
    <main className="overflow-x-clip">
      <Navbar />
      <div className="rf-aurora py-16 text-center text-amber-50">
        <h1 className="px-4 text-4xl font-semibold sm:text-6xl">
          The <span className="rf-gold-text italic">Gallery</span>
        </h1>
        <p className="mt-3 text-amber-50/80">Every corner, a royal frame.</p>
      </div>
      <Gallery />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
