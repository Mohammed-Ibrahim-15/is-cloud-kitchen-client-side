import { createBrowserRouter } from "react-router-dom";
import AddService from "../../AddService/AddService";
import Blog from "../../Blog/Blog";
import Home from "../../Home/Home/Home";
import ItemDetails from "../../ItemDetails/ItemDetails";
import Main from "../../layout/Main";
import Login from "../../Login/Login/Login";
import Register from "../../Login/Register/Register";
import MyReview from "../../Review/MyReview/MyReview";
import UpdateReview from "../../Review/UpdateReview/UpdateReview";
import Services from "../../Services/Services";
import ErrorRoute from "../ErrorRoute/ErrorRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorRoute></ErrorRoute>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/update/:id',
                element: <UpdateReview></UpdateReview>,
                loader: ({ params }) => fetch(`https://is-cloud-kitchen-server-side-mohammed-ibrahim-15.vercel.app/update/${params.id}`)
            },
            {
                path: 'myReview',
                element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/addService',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/services',
                loader: () => {
                    return fetch('https://is-cloud-kitchen-server-side-mohammed-ibrahim-15.vercel.app/services')
                },
                element: <Services></Services>
            },
            {
                path: '/services/:id',
                element: <ItemDetails></ItemDetails>,
                loader: ({ params }) => fetch(`https://is-cloud-kitchen-server-side-mohammed-ibrahim-15.vercel.app/services/${params.id}`)
            }
        ]
    }
])