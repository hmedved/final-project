import React, { Component } from "react";
import * as endpoints from "../client/endpoints";
import { Link } from "react-router-dom";
import Googlemap from "./googlemap";
class Listings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apartmentList: []
    };
  }

  async componentDidMount() {
    console.log("1");
    const apartmentList = await endpoints.getApartmentList();
    console.log("2", apartmentList);

    this.setState({ apartmentList });
  }

  renderItem(apartment) {
    return (
      <div className="listing">
        <div className="listings-photo" key={apartment.id}>
          <Link to={"/apartmentdetails/" + apartment.id}>
            {apartment.photos.length && (
              <img src={apartment.photos[0].src} alt={apartment.title} />
            )}
          </Link>
        </div>
        <div className="gumb">
          <Link to={"/apartmentdetails/" + apartment.id}>
            <button>{apartment.title}</button>
            <br />
            <br />
          </Link>
        </div>
      </div>
    );
  }
  renderList() {
    const apartments = this.state.apartmentList.map(this.renderItem);
    return <div>{apartments}</div>;
  }
  renderloading() {
    return (
      <div>
        <img
          src="https://uimovement.com/media/resource_image/image_4248.gif"
          alt="Loading"
        />
      </div>
    );
  }

  render() {
    const isLoading = this.state.apartmentList.length === 0;
    let content;
    if (isLoading) {
      content = this.renderloading();
    } else {
      content = this.renderList();
    }
    return (
      <div>
        <div className="listings-all-houses">{content}</div>
        <div className="map-container">
          <Googlemap />
        </div>
      </div>
    );
  }
}

export default Listings;
