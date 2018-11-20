import React from 'react';
// import logo from '../styles/logo.png';
// import silhouette from '../styles/silhouette.jpg';
import { /*team,*/ aboutUs } from '../constants';

const About = () => {
  return (
    <div>
      <h2>About Us:</h2>
      <div>
        {aboutUs.map(par => (
          <p className="about-par">{par}</p>
        ))}
      </div>
      {/* <div>
        {team.map(person => (
          <div className="about-bio">
            <div className="imageName">
              <img src={silhouette} className="bio-picture" />
              <span>{person.name}</span>
            </div>
            <p className="bio-paragraph">{person.bio}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default About;
