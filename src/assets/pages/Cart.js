import React from "react"
import Header from "assets/parts/Header"
import Breadcrumb from "assets/components/Breadcrumb"

import ShoppingCart from "assets/parts/Cart/ShoppingCart";
import ShippingDetails from "assets/parts/Cart/ShippingDetails";
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
                {url: "/cart", name: "Shopping Cart"},
                ]} 
                
            />
            <section class="md:py-16">
                <div class="container mx-auto px-4">
                    <div class="flex -mx-4 flex-wrap">
                         
                        <ShoppingCart />
                        <ShippingDetails/>
                    </div>
                </div>
            </section>
            <Sitemap/>
            <Footer />
          </div>
        </>
    )
}