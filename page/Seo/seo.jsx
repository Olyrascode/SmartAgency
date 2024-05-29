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
        <>
            <NavBar />
        <div className="seoContainer">
            <div className="seoBanner">
                <h1>Référencement & Seo</h1>
            </div>
            <div className="card1">
            <img src="./src/assets/image/seoMobil.png" alt="" />
            <p>Le référencement naturel est le meilleur moyen d&apos;accroitre votre visibilité et d'attirer de nouveaux visiteurs sur votre site</p>
            </div>
            <div className="card2">
                <img src="./src/assets/image/seoPayant.png" alt="" />
                <p>Sponsoriser votre contenu</p>
            </div>
        </div>
        </>
    )
}

export default SeoPage