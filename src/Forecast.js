import React, { useState } from "react";
import axios from "axios";

export default function Forecast(props) {
  const [loaded, setloaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResposne(response) {
    setForecast(response.data);
    setloaded(true);
  }
  if (loaded) {
    return (
      <section className="section-2">
        <div className="Forecast row">
          <div className="col">
            <img src={props.iconUrl} />
            {Math.round(forecast.list[0].main.temp)}°C
          </div>
          <div className="col">
            <img src={props.iconUrl} />
            {Math.round(forecast.list[1].main.temp)}°C
          </div>
          <div className="col">
            <img src={props.iconUrl} />
            {Math.round(forecast.list[2].main.temp)}°C
          </div>{" "}
          <div className="col">
            <img src={props.iconUrl} />
            {Math.round(forecast.list[3].main.temp)}°C
          </div>{" "}
          <div className="col">
            <img src={props.iconUrl} />
            {Math.round(forecast.list[4].main.temp)}°C
          </div>
        </div>
      </section>
    );
  } else {
    let apiKey = "7a8ced77b21e1038a88bcb6a9a24c359";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResposne);
    return null;
  }
}
