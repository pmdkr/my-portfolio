import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // Icons for GitHub and Live Demo
// eslint-disable-next-line no-unused-vars
import { motion, useAnimation } from "framer-motion"; // For animations
import { useInView } from "react-intersection-observer"; // To trigger animations when in view

const Projects = () => {
    const theme = useSelector((state) => state.theme); // Access theme from Redux store

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
        <div
            className={`min-h-screen ${theme === "light"
                ? "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
                : "bg-gradient-to-r from-gray-800 via-gray-900 to-black"
                } py-20`}
        >
            <div className="container mx-auto px-4">
                <h1
                    className={`text-4xl font-bold text-center ${theme === "light" ? "text-white" : "text-gray-100"
                        } mb-10`}
                >
                    My Projects
                </h1>

                {/* Projects Grid */}
                <div
                    ref={ref}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            initial="hidden"
                            animate={controls}
                            transition={{ delay: index * 0.2 }}
                            className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ${theme === "light" ? "bg-white" : "bg-gray-800"
                                }`}
                        >
                            <h2
                                className={`text-2xl font-semibold ${theme === "light" ? "text-gray-800" : "text-gray-100"
                                    } mb-4`}
                            >
                                {project.title}
                            </h2>
                            <p
                                className={`text-lg ${theme === "light" ? "text-gray-600" : "text-gray-300"
                                    } mb-4`}
                            >
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.technologies.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className={`px-3 py-1 rounded-full text-sm ${theme === "light"
                                            ? "bg-purple-100 text-purple-800"
                                            : "bg-gray-700 text-gray-100"
                                            }`}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-4">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center px-4 py-2 rounded-lg ${theme === "light"
                                        ? "bg-purple-600 text-white hover:bg-purple-700"
                                        : "bg-gray-700 text-gray-100 hover:bg-gray-600"
                                        } transition-all duration-300`}
                                >
                                    <FaGithub className="mr-2" />
                                    GitHub
                                </a>
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center px-4 py-2 rounded-lg ${theme === "light"
                                        ? "bg-pink-600 text-white hover:bg-pink-700"
                                        : "bg-gray-700 text-gray-100 hover:bg-gray-600"
                                        } transition-all duration-300`}
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