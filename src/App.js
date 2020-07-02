import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";
import Form from "./Form";
import Conversion from "./Conversion";
import Date from "./Date";
import Details from "./Details";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";

function App() {
  return (
    <div className="body">
      <section className="section">
        <div className="container">
          <div className="row">
            <Weather />
            <div className="col-sm">
              <Form />
              <p className="date-time">
                <Date />
              </p>
              <Details />
            </div>
          </div>
          <Conversion />
        </div>
      </section>
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
