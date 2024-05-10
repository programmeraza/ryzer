import React from 'react'
import "./Services.scss"
import { Link } from 'react-scroll'

const Services = () => {
  return (
    <>
        <div className="services">
            <h1 className="services__title">RAZER SERVICES</h1>
            <br />
            <p className="services__text">If you have any questions about our products or Razer.com in general, please contact us here.</p>
            <br />
            <br />
            <p className="services__text">If there is any defect or problem with the products supplied by Razer.com, please contact us by Email! <br /> And we will give you the help we can. If there is any defect or error in our product, <br /> we will provide you with a new product free of charge.</p>
            <br />
            <br />
            <p className="services__text">Send us your email address from the input below and write down the problem!</p>
        </div>

        <div className="services__form-flex">
            <h1 className="services__title">CONTACT US</h1>
            <form className='services__form'>
                <input required className='services__inp' type="name" name='from-name' placeholder='Your name' />
                <input required className='services__inp' type="email" name='from-email' placeholder='Your email' />
                <input required className='services__inp' type="message" name='message' placeholder='Message' />
                <input className='services__btn' type="submit" value="Send" />
            </form>
        </div>

        <div className="services__ryzercare">
            <div className="services__texts">
                <h1 className='services__title1'>RYZERCARE</h1>
                <p className="services__text1">Protect your Razer gear with RazerCare—includes extended warranty <br />  that covers both mechanical and electrical issues due to normal product usage.</p>
                <Link className='services__link'>
                    Learn More →
                </Link>
            </div>
        </div>

        <div className="services__ryzerid">
            <div className="services__texts">
                <h1 className='services__title1'>RAZER ID</h1>
                <p className="services__text1">Gain a competitive advantage and leverage on our support, expertise and community with your Razer ID. <br /> Integrated with Razer's services and software,  you can gain access to tons of tools with your Razer ID—including <br /> buying the best gamer gear on our site, redeeming Razer Silver, saving your personalized configs in Synapse, and more.</p>
                <Link className='services__link'>
                    Learn More →
                </Link>
            </div>
        </div>
    </>
  )
}

export default Services