import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 95, icon: "⚛️" },
      { name: "TypeScript", level: 90, icon: "🟦" },
      { name: "Next.js", level: 85, icon: "▲" },
      { name: "Vue.js", level: 80, icon: "💚" },
      { name: "Tailwind CSS", level: 90, icon: "🎨" },
      { name: "Framer Motion", level: 85, icon: "🎭" }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 90, icon: "🟢" },
      { name: "Python", level: 85, icon: "🐍" },
      { name: "PostgreSQL", level: 80, icon: "🐘" },
      { name: "MongoDB", level: 75, icon: "🍃" },
      { name: "Redis", level: 70, icon: "🔴" },
      { name: "GraphQL", level: 75, icon: "🔷" }
    ]
  },
  {
    category: "Tools & Cloud",
    items: [
      { name: "AWS", level: 80, icon: "☁️" },
      { name: "Docker", level: 85, icon: "🐳" },
      { name: "Git", level: 95, icon: "📚" },
      { name: "Kubernetes", level: 70, icon: "⚓" },
      { name: "CI/CD", level: 80, icon: "🔄" },
      { name: "Figma", level: 75, icon: "🎨" }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const categoryVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
      staggerChildren: 0.1,
    },
  },
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

const ProgressBar = ({ level, delay = 0 }: { level: number; delay?: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="w-full bg-muted rounded-full h-2 overflow-hidden">
      <motion.div
        className="h-full gradient-primary rounded-full"
        initial={{ width: "0%" }}
        animate={inView ? { width: `${level}%` } : { width: "0%" }}
        transition={{
          duration: 1.5,
          delay: delay,
          ease: "easeOut",
        }}
      />
    </div>
  );
};

export const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="skills" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 gradient-primary rounded-full mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies I've mastered and tools I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              variants={categoryVariants}
              className="space-y-6"
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {category.category}
                </h3>
                <div className="w-12 h-1 gradient-primary rounded-full mx-auto" />
              </div>

              <div className="space-y-4">
                {category.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    variants={skillVariants}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "var(--shadow-card)"
                    }}
                    className="bg-card rounded-lg p-4 border border-border/50 hover:border-primary/20 transition-smooth group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <motion.span
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          className="text-2xl"
                        >
                          {skill.icon}
                        </motion.span>
                        <span className="font-medium text-foreground group-hover:text-primary transition-smooth">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    <ProgressBar 
                      level={skill.level} 
                      delay={categoryIndex * 0.2 + skillIndex * 0.1} 
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto"
        >
          {[
            { label: "Years Experience", value: "3+" },
            { label: "Projects Completed", value: "10+" },
            { label: "Technologies Mastered", value: "20+" },
            { label: "Happy Clients", value: "30+" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-card rounded-xl border border-border/50 hover:border-primary/20 transition-smooth group"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="text-3xl font-bold text-gradient mb-2 group-hover:scale-110 transition-smooth"
              >
                {stat.value}
              </motion.div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};