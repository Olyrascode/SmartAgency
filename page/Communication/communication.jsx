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
        <div className="communicationContainer">
            <NavBar/>
            <h1>Communication page</h1>
        </div>
    )
}

export default CommunicationPage