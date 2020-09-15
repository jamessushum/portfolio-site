import React from "react"
import Title from "./Title"
import about from "../constants/about"

const About = () => {
  return (
    <section className="section bg-grey" id="about-me">
      <Title title="About Me" />
      <div className="section-center services-center">
        {about.map(service => {
          const { id, icon, title, text } = service

          return (
            <article key={id} className="service">
              {icon}
              <h4>{title}</h4>
              <div className="underline"></div>
              <p>{text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default About
