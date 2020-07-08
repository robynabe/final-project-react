import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";

import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";

function App() {
  return <Weather defaultCity="Hawaii" />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
