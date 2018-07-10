import React from 'react'
import { whatWeDo, whereWeAre } from '../constants'
import map from '../map.png'
import architect from '../architect.jpeg'

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Rogue Elephant Company Homepage</h1>
      <div id="home-boxes">
        <p id="home-p1" style={{ backgroundImage: `url(${architect})` }}>{whatWeDo}</p>
        <p id="home-p2" style={{ backgroundImage: `url('${map}')` }}>{whereWeAre}</p>
      </div>
      <a href="http://www.google.com">Link to Our App</a>
    </div>
  )
}

export default Home;
