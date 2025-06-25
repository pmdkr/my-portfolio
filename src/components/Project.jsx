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
            details: "Responsive design, animated transitions, contact form integration, and theme switching.",
            technologies: ["React", "Tailwind CSS", "DaisyUI"],
            github: "https://github.com/yourusername/portfolio",
            live: "https://yourportfolio.com",
        },
        {
            title: "Dev tinder",
            description:
                "A clone of Tinder web app, implemented sending and reciving connection request and store the user profile in MongoDB",
            details: "Real-time chat, swipe cards, secure authentication, and MongoDB data storage.",
            technologies: ["React", "Node.js", "Express", "MongoDB"],
            github: "https://github.com/yourusername/ecommerce-app",
            live: "https://ecommerce-app.com",
        },
        {
            title: "Video streaming application",
            description:
                "video streaming platform using MERN stack with support for video uploads, storage via MongoDB GridFS, and secure playback",
            details: "Video upload, GridFS storage, JWT authentication, and adaptive streaming.",
            technologies: ["React", "MongoDB", "Express JS", "Multer", "GridFS", "JWT"],
            github: "https://github.com/yourusername/task-manager",
            live: "https://task-manager.com",
        },
        {
            title: "Netflix GPT",
            description:
                "A clone of Netflix app, uses TMDB api to fetch movies details and implemented Authentication and Browse page",
            details: "Movie search, TMDB API integration, user authentication, and responsive UI.",
            technologies: ["React", "TMDB api", "Axios"],
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
                            whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(168,85,247,0.2)" }}
                            whileTap={{ scale: 0.98 }}
                            className={classNames(
                                "p-6 rounded-lg shadow-lg transition-all duration-300 relative group cursor-pointer overflow-hidden",
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

                            {/* Reveal Details on Hover */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 0, y: 20 }}
                                whileHover={{ opacity: 1, y: 0 }}
                                className="absolute left-0 right-0 bottom-20 px-6 py-3 bg-white bg-opacity-90 dark:bg-gray-900 dark:bg-opacity-95 rounded-lg shadow-md transition-all duration-300 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 group-hover:bottom-24 z-10"
                                style={{ opacity: 0 }}
                            >
                                <span className="block text-sm text-gray-700 dark:text-gray-200 font-medium">{project.details}</span>
                            </motion.div>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.technologies.map((tech, idx) => (
                                    <motion.span
                                        key={idx}
                                        whileHover={{ scale: 1.15, backgroundColor: theme === "light" ? "#f3e8ff" : "#a21caf", color: theme === "light" ? "#7c3aed" : "#fff" }}
                                        className={classNames(
                                            "px-3 py-1 rounded-full text-sm transition-colors duration-200 cursor-pointer",
                                            themeClasses.techTag
                                        )}
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>

                            {/* Buttons */}
                            <div className="flex gap-4">
                                {/* GitHub Button */}
                                <motion.a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub Repository"
                                    className={classNames(
                                        "flex items-center px-4 py-2 rounded-lg text-white transition-all duration-300",
                                        themeClasses.button
                                    )}
                                    whileHover={{ scale: 1.1, backgroundColor: theme === "light" ? "#a855f7" : "#7c3aed" }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FaGithub className="mr-2" />
                                    GitHub
                                </motion.a>

                                {/* Live Demo Button */}
                                <motion.a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Live Demo"
                                    className={classNames(
                                        "flex items-center px-4 py-2 rounded-lg text-white transition-all duration-300",
                                        themeClasses.liveButton
                                    )}
                                    whileHover={{ scale: 1.1, backgroundColor: theme === "light" ? "#f472b6" : "#db2777" }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FaExternalLinkAlt className="mr-2" />
                                    Live Demo
                                </motion.a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;