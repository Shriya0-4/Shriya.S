import React, { useState, useEffect } from "react";
import Navigation from "./Components/Navigation";
import HomeSection from "./Components/HomeSection";
import AboutSection from "./Components/AboutSection";
import ExperienceSection from "./Components/ExperienceSection";
import ProjectSection from "./Components/ProjectSection";
import ContactSection from "./Components/ContactSection";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="text-stone-900 relative overflow-hidden transition-all duration-1000"
      style={{
        background: `linear-gradient(135deg, 
          #fafaf9 ${Math.max(0, 100 - mousePosition.x * 0.3)}%, 
          #fed7aa ${Math.min(100, mousePosition.x * 0.5)}%, 
          #ea580c ${Math.min(100, mousePosition.y * 0.2)}%)`,
      }}
    >
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {activeSection === "home" && (
        <HomeSection
          mousePosition={mousePosition}
          scrollY={scrollY}
          setActiveSection={setActiveSection}
        />
      )}

      {activeSection === "about" && <AboutSection />}

      {activeSection === "experience" && <ExperienceSection />}

      {activeSection === "work" && <ProjectSection />}

      {activeSection === "contact" && <ContactSection />}
    </div>
  );
};

export default Portfolio;
