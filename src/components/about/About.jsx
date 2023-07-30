import React from 'react'
import './about.css'
import ME from '../../Resources/about-me-removebg-preview.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>2-Months Salesforce Developer Virtual Internship</small>
            </article>
            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>Nil - Fresher</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>5+</small>
            </article>
          </div>

          <p>Energetic Graduate with good knowledge in computer subjects, and ability to update and learn new concepts quickly and strong desire to work in the software technology field, ability to work in any environment, and possess good technical and analytical skills.</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About