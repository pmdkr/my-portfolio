import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import App from "./App";
import About from "./components/About";
import Contact from "./components/Contact";
import Project from "./components/Project";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "project",
                element: <Project />
            },
            {
                path: "contact",
                element: <Contact />
            }
        ]
    }
])

export default router;