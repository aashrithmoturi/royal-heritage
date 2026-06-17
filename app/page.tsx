import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Rooms from "../components/Rooms";
import Experiences from "../components/Experiences";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import GoogleReviews from "../components/GoogleReviews";
import LocationMap from "../components/LocationMap";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <Navbar />
      <Hero />
      <About />
      <Rooms />
      <Experiences />
      <Gallery />
      <Testimonials />
      <GoogleReviews />
      <LocationMap />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
