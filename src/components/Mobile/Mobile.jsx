import React from 'react'
import "./Mobile.scss"
import { Link } from 'react-scroll'

const Mobile = () => {
  return (
    <>

      <div className="mobile">
        <h1 className="mobile__title">ENGINEERED FOR THE GAME, DESIGNED FOR LIFE</h1>
        <p className="mobile__text">This is freedom of play, redefined. Our mobile gaming and lifestyle audio products are crafted to seamlessly integrate <br />
        gaming into every aspect of your life.</p>
      </div>

      <div className="mobile__head">
        <div className="mobile__txt">
          <h2 className="mobile__title1">RAZER EDGE</h2>
          <p className="mobile__text1">The Ultimate Android Gaming Handheld</p>
          <Link className='mobile__link' to='/store'>
            Learn More →
          </Link>
        </div>
      </div>

      <div className="mobile__grid">
        <div className="mobile__cards">
          <div className="mobile__card">
            <img className='mobile__img' src="/mobile1.jpg" alt="mobile1" />
            <h2 className='mobile__title2'>RAZER KISHI V2 FOR IPHONE</h2>
            <p className="mobile__text2">Universal Mobile Gaming Controller for iPhone</p>
            <Link className='mobile__link2' to='/store'>
            Learn More →
            </Link>
          </div>
          <div className="mobile__card">
            <img className='mobile__img' src="/mobile2.jpg" alt="mobile1" />
            <h2 className='mobile__title2'>RAZER KISHI V2 FOR ANDROID</h2>
            <p className="mobile__text2">Universal Mobile Gaming Controller for Android</p>
            <Link className='mobile__link2' to='/store'>
            Learn More →
            </Link>
          </div>
          <div className="mobile__card">
            <img className='mobile__img' src="/mobile3.jpg" alt="mobile1" />
            <h2 className='mobile__title2'>RAZER KISHI</h2>
            <p className="mobile__text2">Make your move with our award-winning universal mobile controller that fits most smartphone devices, designed to bring console-level control and comfort to your on-the-go gaming.</p>
            <Link className='mobile__link2' to='/store'>
            Learn More →
            </Link>
          </div>
        </div>
      </div>

      <div className="mobile__boy">
      <div className="mobile__txt">
          <h2 className="mobile__title1">GO THE EXTRA MILE</h2>
          <p className="mobile__text1">When you’re filling those few minutes in line at the coffee shop or commuting to work with a quick game or listening to that banger on repeat, Razer has the accessory that lets fellow gamers know they’re among their own.</p>
          <Link className='mobile__link' to='/store'>
            Learn More →
          </Link>
        </div>
      </div>

      <div className="mobile__grid">
        <div className="mobile__cards">
          <div className="mobile__card">
            <img className='mobile__img' src="/mobile-chexol.jpg" alt="mobile1" />
            <h2 className='mobile__title2'>RAZER ARCTECH CASES</h2>
            <p className="mobile__text2">Protect your investment while experiencing better device performance and improved phone cooling with a Thermaphene Performance layer for maximum heat dissipation.</p>
            <Link className='mobile__link2' to='/store'>
            Learn More →
            </Link>
          </div>
          <div className="mobile__card">
            <img className='mobile__img' src="/mobile-pods.jpg" alt="mobile1" />
            <h2 className='mobile__title2'>RAZER HAMMERHEAD TRUE WIRELESS PRO</h2>
            <p className="mobile__text2">Take your audio immersion to new heights with THX® Certified true wireless earbuds that deliver breathtaking audio quality and advanced active noise cancellation.</p>
            <Link className='mobile__link2' to='/store'>
            Learn More →
            </Link>
          </div>
          <div className="mobile__card">
            <img className='mobile__img' src="/mobile-kuler.png" alt="mobile1" />
            <h2 className='mobile__title2'>RAZER PHONE COOLER CHROMA</h2>
            <p className="mobile__text2">Smartphone Cooling Fan with Razer Chroma™ RGB</p>
            <Link className='mobile__link2' to='/store'>
            Learn More →
            </Link>
          </div>
        </div>
      </div>

    </>
  )
}

export default Mobile