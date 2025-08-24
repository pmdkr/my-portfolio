import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const experiences = [
  {
    company: "Nathcorp Inc.",
    role: "Software Engineer",
    period: "May 2024 - Present",
    location: "Ranchi , India",
    description: [
      "Led development of microservices architecture serving 1M+ users",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Mentored junior developers and established coding standards"
    ],
    technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker"],
    website: "https://nathcorp.com/"
  },
  {
    company: "Nathcorp Inc. ",
    role: "Associate Software Engineer",
    period: "June 2022 - April 2024",
    location: "Ranchi, India",
    description: [
      "Built scalable web applications from ground up",
      "Integrated third-party APIs and payment systems",
      "Optimized application performance and user experience"
    ],
    technologies: ["Vue.js", "Python", "PostgreSQL", "Redis"],
    website: "https://nathcorp.com/"
  },

];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const timelineVariants = {
  hidden: { opacity: 0, scaleY: 0 },
  visible: {
    opacity: 1,
    scaleY: 1,
    transition: {
      duration: 1,
      ease: "easeOut" as const,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

export const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 gradient-primary rounded-full mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My journey in software development and the amazing companies I've worked with
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative max-w-4xl mx-auto"
        >
          {/* Timeline line */}
          <motion.div
            variants={timelineVariants}
            className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-purple-500 to-primary origin-top"
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="relative flex items-start space-x-8 group"
              >
                {/* Timeline dot */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="relative z-10 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"
                />

                {/* Experience card */}
                <motion.div
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "var(--shadow-elegant)"
                  }}
                  transition={{ duration: 0.3 }}
                  className="flex-1 bg-card rounded-xl p-8 border border-border/50 shadow-card group-hover:border-primary/20 transition-smooth"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-smooth">
                          {exp.role}
                        </h3>
                        {exp.website && (
                          <motion.a
                            href={exp.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-interactive
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-1 rounded-full hover:bg-primary/10 transition-smooth"
                          >
                            <ExternalLink size={16} className="text-muted-foreground hover:text-primary" />
                          </motion.a>
                        )}
                      </div>
                      <h4 className="text-xl font-semibold text-primary mb-3">
                        {exp.company}
                      </h4>
                    </div>

                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <ul className="space-y-2">
                      {exp.description.map((item, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: 20 }}
                          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                          transition={{ delay: 0.2 + idx * 0.1 }}
                          className="flex items-start space-x-3 text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0" />
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-4">
                      {exp.technologies.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-smooth"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};