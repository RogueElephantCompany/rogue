import React from 'react';
import http from 'http';

const Footer = () => {
  setInterval(() => {
    http.get('http://www.fixmyzip.com');
  }, 300000);

  return (
    <div className="footer">
      <h6>Copyright © 2018 Rogue Elephant Company</h6>
    </div>
  );
};

export default Footer;
