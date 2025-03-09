import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import App from "./App";
import About from "./components/About";
import Contact from "./components/Contact";
import Project from "./components/Project";

const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                path: '',
                Component: Home
            },
            {
                path: '/about',
                Component: About
            },
            {
                path: '/project',
                Component: Project
            },
            {
                path: '/contact',
                Component: Contact
            }

        ]
    }
])



export default router;