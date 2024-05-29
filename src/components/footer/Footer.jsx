import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Yash Singh</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="contact">Contact</a></li>
      </ul>
      <div className="footer__copyright">
        <small>&copy; Yash Singh Portfolio. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer