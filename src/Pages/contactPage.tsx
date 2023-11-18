import React from "react";
import Contact from "../Components/contact";
import { Jumbotron } from "../Components/jumbotron";

export const ContactPage = () => {
  return (
    <div className="fullscreen-container d-flex flex-column align-items-center">
      <Jumbotron
        heading="Kontakt"
        text="Herzlich willkommen auf unserer Kontaktseite! Wir freuen uns, dass Sie den Weg zu uns gefunden haben. Ihre Fragen, Anregungen und Anliegen sind uns wichtig. Kontaktieren Sie uns gerne - sei es für Terminvereinbarungen, weitere Informationen zu unseren Leistungen oder um einfach mit uns in Verbindung zu treten. Wir stehen Ihnen zur Verfügung und sind darauf bedacht, Ihnen bestmöglich zu helfen. Nutzen Sie die unten stehenden Kontaktinformationen, um mit uns in Kontakt zu treten. Wir freuen uns darauf, von Ihnen zu hören und Ihnen weiterzuhelfen!"
      />
      <Contact
        name="Annett Mraz"
        address="Physiotherapie Annett Mraz 
            Münchholzhäuser Str. 22
            35582 Wetzlar"
        telephone="015233786232"
        email="annett.mraz@web.de"
      />
    </div>
  );
};
