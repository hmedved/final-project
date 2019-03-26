import React, { Component } from "react";

import Familyhouseimages from "./familyhouseimages";

class Familyhouse extends Component {
  render() {
    return (
      <div className="content">
        <div className="gallery-container">
          <Familyhouseimages />
        </div>

        <div className="house-info">
          <h1>Family House with Olive Tree and Roses Garden</h1>
          <small>Cres, Croatia</small>
          <br />
          <br />
          <div className="descr-1">
            <b> 🏡 Entire House</b>
            <p>5 guests · 3 bedroom · 5 beds · 1 bath</p>
          </div>
          <div className="descr-2">
            <b>🔥 Great check-in experience</b>
            <p>
              100% of recent guests gave the check-in process a 5-star rating.
            </p>
          </div>
          <div className="descr-3">
            <b>✨ Sparkling clean</b>
            <p>10 recent guests said this place was sparkling clean.</p>
          </div>
          <div className="descr-4">
            <b>❤ Metka is a Superhost</b>
            <p>
              Superhosts are experienced, highly rated hosts who are committed
              to providing great stays for guests.
            </p>
          </div>
          <div className="house-text-line-above" />
          <div className="house-text">
            <p>
              Welcome to our house of jazz and roses. A modern, newly build
              family house with two apartments, one of which is offered to
              guests. The nearest beach is 15-20 min by walk. Grocery store is
              around the corner. All kinds of families from all backgrounds are
              welcome to stay.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Familyhouse;
