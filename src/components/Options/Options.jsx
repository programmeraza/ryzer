import React from 'react'
import './Options.scss'
import { Link } from 'react-router-dom'
import Laptop from "../.././assets/Laptop.png"
import Mice from "../.././assets/Mice.png"
import Keyboards from "../.././assets/Keyboards.png"
import Headsets from "../.././assets/Headsets.png"
import Streaming from "../.././assets/stream.png"
import Chairs from "../.././assets/Chairs.png"
import Console from "../.././assets/console.png"
import Mobile from "../.././assets/Mobile.png"
import Gear from "../.././assets/Gear.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';

const Options = () => {
  return (
    <>
    <section className='option'>
        <div className="container">
            <div className="option__wrapper">
                <div className="option__links">
                 <a href={'#laptops'} className="option__link">
                    <img src={Laptop} alt="asd" />
                    <p>Laptops</p>
                </a>
                 <a href={'#mice'} className="option__link">
                    <img src={Mice} alt="asd" />
                    <p>Mice</p>
                </a>
                 <a href={'#keyboard'} className="option__link">
                    <img src={Keyboards} alt="asd" />
                    <p>Keyboards</p>
                </a>
                 <a href={'#headsets'} className="option__link">
                    <img src={Headsets} alt="asd" />
                    <p>Headsets</p>
                </a>
                 <a href={'#streaming'} className="option__link">
                    <img src={Streaming} alt="asd" />
                    <p>Streaming</p>
                </a>
                <a href={'#chairs'} className="option__link">
                    <img src={Chairs} alt="asd" />
                    <p>Chairs</p>
                </a>
                 <a href={'#console'} className="option__link">
                    <img src={Console} alt="asd" />
                    <p>Console</p>
                </a>
                 <a href={'#mobile'} className="option__link">
                    <img src={Mobile} alt="asdf" />
                    <p>Mobile</p>
                </a>
                 <a href={'#gear'} className="option__link">
                    <img src={Gear} alt="asd" />
                    <p>Gear</p>
                </a>
                </div>
                <div className="option__swiper">
                <Swiper
                  pagination={{
                  type: 'progressbar',
                  }}
                    loop={true}
                    slidesPerView={3}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                  <SwiperSlide> 
                    <Link className="option__link">
                     <img src={Laptop} alt="asd" />
                     <p>Laptops</p>
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide>
                  <Link className="option__link">
                    <img src={Mice} alt="asd" />
                    <p>Mice</p>
                  </Link>
                  </SwiperSlide>
                  <SwiperSlide>
                  <Link className="option__link">
                    <img src={Keyboards} alt="asd" />
                    <p>Keyboards</p>
                   </Link>
                  </SwiperSlide>
                  <SwiperSlide>
                  <Link className="option__link">
                    <img src={Headsets} alt="asd" />
                    <p>Headsets</p>
                </Link> 
                  </SwiperSlide>
                  <SwiperSlide>
                  <Link className="option__link">
                    <img src={Streaming} alt="asd" />
                    <p>Streaming</p>
                </Link>
                  </SwiperSlide>
                  <SwiperSlide>
                  <Link className="option__link">
                    <img src={Chairs} alt="asd" />
                    <p>Chairs</p>
                </Link>
                  </SwiperSlide>
                  <SwiperSlide>
                  <Link className="option__link">
                    <img src={Console} alt="asd" />
                    <p>Console</p>
                </Link>
                  </SwiperSlide>
                  <SwiperSlide>
                  <Link className="option__link">
                    <img src={Mobile} alt="asdf" />
                    <p>Mobile</p>
                </Link>
                  </SwiperSlide>
                  <SwiperSlide>
                  <Link className="option__link">
                    <img src={Gear} alt="asd" />
                    <p>Gear</p>
                </Link>
                  </SwiperSlide>
                 </Swiper>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Options