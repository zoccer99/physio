import React from "react";

type welcomeTextProps = {
  heading: string;
  smallText: string;
  lead: string;
};

export const WelcomeText = (props: welcomeTextProps) => {
  return (
    <div className="fullscreen">
      <div className="px-4 py-5 my-5 text-center  customGreenColor">
        <h1 className="display-1 fw-bold text-dark">{props.heading}</h1>
        <small className="text-muted display-4">{props.smallText}</small>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4 display-5">{props.lead}</p>

        </div>
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
