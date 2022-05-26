import React from 'react'
import "./contact.css"  
import { HiOutlineMail } from "react-icons/hi"
import { RiMessengerLine } from "react-icons/ri"
import { useRef } from 'react';
import emailjs, { send } from 'emailjs-com';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6nwmyj9', 'template_fgf789l', form.current, '56lrpknwU2mmqdOca')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5> Get In Touch </h5>
      <h2> Chat With Me </h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon'/>
            <h4> Email </h4>
            <h5> akmin.aungmin@gmail.com </h5>
            <a href="mailto:akmin.aungmin@gmail.com" target="_blank"> Send an email </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4> Messenger </h4>
            <h5> Aung Khant Min </h5>
            <a href="https://m.me/aungkmin02" target="_blank"> Send a message </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Full Name (required)' required />
          <input type="text" name="email" placeholder='Email (required)' required />
          <input type="text" name="subject" placeholder='Subject' />
          <textarea name='message' rows="7" placeholder="Your Message (required)" required/>
          <button type='submit' className='btn btn-primary'> Send </button>
        </form>
      </div>
    </section>
  )
}

export default Contact