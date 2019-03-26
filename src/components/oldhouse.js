import React, { Component } from "react";

import Oldhouseimages from "./oldhouseimages";

class Oldhouse extends Component {
  render() {
    return (
      <div className="content">
        <div className="gallery-container">
          <Oldhouseimages />
        </div>
        <div className="house-info">
          <h1>Renovated Old Family House</h1>
          <small>Cres, Croatia</small>
          <br />
          <br />
          <div className="descr-1">
            <b> 🏡 Entire House</b>
            <p>5 guests · 2 bedroom · 3 beds · 2 baths</p>
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
              This is my grandparten's old family house that was recently
              renovated for other families to enjoy it too. It is situated on
              top of the village, provides a special view, garden, patio and a
              second terrace where you can enjoy the warm peaceful moments. The
              nearest beach is 15-20 min walk, the nearest grocery store is 4
              min walk. All kinds of families from all backgrounds are welcome
              to stay.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Oldhouse;
