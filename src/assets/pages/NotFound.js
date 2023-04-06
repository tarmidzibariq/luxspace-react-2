import React from "react"
import Header from "assets/parts/Header"
import PageErrorMessage from "assets/parts/PageErrorMessage";
import Sitemap from "assets/parts/Sitemap";
import Footer from "assets/parts/Footer";
export default function NotFound() {
    return (
        <><div>
            <Header theme="black" />
            <PageErrorMessage/>
            <Sitemap/>
            <Footer />
          </div>
        </>
    )
}