import React from "react";
import CookieConsent from 'react-cookie-consent';

import Contact from "../Components/contact";
import AnnettMraz from "../Assets/Annett_Mraz.jpeg";
import { About } from "../ComponentPage/about";

import Services from "../ComponentPage/services";
import StyleCard from "../Components/styleCard";
import { Contact2 } from "../Components/contact2";
import { WelcomeText } from "../Components/welcomeText";
import { Gallery } from "../Components/gallery";
import { Accordeon } from "../Components/accordeon";

const Home = () => {
    return (
        <>
            <WelcomeText
                heading="Annett Mraz"
                smallText="Privatpraxis für Physiotherapie"
                lead="Herzlich Willkommen in meiner Praxis für Physiotherapie / Krankengymnastik. Über meine Homepage möchte ich Ihnen einen Einblick in mein Konzept und meine Therapieangebote geben. 
Für weitere Informationen stehe ich Ihnen gern zur Verfügung."
            />
            {/* <About heading="Über mich" /> */}
            <Contact
                name="Annett Mraz"
                address="Physiotherapie Annett Mraz<br>
                        Münchholzhäuser Str. 22<br>
                        35582 Wetzlar"
                telephone="015233786232"
                email="physio.mraz@gmail.com"
            />
            <div className="mt-4">
                <div className="d-flex justify-content-center">

                    <h1 className="">Unsere Leistungen</h1>
                </div>
                {/* <Services /> */}
                <Accordeon />
                <CookieConsent
                    location="bottom"
                    buttonText="Akzeptieren"
                    style={{ background: "hsla(145, 83%, 74%, 1)" }}
                    buttonStyle={{ color: "hsla(204, 77%, 76%, 1)", fontSize: "13px" }}
                >
                    Diese Webseite benutzt Cookies um Ihre Benutzererfahrung zu verbessern.
                </CookieConsent>
            </div>
        </>
    );
};

export default Home;
