"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/hero/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <About />
      <Contact />
      <Footer />
    </>
  );
}