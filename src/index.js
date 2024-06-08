import ReactDom from "react-dom/client"
import Home from "./views/Home/home"
import Category from "./views/Category/category"
import About from "./views/About/about"
import Contact from "./views/Contact/contact"
const root =ReactDom.createRoot(document.getElementById("root"))    
import { createBrowserRouter ,RouterProvider } from "react-router-dom"
const router =createBrowserRouter([
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/home",
        element : <h1>Home Page</h1>
    },
    {
        path:"/category",
        element : < Category/>
    },
    {
        path:"/about",
        element : <About/>
    },
    {
        path:"/contact",
        element : <Contact/>
    }
])
root.render(<RouterProvider router={router} /> )