import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BookingForm from "../../components/BookingForm";
import WhatsAppButton from "../../components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Booking",
  description:
    "Reserve your royal retreat at The Farmhouse — choose your lodging, dates and let our concierge craft an unforgettable stay.",
};

export default function BookingPage() {
  return (
    <main className="overflow-x-clip">
      <Navbar />
      <section className="rf-aurora relative overflow-hidden py-16 text-center text-amber-50 sm:py-24">
        <span className="rf-blob left-[8%] top-[20%] h-44 w-44 bg-[var(--rf-gold)]/30" />
        <span className="rf-blob right-[10%] bottom-[14%] h-52 w-52 bg-[#8a2d6b]/40" />
        <div className="relative px-4">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--rf-gold-soft)]">
            Reservations
          </p>
          <h1 className="text-4xl font-semibold sm:text-6xl">
            Reserve Your <span className="rf-gold-text italic">Royal Retreat</span>
          </h1>
          <div className="rf-divider mx-auto mt-4 w-40" />
        </div>
      </section>

      <section className="bg-[var(--background)] py-16 sm:py-20">
        <div className="px-4 sm:px-6">
          <BookingForm />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
