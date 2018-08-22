import React from 'react';
import { whatWeDo, whereWeAre } from '../constants';
import map from '../styles/map.png';
import architect from '../styles/architect.jpeg';

const Home = () => {
  return (
    <div>
      <h1 style={{ fontSize: '40px' }}>Why Call Eddie?</h1>
      <p>
        Remote Diagnostic: A profissional will asses your problem BEFORE coming
        to your house. This means you will have an accurate estimate for both
        time and cost, and ensures the technician will have all the right parts
        when he shows up at your door.
      </p>
      <div id="home-boxes">
        <div id="home-p1" style={{ backgroundImage: `url(${architect})` }}>
          <p>{whatWeDo}</p>
        </div>
        <p
          id="home-p2"
          style={{ backgroundImage: `url('${map}')`, opacity: 0.6 }}
        >
          {whereWeAre}
        </p>
      </div>
      <a href="https://fixiteddie-pwa.herokuapp.com/">Link to Our App</a>
    </div>
  );
};

export default Home;
