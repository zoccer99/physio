import React from 'react';

import pic1 from "../Assets/pic_one.jpeg";
import pic2 from "../Assets/pic_two.jpeg";
import pic3 from "../Assets/pic_three.jpeg";
import pic4 from "../Assets/pic_four.jpeg";
import selfie from "../Assets/selfie.jpeg";
import trampolin from "../Assets/trampolin.jpeg";
import waiting from "../Assets/waiting-room.jpeg";
import walking from "../Assets/walking_engine.jpeg";

export const Gallery = () => {
  return (
<div className="row">
  <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
    <img
      src={pic1}
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />

    <img
      src={pic2}
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Wintry Mountain Landscape"
    />
  </div>

  <div className="col-lg-4 mb-4 mb-lg-0">
    <img
      src={pic3}
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Mountains in the Clouds"
    />

    <img
      src={pic4}
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />
  </div>

  <div className="col-lg-4 mb-4 mb-lg-0">
    <img
      src={selfie}
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Waves at Sea"
    />

    <img
      src={trampolin}
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Yosemite National Park"
    />
  </div>
  
</div>
  )
}
