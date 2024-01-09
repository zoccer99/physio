import React from 'react';

import pic1 from "../Assets/pic_one.jpeg";
import pic2 from "../Assets/pic_two.jpeg";
import pic3 from "../Assets/pic_three.jpeg";
import pic4 from "../Assets/pic_four.jpeg";
import selfie from "../Assets/selfie.jpeg";
import trampolin from "../Assets/trampolin.jpeg";
import waiting from "../Assets/waiting-room.jpeg";
import walking from "../Assets/walking_engine.jpeg";
import Zoom from "react-medium-image-zoom";
import 'react-medium-image-zoom/dist/styles.css'

export const Gallery = () => {
  return (
    <div className="row">
      <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
        <Zoom>

          <img
            src={pic1}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Physioliege"
          />
        </Zoom>

        <Zoom>

          <img
            src={waiting}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Wartezimmer"
          />
        </Zoom>
      </div>

      <div className="col-lg-4 mb-4 mb-lg-0">
        <Zoom>
          <img
            src={pic3}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Physioliege"
          />
        </Zoom>

        <Zoom>

          <img
            src={walking}
            className="w-100 shadow-1-strong rounded mb-4 biggerHover"
            alt="Walking stepper"
          />
        </Zoom>
      </div>

      <div className="col-lg-4 mb-4 mb-lg-0">

        <Zoom>

          <img
            src={trampolin}
            className="w-100 shadow-1-strong rounded mb-4 biggerHover"
            alt="Physio Fitness"
          />
        </Zoom>
      </div>

    </div>
  )
}
