import React, { useState } from "react";
import Date from "./Date";
import Footer from "./Footer";
import axios from "axios";
import Form from "./Form";
import Conversion from "./Conversion";
import { data } from "jquery";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleSubmit(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temp: Math.round(response.data.main.temp),
      city: response.data.name,
      description: response.data.weather.description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      feels: Math.round(response.data.main.feels_like),
      iconUrl: "http://openweathermap.org/img/wn/10d@2x.png",
    });
    setReady(true);
  }
  if (weatherData.ready) {
    return (
      <div className="body">
        <section className="section">
          <div className="container">
            <div className="row">
              <div>
                <div class="col-sm">
                  <h1>{weatherData.city}</h1>
                  <p className="text-capitalize">{weatherData.description}</p>
                  <img src={weatherData.iconUrl} alt="weather icon" />
                  <h2>{weatherData.temp}</h2>
                  <span class="degrees">°C</span>
                </div>
              </div>
              <div className="col-sm">
                <Form />
                <p className="date-time">
                  <Date />
                </p>
                <ul>
                  <li>
                    <img
                      src="http://openweathermap.org/img/wn/50d@2x.png"
                      alt="wind-icon"
                      class="detail-icons"
                    />
                    Wind Speed: {weatherData.wind}km/hr
                  </li>
                  <li>
                    <img
                      src="http://openweathermap.org/img/wn/02d@2x.png"
                      alt="humidity-icon"
                      class="detail-icons"
                    />
                    Humidity: {weatherData.humidity}%
                  </li>
                  <li>
                    <img
                      src="http://openweathermap.org/img/wn/10d@2x.png"
                      alt="real"
                      class="detail-icons"
                    />
                    Feels like: {weatherData.feels}
                    °C
                  </li>
                </ul>
              </div>
            </div>
            <Conversion />
          </div>
        </section>
        <Footer />
      </div>
    );
  } else {
    const apiKey = "7a8ced77b21e1038a88bcb6a9a24c359";
    let city = "Vancouver";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleSubmit);

    return "Searching for current weather...";
  }
}
