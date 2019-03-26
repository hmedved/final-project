import React, { Component } from "react";
import Map from "./map";

class Contact extends Component {
  render() {
    return (
      <div className="content">
        <h1>The neighborhood</h1>
        <p>
          Metka’s home is located in Cres, Primorje-Gorski Kotar County,
          Croatia.
        </p>
        <Map />
      </div>
    );
  }
}

export default Contact;
