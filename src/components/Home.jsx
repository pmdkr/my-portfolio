import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"; // Import useSelector to access the theme

const Home = () => {
    const [text, setText] = useState("");
    const fullText = "Hello, there!";
    const typingSpeed = 100; // Speed in milliseconds
    const theme = useSelector((state) => state.theme); // Access theme from Redux store

    useEffect(() => {
        let currentIndex = 0;

        const type = () => {
            if (currentIndex < fullText.length) {
                setText(fullText.slice(0, currentIndex + 1));
                currentIndex++;
                setTimeout(type, typingSpeed);
            }
        };

        type();
    }, []);

    return (
        <div
            className={`hero min-h-screen ${theme === "light"
                    ? "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
                    : "bg-gradient-to-r from-gray-800 via-gray-900 to-black"
                }`}
        >
            <div className="hero-content flex flex-col items-center text-center">
                <div className="max-w-md">
                    {/* Floating Image */}
                    <img
                        src="https://assets-us-01.kc-usercontent.com/5cb25086-82d2-4c89-94f0-8450813a0fd3/0c3fcefb-bc28-4af6-985e-0c3b499ae832/Elon_Musk_Royal_Society.jpg?fm=jpg&auto=format"
                        alt="Animated Image"
                        className="rounded-full border-4 border-white shadow-lg w-56 h-56 object-cover mx-auto floating-image"
                    />

                    {/* Typewriter Effect for Heading */}
                    <h1
                        className={`text-5xl font-semibold text-center ${theme === "light" ? "text-white" : "text-gray-100"
                            } mt-6`}
                    >
                        {text}
                    </h1>

                    {/* Subheading */}
                    <p
                        className={`py-6 text-4xl font-semibold ${theme === "light" ? "text-white" : "text-gray-100"
                            }`}
                    >
                        I am Pramod Lohra, Software developer from India
                    </p>

                    {/* Glowing Button */}
                    <Link to={"/contact"}>
                        <button
                            className={`btn ${theme === "light"
                                    ? "btn-primary hover:shadow-lg hover:shadow-purple-500/50"
                                    : "bg-gray-700 hover:bg-gray-600 hover:shadow-lg hover:shadow-gray-500/50"
                                } transition-all duration-300`}
                        >
                            Connect with me
                        </button>
                    </Link>
                </div>
            </div>

            {/* Scroll Down Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                <div className="animate-bounce">
                    <svg
                        className={`w-6 h-6 ${theme === "light" ? "text-white" : "text-gray-100"
                            }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
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