import React, { useState } from "react";

export default function Conversion(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToF(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToC(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="Conversion">
        <h2 className="tempC">{props.temp}°C</h2>
        <br />
        <button className="button-F" onClick={convertToF}>
          °F
        </button>
        <button className="button-C">°C</button>
      </div>
    );
  } else {
    let fahrenheit = (props.temp * 9) / 5 + 32;
    return (
      <div className="Conversion">
        <h2 className="tempF">{Math.round(fahrenheit)}°F</h2>
        <br />
        <button className="button-F">°F</button>
        <button className="button-C" onClick={convertToC}>
          °C
        </button>
      </div>
    );
  }
}
