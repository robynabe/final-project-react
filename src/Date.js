import React from "react";
import "./index.css";

export default function Date(props) {
  let months = [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let month = months[props.date.getMonth()];
  let day = days[props.date.getDay()];
  let date = props.date.getDate();
  let year = props.date.getFullYear();
  return (
    <div>
      {day} {month} {date}, {year}
    </div>
  );
}
