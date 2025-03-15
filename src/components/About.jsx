import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { FaReact, FaNodeJs, FaDatabase, FaCode, FaProjectDiagram, FaDownload } from "react-icons/fa"; // Added FaDownload
import { SiTypescript, SiGraphql, SiDocker, SiJenkins } from "react-icons/si"; // New icons
import CountUp from "react-countup"; // For animated numbers
import CountUps from '../animations/CountUp';

const About = () => {
    const theme = useSelector((state) => state.theme); // Access theme from Redux store
    const statsRef = useRef(null); // Ref for the stats section
    const [isVisible, setIsVisible] = useState(false); // Track visibility of stats section

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

    // Intersection Observer to detect when stats section is visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Stop observing once the section is visible
                }
            },
            { threshold: 0.5 } // Trigger when 50% of the element is visible
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => {
            if (statsRef.current) {
                observer.unobserve(statsRef.current);
            }
        };
    }, []);

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
                    About Me
                </h1>

                {/* Introduction Section */}
                <div className="flex flex-col md:flex-row items-center gap-10">
                    {/* Photo */}
                    <div className="flex-1">
                        <img
                            src="https://fcp.vse.cz/4IZ268/2018-2019-ZS/www/kubl05/Class/pictures/elon.jpg" // Replace with your photo
                            alt="Profile"
                            className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
                        />
                    </div>

                    {/* Brief Introduction */}
                    <div className="flex-1">
                        <p
                            className={`text-lg mb-4 ${theme === "light" ? "text-gray-800" : "text-gray-100"
                                }`}
                        >
                            Hi, I'm <span className="font-bold">Pramod Lohra</span>, a passionate software developer with a love for building amazing web applications. I specialize in React, Node.js, and database management, and I enjoy working on projects that challenge me to learn and grow.
                        </p>
                        <p
                            className={`text-lg mb-4 ${theme === "light" ? "text-gray-800" : "text-gray-100"
                                }`}
                        >
                            With over <span className="font-bold">3 years of experience</span>, I have completed <span className="font-bold">15+ projects</span> and worked with <span className="font-bold">10+ happy clients</span>. My goal is to create efficient, scalable, and user-friendly solutions.
                        </p>

                        {/* Resume Download Button */}
                        <div className="mt-6">
                            <a
                                href="https://drive.google.com/file/d/193T2Vqgj1-S4lHKcPDxDjbUDS-0T2ozS/view?usp=drive_link" // Replace with your Google Drive link
                                target="_blank" // Open in a new tab
                                rel="noopener noreferrer" // Security best practice
                                className="relative inline-flex items-center px-8 py-3 text-lg font-semibold text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-all duration-300 overflow-hidden group"
                            >
                                <FaDownload className="mr-2" /> {/* Download Icon */}
                                <span className="relative z-10">View Resume</span>
                                <span className="absolute inset-0 border-2 border-purple-500 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                                <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                            </a>
                        </div>
                    </div>
                </div>


                {/* Skills Section */}
                <div className="mt-20">
                    <h2
                        className={`text-3xl font-bold text-center ${theme === "light" ? "text-white" : "text-gray-100"
                            } mb-10`}
                    >
                        My Skills
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ${theme === "light" ? "bg-white" : "bg-gray-800"
                                    }`}
                            >
                                <div className="flex items-center justify-center mb-4">
                                    <div className="relative">
                                        {skill.icon}
                                        <div
                                            className="absolute inset-0 bg-purple-500 rounded-full opacity-0 hover:opacity-20 transition-opacity duration-300"
                                            style={{ zIndex: 1 }}
                                        ></div>
                                    </div>
                                </div>
                                <h3
                                    className={`text-xl font-semibold text-center ${theme === "light" ? "text-gray-800" : "text-gray-100"
                                        }`}
                                >
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

                {/* Stats Section */}
                <div className="mt-20" ref={statsRef}>
                    <h2
                        className={`text-3xl font-bold text-center ${theme === "light" ? "text-white" : "text-gray-100"
                            } mb-10`}
                    >
                        My Achievements
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className={`p-6 rounded-lg shadow-lg text-center ${theme === "light" ? "bg-white" : "bg-gray-800"
                                    }`}
                            >
                                <h3
                                    className={`text-4xl font-bold ${theme === "light" ? "text-purple-600" : "text-purple-400"
                                        }`}
                                >
                                    {/* {isVisible ? <CountUp end={stat.number} duration={2} /> : 0} */}
                                    {isVisible ? <CountUps
                                        from={0}
                                        to={stat.number}
                                        separator=","
                                        direction="up"
                                        duration={1}
                                        className="count-up-text"
                                    /> : 0}
                                </h3>
                                <p
                                    className={`text-lg ${theme === "light" ? "text-gray-800" : "text-gray-100"
                                        }`}
                                >
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