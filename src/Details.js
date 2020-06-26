import React from "react";

export default function Details() {
  let weatherDetails = {
    wind: "3",
    humidity: "65",
    real: "26",
  };
  return (
    <ul>
      <li>
        <img
          src="http://openweathermap.org/img/wn/50d@2x.png"
          alt="wind-icon"
          class="detail-icons"
        />
        {weatherDetails.wind} km/hr
      </li>
      <li>
        <img
          src="http://openweathermap.org/img/wn/02d@2x.png"
          alt="humidity-icon"
          class="detail-icons"
        />
        {weatherDetails.humidity} %
      </li>
      <li>
        <img
          src="http://openweathermap.org/img/wn/10d@2x.png"
          alt="real"
          class="detail-icons"
        />
        Feels like {weatherDetails.real}
        °C
      </li>
    </ul>
  );
}
