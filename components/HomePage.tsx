
"use client";

import Nav from "./Nav";

import Hero from "./home/Hero";
import Logos from "./home/Logos";
import Offer from "./home/Offer";
import Value from "./home/Value";
import HowItWorks from "./home/HowItWorks";
import Testimonials from "./home/Testimonials";
import WhyUs from "./home/WhyUs";
import FinalCTA from "./home/FinalCTA";
import Footer from "./home/Footer";

export default function HomePage() {
  return (
    <main className="bg-[#050505] overflow-hidden">
      <Nav />

      <Hero />
      <Logos />
      <Offer />
      <Value />
      <HowItWorks />
      <Testimonials />
      <WhyUs />
      <FinalCTA />
      <Footer />
    </main>
  );
}

