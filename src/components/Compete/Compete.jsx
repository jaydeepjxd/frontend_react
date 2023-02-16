import React from 'react'

import "./Compete.scss"
import images from '../../constants/images'

const Compete = () => {
  return (
    <section id='Compete' className='compete'>
        <div className='compete-info'>
            <h1>Compete</h1>
            <img src={images.compete}/>
            <button>Register Now</button>
        </div>
        <img className='char4' src={images.char4} />
    </section>
  )
}

export default Compete