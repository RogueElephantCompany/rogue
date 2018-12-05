import React from 'react';
// import { whatWeDo, whereWeAre } from '../constants';
// import map from '../styles/map.png';
// import architect from '../styles/architect.jpeg';
import laptop from '../styles/laptop.png';
import van from '../styles/van.png';
import dollar from '../styles/dollar.png';
import receipt from '../styles/receipt.png';

const Home = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        // backgroundColor: 'rgb(237, 225, 229)',
      }}
    >
      <h1 id="home-header">
        <strong>Why Call Eddie?</strong>
      </h1>
      <div>
        <div className="home-row">
          <div className="home-icons">
            <img src={laptop} alt="laptop" />
          </div>
          <div className="reason-box1">
            <p>
              <strong>Remote Diagnostic:</strong> Using the video chat feature
              on our app, a professional will asses your repair and let you know
              if you need to do anything before your technician shows up.
            </p>
          </div>
        </div>
        <div className="home-row">
          <div className="reason-box2">
            <p>
              <strong>Transparency:</strong> Because of the remote diagnostic,
              we can give an accurate estimate of the time and money it will
              take to fix it BEFORE coming to your house.
            </p>
          </div>
          <div className="home-icons">
            <img src={dollar} alt="dollar symbol" />
          </div>
        </div>
        <div className="home-row">
          <div className="home-icons">
            <img src={van} alt="repair van" />
          </div>
          <div className="reason-box1">
            <p>
              <strong>Efficiency:</strong> Knowing what the issue is and how
              long it will take before dispatching a technician ensures we have
              the right parts when we show up the first time, not next week on a
              follow-up visit.
            </p>
          </div>
        </div>
        <div className="home-row">
          <div className="reason-box2">
            <p>
              <strong>Repair Database:</strong> Easily search for previous
              repairs, without going through stacks of old receipts.
            </p>
          </div>
          <div className="home-icons">
            <img src={receipt} alt="receipt" />
          </div>
        </div>
        {/* <p>
        Scheduling: Take a look at our calendar to check for available times,
        making it easy to know how quickly a technician can come.
      </p> */}
      </div>
      {/* <div id="home-boxes">
        <div
          id="home-p1"
          style={{
            // backgroundImage: `url(${architect})`
            backgroundColor: 'rgb(78, 132, 219)',
          }}
        >
          <p>{whatWeDo}</p>
        </div>
        <p
          id="home-p2"
          style={{
            backgroundColor: 'rgb(237, 47, 126)',
            // backgroundImage: `url('${map}')`
          }}
        >
          {whereWeAre}
        </p>
      </div> */}
      <div id="app-link-box">
        <a href="https://fixiteddie-pwa.herokuapp.com/">Link to Our App</a>
      </div>
    </div>
  );
};

export default Home;
