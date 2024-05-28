import React, {useEffect} from "react"
import NavBar from "../../components/Navbar/navbar"


function SeoPage() {
    useEffect(() => {
        document.body.classList.add('contactPage');

        return () => {
            document.body.classList.remove('contactPage');
        };
    }, []);
    return (
        <div className="seoContainer">
            <NavBar />
            <div>
                <h1>SEo PAGE</h1>
            </div>
        </div>
    )
}

export default SeoPage