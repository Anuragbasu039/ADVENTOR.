// src/index.jsx
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import './index.css';
import App from './App.jsx';
// import Logout from "./components/logout.jsx"; // Main App component

// Lazy load the components
const SignIn = React.lazy(() => import('./pages/signIn.jsx'));
const SignUp = React.lazy(() => import('./pages/signUp.jsx'));
const Home = React.lazy(() => import('./pages/Home/home.jsx'));
const Contact = React.lazy(() => import('./components/Contact/contact.jsx'));
const Register = React.lazy(() => import('./components/Registerform/register.jsx'));
const Checkform = React.lazy(() => import('./components/Checkform/checkform.jsx'));
const Trips = React.lazy(() => import('./components/Trips/trips.jsx'));
const About = React.lazy(() => import('./components/About/about.jsx'));


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />, // You can have a main layout here
    },
    {
        path: "/signin",
        element: (
            <React.Suspense fallback={<div>Loading Sign In...</div>}>
                <SignIn />
            </React.Suspense>
        ),
    },
    {
        path: "/signup",
        element: (
            <React.Suspense fallback={<div>Loading Sign Up...</div>}>
                <SignUp />
            </React.Suspense>
        ),
    },
    {
        path: "/home",
        element: (

                <React.Suspense fallback={<div>Loading Home...</div>}>
                    <Home />
                </React.Suspense>

        ),
    },
    {
        path: "/contact",
        element: (
            <React.Suspense fallback={<div>Loading Contact...</div>}>
                <Contact />
            </React.Suspense>
        ),
    },
    {
        path: "/register",
        element: (
            <React.Suspense fallback={<div>Loading Register...</div>}>
                <Register />
            </React.Suspense>
        ),
    },
    {
        path: "/checkform",
        element: (
            <React.Suspense fallback={<div>Loading Checkform...</div>}>
                <Checkform />
            </React.Suspense>
        ),
    },
    {
        path: "/trip",
        element: (
            <React.Suspense fallback={<div>Loading Trips...</div>}>
                <Trips />
            </React.Suspense>
        ),
    },
    {
        path: "/about",
        element: (
            <React.Suspense fallback={<div>Loading Trips...</div>}>
                <About />
            </React.Suspense>
        ),
    },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
