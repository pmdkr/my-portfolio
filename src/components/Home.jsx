import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import classNames from "classnames"; // Optional: For cleaner class concatenation

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

    // Theme-specific classes
    const themeClasses = {
        background: theme === "light" ? "bg-white" : "bg-gradient-to-r from-gray-800 via-gray-900 to-black",
        text: theme === "light" ? "text-black" : "text-gray-100",
        border: theme === "light" ? "border-black" : "border-white",
        button: theme === "light" ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-700 hover:bg-gray-600",
    };

    return (
        <div className={classNames("hero min-h-screen", themeClasses.background)}>
            <div className="hero-content flex flex-col items-center text-center">
                <div className="max-w-md">
                    {/* Floating Image with Dynamic Border */}
                    <img
                        src="https://assets-us-01.kc-usercontent.com/5cb25086-82d2-4c89-94f0-8450813a0fd3/0c3fcefb-bc28-4af6-985e-0c3b499ae832/Elon_Musk_Royal_Society.jpg?fm=jpg&auto=format"
                        alt="Pramod Lohra"
                        className={classNames(
                            "rounded-full border-4 shadow-lg w-56 h-56 object-cover mx-auto floating-image",
                            themeClasses.border
                        )}
                    />

                    {/* Typewriter Effect for Heading */}
                    <h1 className={classNames("text-5xl font-semibold text-center mt-6", themeClasses.text)}>
                        {text}
                    </h1>

                    {/* Subheading */}
                    <p className={classNames("py-6 text-4xl font-semibold", themeClasses.text)}>
                        I am Pramod Lohra, Software developer from India
                    </p>

                    {/* Glowing Button */}
                    <Link to={"/contact"}>
                        <button
                            className={classNames(
                                "btn text-white hover:shadow-lg transition-all duration-300",
                                themeClasses.button
                            )}
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