import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
  width: "400px",
  height: "400px"
};

export class MapContainer extends Component {
  render() {
    return (
      <div id="map">
        <Map
          google={this.props.google}
          zoom={16}
          style={mapStyles}
          initialCenter={{
            lat: 44.7919669,
            lng: 14.3804406
          }}
        />
        <Marker position={{ lat: 44.7919669, lng: 14.3804406 }} />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAqSLHiu8qnWq3zBmJhbL4ph9bagJn0pH8"
})(MapContainer);
