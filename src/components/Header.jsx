import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../utils/themeSlice";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from "../assets/pramod-logo.svg";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme);

    const handleThemeChange = () => {
        dispatch(toggleTheme());
        document.documentElement.setAttribute("data-theme", theme === "light" ? "dark" : "light");
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`fixed top-0 w-full z-50 transition-all duration-300 
            ${scrolled
                ? theme === "light"
                    ? "bg-white shadow-md border-b border-gray-200"
                    : "bg-gray-900 shadow-md border-b border-gray-700"
                : "bg-transparent"
            }`}>
            <div className="navbar flex justify-between items-center px-4">
                {/* Left - Mobile Menu */}
                <div className="flex-none md:hidden">
                    <button className="btn btn-square btn-ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-5 w-5 stroke-current">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>

                {/* Center - Logo */}
                <div className="flex-auto flex justify-start items-center gap-2 min-w-0">
                    <Link to={"/"} className="btn btn-ghost text-xl flex items-center gap-2 min-w-0">
                        <img src={logo} alt="Logo" className="w-8 h-8" />
                        <span
                            className="text-2xl font-bold"
                            style={{ color: theme === "light" ? "#a855f7" : "#fff" }}
                        >
                            Pramod
                        </span>
                        <span
                            className="mx-2 text-2xl font-bold hidden md:inline"
                            style={{ color: theme === "light" ? "#a855f7" : "#fff" }}
                        >
                            |
                        </span>
                        <span
                            className="text-lg font-semibold truncate hidden md:inline"
                            style={{ color: theme === "light" ? "#a855f7" : "#fff" }}
                        >
                            Software Engineer
                        </span>
                    </Link>
                </div>

                {/* Middle - Links */}
                <div className="hidden md:flex flex-auto">
                    <ul className="flex">
                        <Link to="/"><li className="p-2 mx-2 hover:text-purple-500 cursor-pointer">Home</li></Link>
                        <Link to="/about"><li className="p-2 mx-2 hover:text-purple-500 cursor-pointer">About</li></Link>
                        <Link to="/contact"><li className="p-2 mx-2 hover:text-purple-500 cursor-pointer">Contact</li></Link>
                        <Link to="/project"><li className="p-2 mx-2 hover:text-purple-500 cursor-pointer">Projects</li></Link>
                    </ul>
                </div>

                {/* Right - Icons + Theme Toggle */}
                <div className="flex-none flex items-center gap-4">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="h-6 w-6 hover:text-gray-500 cursor-pointer" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="h-6 w-6 hover:text-blue-500 cursor-pointer" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="h-6 w-6 hover:text-blue-400 cursor-pointer" />
                    </a>
                    <button className="btn btn-square btn-ghost" onClick={handleThemeChange}>
                        {theme === "light" ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-5 w-5 stroke-current">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1M12 20v1M4.22 4.22l.71.71M19.07 19.07l.71.71M1 12h1M21 12h1M4.22 19.78l.71-.71M19.07 4.93l.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-5 w-5 stroke-current">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3a9 9 0 100 18 9 9 0 000-18z" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="absolute top-16 left-0 w-full bg-base-100 shadow-lg md:hidden">
                        <ul className="flex flex-col">
                            <Link to="/"><li className="p-4 hover:bg-gray-100">Home</li></Link>
                            <Link to="/about"><li className="p-4 hover:bg-gray-100">About</li></Link>
                            <Link to="/contact"><li className="p-4 hover:bg-gray-100">Contact</li></Link>
                            <Link to="/project"><li className="p-4 hover:bg-gray-100">Projects</li></Link>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
