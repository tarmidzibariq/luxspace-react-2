import React from "react"
import Header from "assets/parts/Header"
import Hero from "assets/parts/Hero";
import BrowseRoom from "assets/parts/HomePage/BrowseRoom";
import JustArrived from "assets/parts/HomePage/JustArrived";
import Clients from "assets/parts/Clients";
import Sitemap from "assets/parts/Sitemap";
import Footer from "assets/parts/Footer";
export default function HomePage() {
    return (
        <>
            <Header theme="white" position="absolute"/>
            <Hero />
            <BrowseRoom/>
            <JustArrived />
            <Clients />
            <Sitemap />
            <Footer/>
        </>
    )
}