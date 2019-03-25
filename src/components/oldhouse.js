import React, { Component } from "react";

class Oldhouse extends Component {
  render() {
    return (
      <div className="content">
        <div className="house-info">
          <h2> Tiny House With a View</h2>
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
        </div>
      </div>
    );
  }
}

export default Oldhouse;
