// src/index.jsx
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
    Navigate
} from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import ThailandPage from "./Destinations/ThailandSection.jsx";
import VietnamPage from "./Destinations/VietnamSection.jsx";
import MaldivesPage from "./Destinations/MaldivesSection.jsx";

// Lazy load the components
const SignIn = React.lazy(() => import('./pages/signIn.jsx'));
const SignUp = React.lazy(() => import('./pages/signUp.jsx'));
const Home = React.lazy(() => import('./pages/Home/home.jsx'));
const Contact = React.lazy(() => import('./components/Contact/contact.jsx'));
const Register = React.lazy(() => import('./components/Registerform/register.jsx'));
const Checkform = React.lazy(() => import('./components/Checkform/checkform.jsx'));
const Trips = React.lazy(() => import('./components/Trips/trips.jsx'));
const About = React.lazy(() => import('./components/About/about.jsx'));
const DestinationSection = React.lazy(() => import('./Destinations/DubaiSection.jsx'))
// PrivateRoute component to protect routes
const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('token');
    return token ? children : <Navigate to="/signin" />;
};

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
            <PrivateRoute>
                <React.Suspense fallback={<div>Loading Home...</div>}>
                    <Home />
                </React.Suspense>
            </PrivateRoute>
        ),
    },
    {
        path: "/contact",
        element: (
            <PrivateRoute>
            <React.Suspense fallback={<div>Loading Contact...</div>}>
                <Contact />
            </React.Suspense>
            </PrivateRoute>
        ),
    },
    {
        path: "/register",
        element: (
            <PrivateRoute>
            <React.Suspense fallback={<div>Loading Register...</div>}>
                <Register />
            </React.Suspense>
            </PrivateRoute>
        ),
    },
    {
        path: "/checkform",
        element: (
            <PrivateRoute>
            <React.Suspense fallback={<div>Loading Checkform...</div>}>
                <Checkform />
            </React.Suspense>
            </PrivateRoute>
        ),
    },
    {
        path: "/trip",
        element: (
            <PrivateRoute>
            <React.Suspense fallback={<div>Loading Trips...</div>}>
                <Trips />
            </React.Suspense>
</PrivateRoute>
        ),
    },
    {
        path: "/about",
        element: (
            <PrivateRoute>
            <React.Suspense fallback={<div>Loading About...</div>}>
                <About />
            </React.Suspense>
            </PrivateRoute>
        ),
    },
    {
        path: "/dubai",
        element: (
            <PrivateRoute>
                <React.Suspense fallback={<div>Loading About...</div>}>
                    <DestinationSection />
                </React.Suspense>
            </PrivateRoute>
        ),
    },
    {
        path: "/thailand",
        element: (
            <PrivateRoute>
                <React.Suspense fallback={<div>Loading About...</div>}>
                    <ThailandPage />
                </React.Suspense>
            </PrivateRoute>
        ),
    },
    {
        path: "/thailand",
        element: (
            <PrivateRoute>
                <React.Suspense fallback={<div>Loading About...</div>}>
                    <ThailandPage />
                </React.Suspense>
            </PrivateRoute>
        ),
    },
    {
        path: "/vietnam",
        element: (
            <PrivateRoute>
                <React.Suspense fallback={<div>Loading About...</div>}>
                    <VietnamPage />
                </React.Suspense>
            </PrivateRoute>
        ),
    },
    {
        path: "/maldives",
        element: (
            <PrivateRoute>
                <React.Suspense fallback={<div>Loading About...</div>}>
                    <MaldivesPage />
                </React.Suspense>
            </PrivateRoute>
        ),
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
