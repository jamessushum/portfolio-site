import React from "react"
import Title from "./Title"

const Contact = ({ title }) => {
  return (
    <section className="section projects" id="contact">
      <Title title={title} />
      <div className="contact-body section-center">
        <article className="contact">
          <h4>
            Let's connect, feel free to reach out should you have any questions
            or just want to say hi!
          </h4>
          <a href="mailto:sushumjames@gmail.com" className="btn contact-btn">
            Say Hello
          </a>
        </article>
      </div>
    </section>
  )
}

export default Contact
