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
        <div className="creationContainer">
            <NavBar />
            <h1>ddffsd</h1>
        </div>
    )
}

export default Creationpage