import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // Icons for GitHub and Live Demo
// eslint-disable-next-line no-unused-vars
import { motion, useAnimation } from "framer-motion"; // For animations
import { useInView } from "react-intersection-observer"; // To trigger animations when in view
import classNames from "classnames"; // For cleaner class concatenation

const Projects = () => {
    const theme = useSelector((state) => state.theme); // Access theme from Redux store

    // Theme-specific classes
    const themeClasses = {
        background: theme === "light" ? "bg-white" : "bg-gradient-to-r from-gray-800 via-gray-900 to-black",
        text: theme === "light" ? "text-gray-800" : "text-gray-100",
        cardBackground: theme === "light" ? "bg-white" : "bg-gray-800",
        button: theme === "light"
            ? "bg-gradient-to-r from-purple-400 to-purple-500 text-white hover:from-purple-500 hover:to-purple-600"
            : "bg-gray-700 text-gray-100 hover:bg-gray-600",
        liveButton: theme === "light"
            ? "bg-gradient-to-r from-pink-400 to-pink-500 text-white hover:from-pink-500 hover:to-pink-600"
            : "bg-gray-700 text-gray-100 hover:bg-gray-600",
        techTag: theme === "light" ? "bg-purple-100 text-purple-800" : "bg-gray-700 text-gray-100",
    };

    // Project data
    const projects = [
        {
            title: "Portfolio Website",
            description:
                "A personal portfolio website built with React, Tailwind CSS, and DaisyUI to showcase my skills and projects.",
            technologies: ["React", "Tailwind CSS", "DaisyUI"],
            github: "https://github.com/yourusername/portfolio",
            live: "https://yourportfolio.com",
        },
        {
            title: "E-Commerce App",
            description:
                "A full-stack e-commerce application with user authentication, product management, and payment integration.",
            technologies: ["React", "Node.js", "Express", "MongoDB"],
            github: "https://github.com/yourusername/ecommerce-app",
            live: "https://ecommerce-app.com",
        },
        {
            title: "Task Manager",
            description:
                "A task management application to help users organize their tasks with features like due dates and priority levels.",
            technologies: ["React", "Firebase", "Material-UI"],
            github: "https://github.com/yourusername/task-manager",
            live: "https://task-manager.com",
        },
        {
            title: "Weather App",
            description:
                "A weather application that provides real-time weather updates and forecasts for any location.",
            technologies: ["React", "OpenWeatherMap API", "Axios"],
            github: "https://github.com/yourusername/weather-app",
            live: "https://weather-app.com",
        },
    ];

    // Animation controls
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    // Trigger animations when in view
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    // Animation variants
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <div className={classNames("min-h-screen py-20", themeClasses.background)}>
            <div className="container mx-auto px-4">
                {/* Projects Heading */}
                <h1 className={classNames("text-4xl font-bold text-center mb-10", themeClasses.text)}>
                    My Projects
                </h1>

                {/* Projects Grid */}
                <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            initial="hidden"
                            animate={controls}
                            transition={{ delay: index * 0.2 }}
                            className={classNames(
                                "p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300",
                                themeClasses.cardBackground
                            )}
                        >
                            {/* Project Title */}
                            <h2 className={classNames("text-2xl font-semibold mb-4", themeClasses.text)}>
                                {project.title}
                            </h2>

                            {/* Project Description */}
                            <p className={classNames("text-lg mb-4", themeClasses.text)}>
                                {project.description}
                            </p>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.technologies.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className={classNames(
                                            "px-3 py-1 rounded-full text-sm",
                                            themeClasses.techTag
                                        )}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Buttons */}
                            <div className="flex gap-4">
                                {/* GitHub Button */}
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub Repository"
                                    className={classNames(
                                        "flex items-center px-4 py-2 rounded-lg text-white transition-all duration-300",
                                        themeClasses.button
                                    )}
                                >
                                    <FaGithub className="mr-2" />
                                    GitHub
                                </a>

                                {/* Live Demo Button */}
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Live Demo"
                                    className={classNames(
                                        "flex items-center px-4 py-2 rounded-lg text-white transition-all duration-300",
                                        themeClasses.liveButton
                                    )}
                                >
                                    <FaExternalLinkAlt className="mr-2" />
                                    Live Demo
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;