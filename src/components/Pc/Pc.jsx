import React from 'react'
import './Pc.scss'
import { Link } from 'react-scroll'

const PC = () => {
  return (
    <>
    <div className="pc">
        <div className="container">
            <div className="pc__wrapper">
                <div className="pc__content">
                    <h1 className='pc__title'>LAPTOPS & DESKTOPS</h1>
                    <p className='pc__text'>Razer systems are crafted to provide the ultimate performance for gaming and work. Enjoy desktop power made
                    mobile with our gaming and productivity laptops, or go all-out for your build as you assemble the most powerful
                    aRGB Chroma powered battlestation.
                    </p>
                </div>
                    {/* <div className="pc__cards-wrap">
                      <div className='pc__cards'>
                          <div className="pc__card">
                            <img src="./headphone.jpg" alt="asd" />
                            <h3 className='pc__title-card'>HEADSETS</h3>
                            <p className='pc__text-card'>Tuned for gaming, lifestyle, or a perfect mix of both and also...</p>
                            <Link>Learn More →</Link>
                          </div>
                          <div className="pc__card">
                            <img src="./headphone" alt="asd" />
                            <h3 className='pc__title-card'>HEADSETS</h3>
                            <p className='pc__text-card'>Tuned for gaming, lifestyle, or a perfect mix of both and also...</p>
                            <Link>Learn More →</Link>
                          </div>
                          <div className="pc__card">
                            <img src="./headphone" alt="asd" />
                            <h3 className='pc__title-card'>HEADSETS</h3>
                            <p className='pc__text-card'>Tuned for gaming, lifestyle, or a perfect mix of both and also...</p>
                            <Link>Learn More →</Link>
                          </div>
                      </div>
                    </div> */}
            </div>
        </div>
    </div>
    </>
  )
}

export default PC