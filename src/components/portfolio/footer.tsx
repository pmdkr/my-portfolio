import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-gradient-subtle border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={scrollToTop}
            className="text-3xl font-bold text-gradient cursor-pointer"
            data-interactive
          >
            Pramod Lohra
          </motion.div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <motion.a
              href="https://github.com/pmdkr"
              target="_blank"
              rel="noopener noreferrer"
              data-interactive
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-card/50 border border-border/50 hover:border-primary/20 transition-smooth group"
            >
              <Github size={20} className="group-hover:text-primary transition-smooth" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/pmdkr"
              target="_blank"
              rel="noopener noreferrer"
              data-interactive
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-card/50 border border-border/50 hover:border-primary/20 transition-smooth group"
            >
              <Linkedin size={20} className="group-hover:text-primary transition-smooth" />
            </motion.a>
            <motion.a
              href="mailto:pramodkrlohra@gmail.com"
              data-interactive
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-card/50 border border-border/50 hover:border-primary/20 transition-smooth group"
            >
              <Mail size={20} className="group-hover:text-primary transition-smooth" />
            </motion.a>
          </div>

          {/* Copyright */}
          <div className="text-center text-muted-foreground">
            <p className="flex items-center justify-center space-x-2">
              <span>© 2025 Pramod Lohra. Made with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart size={16} className="text-red-500 fill-current" />
              </motion.span>
              <span>and modern technologies</span>
            </p>
            <p className="mt-2 text-sm">
              Built with React, TypeScript, Tailwind CSS, and Framer Motion
            </p>
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            data-interactive
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 transition-smooth font-medium"
          >
            Back to Top
          </motion.button>
        </div>
      </div>
    </footer>
  );
};