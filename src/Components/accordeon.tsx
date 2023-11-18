import React from "react";
import Accordion from "react-bootstrap/Accordion";
export const Accordeon = () => {
  return (
    <div className="container mt-3">
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Krankengymnastik</Accordion.Header>
        <Accordion.Body>
          Krankengymnastik ist eine Therapiemethode, die darauf abzielt, die
          Funktionen des Bewegungsapparates wiederherzustellen und Schmerzen zu
          reduzieren. Dabei werden gezielte Übungen, Handgriffe und Bewegungen
          eingesetzt, die auf die spezifischen Beschwerden des Patienten
          abgestimmt sind. Das Ziel ist es, die Beweglichkeit zu verbessern, die
          Muskulatur zu stärken und die Körperhaltung zu optimieren. Die
          Krankengymnastik wird bei verschiedenen Erkrankungen des
          Bewegungsapparates eingesetzt, wie zum Bsp. bei Rückenschmerzen,
          Gelenkproblemen oder nach Verletzungen.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          Propriozeptive Neuromuskuläre Fazilitation ( PNF)
        </Accordion.Header>
        <Accordion.Body>
          Die Propriozeptive Neuromuskuläre Fazilitation (PNF) ist eine
          Therapiemethode, die in der Physiotherapie angewendet wird. Sie wird
          bei Patienten aus verschiedenen medizinischen Fachbereichen
          eingesetzt, bei denen das Bewegungsverhalten aufgrund von Krankheit,
          Verletzungen, Operationen oder Degeneration beeinträchtigt ist.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Manuelle Therapie</Accordion.Header>
        <Accordion.Body>
          Die manuelle Therapie wird eingesetzt, um Funktionsstörungen des
          Bewegungsapparates zu behandeln. Diese können durch falsche Haltung,
          Überlastung, Verschleiß oder Verletzung entstehen. Bei der Behandlung
          werden Manipulation-und Mobilisationstechniken angewendet, um
          Bewegungseinschränkungen an den betroffenen Gelenken zu lösen.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Manuelle Lymphdrainage</Accordion.Header>
        <Accordion.Body>
          Das Lymphsystem ist ein wichtiges Netzwerk im Körper, das in
          Verbindung mit den Blutgefäßen steht. Es ist das Zentrum des
          Immunsystems und versorgt die Zellen. Die Lymphflüssigkeit
          transportiert Abfallprodukte ab und beeinflusst somit den ganzen
          Körper. Die Lymphdrainage wir oft von Ärzten verschrieben, um
          Stauungen bei Ödemen, nach Operationen, Verletzungen oder
          Krebserkrankungen zu behandeln. Es ist wichtig, dem Lymphsystem
          Aufmerksamkeit zu schenken.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Klassische Massagen</Accordion.Header>
        <Accordion.Body>
          Die klassische Massage ist eine weit verbreitete Massageform, bei der
          verschiedene Griffe und Techniken angewendet werden, um ein
          funktionelles Gleichgewicht zu erreichen. Dabei werden nicht nur die
          Muskeln behandelt, sondern der gesamte Organismus positiv beeinflusst.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Eis - Kryotherapie</Accordion.Header>
        <Accordion.Body>
          Die Anwendung von Eis ist eine Ergänzung zu den nachfolgenden
          Behandlungen. Sie wird bei akuten Schmerzen eingesetzt.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>Wärmetherapie</Accordion.Header>
        <Accordion.Body>
          In der Physiotherapie wird die Wärmetherapie als ergänzende Maßnahme
          betrachtet. Bestehend aus einem Wärmeträger oder einer heißen Rolle,
          dient sie dazu die Hauptbehandlung zu unterstützen, insbesondere um
          verspannte Muskulatur zu lösen.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  );
};
