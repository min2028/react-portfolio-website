import React from 'react'
import "./portfolio.css"
import IMG1 from "../../assets/insightUBC-pic.png"
import IMG2 from "../../assets/unilife-pic.png"
import IMG3 from "../../assets/mediquest-pic.png"
import IMG4 from "../../assets/flashcard-pic.jpg"

const data = [
  {
    id: 1,
    image: IMG1,
    title: "InsightUBC",
    description: "A Node app written in Typescript and Bootstrap5 UI",
    github: ["https://github.com/min2028/InsightUBC"]
  },
  {
    id: 2,
    image: IMG2,
    description: "An social networking site built with MS SQL, ASP.NET, and Angular",
    title: "UniLife",
    github: ["https://github.com/collSteve/UniLife_SQL_Server_Proj", "https://github.com/collSteve/UniLife-ASPNET-Backend-Proj", 
             "https://github.com/collSteve/UniLife-Angular-Frontend-Proj"]
  },
  {
    id: 3,
    image: IMG3,
    title: "MediQuest",
    description: "A Unity-powered game written in C#",
    github: ["https://github.com/Payam-Fz/MediQuest"]
  },
  {
    id: 4,
    image: IMG4,
    title: "Flashcard project",
    description: "A GUI written in Java using Java Swing",
    github: ["https://github.com/min2028/flashcard-java"]
  }
]

const Portfolio = () => {
  return (

    <section id='portfolio'>
      <h5> Projects </h5>
      <h2> Portfolio </h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, description, github }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3> {title} </h3>
                <small className='portfolio__description'>
                  {description}
                </small>
                <div className="portfolio__item-cta">
                  <a onClick={() => yourlink(github)} className='btn' target="_blank"> Github </a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

// Won't work if pop-up and redirects are blocked
function yourlink(urls) {

  for (let i = 0; i < urls.length; i++) {
    window.open(urls[i])}
  };

export default Portfolio