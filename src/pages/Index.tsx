import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { InteractiveCursor } from '@/components/ui/interactive-cursor';
import { Navigation } from '@/components/portfolio/navigation';
import { HeroSection } from '@/components/portfolio/hero-section';
import { AboutSection } from '@/components/portfolio/about-section';
import { ExperienceSection } from '@/components/portfolio/experience-section';
import { SkillsSection } from '@/components/portfolio/skills-section';
import { ContactSection } from '@/components/portfolio/contact-section';
import { ProjectsSection } from '@/components/portfolio/projects-section';
import { Footer } from '@/components/portfolio/footer';

const Index = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-background"
      >
        <InteractiveCursor />
        <Navigation />
        
        <main>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
