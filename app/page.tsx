import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { TrustBar } from "./components/TrustBar";
import { About } from "./components/About";
import { Packages } from "./components/Packages";
import { Benefits } from "./components/Benefits";
import { HowItWorks } from "./components/HowItWorks";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Packages />
        <Benefits />
        <HowItWorks />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
