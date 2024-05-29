import React, {useEffect} from "react";
import NavBar from "../../components/Navbar/navbar"


function Creationpage() {
    useEffect(() => {
        document.body.classList.add('contactPage');

        return () => {
            document.body.classList.remove('contactPage');
        };
    }, []);
    return (
        <>
            <NavBar />
        <div className="creationContainer">
            <h1>Création de site Web</h1>
            <div className="cardContainer">
        <div className="card1">
            <div className="image"></div>
            <div className="cardText">
                <h2>Site Vitrine</h2>
                <p> un site vitrine est un outil essentiel pour toute entreprise cherchant à établir une présence en ligne solide.
                     En présentant de manière attractive ses produits, ses services et son identité,
                      un site vitrine permet aux entreprises d&apos;attirer de nouveaux clients,
                       et renforcer sa crédibilité sur le marché.</p>
            </div>
        </div>
        <div className="card2">
            <div className="image"></div>
            <div className="cardText">
                <h2> Site E-commerce</h2>
                <p>site ecommerc</p>
            </div>
        </div>
        <div className="card3">
            <div className="image"></div>
            <div className="cardText">
                <h2>Mise à jour a votre site</h2>
                <p>Votre site est ancien ? Nous vous proposons de redesigner votre site</p>
            </div>
        </div>
            </div>
        </div>
        </>
    )
}

export default Creationpage