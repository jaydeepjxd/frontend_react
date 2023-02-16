import React from 'react'

import "./Deals.scss"
import images from '../../constants/images'

const Deals = () => {
  return (
    <section id='Deals' className='deals'>
        <div className='deals-info'>
            <h1>Deals</h1>
            <div className='deal'>
              <img src={images.deal1} />
              <p>HyperX Cloud Core On-Ear Wired Gaming Headset with Mic <span className='price'>₹ 8,999</span></p>
            </div>
            <div className='deal'>
              <img src={images.deal2} />
              <p >Zebronics Zeb-Transformer-M Optical USB Gaming Mouse <span className='price'>₹ 1,999</span></p>
            </div>
            <div className='deal'>
              <img src={images.deal3} />
              <p>Redragon K617 Fizz 60% Wired RGB Gaming Keyboard, 61 Keys Compact Mechanical Keyboard <span className='price'>₹ 4,999</span></p>
            </div>
        </div>
        <img className='char3' src={images.char3} />
    </section>
  )
}

export default Deals