import React from "react"
import Header from "assets/parts/Header"
import Breadcrumb from "assets/components/Breadcrumb"

import ProductDetails from "assets/parts/Details/ProductDetails";
import Suggestion from "assets/parts/Details/Suggestion";

// import Hero from "assets/parts/Hero";
// import BrowseRoom from "assets/parts/HomePage/BrowseRoom";
// import JustArrived from "assets/parts/HomePage/JustArrived";
import Sitemap from "assets/parts/Sitemap";
import Footer from "assets/parts/Footer";
export default function HomePage() {
    return (
        <><div>
            <Header theme="black" />
            <Breadcrumb 
            List={[
                {url: "/", name: "Home"},
                {url: "/categories/91231", name: "Office Room"},
                {url: "/categories/91231/products/7888", name: "Details"}
                ]} 
                
            />
            <ProductDetails />
            <Suggestion/>
            <Sitemap />
            <Footer />
          </div>
        </>
    )
}