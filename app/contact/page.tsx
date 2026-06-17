import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach The Farmhouse to plan your royal heritage farm retreat — call, WhatsApp or email our concierge.",
};

export default function ContactPage() {
  return (
    <main className="overflow-x-clip">
      <Navbar />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
