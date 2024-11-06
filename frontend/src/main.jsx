import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from './App.jsx'; // Assuming your App component is set up for additional routes
import SignIn from './pages/signIn.jsx'; // Import the SignIn component
import SignUp from './pages/signUp.jsx'; // Import the SignUp component
import Home from './pages/Home/home.jsx'
import Contact from './components/Contact/contact.jsx'
import Register from './components/Registerform/register.jsx'
import Checkform from './components/Checkform/checkform.jsx'
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />, // You can have a main layout here
    },
    {
        path: "/signin",
        element: <SignIn />, // Sign In route
    },
    {
        path: "/signup",
        element: <SignUp />, // Sign Up route
    },
    {
        path: "/home",
        element: <Home />, // Sign Up route
    },
    {
        path: "/contact",
        element: <Contact />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/checkform",
        element: <Checkform />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
