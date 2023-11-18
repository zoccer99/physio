import React from "react";

type serviceProps = {
  title: string;
  text: string;
};

const service = (props: serviceProps) => {
  return (
    <div className="card ccard">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text mt-4">{props.text}</p>
      </div>
    </div>
    // <div classNameName="card shadow">
    //     <h5 classNameName=" card-header bg-secondary"  >{props.title}</h5>
    //     <div classNameName="card-body bg-white">
    //         <p classNameName="card-text">{props.text}</p>
    //     </div>
    // </div>
  );
};

export default service;
