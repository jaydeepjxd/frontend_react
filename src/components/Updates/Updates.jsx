import React from 'react'

import "./Updates.scss"
import images from '../../constants/images'

const Updates = () => {
  return (
    <section id='Updates' className='updates'>
        <div className='updates-info'>
            <h1>Updates</h1>
            <div className='update'>
              <img src={images.update1} />
              <p>Riot plans mid-scope updates for both Taliyah and Olaf</p>
            </div>
            <div className='update'>
              <img className='update-img' src={images.update2} />
              <p className='update-heading'>The 5 best midlaners for season 12 solo queue</p>
            </div>
            <div className='update'>
              <img className='update-img' src={images.update3} />
              <p className='update-heading'>Esports organization Team Spirit to leave Russia and relocate to Serbia</p>
            </div>
        </div>
        <img className='char2' src={images.char2} />
    </section>
  )
}

export default Updates