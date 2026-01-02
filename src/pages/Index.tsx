import Header from "@/components/project/Header";
import HeroSection from "@/components/project/HeroSection";
import OverviewSection from "@/components/project/OverviewSection";
import FeaturesSection from "@/components/project/FeaturesSection";
import TechStackSection from "@/components/project/TechStackSection";
import GallerySection from "@/components/project/GallerySection";
import ChallengesSection from "@/components/project/ChallengesSection";
import ResultsSection from "@/components/project/ResultsSection";
import CTASection from "@/components/project/CTASection";
import Footer from "@/components/project/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <HeroSection />
        <OverviewSection />
        <FeaturesSection />
        <TechStackSection />
        <GallerySection />
        <ChallengesSection />
        <ResultsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
