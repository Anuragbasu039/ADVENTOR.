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
import VietnamPage from "./Destinations/BhutanSection.jsx";
import MaldivesPage from "./Destinations/MaldivesSection.jsx";
import BaliPage from "./Destinations/BaliSection.jsx";
import BhutanPage from "./Destinations/BhutanSection.jsx";
import Dubaibooking from "./Booking/dubaibooking.jsx";
// import Shopingdashboard from "./ShopProduct/Shopingdashboard.jsx";
// import Checkout from "./components/checkout.jsx";
// import ProductPage from "./ShopProduct/productPage.jsx";

// Lazy load the components
const SignIn = React.lazy(() => import('./pages/signIn.jsx'));
const SignUp = React.lazy(() => import('./pages/signUp.jsx'));
const Home = React.lazy(() => import('./pages/Home/home.jsx'));
const Contact = React.lazy(() => import('./components/Contact/contact.jsx'));
// const Register = React.lazy(() => import('./components/Registerform/register.jsx'));
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
                <React.Suspense fallback={<div>Loading Dubai...</div>}>
                    <DestinationSection />
                </React.Suspense>
            </PrivateRoute>
        ),
    },
    {
        path: "/thailand",
        element: (
            <PrivateRoute>
                <React.Suspense fallback={<div>Loading Thailand...</div>}>
                    <ThailandPage />
                </React.Suspense>
            </PrivateRoute>
        ),
    },
    {
        path: "/bhutan",
        element: (
            <PrivateRoute>
                <React.Suspense fallback={<div>Loading Bhutan...</div>}>
                    <BhutanPage />
                </React.Suspense>
            </PrivateRoute>
        ),
    },
    {
        path: "/maldives",
        element: (
            <PrivateRoute>
                <React.Suspense fallback={<div>Loading Maldives...</div>}>
                    <MaldivesPage />
                </React.Suspense>
            </PrivateRoute>
        ),
    },
    {
        path: "/bali",
        element: (
            <PrivateRoute>
                <React.Suspense fallback={<div>Loading Bali...</div>}>
                    <BaliPage />
                </React.Suspense>
            </PrivateRoute>
        ),
    },
    // Dynamic Route for Dubaibooking with tripId
    {
        path: "/dubaibooking/:tripId", // Dynamic segment for trip ID
        element: (
            <PrivateRoute>
                <React.Suspense fallback={<div>Loading Dubaibooking...</div>}>
                    <Dubaibooking />
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
