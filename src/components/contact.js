import React from 'react';

const Contact = () => {
  return (
    <div>
      <h2>Use the form below to contact us:</h2>
      Your email address:<input type="text" name="contactName"></input>
      Your phone number:<input type="text" name="contactPhone"></input>
      Message: <textarea name="contactMessage" className="notes-box" />
    </div>
  )
}

export default Contact;
