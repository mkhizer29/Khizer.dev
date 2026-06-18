import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Hero/HeroSection";
import PortfolioSections from "@/components/sections/PortfolioSections";
import MainProjectsSection from "@/components/sections/MainProjectsSection";
import TechnicalStudiesSection from "@/components/sections/TechnicalStudiesSection";
import DeploymentSection from "@/components/sections/DeploymentSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <PortfolioSections />
      <MainProjectsSection />
      <TechnicalStudiesSection />
      <DeploymentSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
