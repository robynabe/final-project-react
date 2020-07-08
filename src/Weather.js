import React, { useState } from "react";
import Footer from "./Footer";
import axios from "axios";
import Conversion from "./Conversion";
import Details from "./Details";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temp: Math.round(response.data.main.temp),
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather.description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      feels: Math.round(response.data.main.feels_like),
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  function search() {
    const apiKey = "7a8ced77b21e1038a88bcb6a9a24c359";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityInput(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="body">
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="search city name..."
            className="text-input"
            autoComplete="off"
            autoFocus="on"
            onChange={handleCityInput}
          />
          <input type="submit" value="search" className="submit-button" />
        </form>
        <section className="section-1">
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
            <Conversion celsius={weatherData.temp} />
          </div>
        </section>
        <Forecast city={weatherData.city} />
        <Footer />
      </div>
    );
  } else {
    search();
    return "Searching for current weather...";
  }
}
