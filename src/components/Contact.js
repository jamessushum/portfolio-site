import React from "react"
import Title from "./Title"

const Contact = ({ title }) => {
  return (
    <section className="section projects" id="contact">
      <Title title={title} />
      <div className="contact-body">
        <article className="contact">
          <h4>Have any questions or just want to say hi, send me a message!</h4>
          <a href="mailto:sushumjames@gmail.com" className="btn center-btn">
            Say Hello
          </a>
        </article>
      </div>
    </section>
  )
}

export default Contact
