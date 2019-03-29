import React, { Component } from "react";
import YouTube from "react-youtube";

class MuzikaIza extends Component {
  render() {
    const opts = {
      height: "0",
      width: "0",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
      <YouTube videoId="QBa-e45o6eM" opts={opts} onReady={this._onReady} />
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }
}

export default MuzikaIza;
