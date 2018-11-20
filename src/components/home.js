import React from 'react';
import { whatWeDo, whereWeAre } from '../constants';
import map from '../styles/map.png';
import architect from '../styles/architect.jpeg';

const Home = () => {
  return (
    <div>
      <h1 style={{ fontSize: '40px' }}>Why Call Eddie?</h1>
      <p>
        Remote Diagnostic: Using the video chat feature on our app, a
        professional will asses your repair and let you know if you need to do
        anything before your technician shows up.
      </p>
      <p>
        Transparency: Because of the remote diagnostic, we can give an accurate
        estimate of the time and money it will take to fix it BEFORE coming to
        your house.
      </p>
      <p>
        Efficiency: Knowing what the issue is and how long it will take before
        dispatching a technician ensures we have the right parts when we show up
        the first time, not next week on a follow-up visit.
      </p>
      <p>
        Repair Database: Easily search for previous repairs, without going
        through stacks of old receipts.
      </p>
      {/* <p>
        Scheduling: Take a look at our calendar to check for available times,
        making it easy to know how quickly a technician can come.
      </p> */}
      <div id="home-boxes">
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
            // backgroundImage: `url('${map}')` /*, opacity: 0.6*/
          }}
        >
          {whereWeAre}
        </p>
      </div>
      <div id="app-link-box">
        <a href="https://fixiteddie-pwa.herokuapp.com/">Link to Our App</a>
      </div>
    </div>
  );
};

export default Home;
