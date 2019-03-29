import React, { Component } from "react";
import Sound from "react-sound";

class MuzikaIza extends Component {
  render() {
    return (
      <Sound
        url="https://www.youtube.com/watch?v=QBa-e45o6eM"
        playStatus={Sound.status.PLAYING}
        autoLoad={true}
        autoPlay={true}
        onBufferChange={true}
        playFromPosition={0 /* in milliseconds */}
        onLoading={this.handleSongLoading}
        onPlaying={this.handleSongPlaying}
        onFinishedPlaying={this.handleSongFinishedPlaying}
      />
    );
  }
}

export default MuzikaIza;
