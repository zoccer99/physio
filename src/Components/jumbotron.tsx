import React from 'react'

type jumboProps = {
  heading: string;
  text: string;
};

export const Jumbotron = (props: jumboProps) => {
  return (
    <div className="container Physioliege">
      <div className="mt-4 p-5 bg-white ">
        <h1>{props.heading}</h1>
        <p>
          {props.text}
        </p>
      </div>
      </div>
  )
}
