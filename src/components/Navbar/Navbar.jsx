import React from 'react'

import "./Navbar.scss"
import images from '../../constants/images'

const Navbar = () => {

  return ( 
    <nav>
    <div className='navbar'>
        <img className='nav-end1' src={images.nav_end1} />
        <div className='nav-div'>

            <img src={images.logo} className="logo"/>

            <ul className='nav-list'>
                {
                    ["Home", "Updates", "Deals", "Compete"].map((link) => (
                        <li>
                            <a href={`#${link}`}>{link}</a>
                        </li>
                    ))
                }
            </ul>

            <button>Download</button>
        </div>
            
            
        <img className='nav-end2' src={images.nav_end2}/>
    </div>
    
    </nav>

    
  )
}

export default Navbar