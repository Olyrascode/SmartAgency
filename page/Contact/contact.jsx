import React, {useEffect} from "react"

import NavBar from "../../components/Navbar/navbar"

function Contact() {

    useEffect(() => {
        document.body.classList.add('contactPage');

        return () => {
            document.body.classList.remove('contactPage');
        };
    }, []);

    return (
        <div className="contactContainer">
            <form className="form" action="submit">
                <label htmlFor="name">Nom</label>
                <input type="text" name="name" id="name" />
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" id="email" />
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message"></textarea>
                <div className="buttonDiv">
                <button>Envoyer</button>
                </div>
            </form>
          <NavBar />

        </div>
    )
}
export default Contact