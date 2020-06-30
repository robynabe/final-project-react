import React from "react";
import axios from "axios";

export default function Header() {
  let weatherData = {
    city: "Hawaii",
    description: "Sunny",
    temperature: "24",
  };
  return (
    <div class="col-sm">
      <h1>{weatherData.city}</h1>
      <p>{weatherData.description}</p>
      <img
        src="http://openweathermap.org/img/wn/10d@2x.png"
        alt="weather icon"
      />
      <h2>{weatherData.temperature}</h2>
      <span class="degrees">°C</span>
    </div>
  );
}
