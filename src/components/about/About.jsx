import React from 'react'
import "./about.css";
import ME from "../../assets/me1.JPG"
import { FaUniversity } from "react-icons/fa"
import { BsCardChecklist } from "react-icons/bs"

const About = () => {
  return (
    <section id="about">
      <h5> Get To Know </h5>
      <h2> About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="My Image" />
          </div>
        </div>

      
        <div className="about__content">
          <div className="about__cards">
            <a href='#education'>
              <article className='about__card'>
                <FaUniversity className='about__icon'/>
                <h5> Education </h5>
                <small> 3rd Year </small>
              </article>
            </a>
            <a href='#portfolio'>
              <article className='about__card'>
                <BsCardChecklist className='about__icon'/>
                <h5> Projects </h5>
                <small> 4 Completed </small>
              </article>
            </a>
          </div>

          <p> 
          I am from Yangon, Myanmar and I am a 3rd year Biology and Computer Science student at the University of British Columbia, Vancouver.
          Computer Science interests me as there are numerous potential activites I could do, from designing and creating a small software of my own to 
          contributing to a much bigger technology which could have an impact on the world.
          I am interested in big data and software engineering but I am willing to explore and learn other disciplines of computer science
          and those where I could integrate my knowledge of biology into. 
          I enjoy working in teams on projects and assignments where we could brainstorm together and exchange knowledge.
          It is always fun looking back at the things accomplished together.
          </p>
          
          <a href="#contact" className='btn btn-primary'> Let's Have A Chat </a>
        </div>
      </div>
    </section>
  )
}

export default About