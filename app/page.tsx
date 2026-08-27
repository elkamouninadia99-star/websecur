import Navbar from "@/components/Navbar";
import Hero from "@/components/hero/Hero";
import Features from "@/components/features/Features";
import Services from "@/components/services/Services";
import Process from "@/components/Process";
import WhyChooseUs from "@/components/WhyChooseUs";
import Work from "@/components/Work";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PremiumEffects from "@/components/PremiumEffects";

export default function Home() {
  return <><PremiumEffects /><a className="skip-link" href="#main-content">Skip to content</a><Navbar /><main id="main-content" className="relative z-10"><Hero /><Features /><Services /><Process /><WhyChooseUs /><Work /><About /><Contact /></main><Footer /></>;
}
