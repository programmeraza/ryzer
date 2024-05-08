import React from 'react'
import "./Home.scss"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div className="home">
      <div className="container">
          <h1 className='home__title'>RING IN THE WINNING SEASON</h1>
          <h2 className="home__title1">DECK THE HALLS WITH EXCLUSIVE OFFERS</h2>
          <div className="home__link-flex">
            <Link className='home__link'>
              Learn More <span>→</span>
            </Link>
            <Link className='home__link'>
              Buy <span>→</span>
            </Link>
          </div>
      </div>
    </div>

    <div className="home1">
      <div className="container">
        <div className="home1__link-btn">
          <Link to={'/store'}>
            <button className="home1__btn">
              <span className='home1__btn-span'>RYZER.COM</span>
              <span className='home1__btn-span2'>EXCLUSIVE</span>
            </button>
          </Link>
        </div>
        <h1 className='home__title '>RAZER ENKI PRO</h1>
        <h2 className="home__title1">ULTIMATE ALL-DAY COMFORT</h2>
        <div className="home__link-flex">
            <Link className='home__link'>
              Koenigsegg Edition <span>→</span>
            </Link>
            <Link className='home__link'>
              Williams Esports Edition <span>→</span>
            </Link>
        </div>
      </div>
    </div>

    <div className="home2">
      <div className="container">
      <h1 className='home__title '>RAZER DEATHSTALKER V2 PRO TENKEYLESS</h1>
        <h2 className="home__title1">LOW-PROFILE ERGONOMICS. HIGH-PERFORMANCE WIRELESS.</h2>
        <div className="home__link-flex">
            <Link className='home__link'>
            Learn More <span>→</span>
            </Link>
            <Link className='home__link'>
              Buy <span>→</span>
            </Link>
        </div>
      </div>
    </div>

    <div className="row">

      <div className="left">
        <div className="left__btn-grid">
          <h1 className="left__g-bigger">NEW RAZER BLADE 14</h1>
          <h3 className="left__g-big">ULTRA QUARTZ. ULTRA POWERFUL.</h3>
        </div>
        <div className="left__gridbox">
              <Link className='left__link' to={'/store'}>
              Learn More <span>→</span>
              </Link>
              <Link className='left__link' to={'/store'}>
                Buy <span>→</span>
              </Link>
        </div>
      </div>

      <div className="right">
        <div className="left__btn-grid">
          <h1 className="left__g-bigger">NEW RAZER BLADE 14</h1>
          <h3 className="left__g-big">ULTRA QUARTZ. ULTRA POWERFUL.</h3>
        </div>
        <div className="left__gridbox">
              <Link className='left__link' to={'/store'}>
              Learn More <span>→</span>
              </Link>
        </div>
      </div>

      <div className="left1">
      <div className="left1__link-btn">
          <Link to={'/store'}>
            <button className="home1__btn">
              <span className='home1__btn-span'>RYZER.COM</span>
              <span className='home1__btn-span2'>EXCLUSIVE</span>
            </button>
          </Link>
        </div>
        <div className="left__btn-grid">
          <h1 className="left__g-bigger">RAZER STRIDER CHROMA</h1>
          <h3 className="left__g-big">OUTSHINE ALL OTHERS</h3>
        </div>
        <div className="left__gridbox">
              <Link className='left__link' to={'/store'}>
              Learn More <span>→</span>
              </Link>
              <Link className='left__link' to={'/store'}>
                Buy <span>→</span>
              </Link>
        </div>
      </div>

      <div className="right1">
      <div className="left__btn-grid">
          <h1 className="left__g-bigger">NEW RAZER BLADE 15</h1>
          <h3 className="left__g-big">POWER. PERFORMANCE. PERFECTION.</h3>
        </div>
        <div className="left__gridbox">
              <Link className='left__link' to={'/store'}>
              Learn More <span>→</span>
              </Link>
              <Link className='left__link' to={'/store'}>
                Buy <span>→</span>
              </Link>
        </div>
      </div>

      <div className="left2">
        <div className="left__btn-grid">
          <h1 className="left__g-bigger">BE IN A CLASS OF YOUR OWN</h1>
          <h3 className="left__g-big">BACK-TO-SCHOOL SPECIALS</h3>
        </div>
        <div className="left__gridbox">
              <Link className='left__link' to={'/store'}>
              Learn More <span>→</span>
              </Link>
              <Link className='left__link' to={'/store'}>
                Buy <span>→</span>
              </Link>
        </div>
      </div>

      <div className="right2">
        <div className="left__btn-grid">
          <h1 className="left__g-bigger">RAZER STREAM CONTROLLER</h1>
          <h3 className="left__g-big">INSTANT CONTROL. INFINITE CREATIVITY.</h3>
        </div>
        <div className="left__gridbox">
              <Link className='left__link' to={'/store'}>
              Learn More <span>→</span>
              </Link>
              <Link className='left__link' to={'/store'}>
                Buy <span>→</span>
              </Link>
        </div>
      </div>

    </div>
    </>
  )
}

export default Home