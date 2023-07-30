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
                <p>Active throughout the entire development life cycle of a product or solution.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Ready for an entry-level Java position.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Bit of Java 2D game development Experience</p>
              </li>
            </ul>
          </article>


          <article className="service">
            <div className="service__head">
              <h3>Full Stack Web Development</h3>
            </div>

            <ul className="service__list">
              <li>
                <BiCheck className='service__list-icon' />
                <p>Can produce great solution for Web Application</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Worked on many projects for Full Stack Web Development</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Great knowledge about HTML/Pug/CSS/JS and ReactJS for Front End Development</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Good knowledge about NodeJs,Express framework for backend</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Worked with both MongoDB and MySQL for backend database</p>
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