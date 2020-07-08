import React, { useState } from "react";

export default function Conversion(props) {
  return (
    <div className="Conversion">
      <span className="temp"></span>
      <button className="button-F">°F</button>
      <button className="button-C">°C</button>
    </div>
  );
}
