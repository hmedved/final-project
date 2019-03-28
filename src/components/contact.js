import React, { Component } from "react";

class Contact extends Component {
  handleSubmit(e) {
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <div className="content">
          <h1>Do you have any questions?</h1>
          <p>Please don't hesitate to send us an e-mail.</p>
        </div>
        <form
          id="contact-form"
          onSubmit={this.handleSubmit.bind(this)}
          method="POST"
        >
          <div className="form-group">
            <input type="text" id="name" placeholder="Your name" />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Your email"
            />
          </div>
          <div className="form-group">
            <textarea
              type="message"
              id="message"
              rows="10"
              placeholder="Please type your request here"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Contact;
