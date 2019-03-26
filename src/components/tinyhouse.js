import React, { Component } from "react";

// components
import Tinyhouseimages from "./tinyhouseimages";

class Tinyhouse extends Component {
  render() {
    return (
      <div className="content">
        <div className="gallery-container">
          <Tinyhouseimages />
        </div>
        <div className="house-info">
          <h2> Tiny House With a View</h2>
          <small>Cres, Croatia</small>
          <br />
          <br />

          <div className="descr-1">
            <b> 🏡 Tiny house</b>
            <p>3 guests · 1 bedroom · 2 beds · 1 bath</p>
          </div>
          <div className="descr-2">
            <b>🔥 Indoor fireplace</b>
            <p>
              Indoor fireplace This is one of a few places in the area that has
              this feature.
            </p>
          </div>
          <div className="descr-3">
            <b>✨ Sparkling clean</b>
            <p>10 recent guests said this place was sparkling clean.</p>
          </div>
          <div className="descr-4">
            <b>❤ Great location</b>
            <p>100% of recent guests gave the location a 5-star rating.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Tinyhouse;
