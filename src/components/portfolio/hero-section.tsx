import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown, ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

export const HeroSection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.scrollY > 200);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    // Initialize state on mount
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBackToTop = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-90" />
      <div className="absolute inset-0 bg-background/20" />
      
      {/* Parallax floating elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/10 blur-xl"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-purple-500/10 blur-xl"
        animate={{
          y: [0, 20, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-6xl md:text-8xl font-bold text-gradient mb-4">
              Pramod Lohra
            </h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className="text-2xl md:text-4xl font-medium text-foreground/90 mb-6">
              Full-Stack Software Developer
            </h2>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Crafting digital experiences with modern technologies. 
              Passionate about clean code, user experience, and innovative solutions.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col items-center space-y-8">
            <div className="flex space-x-6">
              <motion.a
                href="https://github.com/pmdkr"
                target="_blank"
                rel="noopener noreferrer"
                data-interactive
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 transition-smooth hover:shadow-glow"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/pmdkr"
                target="_blank"
                rel="noopener noreferrer"
                data-interactive
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 transition-smooth hover:shadow-glow"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="mailto:pramodkrlohra@gmail.com"
                data-interactive
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 transition-smooth hover:shadow-glow"
              >
                <Mail size={24} />
              </motion.a>
            </div>

            <Button
              onClick={scrollToContact}
              data-interactive
              size="lg"
              className="bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-4 text-lg font-medium shadow-elegant hover:shadow-glow transition-smooth group"
            >
              Let's Work Together
              <motion.div
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="ml-2"
              >
                <ArrowDown size={20} />
              </motion.div>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-1 h-16 bg-gradient-to-b from-primary to-transparent rounded-full" />
      </motion.div>
    </section>
    {/* Back to Top button */}
    {showBackToTop && (
      <Button
        onClick={handleBackToTop}
        data-interactive
        aria-label="Back to top"
        className="fixed bottom-6 right-6 z-50 shadow-elegant hover:shadow-glow rounded-full h-12 w-12 p-0 flex items-center justify-center bg-primary hover:bg-primary-glow text-primary-foreground"
      >
        <ArrowUp size={20} />
      </Button>
    )}
    </>
  );
};