import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { FaReact, FaNodeJs, FaDatabase, FaCode, FaProjectDiagram, FaDownload } from "react-icons/fa";
import { SiTypescript, SiGraphql, SiDocker, SiJenkins } from "react-icons/si";
import CountUps from '../animations/CountUp';
// eslint-disable-next-line no-unused-vars
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";

const About = () => {
    const theme = useSelector((state) => state.theme);
    const statsRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [workExpRef, workExpInView] = useInView({ triggerOnce: true, threshold: 0.2 });
    const workExpControls = useAnimation();

    // Theme-specific classes
    const themeClasses = {
        background: theme === "light" ? "bg-white" : "bg-gradient-to-r from-gray-800 via-gray-900 to-black",
        text: theme === "light" ? "text-gray-800" : "text-gray-100",
        cardBackground: theme === "light" ? "bg-white" : "bg-gray-800",
        button: theme === "light" ? "bg-purple-600 hover:bg-purple-700" : "bg-purple-700 hover:bg-purple-800",
        skillHover: theme === "light" ? "bg-purple-500" : "bg-purple-400",
        statsNumber: theme === "light" ? "text-purple-600" : "text-purple-400",
        timelineLine: theme === "light" ? "bg-gradient-to-b from-purple-400 to-pink-400" : "bg-gradient-to-b from-purple-600 to-pink-600",
        timelineDot: theme === "light" ? "bg-white border-purple-500" : "bg-gray-800 border-purple-400"
    };

    // Skills data
    const skills = [
        { name: "React", icon: <FaReact className="w-12 h-12" />, level: 90 },
        { name: "Node.js", icon: <FaNodeJs className="w-12 h-12" />, level: 85 },
        { name: "Database", icon: <FaDatabase className="w-12 h-12" />, level: 80 },
        { name: "JavaScript", icon: <FaCode className="w-12 h-12" />, level: 95 },
        { name: "TypeScript", icon: <SiTypescript className="w-12 h-12" />, level: 85 },
        { name: "GraphQL", icon: <SiGraphql className="w-12 h-12" />, level: 75 },
        { name: "Docker", icon: <SiDocker className="w-12 h-12" />, level: 70 },
        { name: "CI/CD", icon: <SiJenkins className="w-12 h-12" />, level: 65 },
    ];

    // Stats data
    const stats = [
        { number: 15, label: "Projects Completed" },
        { number: 3, label: "Years of Experience" },
        { number: 10, label: "Happy Clients" },
        { number: 5, label: "Awards Won" },
    ];

    // Work experience data
    const workExperience = [
        {
            year: "May 2024 - Present",
            title: "Software Engineer",
            company: "Nathcorp Inc.",
            description: "Leading front-end development team, implementing microservices architecture, and improving CI/CD pipelines."
        },
        {
            year: "June 2022 - April 2024",
            title: " Associate Software Engineer",
            company: "Nathcorp Inc.",
            description: "Developed full-stack applications using React and Node.js, implemented automated testing frameworks."
        },
        {
            year: "2018 - 2020",
            title: "Junior Developer",
            company: "StartUp Hub",
            description: "Worked on MVP development, UI/UX implementation, and cloud integration projects."
        }
    ];

    // Animation variants
    const timelineVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    const lineVariants = {
        hidden: { height: 0 },
        visible: { height: "100%", transition: { duration: 1.5 } }
    };

    // Trigger animations when work experience section is in view
    useEffect(() => {
        if (workExpInView) {
            workExpControls.start("visible");
        }
    }, [workExpControls, workExpInView]);

    // Intersection Observer for stats section
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        if (statsRef.current) observer.observe(statsRef.current);
        return () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            if (statsRef.current) observer.unobserve(statsRef.current);
        };
    }, []);

    return (
        <div className={classNames("min-h-screen py-20", themeClasses.background)}>
            <div className="container mx-auto px-4">
                <h1 className={classNames("text-4xl font-bold text-center mb-10", themeClasses.text)}>
                    About Me
                </h1>

                {/* Introduction Section */}
                <div className="flex flex-col md:flex-row items-center gap-10">
                    {/* Photo */}
                    <div className="flex-1">
                        <img
                            src="https://fcp.vse.cz/4IZ268/2018-2019-ZS/www/kubl05/Class/pictures/elon.jpg"
                            alt="Profile"
                            className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
                        />
                    </div>

                    {/* Brief Introduction */}
                    <div className="flex-1">
                        <p className={classNames("text-lg mb-4", themeClasses.text)}>
                            Hi, I'm <span className="font-bold">Pramod Lohra</span>, a passionate software developer with a love for building amazing web applications. I specialize in React, Node.js, and database management, and I enjoy working on projects that challenge me to learn and grow.
                        </p>
                        <p className={classNames("text-lg mb-4", themeClasses.text)}>
                            With over <span className="font-bold">3 years of experience</span>, I have completed <span className="font-bold">15+ projects</span> and worked with <span className="font-bold">10+ happy clients</span>. My goal is to create efficient, scalable, and user-friendly solutions.
                        </p>

                        {/* Resume Download Button */}
                        <div className="mt-6">
                            <a
                                href="https://drive.google.com/file/d/193T2Vqgj1-S4lHKcPDxDjbUDS-0T2ozS/view?usp=drive_link"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Download Resume"
                                className={classNames(
                                    "relative inline-flex items-center px-8 py-3 text-lg font-semibold text-white rounded-lg transition-all duration-300 overflow-hidden group",
                                    themeClasses.button
                                )}
                            >
                                <FaDownload className="mr-2" />
                                <span className="relative z-10">View Resume</span>
                                <span className="absolute inset-0 border-2 border-purple-500 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                                <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="mt-20">
                    <h2 className={classNames("text-3xl font-bold text-center mb-10", themeClasses.text)}>
                        My Skills
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className={classNames("p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300", themeClasses.cardBackground)}
                            >
                                <div className="flex items-center justify-center mb-4">
                                    <div className="relative">
                                        {skill.icon}
                                        <div
                                            className={classNames(
                                                "absolute inset-0 rounded-full opacity-0 hover:opacity-20 transition-opacity duration-300",
                                                themeClasses.skillHover
                                            )}
                                            style={{ zIndex: 1 }}
                                        ></div>
                                    </div>
                                </div>
                                <h3 className={classNames("text-xl font-semibold text-center", themeClasses.text)}>
                                    {skill.name}
                                </h3>
                                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
                                    <div
                                        className="bg-purple-500 h-2.5 rounded-full transition-all duration-1000"
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Work Experience Section */}
                <div className="mt-20" ref={workExpRef}>
                    <h2 className={classNames("text-3xl font-bold text-center mb-10", themeClasses.text)}>
                        Work Experience
                    </h2>
                    <div className="relative max-w-3xl mx-auto">
                        <motion.div
                            initial="hidden"
                            animate={workExpControls}
                            variants={lineVariants}
                            className={classNames(
                                "absolute left-1/2 w-1 -ml-0.5",
                                themeClasses.timelineLine
                            )}
                            style={{ top: '2rem', bottom: '2rem' }}
                        />
                        {workExperience.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                animate={workExpControls}
                                variants={timelineVariants}
                                transition={{ delay: index * 0.3 }}
                                className="relative mb-12"
                            >
                                <div className={`flex items-center justify-between ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                                    <div className={classNames(
                                        "absolute w-5 h-5 rounded-full border-4 -ml-2.5",
                                        themeClasses.timelineDot,
                                        index % 2 === 0 ? "left-1/2" : "left-1/2"
                                    )} />
                                    <div className={`w-5/12 p-6 rounded-lg shadow-lg ${theme === "light" ? "bg-white" : "bg-gray-800"} ${index % 2 === 0 ? "mr-8" : "ml-8"}`}>
                                        <div className={classNames(
                                            "text-sm font-semibold mb-2",
                                            theme === "light" ? "text-purple-600" : "text-purple-400"
                                        )}>
                                            {exp.year}
                                        </div>
                                        <h3 className={classNames(
                                            "text-xl font-bold mb-2",
                                            themeClasses.text
                                        )}>
                                            {exp.title}
                                        </h3>
                                        <div className={classNames(
                                            "text-lg mb-2",
                                            theme === "light" ? "text-gray-600" : "text-gray-300"
                                        )}>
                                            {exp.company}
                                        </div>
                                        <p className={classNames(
                                            "text-base",
                                            theme === "light" ? "text-gray-600" : "text-gray-300"
                                        )}>
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Stats Section */}
                <div className="mt-20" ref={statsRef}>
                    <h2 className={classNames("text-3xl font-bold text-center mb-10", themeClasses.text)}>
                        My Achievements
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className={classNames("p-6 rounded-lg shadow-lg text-center", themeClasses.cardBackground)}
                            >
                                <h3 className={classNames("text-4xl font-bold", themeClasses.statsNumber)}>
                                    {isVisible ? (
                                        <CountUps
                                            from={0}
                                            to={stat.number}
                                            separator=","
                                            direction="up"
                                            duration={1}
                                        />
                                    ) : 0}
                                </h3>
                                <p className={classNames("text-lg", themeClasses.text)}>
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;