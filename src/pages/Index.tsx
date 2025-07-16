import { ThemeToggle } from "@/components/ThemeToggle";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { DashboardSection } from "@/components/DashboardSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <DashboardSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
