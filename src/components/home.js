import React from 'react'
import { homeParagraphs } from '../constants'

const Home = () => {
  return (
    <div>
      <h2>Welcome to the Roge Elephant Company Homepage</h2>
      {
        homeParagraphs.map(par => <p className="home-paragraph">{par}</p>)
      }
      <a href="#">Link to Our App</a>
    </div>
  )
}

export default Home;
