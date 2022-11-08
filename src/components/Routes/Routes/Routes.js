import { createBrowserRouter } from "react-router-dom";
import AddService from "../../AddService/AddService";
import Blog from "../../Blog/Blog";
import Home from "../../Home/Home/Home";
import ItemDetails from "../../ItemDetails/ItemDetails";
import Main from "../../layout/Main";
import Login from "../../Login/Login/Login";
import Register from "../../Login/Register/Register";
import Services from "../../Services/Services";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/addService',
                element: <AddService></AddService>
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