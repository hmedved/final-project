import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="content">
        <h1>Probably the first beach where you gonna swim</h1>
        <p>
          On a side street this small hamlet of 16 people features a very
          private beach, old houses and a church, and is on the way to other
          villages.
        </p>
        <img
          src="https://www.artmedias.com/images/fotogallery/big/stivan-05.jpg"
          alt="adriatic see"
        />
        <br />
        <img
          src="https://i.pinimg.com/originals/c0/af/d3/c0afd3a1cf3b75a0e341e0a80af668bb.jpg"
          alt="adriatic see"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Lubenice_-_Plaza_Plava_Grota_-_panoramio.jpg"
          alt="adriatic see"
        />
      </div>
    );
  }
}

export default About;
