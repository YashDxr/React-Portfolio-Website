import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
        <h5>What I Offer</h5>
        <h2>Services</h2>

        <div className='container services__container'>
          <article className="service">
            <div className="service__head">
              <h3>Java Development</h3>
            </div>

            <ul className="service__list">
              <li>
                <BiCheck className='service__list-icon' />
                <p>Responsible for developing applications and software using the Java programming language</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Strong grasp of OOPs concepts</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Active throughout the entire development life cycle of a product or solution.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Preparing for an entry-level Java Developer position.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Unit testing using JUnit5 Jupiter</p>
              </li>
            </ul>
          </article>


          <article className="service">
            <div className="service__head">
              <h3>Full Stack Development</h3>
            </div>

            <ul className="service__list">
              <li>
                <BiCheck className='service__list-icon' />
                <p>Experience in developing web solutions using MERN stack</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Worked on multiple Full Stack projects</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Extensive knowledge of js functionalities and frontend libraries</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>High end grasp of backend tech for secure and optimal server</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Worked with multiple databases and versioning systems</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>SPA & CBD. MVC architecture</p>
              </li>
            </ul>
          </article>


          {/* <article className="service">
            <div className="service__head">
              <h3>Content Creation</h3>
            </div>

            <ul className="service__list">
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
            </ul>
          </article> */}
        </div>
    </section>
  )
}

export default Services