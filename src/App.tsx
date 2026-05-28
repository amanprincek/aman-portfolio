import { useState, useEffect } from 'react';
import { AccentColor } from './types';
import { accentColors } from './data';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import BackgroundShapes from './components/BackgroundShapes';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';
import Certifications from './components/Certifications';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeCustomizer from './components/ThemeCustomizer';

export default function App() {
  const [currentAccent, setCurrentAccent] = useState<AccentColor>('cyan');
  const [globalResumeOpen, setGlobalResumeOpen] = useState(false);

  // Retrieve initial customized color choice from localStorage
  useEffect(() => {
    const savedAccent = localStorage.getItem('portfolio-accent-color') as AccentColor;
    if (savedAccent && accentColors.some((c) => c.id === savedAccent)) {
      setCurrentAccent(savedAccent);
    }
  }, []);

  // Save changes to localStorage on accent shift
  const handleAccentChange = (accent: AccentColor) => {
    setCurrentAccent(accent);
    localStorage.setItem('portfolio-accent-color', accent);
  };

  const activeAccentConfig = accentColors.find((c) => c.id === currentAccent) || accentColors[0];

  return (
    <div className="relative font-sans text-slate-200 bg-[#0c0d10] leading-normal select-none">
      
      {/* Custom Mouse Cursor with responsive momentum lagging */}
      <CustomCursor colorHex={activeAccentConfig.colorHex} />

      {/* Floating Theme customization boards */}
      <ThemeCustomizer currentAccent={currentAccent} onAccentChange={handleAccentChange} />

      {/* Rotating and blowing backing elements */}
      <BackgroundShapes colorHex={activeAccentConfig.colorHex} />

      {/* Sticky Top Header navigation bar */}
      <Navbar colorHex={activeAccentConfig.colorHex} />

      {/* Core sections grids rendering */}
      <main className="relative z-10">
        
        {/* Section 1: Home Lander */}
        <Home colorHex={activeAccentConfig.colorHex} />

        {/* Section 2: About copywriting information */}
        <About 
          colorHex={activeAccentConfig.colorHex} 
          onOpenResume={() => {
            // Locate print triggering or virtual view modal via scrolling anchors
            const heroButton = document.querySelector('.home__cv') as HTMLButtonElement;
            if (heroButton) heroButton.click();
          }} 
        />

        {/* Section 3: Projects grids with drawers sliders */}
        <Projects colorHex={activeAccentConfig.colorHex} />

        {/* Section 4: Work/Education split timelines path */}
        <WorkExperience colorHex={activeAccentConfig.colorHex} />

        {/* Section 4.5: Licenses & Certifications list */}
        <Certifications colorHex={activeAccentConfig.colorHex} />

        {/* Section 5: Services cards deck layout */}
        <Services colorHex={activeAccentConfig.colorHex} />

        {/* Section 6: Client Reviews and rating boards */}
        <Testimonials colorHex={activeAccentConfig.colorHex} />

        {/* Section 7: Interaction contact forms and copies tags */}
        <Contact colorHex={activeAccentConfig.colorHex} />

      </main>

      {/* Footer layout block */}
      <Footer colorHex={activeAccentConfig.colorHex} />

    </div>
  );
}
