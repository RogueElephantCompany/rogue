import React, { Component } from 'react';
// import nodemailer from 'nodemailer';

class Contact extends Component {
  // let transporter = nodemailer.createTransport();
  constructor() {
    super();
    this.state = {
      contactName: '',
      contactPhone: '',
      contactMessage: '',
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  handleChange = event => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <h2 className="page-header">Want to learn more?</h2>
        <h4>Message us here or email us at info@fixiteddie.com</h4>
        <form>
          <div id="contact-form">
            <div className="line" id="contact-email">
              <input
                type="text"
                className="contact-input"
                name="contactName"
                placeholder="YOUR EMAIL ADDRESS*"
                required={true}
                onChange={this.handleChange}
              />
            </div>
            <div className="line" id="contact-phone">
              <input
                type="text"
                className="contact-input"
                name="contactPhone"
                placeholder="YOUR PHONE NUMBER*"
                required={true}
                onChange={this.handleChange}
              />
            </div>
            <div className="line" id="message">
              <textarea
                name="contactMessage"
                className="notes-box"
                placeholder="YOUR MESSAGE*"
                required={true}
                onChange={this.handleChange}
              />
            </div>
            <br />
            <div id="buttonHolder">
              <input
                type="submit"
                value="SUBMIT"
                id="submit-btn"
                onClick={this.handleSubmit}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Contact;
