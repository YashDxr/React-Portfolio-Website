import React from 'react'
import './testimonials.css'
import AVTR1 from '../../Resources/vansh.jpg'
import AVTR2 from '../../Resources/rohan.jpg'
import AVTR4 from '../../Resources/jahnvi.jpg'

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Vansh Batra',
    review: `Being a hard worker means completing assignments on time, putting your maximum effort into every assignment, asking for extra help when you need it, spending the time to study for tests and quizzes, and recognizing weaknesses and looking for ways to improve.YASH IS EVERYTHING DESCRIBED ABOVE!!!`
  },
  {
    avatar: AVTR2,
    name: 'Rohan Saini',
    review: `Yash's commitment to his studies is truly commendable. From day one, he has exhibited a relentless pursuit of knowledge and a genuine passion for learning. Whether it's a complex academic challenge or a creative project, Yash tackles each task with unwavering determination and enthusiasm.`
  },
  {
    avatar: AVTR4,
    name: 'Jahnvi Khanduja',
    review: `What sets Yash apart is his consistent drive to go above and beyond. He consistently seeks opportunities to expand his horizons, taking on additional coursework, participating in extracurricular activities, and seeking internships relevant to his field of interest. His proactive approach to personal and professional growth is inspiring to both peers and faculty members alike.`
  }]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
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