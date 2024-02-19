import React from 'react'
import './Footer.scss'
import { Link } from 'react-scroll'
import Facebook from "../../assets/Facebook.svg"
import Insta from "../../assets/Insta.svg"
import Twitter from "../../assets/Twitter.svg"

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
                    <div className="footer__wrapper-icon">
                        <Link className='footer__title2'>
                            FOR GAMERS. BY GAMERS.™
                        </Link>
                        <div className="footer__flex-icon">
                            <Link>
                                <img width={30} src={Facebook} alt="asd" />
                            </Link>
                            <Link>
                                <img width={30} src={Insta} alt="asd" />
                            </Link>
                            <Link>
                                <img width={30} src={Twitter} alt="asd" />
                            </Link>
                        </div>
                    </div>
            </div>
            <div className="footer__black">
                <div className="footer__flex-link">
                    <Link className='footer__title3'>
                        Copyright © 2022 Razer Inc. All rights reserved.
                    </Link>
                    <div className="footer__link-text">
                        <Link className='footer__text2-about'>
                            Created by: karimberdiyev_aziz
                        </Link>
                        <Link className='footer__text2'>
                            IT Academy
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer