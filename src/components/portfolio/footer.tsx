import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const iconMotionProps = {
  whileHover: { scale: 1.1, y: -2 },
  whileTap: { scale: 0.95 },
};

const socialLinks = [
  { href: 'https://github.com/pmdkr', icon: Github },
  { href: 'https://linkedin.com/in/pmdkr', icon: Linkedin },
  { href: 'mailto:pramodkrlohra@gmail.com', icon: Mail },
];

export const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="py-12 bg-gradient-subtle border-t border-border/50">
      <div className="container mx-auto px-6 flex flex-col items-center space-y-8">
        <motion.div
          whileHover={{ scale: 1.05 }}
          onClick={scrollToTop}
          className="text-3xl font-bold text-gradient cursor-pointer"
          data-interactive
        >
          Pramod Lohra
        </motion.div>

        <div className="flex space-x-6">
          {socialLinks.map(({ href, icon: Icon }, idx) => (
            <motion.a
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              {...iconMotionProps}
              data-interactive
              className="p-3 rounded-full bg-card/50 border border-border/50 hover:border-primary/20 transition-smooth group"
            >
              <Icon size={20} className="group-hover:text-primary transition-smooth" />
            </motion.a>
          ))}
        </div>

        <div className="text-center text-muted-foreground text-sm">
          © 2025 Pramod Lohra. All rights reserved.
        </div>

        <motion.button
          onClick={scrollToTop}
          {...iconMotionProps}
          data-interactive
          className="px-6 py-2 bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 transition-smooth font-medium"
        >
          Back to Top
        </motion.button>
      </div>
    </footer>
  );
};
