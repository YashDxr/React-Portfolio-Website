import React from 'react'
import './testimonials.css'
import AVTR1 from '../../Resources/avatar1.jpg'
import AVTR2 from '../../Resources/avatar2.jpg'
import AVTR3 from '../../Resources/avatar3.jpg'
import AVTR4 from '../../Resources/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis doloribus quaerat necessitatibus quia voluptate ut amet odit quis, officiis assumenda labore explicabo iste eos eaque. Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
  },
  {
    avatar: AVTR2,
    name: 'Shatta Wale',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis doloribus quaerat necessitatibus quia voluptate ut amet odit quis, officiis assumenda labore explicabo iste eos eaque. Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
  },
  {
    avatar: AVTR3,
    name: 'Kwame Despite',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis doloribus quaerat necessitatibus quia voluptate ut amet odit quis, officiis assumenda labore explicabo iste eos eaque. Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
  },
  {
    avatar: AVTR4,
    name: 'Nana Ama McBrown',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis doloribus quaerat necessitatibus quia voluptate ut amet odit quis, officiis assumenda labore explicabo iste eos eaque. Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar,name,review},index) =>{
            return(
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials