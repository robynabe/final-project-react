import React, { useState } from "react";
import axios from "axios";
import { data } from "jquery";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleSubmit(response) {
    console.log(response.data.main.temp);
    setWeatherData({
      temp: Math.round(response.data.main.temp),
      city: response.data.name,
    });
    setReady(true);
  }
  if (ready) {
    return (
      <div>
        <div class="col-sm">
          <h1>{weatherData.city}</h1>
          <p>Cloudy</p>
          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt="weather icon"
          />
          <h2>{weatherData.temp}</h2>
          <span class="degrees">°C</span>
        </div>
      </div>
    );
  } else {
    const apiKey = "7a8ced77b21e1038a88bcb6a9a24c359";
    let city = "Vancouver";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleSubmit);

    return "Waiting for data...";
  }
}
