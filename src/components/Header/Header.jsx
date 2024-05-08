import React from 'react'
import './Header.scss'
import Logo from "../../assets/razerr.svg"
import Icon from "../../assets/korzina.svg"
import { Link } from 'react-router-dom'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState)
  }
  return (
    <>
    <div className="header">
        <div className="container">
            <div className="header__wrapper">
            <button className='header__bur' onClick={toggleDrawer}>
              <span></span>
              <span className='short'></span>
              <span></span>
              </button>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='top'
                className='header__open'
            >
                <div className='header__bgd'>
                  <div className="header__flex-logo">
                  <button className='header__bur' onClick={toggleDrawer}>
                    <span></span>
                    <span className='short'></span>
                    <span></span>
                  </button>
                  <Link to={'/'} className="header__logo2">
                    <img width={35} src={Logo} alt="asd" />
                  </Link>
                  </div>
                  <ul className='header__links'>
                   <Link to={'/pc'}>
                      <li className="header__link">PC</li>
                    </Link>
                    <Link to={'/mobile'}>
                      <li className="header__link">Mobile</li>
                    </Link>
                    <Link to={'/'}>
                      <li className="header__link">Home</li>
                    </Link>
                    <Link>
                      <li className="header__link">Services</li>
                    </Link>
                    <Link to={'/store'}>
                      <li className="header__link">Store</li>
                    </Link>
                    <Link>
                      <li className="header__link">Sign up</li>
                    </Link>
                    <Link>
                      <li className="header__link">Log in</li>
                    </Link>
                  </ul>
                </div>
            </Drawer>
                <Link to={'/'} className="header__logo">
                  <img width={35} src={Logo} alt="asd" />
                </Link>
                <nav>
                <ul className='header__link'>
                   <Link to={'/pc'} className="header__nav">
                      <li className="header__li">PC</li>
                    </Link>
                    <Link to={'/mobile'}>
                      <li className="header__li">Mobile</li>
                    </Link>
                    <Link to={'/'}>
                      <li className="header__li">Home</li>
                    </Link>
                    <Link>
                      <li className="header__li">Services</li>
                    </Link>
                    <Link to={'/store'}>
                      <li className="header__li">Store</li>
                    </Link>
                    <Link>
                      <li className="header__li">Sign up</li>
                    </Link>
                    <Link>
                      <li className="header__li">Log in</li>
                    </Link>
                  </ul>
                </nav>
                <Link className="header__icon">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" color='white' height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path></svg>
                <img width={30} src={Icon} alt="asd" />
                </Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header