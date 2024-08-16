import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home.jsx";
import OurLinks from "./pages/OurLinks.jsx";
import RandomStuff from "./pages/RandomStuff.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/OurLinks",
        element: <OurLinks/>,
    },
    {
        path: "/RandomStuff",
        element: <RandomStuff/>,
    }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
