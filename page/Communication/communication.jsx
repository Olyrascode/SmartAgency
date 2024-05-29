import React, {useEffect} from "react";
import NavBar from "../../components/Navbar/navbar";

function CommunicationPage() {
    useEffect(() => {
        document.body.classList.add('contactPage');

        return () => {
            document.body.classList.remove('contactPage');
        };
    }, []);
    return (
        <>
            <NavBar />
        <div className="communicationContainer">
            <div className="communicationBanner">
                <h1>Création de contenu multimédia</h1>
            </div>
            
        </div>
        </>
    )
}

export default CommunicationPage