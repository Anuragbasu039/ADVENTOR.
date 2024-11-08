// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from "../../components/Navbar/navbar.jsx";
import Header from "../../components/Header/header.jsx";
import Tripscard from "../../components/Tripscards/tripscard.jsx";
import Indiantrips from "../../components/IndianTrips/indiantrips.jsx";
import Internationaltrips from "../../components/InternationalTrips/internationaltrips.jsx";

function Home() {
    // State to manage the dropdown visibility


    return (
     <div>
         <Navbar/>
         <Header/>
         <Tripscard/>
         <Indiantrips />
         <Internationaltrips />
        </div>
    );
}

export default Home;
