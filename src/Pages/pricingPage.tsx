import React from "react";
import { Pricing } from "../Components/pricing";
import { Jumbotron } from "../Components/jumbotron";

export const PricingPage = () => {
  return (
    <div className="container rounded">
      <Jumbotron
        heading="Information für Privatpatienten"
        text="Es ist bedauerlicherweise immer wieder der Fall, dass private
          Krankenversicherungen versuchen, ihren Kunden einen Teil der
          rechtmäßig erhobenen Honorare für Heilmittel vorzuenthalten und
          Rechnungen zu kürzen. In den meisten Fällen geschieht dies zu Unrecht
          , wie verschiedene Gerichtsurteile in den letzten Jahren bestätigt
          haben. Im Bereich der privaten Krankenversicherung gibt es keine
          allgemeine verbindliche Gebührenordnung für physiotherapeutische
          Leistungen. Bei der Preisgestaltung orientiere ich mich an den
          Empfehlungen aus der Gebührenübersicht für Therapeuten. (GebüTH) Diese
          Übersicht dient als Rahmen für Festlegung von Privatpatienten in der
          Physiotherapie und anderen Bereichen der Heilmitteltherapie. Für
          Privatpatienten und Selbstzahler erlaubt der Gesetzgeber die Anwendung
          eines Multiplikators zur Kostendeckung der physiotherapeutischen
          Leistungen, der zwischen 1,4 und 2,3 liegen. Meine Preise liegen
          zwischen 1,4 und 1,8."
      />

      <Pricing />
    </div>
  );
};
