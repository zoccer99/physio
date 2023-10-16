import React from 'react';
import Contact from '../Components/contact';
import AnnettMraz from '../Assets/Annett_Mraz.jpeg'
import { About } from '../ComponentPage/about';

import Services from '../ComponentPage/services';
import StyleCard from '../Components/styleCard';
import { Contact2 } from '../Components/contact2';
import { WelcomeText } from '../Components/welcomeText';
import { Gallery } from '../Components/gallery';

const Home = () => {
    return (
        <>
            <WelcomeText heading= 'Annett Mraz' smallText='Privatpraxis für Physiotherapie' lead='Herzlich Willkommen in meiner Praxis für Physiotherapie/Krankengymnastik. Über meine Homepage möchte ich Ihnen einen Einblick in mein Konzept und meine Therapieangebote geben. 
Für weitere Informationen stehe ich Ihnen gern zur Verfügung.'/>
            <About heading='Über mich' />
            <Gallery />
            <Services />
        </>

    )
}

export default Home;