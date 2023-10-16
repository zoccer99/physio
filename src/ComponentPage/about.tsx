import React from 'react';
import { Contact2 } from '../Components/contact2';
import { Qualifications } from '../Components/qualitfications';
import AnnettMraz from '../Assets/Annett_Mraz.jpeg'

type AboutpropsType = {
    heading: string,
    headingSubText?: string
}

export const About = (props: AboutpropsType) => {
    return (
        <div className="team-boxed">
            <div className="container">
                <div className="intro">
                    <h2 className="text-center">{props.heading}</h2>
                    <p className="text-center">{props.headingSubText}</p>
                </div>
        <div className='d-flex flex-wrap justify-content-between'>
            <Contact2 picture={AnnettMraz} heading="Über mich" name="Annett Mraz" function='Physiotherapeutin' description='Mein Name ist Annett Mraz und ich bin seit über 30 Jahren als Physiotherapeutin tätig.
 Ich habe meine Ausbildung zur Physiotherapeutin im Jahre 1991 an der Martin-Luther-Universität in Halle an der Saale abgeschlossen. Im Laufe meiner langjährigen Berufserfahrung habe ich bereits in verschiedenen stationären und ambulanten Bereichen der Physiotherapie gearbeitet und konnte mein Wissen im Laufe der Jahre kontinuierlich erweitern.'/>
            <Qualifications qualificationsArr={["Manuelle Therapie",
                "Manuelle Lymphdrainage",
                "Sportphysiotherapie",
                "PNF- Propriozeptive Neuromuskuläre Fazilitation – KG Neuro",
                "Medizinische Trainingstherapie"]} />
        </div>
        </div>
        </div>
    )
}
