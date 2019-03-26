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
          <h1> Tiny House With a View</h1>
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
          <div className="house-text-line-above" />
          <div className="house-text">
            <p>
              Small remote house with amazing view and plenty of outdoor space
              around the house. 15-20 min walk to the nearest beach. The guests
              can use the entry space before the fence. The fence is there to
              protect the sheep from entering the neighbours garden.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Tinyhouse;
