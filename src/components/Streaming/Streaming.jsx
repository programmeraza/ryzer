import React from 'react'
import './Streaming.scss'

const Streaming = ({streaming}) => {
  return (
    <section className='catalog' id='streaming'>
    <div className="container">
    <h1 className='catalog__main-title'>STREAMING DEVICES BY RAZER</h1>
        <div className="catalog__wrapper">
            {streaming.map((el) => {
                return (
                    <div key={el.id} className="catalog__card">
                            <div className="catalog__top">
                            <img src={el.image} alt="asd" />
                            </div>
                            <div className="catalog__content">
                                <div className="catalog__name">
                                  <h2>{el.name}</h2>
                                </div>
                                <div className="catalog__desc">
                                  <p>{el.desc}</p>
                                </div>
                                <div className="catalog__btm">
                                  <p>US${el.price}</p>
                                  <button>BUY</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
    )
}

export default Streaming