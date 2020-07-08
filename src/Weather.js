import React, { useState } from "react";
import Footer from "./Footer";
import axios from "axios";
import Conversion from "./Conversion";
import Details from "./Details";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleSubmit(response) {
    setWeatherData({
      ready: true,
      temp: Math.round(response.data.main.temp),
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather.description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      feels: Math.round(response.data.main.feels_like),
      iconUrl: "http://openweathermap.org/img/wn/10d@2x.png",
    });
  }
  if (weatherData.ready) {
    return (
      <div className="body">
        <section className="section">
          <div className="container">
            <div className="row">
              <div>
                <div className="col-sm">
                  <h1>{weatherData.city}</h1>
                  <p className="text-capitalize">{weatherData.description}</p>
                  <img src={weatherData.iconUrl} alt="weather icon" />
                  <h2>{weatherData.temp}</h2>
                  <span className="degrees">°C</span>
                </div>
              </div>
              <Details data={weatherData} />
            </div>
            <Conversion />
          </div>
        </section>
        <Footer />
      </div>
    );
  } else {
    const apiKey = "7a8ced77b21e1038a88bcb6a9a24c359";
    let city = "Hawaii";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleSubmit);

    return "Searching for current weather...";
  }
}
