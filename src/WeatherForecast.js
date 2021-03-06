import React from "react";

export default function WeatherForecast(props) {
  return (
    <div className="weatherForecast col">
      <div>{new Date(props.data.dt * 1000).getHours()}:00</div>
      {Math.round(props.data.main.temp)}°C
    </div>
  );
}
