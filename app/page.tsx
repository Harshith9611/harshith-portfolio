import PortfolioHero from '@/components/portfolio-hero';
import AboutSection from '@/components/about-section';
import ProjectsSection from '@/components/projects-section';
import EducationSection from '@/components/education-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-black">
      {/* 1. Hero Fold */}
      <PortfolioHero />
      
      {/* 2. About Me Section (Answering: Who is this engineer? / How does this engineer think?) */}
      <AboutSection />

      {/* 3. Featured Work Section (Answering: What has this engineer built?) */}
      <ProjectsSection />

      {/* 4. Education & Certifications Section (Answering: What is the technical foundation?) */}
      <EducationSection />

      {/* 5. Contact Section (Answering: How can I hire this engineer?) */}
      <ContactSection />

      {/* 6. Footer */}
      <Footer />
    </div>
  );
}
