import AboutMeSection from "@/custom_components/aboutMeSection";
import ContactSection from "@/custom_components/contactSection";
import Footer from "@/custom_components/footer";
import HeroSection from "@/custom_components/heroSection";
import Navbar from "@/custom_components/navbar";
import ProfilesSection from "@/custom_components/profilesSection";
import ProjectsSection from "@/custom_components/projectsSection";
import SkillsSection from "@/custom_components/skillsSection";
import StarBackground from "@/custom_components/starBackground";
import ThemeToggle from "@/custom_components/themeToggle";
import { useRef } from "react";

const Home: React.FC = () => {
  const contactRef = useRef<HTMLElement | null>(null);
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* theme toggle */}
      <ThemeToggle />
      {/* background effects */}
      <StarBackground />
      {/* navbar */}
      <Navbar />
      {/* main content */}
      <main>
        <HeroSection />
        <AboutMeSection sectionRef={contactRef} />
        <SkillsSection />
        <ProjectsSection />
        <ProfilesSection />
        <ContactSection sectionRef={contactRef} />
      </main>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default Home;
