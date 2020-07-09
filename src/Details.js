import React from "react";
import Date from "./Date";

export default function Details(props) {
  return (
    <div className="col-sm">
      <p className="date-time">
        {" "}
        <strong>
          <Date className="current-date" date={props.data.date} />
        </strong>
      </p>
      <ul>
        <li>
          <img
            src="http://openweathermap.org/img/wn/50d@2x.png"
            alt="wind-icon"
            className="detail-icons"
          />
          Wind Speed: {props.data.wind}km/hr
        </li>
        <li>
          <img
            src="http://openweathermap.org/img/wn/02d@2x.png"
            alt="humidity-icon"
            className="detail-icons"
          />
          Humidity: {props.data.humidity}%
        </li>
        <li>
          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt="real"
            className="detail-icons"
          />
          Feels like: {props.data.feels}
          °C
        </li>
      </ul>
    </div>
  );
}
