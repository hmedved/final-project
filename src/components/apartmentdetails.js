import React, { Component } from "react";
import * as endpoints from "../client/endpoints";
import Gallery from "react-photo-gallery";
import Lightbox from "react-images";
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';

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
    console.log('handleDateChange', startDate, endDate);
    this.setState({
      startDate,
      endDate
    })
  };

  handleBook = () => {
    console.log('handleBook');
    // alert(`Book from ${this.state.startDate} to ${this.state.endDate}`);

    const emailTo = 'booking@metka.com';
    const subject = `Booking for ${this.state.apartment.title}`;
    const name = 'Hrvoje Medved'; // get from input box
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
    )
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
      <div style={{ padding: 10, minWidth: 400, border: '1px solid red' }}>
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

        <button
          disabled={bookDisabled}
          style={{
            marginTop: 50,
            backgroundColor: '#eee',
            padding: '20px 100px',
            opacity: bookDisabled ? 0.5 : 1
          }}
          onClick={this.handleBook}>
          Book
        </button>
      </div>
    )
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
    );
  }

  renderContent() {
    return (
      <div className="apartment-listing">
        {this.renderGallery()}
        <br />
        <br />

        <div style={{ display: 'flex' }}>
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
