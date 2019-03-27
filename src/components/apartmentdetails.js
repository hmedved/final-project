import React, { Component } from "react";
import * as endpoints from "../client/endpoints";
import Gallery from "react-photo-gallery";
import Lightbox from "react-images";

class Apartmentdetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apartment: null
    };
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
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
    return (
      <div className="apartment-listing">
        <div className="gallery-container">
          <Gallery
            photos={this.state.apartment.photos}
            onClick={this.openLightbox}
          />
          <Lightbox
            images={this.state.apartment.photos}
            onClose={this.closeLightbox}
            onClickPrev={this.gotoPrevious}
            onClickNext={this.gotoNext}
            currentImage={this.state.currentImage}
            isOpen={this.state.lightboxIsOpen}
          />
        </div>
        <br />
        <br />
        <div className="house-info">
          <h1>{this.state.apartment.title}</h1>
          <small>{this.state.apartment.location}</small>
          <br />
          <br />
          <b>{this.state.apartment.size}</b>
          <p>{this.state.apartment.rooms}</p>
          <br />
          <b>{this.state.apartment.extra}</b>
          <p>{this.state.apartment.extraText}</p>
          <br />
          <b>{this.state.apartment.clean}</b>
          <p>{this.state.apartment.cleanData}</p>
          <div className="house-text-line-above" />
          <div className="house-text">
            <p>{this.state.apartment.description}</p>
          </div>
        </div>
      </div>
    );
  }
  renderPhotos(photos) {
    const content = photos.map(photo => photo && <img src={photo.src} />);
    return content;
  }

  render() {
    const isLoading = !this.state.apartment;
    let content;
    if (isLoading) {
      content = this.renderloading();
    } else {
      content = this.renderApartment();
    }
    return <div className="apartment-listing">{content}</div>;
  }
}

export default Apartmentdetails;
