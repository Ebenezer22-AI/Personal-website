/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Projects } from './components/Projects.tsx';
import { Skills } from './components/Skills.tsx';
import { FunFacts } from './components/FunFacts.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';
import { GuideModal } from './components/GuideModal.tsx';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  // Setup intersection observer to highlight current active section in navigation
  useEffect(() => {
    const sectionIds = ['home', 'about', 'projects', 'skills', 'fun-facts', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id === 'about' ? 'home' : id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 flex flex-col font-sans selection:bg-indigo-600/30 selection:text-indigo-200">
      {/* 1. Header/Nav with name and simple nav links */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenGuide={() => setIsGuideOpen(true)}
      />

      <main className="flex-1">
        {/* 2. Hero Section with [Your Name], [Your Short Introduction], View My Projects button, Profile Image Placeholder */}
        <Hero
          onViewProjects={() => handleNavigate('projects')}
          onOpenGuide={() => setIsGuideOpen(true)}
        />

        {/* 2b. About Me Section using [Write about yourself here], My Interests: [Your Interests], My Goals: [Your Goals] */}
        <About />

        {/* 3. Projects Section - 10 empty cards with image, title, description, technologies, view live app, view code */}
        <Projects />

        {/* 4. Skills Section - Simple list or grid of 10 skill tags */}
        <Skills />

        {/* 5. Fun & Creative page about me - 3 fun facts, hobbies, favorite things, media image & video placeholders */}
        <FunFacts />

        {/* 6. Contact Page - Email: [Your Email], GitHub: [Your GitHub URL] */}
        <Contact />
      </main>

      {/* 7. Footer - Contact links (email, GitHub) */}
      <Footer onNavigate={handleNavigate} />

      {/* Interactive Guide & Snippet Helper Modal */}
      <GuideModal isOpen={isGuideOpen} onClose={() => setIsGuideOpen(false)} />
    </div>
  );
}
