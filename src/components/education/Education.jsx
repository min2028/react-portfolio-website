import React from 'react'
import "./education.css"
import UBCV from "../../assets/UBCV.jpg"
import UBCO from "../../assets/UBCO.jpg"
import RBC from "../../assets/rbc.jpg"

// import Swiper core and required modules
import { Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    pic: UBCV,
    name: 'University of British Columbia Vancouver',
    life: 'Transferred here from UBC Okanagan after Year 1 and switched to \
    Bachelor of Science - Combined Major in Biology/Computer Science in Year 2. \
    It was my first time learning computer science and is one of the best choices \
    I have made. Currently, I have finished Year 3 and is excited to for lies ahead.'
  },
  {
    pic: UBCO,
    name: 'University of British Columbia Okanagan',
    life: 'Transferred here after my first year at Richard Bland College. \
          I took courses towards my Bachelor of Science - Biology degree. I started \
          at Year 1 again due to insufficient transfer credits for Year 2 promotion.'
  },
  {
    pic: RBC,
    name: 'Richard Bland College of William & Mary',
    life: 'I did my very first year of university here from 2018-2019. \
          I started out taking courses towards Associate of Arts in my first semester and \
          switched to Associate of Science - Life Science in my second semester.'
  }
]
const Education = () => {
  return (
    <section id='education'>
      <h5> University/College</h5>
      <h2> Education</h2>


      <Swiper className="container education__container"
        // install Swiper modules
        modules={[Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}>
        {
          data.map(({ pic, name, life }, index) => {
            return (
              <SwiperSlide key={index} className='education'>
                <div className='uni__pic'>
                  <img src={pic} alt="UBC" />
                </div>
                <h5 className='uni__name'> {name} </h5>
                <small className='uni__life'>
                  {life}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Education