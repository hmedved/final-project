import React, { Component } from "react";
import * as endpoints from "../client/endpoints";

class Apartmentdetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apartment: null
    };
  }
  async componentDidMount() {
    const id = +this.props.match.params.id;
    console.log("1", id);
    const apartment = await endpoints.getApartmentById(id);
    console.log("2", apartment);

    this.setState({ apartment });
  }
  renderloading() {
    return <div>Loading</div>;
  }
  renderApartment() {
    return <div>{this.state.apartment.title}</div>;
  }
  render() {
    const isLoading = !this.state.apartment;
    let content;
    if (isLoading) {
      content = this.renderloading();
    } else {
      content = this.renderApartment();
    }
    return <div className="content">{content}</div>;
  }
}

export default Apartmentdetails;
