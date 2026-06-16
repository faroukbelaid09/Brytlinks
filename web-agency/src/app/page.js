import Hero from "./components/Hero3DPreview";
import Services from "./components/Services";
import Works from "./components/Works";
import ClientReview from "./components/ClientReview";
import Process from "./components/Process";
import About from "./components/About";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Works />
      <ClientReview />
      <Process />
      <About />
      <CTA />
      <Footer />
    </main>
  );
}
