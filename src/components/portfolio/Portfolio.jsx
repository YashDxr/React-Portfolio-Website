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
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Charts templates & infographics in Figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/12670507-Charts-templates-infographics-in-Figma'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Figma dashboard UI kit for data design web apps',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/21590546-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Maintaining tasks and tracking progress',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Funnel charts collection and Hyper charts UI Kit',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/21613435-Funnel-charts-collection-Hyper-charts-UI-Kit'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Figma components and widgets',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/20349199-Figma-components-and-widgets'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Porfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id,image,title,github,demo}) => {
            return(
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
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