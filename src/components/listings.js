import React, { Component } from "react";
import * as endpoints from "../client/endpoints";
import { Link } from "react-router-dom";

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
      <div key={apartment.id}>
        {apartment.id}
        {apartment.title}
        <Link to={"/apartmentdetails/" + apartment.id}>
          <button>Apartment details</button>
        </Link>
      </div>
    );
  }
  renderList() {
    const apartments = this.state.apartmentList.map(this.renderItem);
    return <div>{apartments}</div>;
  }
  renderloading() {
    return <div>Loading</div>;
  }

  render() {
    const isLoading = this.state.apartmentList.length === 0;
    let content;
    if (isLoading) {
      content = this.renderloading();
    } else {
      content = this.renderList();
    }
    return <div className="content">{content}</div>;
  }
}

export default Listings;
