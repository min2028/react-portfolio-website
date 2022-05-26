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
          Canada is one of the best countries in the world to live in. First, Canada has an
excellent health care system. All Canadians have access to medical services at a reasonable
price. Second, Canada has a high standard of education. Students are taught by well‐trained
teachers and are encouraged to continue studying at university. Finally, Canada's cities are clean
and efficiently managed. Canadian cities have many parks and lots of space for people to live. As
a result, Canada is a desirable place to live. 
          </p>
          
          <a href="#contact" className='btn btn-primary'> Let's Have A Chat </a>
        </div>
      </div>
    </section>
  )
}

export default About