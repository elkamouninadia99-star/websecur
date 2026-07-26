import Navbar from "@/components/Navbar";
import Hero from "@/components/hero/Hero";
import Features from "@/components/features/Features";
import Services from "@/components/services/Services";
import Process from "@/components/Process";
import WhyChooseUs from "@/components/WhyChooseUs";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return <><a className="skip-link" href="#main-content">Skip to content</a><Navbar /><main id="main-content"><Hero /><Features /><Services /><Process /><WhyChooseUs /><About /><Testimonials /><Contact /></main><Footer /></>;
}
