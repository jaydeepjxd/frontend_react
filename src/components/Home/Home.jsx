import React from 'react'

import "./Home.scss"
import images from '../../constants/images'

const Home = () => {
  return (
    <section id='Home' className='home'>
        <div className='home-info'>
            <h1>Storyline</h1>
            <p>In Valorant lore, Jett is an agile agent expert in the art of evasion. She overwhelms enemies 
            and wounds them with a blade without them knowing her position.<br/><br/>

            There are a total of six groups of weapons that players will be able to purchase at the start of each round 
            with each costing a different amount based on their power and weapon type. </p>
            <button>Download for Free</button>
        </div>
        <img className='char' src={images.char} />
    </section>
  )
}

export default Home