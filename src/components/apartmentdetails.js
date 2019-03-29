import React, { Component } from "react";
import * as endpoints from "../client/endpoints";
import Gallery from "react-photo-gallery";
import Lightbox from "react-images";
import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController
} from "react-dates";

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

  // handlers

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

  handleDateChange = ({ startDate, endDate }) => {
    console.log("handleDateChange", startDate, endDate);
    this.setState({
      startDate,
      endDate
    });
  };

  handleBook = () => {
    console.log("handleBook");
    // alert(`Book from ${this.state.startDate} to ${this.state.endDate}`);

    const emailTo = "booking@metka.com";
    const subject = `Booking for ${this.state.apartment.title}`;
    const name = "INSERT YOUR NAME HERE"; // get from input box
    const startDate = this.state.startDate.format("MMM Do YYYY");
    const endDate = this.state.endDate.format("MMM Do YYYY");
    const body = `Hi, I would like to book your apartment from ${startDate} to ${endDate}. Best Regards, ${name}`;
    const emailUrl = `mailto:${emailTo}?subject=${subject}&body=${body}`;

    window.open(emailUrl);
  };

  // lifecycle

  async componentDidMount() {
    const id = +this.props.match.params.id;
    console.log("1", id);
    const apartment = await endpoints.getApartmentById(id);
    console.log("2", apartment);

    this.setState({ apartment });
  }

  // render

  renderloading() {
    return <div className="apartment-listing">Loading</div>;
  }

  renderGallery() {
    return (
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
    );
  }

  renderPhotos(photos) {
    const content = photos.map(
      photo => photo && <img src={photo.src} alt="some text instead" />
    );
    return content;
  }

  renderBooking() {
    const bookDisabled = !this.state.startDate && !this.state.endDate;

    return (
      <div className="booking-container">
        <div className="price">
          <h2>€</h2>
          <h1>{this.state.apartment.price}</h1>
          <p>per night</p>
        </div>
        <img
          src="data:image/png;base64,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"
          alt="5 *****"
        />
        <div>
          <DateRangePicker
            startDate={this.state.startDate} // momentPropTypes.momentObj or null,
            startDateId="bookStartSate" // PropTypes.string.isRequired,
            endDate={this.state.endDate} // momentPropTypes.momentObj or null,
            endDateId="bookEndDate" // PropTypes.string.isRequired,
            onDatesChange={this.handleDateChange} // PropTypes.func.isRequired,
            focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
          />
        </div>

        <button disabled={bookDisabled} onClick={this.handleBook}>
          Book
        </button>
      </div>
    );
  }

  renderHouseInfo() {
    return (
      <div className="house-info">
        <h1>{this.state.apartment.title}</h1>
        <small>{this.state.apartment.location}</small>
        <br />
        <br />

        <img src={this.state.apartment.house} alt="icon" />
        <b>{this.state.apartment.size}</b>
        <p>{this.state.apartment.rooms}</p>
        <br />

        <img src={this.state.apartment.extraIcon} alt="icon" />
        <b>{this.state.apartment.extra}</b>
        <p>{this.state.apartment.extraText}</p>
        <br />

        <img src={this.state.apartment.cleanIcon} alt="icon" />
        <b>{this.state.apartment.clean}</b>
        <p>{this.state.apartment.cleanData}</p>

        <div className="house-text-line-above" />
        <div className="house-text">
          <p>{this.state.apartment.description}</p>
        </div>
      </div>
    );
  }

  renderContent() {
    return (
      <div className="apartment-listing">
        {this.renderGallery()}
        <br />
        <br />

        <div style={{ display: "flex" }}>
          {this.renderHouseInfo()}
          {this.renderBooking()}
        </div>
      </div>
    );
  }

  render() {
    const isLoading = !this.state.apartment;
    if (isLoading) {
      return this.renderloading();
    } else {
      return this.renderContent();
    }
  }
}

export default Apartmentdetails;
