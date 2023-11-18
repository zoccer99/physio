import React from "react";
import Services from "../ComponentPage/services";
import { Accordeon } from "../Components/accordeon";
import { Jumbotron } from "../Components/jumbotron";
import { Qualifications } from "../Components/qualitfications";

export const ServicePage = () => {
  return (
    <div>
      <Jumbotron
        heading="Unsere Leistungen"
        text="Willkommen in meiner Physiotherapie-Praxis, wo ich Ihnen eine breite Palette von vielseitigen Leistungen anbiete, um Ihre Gesundheit optimal zu unterstützen. Als erfahrene Physiotherapeutin setze ich mich dafür ein, individuelle Therapiepläne zu entwickeln, die genau auf Ihre Bedürfnisse abgestimmt sind.

        In meiner Praxis stehen nicht nur bewährte Methoden der Physiotherapie im Fokus, sondern auch innovative Ansätze, um Ihnen eine umfassende Betreuung zu bieten. Ob rehabilitative Übungen, manuelle Therapie oder spezialisierte Techniken – ich setze auf moderne Methoden, um sicherzustellen, dass Sie die bestmögliche Behandlung erhalten.
        
        Egal, ob Sie sich von einer Verletzung erholen, chronische Schmerzen lindern oder Ihre körperliche Leistungsfähigkeit verbessern möchten – ich stehe Ihnen mit einem breiten Spektrum an Dienstleistungen zur Seite. Auf meiner Webseite finden Sie detaillierte Informationen zu meinem Leistungsangebot, meinem professionellen Team und den neuesten Entwicklungen in der Physiotherapie.
        
        Ich bin stolz darauf, eine vertrauenswürdige Anlaufstelle für Physiotherapie zu sein und freue mich darauf, Ihnen zu helfen, Ihre individuellen Gesundheitsziele zu erreichen. Erfahren Sie mehr über meine Praxis und nehmen Sie Kontakt auf, um einen Termin zu vereinbaren. Ihr Wohlbefinden steht für mich im Mittelpunkt!"
      />
      {/* <Services /> */}
      <Accordeon />
    </div>
  );
};
