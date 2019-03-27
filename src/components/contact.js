import React, { Component } from "react";
import Map from "./map";

class Contact extends Component {
  render() {
    return (
      <div>
        <div className="content">
          <h1>The neighborhood</h1>
          <p>
            Metka’s home is located in Cres, Primorje-Gorski Kotar County,
            Croatia.
          </p>
        </div>
        <div className="map-container">
          <Map />
        </div>
      </div>
    );
  }
}

export default Contact;
