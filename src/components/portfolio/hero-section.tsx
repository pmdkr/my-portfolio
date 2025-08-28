import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
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

// Floating shapes configuration
const floatingShapes = [
  {
    id: 1,
    color: 'bg-primary/10',
    size: 'w-20 h-20',
    position: 'top-20 left-10',
    animation: {
      y: [0, -20, 0],
      scale: [1, 1.1, 1],
      rotate: [0, 5, 0],
    },
    duration: 6,
  },
  {
    id: 2,
    color: 'bg-purple-500/10',
    size: 'w-32 h-32',
    position: 'bottom-20 right-10',
    animation: {
      y: [0, 20, 0],
      scale: [1, 0.9, 1],
      rotate: [0, -5, 0],
    },
    duration: 8,
  },
  {
    id: 3,
    color: 'bg-blue-500/10',
    size: 'w-16 h-16',
    position: 'top-1/4 right-1/4',
    animation: {
      y: [0, 15, 0],
      scale: [1, 1.2, 1],
      rotate: [0, 10, 0],
    },
    duration: 7,
  },
  {
    id: 4,
    color: 'bg-green-500/10',
    size: 'w-24 h-24',
    position: 'bottom-1/3 left-1/3',
    animation: {
      y: [0, -15, 0],
      scale: [1, 0.8, 1],
      rotate: [0, -10, 0],
    },
    duration: 9,
  },
];

export const HeroSection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  const textVariants = [
    "Crafting digital experiences with modern technologies.",
    "Building responsive and performant web applications.",
    "Creating intuitive user interfaces with attention to detail.",
    "Transforming ideas into functional and beautiful solutions."
  ];

  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.scrollY > 200);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    // Initialize state on mount
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    // Text rotation effect
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % textVariants.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [textVariants.length]);

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
        <motion.div
          className="absolute inset-0 gradient-hero opacity-90"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        />

        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>

        <div className="absolute inset-0 bg-background/20" />

        {/* Floating shapes */}
        {floatingShapes.map((shape) => (
          <motion.div
            key={shape.id}
            className={`absolute ${shape.color} ${shape.size} ${shape.position} rounded-full blur-xl`}
            animate={shape.animation}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <motion.h1
                className="text-6xl md:text-8xl font-bold text-gradient mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Pramod Lohra
              </motion.h1>
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.h2
                className="text-2xl md:text-4xl font-medium text-foreground/90 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Full-Stack Software Developer
              </motion.h2>
            </motion.div>

            <motion.div variants={itemVariants} className="h-12 md:h-16 flex items-center justify-center">
              <AnimatedText textVariants={textVariants} textIndex={textIndex} />
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col items-center space-y-8">
              <div className="flex space-x-6">
                <motion.a
                  href="https://github.com/pmdkr"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-interactive
                  whileHover={{ scale: 1.1, y: -5 }}
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
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 transition-smooth hover:shadow-glow"
                >
                  <Linkedin size={24} />
                </motion.a>
                <motion.a
                  href="mailto:pramodkrlohra@gmail.com"
                  data-interactive
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 transition-smooth hover:shadow-glow"
                >
                  <Mail size={24} />
                </motion.a>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={scrollToContact}
                  data-interactive
                  size="lg"
                  className="bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-4 text-lg font-medium shadow-elegant hover:shadow-glow transition-smooth group relative overflow-hidden"
                >
                  <span className="relative z-10">Let's Work Together</span>
                  <motion.div
                    animate={{ y: [0, 3, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="ml-2 relative z-10"
                  >
                    <ArrowDown size={20} />
                  </motion.div>

                  {/* Button shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </Button>
              </motion.div>
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
      <AnimatePresence>
        {showBackToTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              onClick={handleBackToTop}
              data-interactive
              aria-label="Back to top"
              className="fixed bottom-6 right-6 z-50 shadow-elegant hover:shadow-glow rounded-full h-12 w-12 p-0 flex items-center justify-center bg-primary hover:bg-primary-glow text-primary-foreground"
            >
              <ArrowUp size={20} />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Animated text component for the rotating text effect
const AnimatedText = ({ textVariants, textIndex }: { textVariants: string[], textIndex: number }) => {
  return (
    <motion.p
      key={textIndex}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed absolute"
    >
      {textVariants[textIndex]}
    </motion.p>
  );
};