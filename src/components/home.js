import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="content">
        <h1> Welcome</h1>
        <p>
          On a side street this small hamlet of 16 people features a very
          private beach, old houses and a church, and is on the way to other
          villages.
        </p>
        <img
          src="https://www.artmedias.com/images/fotogallery/big/stivan-05.jpg"
          alt="adriatic see"
        />
      </div>
    );
  }
}

export default Home;
