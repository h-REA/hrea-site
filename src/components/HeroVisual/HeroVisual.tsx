import React from "react";
import "./HeroVisual.scss";

import Circle1 from "../../svgs/circle-1.svg";
import Circle2 from "../../svgs/circle-2.svg";
import Circle3 from "../../svgs/circle-3.svg";
import Circle4 from "../../svgs/circle-4.svg";
import Circle5 from "../../svgs/circle-5.svg";
import Circle6 from "../../svgs/circle-6.svg";

export type heroVisualProps = {};

const heroVisual: React.FC<heroVisualProps> = ({}) => {
  return (
    <div className="hero-visual-wrapper">
      <div className="hero-visual-circles">
        <div className="circle one">
          <Circle1 />
        </div>
        <div className="circle two">
          <Circle2 />
        </div>
        <div className="circle three">
          <Circle3 />
        </div>
        <div className="circle four">
          <Circle4 />
        </div>
        <div className="circle five">
          <Circle5 />
        </div>
        <div className="circle six">
          <Circle6 />
        </div>
      </div>
      {/* <div className="circle one">sircle</div>
      <div className="circle two" />
      <div className="circle three" />
      <div className="circle four" />
      <div className="circle five" />
      <div className="circle six" /> */}
    </div>
  );
};

export default heroVisual;
