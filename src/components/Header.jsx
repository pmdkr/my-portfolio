import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../utils/themeSlice";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme); // Access theme from Redux store

    const handleThemeChange = () => {
        dispatch(toggleTheme());
        document.documentElement.setAttribute("data-theme", theme === "light" ? "dark" : "light");
    };

    return (
        <div className="navbar bg-base-100 shadow-sm fixed w-full flex justify-between items-center px-4 border-b-2 border-transparent hover:border-gradient-to-r from-purple-400 via-pink-500 to-red-500 transition-all">
            <div className="navbar bg-base-100 shadow-sm fixed w-full flex justify-between items-center px-4">
                {/* Left Section - Mobile Menu Toggle */}
                <div className="flex-none md:hidden">
                    <button
                        className="btn btn-square btn-ghost"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-5 w-5 stroke-current"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </button>
                </div>

                {/* Middle Section - Navbar Links (Hidden on Mobile) */}
                <div className="hidden md:flex flex-auto">
                    <ul className="flex">
                        <Link to={"/"}>
                            <li className="p-2 mx-2 cursor-pointer hover:text-purple-500 transition-all">Home</li>
                        </Link>
                        <Link to={"/about"}>
                            <li className="p-2 mx-2 cursor-pointer hover:text-purple-500 transition-all">About</li>
                        </Link>
                        <Link to={"/contact"}>
                            <li className="p-2 mx-2 cursor-pointer hover:text-purple-500 transition-all">Contact</li>
                        </Link>
                        <Link to={"/project"}>
                            <li className="p-2 mx-2 cursor-pointer hover:text-purple-500 transition-all">Projects</li>
                        </Link>
                    </ul>
                </div>

                {/* Center Section - Logo/Name */}
                <div className="flex-auto flex justify-start items-center gap-2">
                    <img
                        src="../assets/myphoto.jpg"
                        alt="Logo"
                        className="rounded-full h-10 w-10"
                    />
                    <Link to={"/"} className="btn btn-ghost text-xl">
                        Pramod
                    </Link>
                </div>

                {/* Right Section - Social Media Icons & Theme Toggle */}
                <div className="flex-none flex items-center gap-4">
                    {/* Social Media Icons */}
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="h-6 w-6 cursor-pointer hover:text-gray-500 transition-all" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="h-6 w-6 cursor-pointer hover:text-blue-500 transition-all" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="h-6 w-6 cursor-pointer hover:text-blue-400 transition-all" />
                    </a>

                    {/* Theme Toggle Button */}
                    <button className="btn btn-square btn-ghost" onClick={handleThemeChange}>
                        {theme === "light" ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-5 w-5 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 3v1M12 20v1M4.22 4.22l.71.71M19.07 19.07l.71.71M1 12h1M21 12h1M4.22 19.78l.71-.71M19.07 4.93l.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                ></path>
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-5 w-5 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 3a9 9 0 100 18 9 9 0 000-18z"
                                ></path>
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Dropdown Menu */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-16 left-0 w-full bg-base-100 shadow-lg">
                        <ul className="flex flex-col">
                            <Link to={"/"}>
                                <li className="p-4 cursor-pointer hover:bg-gray-100">Home</li>
                            </Link>
                            <Link to={"/about"}>
                                <li className="p-4 cursor-pointer hover:bg-gray-100">About</li>
                            </Link>
                            <Link to={"/contact"}>
                                <li className="p-4 cursor-pointer hover:bg-gray-100">Contact</li>
                            </Link>
                            <Link to={"/project"}>
                                <li className="p-4 cursor-pointer hover:bg-gray-100">Projects</li>
                            </Link>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;