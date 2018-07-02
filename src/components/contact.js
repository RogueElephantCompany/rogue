import React from 'react';

const Contact = () => {
  return (
    <div>
      <h2>Use the form below to contact us:</h2>
      <form>
        <div id="contact-form">
          <div className="line">
            Email address:<input type="text" name="contactName" className="contact-input"></input>
          </div>
          <div className="line">
            Phone number:<input type="text" name="contactPhone" className="contact-input"></input>
          </div>
          <div className="line">
            <span id="message">Message:</span>
            <textarea name="contactMessage" className="notes-box" />
          </div>
          <br />
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  )
}

export default Contact;
