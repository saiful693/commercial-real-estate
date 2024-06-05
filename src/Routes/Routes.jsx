import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import EstateDetails from "../pages/EstateDetails";
import PrivateRoute from "./PrivateRoute";
import Support from "../pages/Support";

const router=createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader:() =>fetch('/estate.json')
            },
            {
                path: '/support',
                element: <PrivateRoute><Support></Support></PrivateRoute>,
                loader:()=>fetch('/services.json')
            },
            {
                path: '/estate/:id',
                element: <PrivateRoute><EstateDetails></EstateDetails></PrivateRoute>,
                loader:() =>fetch('/estate.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            }
            ,
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
]);

export default router;