import React from 'react'
import './Mouse.scss'
const Mouse = ({mice}) => {
    console.log(mice);
    return (
        <section id='mice' className='catalog'>
            <div className="container">
                    <div className="catalog__main-title">
                        <h1>MICE BY RAZER</h1>
                    </div>
                <div className="catalog__wrapper">
                    {mice.map((el) => {
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



export default Mouse