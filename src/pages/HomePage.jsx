import Navbar from "../components/Navbar";
import AboutSection from "../sections/AboutSection";
import CtaSection from "../sections/CtaSection";
import ExpertiseSection from "../sections/ExpertiseSection";
import FooterSection from "../sections/FooterSection";
import HeroSection from "../sections/HeroSection";
import ProductSection from "../sections/ProductSection";
import ServicesSection from "../sections/ServicesSection";

function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-midnight text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-hero-radial" />
      <div className="pointer-events-none absolute left-1/2 top-40 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-electric-500/10 blur-[160px]" />

      <Navbar />

      <main className="relative">
        <HeroSection />
        <ServicesSection />
        <ProductSection />
        <AboutSection />
        <ExpertiseSection />
        <CtaSection />
      </main>

      <FooterSection />
    </div>
  );
}

export default HomePage;
