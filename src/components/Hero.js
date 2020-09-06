import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const query = graphql`
  {
    file(relativePath: { eq: "hero-img.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h4>Hi, my name is</h4>
            <h1>James Su-Shum.</h1>
            <h4>
              I'm a software developer specializing in building meaningful and
              functional applications.
            </h4>
            <Link to="/contact" className="btn">
              See Projects
            </Link>
            <SocialLinks />
          </div>
        </article>
        {/* <Image fluid={fluid} className="hero-img" /> */}
      </div>
    </header>
  )
}

export default Hero
