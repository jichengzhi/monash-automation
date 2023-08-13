import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./routes/Root.tsx";
import ErrorPage from "./routes/ErrorPage.tsx";
import Home from "./routes/Home.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "about-us",
                element: <h1>About Us Page</h1>,
            },
            {
                path: "projects",
                element: <h1>Projects Page</h1>
            },
            {
                path: "teams",
                element: <h1>Teams Page</h1>
            },
            {
                path: "recruitment",
                element: <h1>Recruitment Page</h1>
            },
            {
                path: "resources",
                element: <h1>Resources Page</h1>
            },
            {
                path: "more",
                element: <h1>More Page</h1>
            },
        ]
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
);
