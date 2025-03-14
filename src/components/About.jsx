import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { FaReact, FaNodeJs, FaDatabase, FaCode, FaProjectDiagram } from "react-icons/fa";
import CountUp from "react-countup"; // For animated numbers

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
        { name: "Project Management", icon: <FaProjectDiagram className="w-12 h-12" />, level: 75 },
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
                            src="https://via.placeholder.com/400" // Replace with your photo
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className={`p-6 rounded-lg shadow-lg ${theme === "light" ? "bg-white" : "bg-gray-800"
                                    }`}
                            >
                                <div className="flex items-center justify-center mb-4">
                                    {skill.icon}
                                </div>
                                <h3
                                    className={`text-xl font-semibold text-center ${theme === "light" ? "text-gray-800" : "text-gray-100"
                                        }`}
                                >
                                    {skill.name}
                                </h3>
                                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
                                    <div
                                        className="bg-purple-500 h-2.5 rounded-full"
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
                                    {isVisible ? <CountUp end={stat.number} duration={2} /> : 0}
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