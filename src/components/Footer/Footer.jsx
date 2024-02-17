import React from 'react'
import './Footer.scss'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <>
    <div className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <div className="footer__link">
                    <Link className='footer__title'>
                        Shop
                    </Link>
                    <Link className="footer__text">
                        RazerStores
                    </Link>
                    <Link className="footer__text">
                        RazerCafe
                    </Link>
                    <Link className="footer__text">
                        Store Location
                    </Link>
                    <Link className="footer__text">
                        Purchase Programs
                    </Link>
                    <Link className="footer__text">
                        Exclusives
                    </Link>
                </div>
                <div className="footer__link">
                    <Link className='footer__title'>
                        Explore
                    </Link>
                    <Link className="footer__text">
                        Technology
                    </Link>
                    <Link className="footer__text">
                        Chroma RGB
                    </Link>
                    <Link className="footer__text">
                        Concepts    
                    </Link>
                    <Link className="footer__text">
                        Esports
                    </Link>
                    <Link className="footer__text">
                        Collabs
                    </Link>
                </div>
                <div className="footer__link">
                    <Link className='footer__title'>
                        Support
                    </Link>
                    <Link className="footer__text">
                        Get Help    
                    </Link>
                    <Link className="footer__text">
                        Registration & Warranty
                    </Link>
                    <Link className="footer__text">
                        RazerStore Support
                    </Link>
                    <Link className="footer__text">
                        Manage Razer ID
                    </Link>
                    <Link className="footer__text">
                        Support Videos
                    </Link>
                </div>
                <div className="footer__link">
                    <Link className='footer__title'>
                        Company
                    </Link>
                    <Link className="footer__text">
                        About Us
                    </Link>
                    <Link className="footer__text">
                        Careers
                    </Link>
                    <Link className="footer__text">
                        Press Room
                    </Link>
                    <Link className="footer__text">
                        zVentures
                    </Link>
                    <Link className="footer__text">
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer