import React, { useState } from "react";
import Date from "./Date";
import Footer from "./Footer";
import axios from "axios";
import Form from "./Form";
import Conversion from "./Conversion";
import { data } from "jquery";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleSubmit(response) {
    console.log(response.data);
    setWeatherData({
      temp: Math.round(response.data.main.temp),
      city: response.data.name,
      description: response.data.weather.description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      feels: response.data.main.feels_like,
    });
    setReady(true);
  }
  if (ready) {
    return (
      <div className="body">
        <section className="section">
          <div className="container">
            <div className="row">
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
                    {weatherData.wind} km/hr
                  </li>
                  <li>
                    <img
                      src="http://openweathermap.org/img/wn/02d@2x.png"
                      alt="humidity-icon"
                      class="detail-icons"
                    />
                    {weatherData.humidity} %
                  </li>
                  <li>
                    <img
                      src="http://openweathermap.org/img/wn/10d@2x.png"
                      alt="real"
                      class="detail-icons"
                    />
                    Feels like {weatherData.real}
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
