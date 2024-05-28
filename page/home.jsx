import React, {useEffect} from "react"

import NavBar from "../components/Navbar/navbar"
import HeroBanner from "../components/HeroBanner/heroBanner"

function HomePage() {

    return (
        <div className="main">
            <NavBar />
            <HeroBanner />
     
        </div>
    )
}

export default HomePage