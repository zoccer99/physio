import React from "react";

type welcomeTextProps = {
  heading: string;
  smallText: string;
  lead: string;
};

export const WelcomeText = (props: welcomeTextProps) => {
  return (

    <div className="px-4 py-5 my-5 text-center">
    <h1 className="display-5 fw-bold">{props.heading}</h1>
    <small className="text-muted">{props.smallText}</small>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">{props.lead}</p>
      
    </div>
  </div>

    /* <div classNameName="container py-4">
      <div classNameName="card shadow">
        <div classNameName="m-3">
          <h3 classNameName="d-flex flex-column">
            {props.heading}
            <small classNameName="text-muted">{props.smallText}</small>
          </h3>
          <p classNameName="lead">{props.lead}</p>
        </div>
      </div>
    </div> */
  );
};
