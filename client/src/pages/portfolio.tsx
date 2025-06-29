import Navigation from "@/components/portfolio/navigation";
import HeroSection from "@/components/portfolio/hero-section";
import AboutSection from "@/components/portfolio/about-section";
import ProjectsSection from "@/components/portfolio/projects-section";
import FreelanceSection from "@/components/portfolio/freelance-section";
import TestimonialsSection from "@/components/portfolio/testimonials-section";
import ResumeSection from "@/components/portfolio/resume-section";
import ContactSection from "@/components/portfolio/contact-section";
import Footer from "@/components/portfolio/footer";

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <FreelanceSection />
      <TestimonialsSection />
      <ResumeSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
