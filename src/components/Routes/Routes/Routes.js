import { createBrowserRouter } from "react-router-dom";
import AddService from "../../AddService/AddService";
import Blog from "../../Blog/Blog";
import Home from "../../Home/Home/Home";
import ItemDetails from "../../ItemDetails/ItemDetails";
import Main from "../../layout/Main";
import Login from "../../Login/Login/Login";
import Register from "../../Login/Register/Register";
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
                element: <PrivateRoute><Blog></Blog></PrivateRoute>
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
                    return fetch('http://localhost:5000/services')
                },
                element: <Services></Services>
            },
            {
                path: '/services/:id',
                element: <ItemDetails></ItemDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            }
        ]
    }
])