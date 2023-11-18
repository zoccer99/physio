import React from "react";
import Table from "react-bootstrap/Table";

export const Pricing = () => {
  return (
    <div className="container mt-4 ">
      <div className="rounded table-responsive-sm ">
        <Table className="bg-white " size="" responsive="md">
          <caption>Preisliste</caption>
          <tbody className="">
            <tr className="">
              <td>Allgemeine Krankengymnastik</td>
              <td>30 Minuten</td>
              <td>37,50 €</td>
            </tr>
            <tr>
              <td>Manuelle Therapie</td>
              <td>30 Minuten</td>
              <td>40 €</td>
            </tr>
            <tr>
              <td>Krankengymnastik Neuro (PNF)</td>
              <td>30 Minuten</td>
              <td>52 €</td>
            </tr>
            <tr>
              <td>Manuelle Lymphdrainage</td>
              <td>30 Minuten</td>
              <td>40 €</td>
            </tr>
            <tr>
              <td></td>
              <td>45 Minuten</td>
              <td>60 €</td>
            </tr>
            <tr>
              <td></td>
              <td>60 Minuten</td>
              <td>80 €</td>
            </tr>
            <tr>
              <td>Kompressionbandage (1 Extremität)</td>
              <td>10 Minuten</td>
              <td>21 €</td>
            </tr>
            <tr>
              <td>Massage</td>
              <td>30 Minuten</td>
              <td>33 €</td>
            </tr>
            <tr>
              <td>Heiße Rolle</td>
              <td>15 Minuten</td>
              <td>15 €</td>
            </tr>
            <tr>
              <td>Wärmetherapie</td>
              <td>15 Minuten</td>
              <td>15 €</td>
            </tr>
            <tr>
              <td>Kryotherapie (Kältetherapie)</td>
              <td>10 Minuten</td>
              <td>13 €</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};
