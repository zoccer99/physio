import React from 'react';

import pic1 from "../Assets/pic_one.jpeg";
import pic2 from "../Assets/pic_two.jpeg";
import pic3 from "../Assets/pic_three.jpeg";
import pic4 from "../Assets/pic_four.jpeg";

export const Gallery = () => {
  return (
    <div className="img-container">
  <div className="box">
    <div className="imgBx">
      <img src={pic1} />
    </div>
    <div className="content">
      <div>
        <h2>Image Title</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.
        </p>
      </div>
    </div>
  </div>
  <div className="box">
    <div className="imgBx">
      <img src={pic2} />
    </div>
    <div className="content">
      <div>
        <h2>Image Title</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.
        </p>
      </div>
    </div>
  </div>
  <div className="box">
    <div className="imgBx">
      <img src={pic3}/>
    </div>
    <div className="content">
      <div>
        <h2>Image Title</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.
        </p>
      </div>
    </div>
  </div>
  <div className="box">
    <div className="imgBx">
      <img src={pic4}/>
    </div>
    <div className="content">
      <div>
        <h2>Image Title</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.
        </p>
      </div>
    </div>
  </div>
</div>
  )
}
