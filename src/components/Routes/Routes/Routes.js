import { createBrowserRouter } from "react-router-dom";
import Home from "../../Home/Home/Home";
import Main from "../../layout/Main";
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
                path: '/services',
                loader: () => {
                    return fetch('http://localhost:5000/services')
                },
                element: <Services></Services>
            }
        ]
    }
])