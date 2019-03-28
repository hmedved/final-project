import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
  width: "627px",
  height: "348px"
};

export class MapContainer extends Component {
  render() {
    return (
      <div className="content">
        <div id="map">
          <Map
            google={this.props.google}
            zoom={14}
            style={mapStyles}
            initialCenter={{
              lat: 44.7919669,
              lng: 14.3804406
            }}
          >
            <Marker position={{ lat: 44.7919669, lng: 14.3804406 }} />
            <Marker position={{ lat: 44.791599, lng: 14.380279 }} />
            <Marker position={{ lat: 44.790756, lng: 14.381662 }} />
          </Map>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAqSLHiu8qnWq3zBmJhbL4ph9bagJn0pH8"
})(MapContainer);
