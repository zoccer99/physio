import React from "react";
import { EnvelopeAt } from "react-bootstrap-icons";
import { Telephone } from "react-bootstrap-icons";
import { Shop } from "react-bootstrap-icons";

type contactProps = {
  name: string;
  address: string;
  telephone: string;
  email: string;
};

const Contact = (props: contactProps) => {
  return (
    <div className="container mt-3">
      <div className=" card shadow p-3 ">
        <div className="row">
          <Shop className="d-none d-md-block col-md-4" />
          <p className="col-12 col-md-8 text-center text-md-start">
            {props.address}
          </p>
        </div>
        <div className="row">
          <EnvelopeAt className="d-none d-md-block col-md-4" />
          <p className="col-12 col-md-8 text-center text-md-start">
            {props.email}
          </p>
        </div>
        <div className="row">
          <Telephone className="d-none d-md-block col-md-4" />
          <p className="col-12 col-md-8 text-center text-md-start">
            {props.telephone}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
