import React from "react"
import { Link } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const Hero = () => {
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>James Su-Shum</h1>
            <h3>Software Developer</h3>
            <Link to="/#contact" className="btn">
              Get In Touch
            </Link>
            <SocialLinks />
          </div>
        </article>
      </div>
    </header>
  )
}

export default Hero
