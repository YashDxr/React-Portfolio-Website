import React from 'react'
import './portfolio.css'
import IMG1 from '../../Resources/portfolio1.jpg'
import IMG2 from '../../Resources/portfolio2.jpg'
import IMG3 from '../../Resources/portfolio3.jpg'
import IMG4 from '../../Resources/portfolio4.jpg'
import IMG5 from '../../Resources/portfolio5.png'
import IMG6 from '../../Resources/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Chat Application',
    github: 'https://github.com/YashDxr/Chat-Application.git'
  },
  {
    id: 2,
    image: IMG2,
    title: 'College Management System',
    github: 'https://github.com/YashDxr/College_Management_System.git'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Java 2D Game',
    github: 'https://github.com/YashDxr/Java-2D-GAME.git'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Disease Tracking Map',
    github: 'https://github.com/YashDxr/CoronaMAP.git'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Portfolio Website',
    github: 'https://github.com/YashDxr/React-Portfolio-Website.git'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Dance Website using PUG',
    github: 'https://github.com/YashDxr/DanceWeb.git'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Porfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id,image,title,github}) => {
            return(
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio