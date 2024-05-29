// import React from 'react'
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./contact.css";

import { MdOutlineEmail } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_js5u7i9",
        "template_xyal497",
        form.current,
        "R4ENTH8zFjztvbft6"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>yash*****@outlook.com</h5>
            <a href="mailto:yashsingh05102002@outlook.com" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BsInstagram className="contact__option-icon" />
            <h4>Instagram</h4>
            <h5>yash05.singh</h5>
            <a href="https://www.instagram.com/yash05.singh/" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+91-6********4</h5>
            <a href="https://wa.me/+916309849814" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
