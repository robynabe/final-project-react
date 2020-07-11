import React from "react";

export default function Prediction(props) {
  return (
    <div className="weatherPrediction col">
      <div>
        {new Date(props.data.dt * 1000).getMonth()}/
        {new Date(props.data.dt * 1000).getDate()}
      </div>
      {Math.round(props.data.main.temp)}°C
    </div>
  );
}
