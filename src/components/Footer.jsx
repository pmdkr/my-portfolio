import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowUp } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const socialLinks = [
    {
        href: "https://github.com/yourusername",
        icon: <FaGithub />,
        label: "GitHub"
    },
    {
        href: "https://linkedin.com/in/yourusername",
        icon: <FaLinkedin />,
        label: "LinkedIn"
    },
    {
        href: "https://twitter.com/yourusername",
        icon: <FaTwitter />,
        label: "Twitter"
    },
    {
        href: "mailto:pramodkrlohra@gmail.com",
        icon: <FaEnvelope />,
        label: "Email"
    }
];

const Footer = () => {
    const theme = useSelector((state) => state.theme);

    // Scroll to top handler
    const handleScrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Theme-based styles
    const isLight = theme === "light";
    const buttonBg = isLight ? "#fbcfe8" : "#be185d"; // light: pink-100, dark: pink-800
    const buttonText = isLight ? "#a21caf" : "#363a3a"; // light: purple-700, dark: black
    const buttonBase = isLight
        ? "bg-white bg-opacity-40 text-purple-700 hover:bg-opacity-70"
        : "bg-white bg-opacity-20 text-white hover:bg-opacity-80";
    const iconBase = isLight
        ? "text-purple-700 hover:text-pink-600"
        : "text-white hover:text-pink-200";

    return (
        <footer className={`w-full py-6 px-4 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10 backdrop-blur-md bg-white/30 dark:bg-gray-900/30 border-t border-white/20 dark:border-gray-700/40 shadow-t`}>
            {/* Left: Logo and Copyright */}
            <div className="flex items-center gap-3 mb-2 md:mb-0">
                <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="footer-logo-gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#a855f7" />
                            <stop offset="1" stopColor="#f472b6" />
                        </linearGradient>
                    </defs>
                    <circle cx="20" cy="20" r="20" fill="url(#footer-logo-gradient)" />
                    <text x="50%" y="56%" textAnchor="middle" fill="white" fontSize="16" fontFamily="Arial, Helvetica, sans-serif" dy=".3em" fontWeight="bold" letterSpacing="2">PL</text>
                </svg>
                <motion.p
                    className="text-sm font-semibold"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    © {new Date().getFullYear()} Pramod Lohra. All rights reserved.
                </motion.p>
            </div>

            {/* Center: Social Links */}
            <div className="flex gap-5">
                {socialLinks.map((link, idx) => (
                    <motion.a
                        key={link.label}
                        href={link.href}
                        target={link.href.startsWith('http') ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        aria-label={link.label}
                        className={`text-2xl transition-transform duration-200 hover:scale-125 ${iconBase}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                    >
                        {link.icon}
                    </motion.a>
                ))}
            </div>

            {/* Right: Back to Top Button */}
            <motion.button
                onClick={handleScrollTop}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold shadow-md transition-all duration-300 focus:outline-none ${buttonBase}`}
                whileHover={{
                    scale: 1.12,
                    backgroundColor: buttonBg,
                    color: buttonText,
                    textShadow: !isLight ? "0 1px 8px #be185d" : "none",
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                aria-label="Back to Top"
                style={{ color: buttonText }} // Ensure text color is set by default
            >
                <FaArrowUp className="text-xl" />
                <span className="hidden sm:inline">Back to Top</span>
            </motion.button>
        </footer>
    );
};

export default Footer;