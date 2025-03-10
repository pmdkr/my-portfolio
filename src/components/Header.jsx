import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../utils/themeSlice"; // Import your theme toggle action

const Header = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme); // Access theme from Redux store

    const handleThemeChange = () => {
        dispatch(toggleTheme());
        document.documentElement.setAttribute("data-theme", theme === "light" ? "dark" : "light");
    };

    return (
        <div className="navbar bg-base-100 shadow-sm fixed flex">
            <div className="flex-none">
                <button className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
            <div className="flex-none">
                <Link to={"/"} className="btn btn-ghost text-xl">Pramod</Link>
            </div>

            <div className="flex-1 flex justify-center">
                <ul className="flex">
                    <Link to={"/about"}><li className="p-2 mx-2 cursor-pointer">About</li></Link>
                    <Link to={"/contact"}><li className="p-2 mx-2 cursor-pointer">Contact</li></Link>
                    <Link to={"/project"}><li className="p-2 mx-2 cursor-pointer">Projects</li></Link>
                </ul>
            </div>

            {/* Theme Toggle Button */}
            <div className="flex-none">
                <button className="btn btn-square btn-ghost" onClick={handleThemeChange}>
                    {theme === "light" ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1M12 20v1M4.22 4.22l.71.71M19.07 19.07l.71.71M1 12h1M21 12h1M4.22 19.78l.71-.71M19.07 4.93l.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3a9 9 0 100 18 9 9 0 000-18z"></path>
                        </svg>
                    )}
                </button>
            </div>
        </div>
    );
};

export default Header;
