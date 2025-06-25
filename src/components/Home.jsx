import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import classNames from "classnames"; // Optional: For cleaner class concatenation
import ParticlesBackground from "../animations/Particles";
import SplitText from "../animations/SplitText";
import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from "react-icons/fa";

const Home = () => {
    const [greetingIndex, setGreetingIndex] = useState(0);
    const [text, setText] = useState("");
    const [showCursor, setShowCursor] = useState(true);
    const fullText = ["Hello, there!", "Welcome!", "Namaste!"][greetingIndex];
    const typingSpeed = 100;
    const pauseBetween = 1200;
    const theme = useSelector((state) => state.theme); // Access theme from Redux store

    useEffect(() => {
        let currentIndex = 0;
        let timeout;
        let isMounted = true;
        function type() {
            if (!isMounted) return;
            if (currentIndex < fullText.length) {
                setText(fullText.slice(0, currentIndex + 1));
                currentIndex++;
                timeout = setTimeout(type, typingSpeed);
            } else {
                setTimeout(() => {
                    if (!isMounted) return;
                    setText("");
                    setGreetingIndex((prev) => (prev + 1) % ["Hello, there!", "Welcome!", "Namaste!"].length);
                }, pauseBetween);
            }
        }
        type();
        return () => {
            isMounted = false;
            clearTimeout(timeout);
        };
    }, [greetingIndex]);

    useEffect(() => {
        const cursorInterval = setInterval(() => setShowCursor((c) => !c), 500);
        return () => clearInterval(cursorInterval);
    }, []);

    // Theme-specific classes
    const themeClasses = {
        background: theme === "light" ? "bg-white" : "bg-gradient-to-r from-gray-800 via-gray-900 to-black",
        text: theme === "light" ? "text-black" : "text-gray-100",
        border: theme === "light" ? "border-black" : "border-white",
        button: theme === "light" ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-700 hover:bg-gray-600",
    };

    return (
        <div className="hero min-h-screen relative overflow-hidden">
            <ParticlesBackground />
            <div className="hero-content flex flex-col items-center text-center relative z-10">
                <div className="max-w-md">
                    {/* Floating Image with Dynamic Border */}
                    <img
                        src="https://assets-us-01.kc-usercontent.com/5cb25086-82d2-4c89-94f0-8450813a0fd3/0c3fcefb-bc28-4af6-985e-0c3b499ae832/Elon_Musk_Royal_Society.jpg?fm=jpg&auto=format"
                        alt="Pramod Lohra"
                        className={classNames(
                            "rounded-full border-4 shadow-lg w-56 h-56 object-cover mx-auto floating-image hover:scale-105 transition-transform duration-500",
                            themeClasses.border
                        )}
                    />
                    {/* Typewriter Effect for Heading */}
                    <h1 className={classNames("text-5xl font-semibold text-center mt-6 flex justify-center items-center gap-2", themeClasses.text)}>
                        {text}
                        <span className={"typewriter-cursor"}>{showCursor ? "|" : " "}</span>
                    </h1>
                    {/* Subheading with SplitText animation */}
                    <SplitText
                        text="I am Pramod Lohra, Software developer from India"
                        className={classNames("py-6 text-4xl font-semibold", themeClasses.text)}
                        delay={30}
                    />
                    {/* Social Media Icons */}
                    <div className="flex justify-center gap-6 mt-4">
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FaGithub className="w-8 h-8" />
                        </a>
                        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FaLinkedin className="w-8 h-8" />
                        </a>
                        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FaTwitter className="w-8 h-8" />
                        </a>
                    </div>
                    {/* Glowing Button */}
                    <Link to={"/contact"}>
                        <button
                            className={classNames(
                                "btn text-white hover:shadow-lg transition-all duration-300 pulse-btn mt-8",
                                themeClasses.button
                            )}
                        >
                            Connect with me
                        </button>
                    </Link>
                    {/* Download Resume Button - styled like Connect with me */}
                    <a
                        href="https://drive.google.com/file/d/1rboJyJ9tm-i7oHTfpkC_czxlDGFZiZW6/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={classNames(
                            "btn text-white hover:shadow-lg transition-all duration-300 pulse-btn mx-4 mt-8 flex items-center justify-center gap-2",
                            themeClasses.button
                        )}
                        style={{ display: "inline-flex" }}
                    >
                        <FaDownload className="text-lg" />
                        Download Resume
                    </a>
                </div>
            </div>
            {/* Scroll Down Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer" onClick={() => {
                const aboutSection = document.getElementById("about");
                if (aboutSection) aboutSection.scrollIntoView({ behavior: "smooth" });
            }}>
                <div className="animate-bounce">
                    <svg
                        className={classNames("w-6 h-6", themeClasses.text)}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Home;