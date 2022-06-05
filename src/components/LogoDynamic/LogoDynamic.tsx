import React from "react";

import "./LogoDynamic.scss";

export type LogoDynamicProps = {};

const LogoDynamic: React.FC<LogoDynamicProps> = ({}) => {
  return (
    <div className="hrea-logo-dynamic-with-text">
      <div id="hLogo">
        <svg height="60" width="60">
          <defs>
            <radialGradient
              id="hRadGrad"
              cx="50%"
              cy="50%"
              r="75%"
              fx="50%"
              fy="50%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "#00ada5", stopOpacity: 0 }}
              ></stop>
              <stop
                offset="100%"
                style={{ stopColor: "#00ada5", stopOpacity: 1 }}
              ></stop>
            </radialGradient>
          </defs>
          <circle
            className="hOuterBall hCommon"
            cx="30"
            cy="30"
            r="22.5"
            stroke="#a77de8"
            stroke-dasharray="0,220"
          ></circle>
          <circle
            className="hMiddleBall hCommon"
            cx="30"
            cy="30"
            r="15"
            stroke="#e46967"
            stroke-dasharray="0,160"
          ></circle>
          <circle
            className="hInnerBall hCommon"
            cx="30"
            cy="30"
            r="7.5"
            stroke="#f8bc5c"
            stroke-dasharray="0,80"
          ></circle>

          <circle
            className="hOuterCircle hCommon"
            cx="30"
            cy="30"
            r="22.5"
            stroke="url(#hRadGrad)"
          ></circle>
          <circle
            className="hMiddleCircle hCommon"
            cx="30"
            cy="30"
            r="15"
            stroke="url(#hRadGrad)"
          ></circle>
          <circle
            className="hInnerCircle hCommon"
            cx="30"
            cy="30"
            r="7.5"
            stroke="url(#hRadGrad)"
          ></circle>
        </svg>
      </div>
      <div className="hrea-logo-text">
        <span className="hrea-logo-text-bold">h</span>
        <span className="hrea-logo-text-medium">REA</span>
      </div>
    </div>
  );
};

export default LogoDynamic;
