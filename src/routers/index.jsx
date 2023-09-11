import { createBrowserRouter } from "react-router-dom";
import  RootLayout from "../layout/RootLayout.jsx"

import Home from '../pages/index'
import Blog from "../pages/blog";
import About from "../pages/about";
import SinglePost from "../pages/blog/detailPost.jsx";

//loader Api
import {posts, postById} from "../api/loader.js"
import ErrorPage from "../components/ErrorPage.jsx";


export const router = createBrowserRouter([
    {
        path : "/",
        element : <RootLayout />,
        errorElement: <ErrorPage/>,
        children : [
            {
                path : '/',
                element : <Home/>
            },
            {
                path : '/about',
                element : <About/>
            },
            {
                path : '/blog',
                element : <Blog/>,
                loader : posts
            },
            {
                path : '/blog/:id',
                element : <SinglePost/>,
                loader : postById
            }
        ]
    }
])