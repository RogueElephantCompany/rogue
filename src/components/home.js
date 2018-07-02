import React from 'react'
import { homeParagraphs } from '../constants'

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Rogue Elephant Company Homepage</h1>
      {
        homeParagraphs.map(par => <p className="home-paragraph">{par}</p>)
      }
      <a href="#">Link to Our App</a>
    </div>
  )
}

export default Home;
