import React, { useState } from "react";
import axios from "axios";
import WeatherForecast from "./WeatherForecast";
import "./Forecast.css";

export default function Forecast(props) {
  const [loaded, setloaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setloaded(true);
  }
  if (loaded && props.city === forecast.city.name) {
    return (
      <section className="section-2">
        <div className="Forecast row">
          <WeatherForecast data={forecast.list[0]} />
          <WeatherForecast data={forecast.list[1]} />
          <WeatherForecast data={forecast.list[2]} />
          <WeatherForecast data={forecast.list[3]} />
          <WeatherForecast data={forecast.list[4]} />
        </div>
      </section>
    );
  } else {
    let apiKey = "7a8ced77b21e1038a88bcb6a9a24c359";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResponse);
    return null;
  }
}
