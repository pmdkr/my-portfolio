import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const leftVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

const rightVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Profile Image */}
          <motion.div variants={leftVariants} className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 gradient-primary rounded-2xl blur-xl opacity-20 animate-glow-pulse" />
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative bg-card rounded-2xl p-2 shadow-card"
              >
                <img
                  src="/image2.JPG"
                  alt="Pramod Lohra - Software Developer"
                  className="w-full h-80 object-cover object-top rounded-xl"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face";
                  }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div variants={rightVariants} className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
                About Me
              </h2>
              <div className="w-20 h-1 gradient-primary rounded-full mb-8" />
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate full-stack developer with over 3 years of experience
                building scalable web applications. I love turning complex problems
                into simple, beautiful, and intuitive solutions.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
            </div>

            <motion.div
              variants={listVariants}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-foreground mb-4">
                What I bring to the table:
              </h3>
              {[
                "🚀 3+ years of full-stack development experience",
                "💡 Strong problem-solving and analytical skills",
                "🎨 Eye for design and user experience",
                "🔄 Agile development and team collaboration",
                "📚 Continuous learning and technology adaptation"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={listItemVariants}
                  className="flex items-center space-x-3 group"
                >
                  <div className="w-2 h-2 bg-primary rounded-full transition-smooth group-hover:scale-150" />
                  <span className="text-foreground/90 group-hover:text-foreground transition-smooth">
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
              className="pt-4"
            >
              <a
                href="https://drive.google.com/file/d/1q6Hmqe79rhDcsxkVUIVV2rMb5NQvKYev/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                data-interactive
                className="inline-flex items-center text-primary hover:text-primary-glow font-medium text-lg transition-smooth group"
              >
                Download Resume
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};