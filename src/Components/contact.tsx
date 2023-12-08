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
    <div className="container mt-3 ">
      <div className=" card shadow p-3 ">
        <div className="row align-items-center">
          <Shop className="d-none d-md-block col-md-6 h3" />
          <p dangerouslySetInnerHTML={{__html: props.address}} className="col-12 col-md-6 text-center text-md-start h3">
            
          </p>
        </div>
        <div className="row align-items-center">
          <EnvelopeAt className="d-none d-md-block col-md-6 h3" />
          <p className="col-12 col-md-6 text-center text-md-start h3">
            {props.email}
          </p>
        </div>
        <div className="row align-items-center">
          <Telephone className="d-none d-md-block col-md-6 h3" />
          <p className="col-12 col-md-6 text-center text-md-start h3">
            {props.telephone}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
