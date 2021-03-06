import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import About from "../components/About"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import AddProjs from "../components/AddProjs"
import Contact from "../components/Contact"
import SEO from "../components/SEO"

export default () => {
  return (
    <Layout>
      <SEO
        title="James Su-Shum"
        description="My portfolio site to showcase my experience and projects as a software developer"
      />
      <Hero />
      <About />
      <Jobs />
      <Projects title="Portfolio" />
      <AddProjs title="Additional Projects" />
      <Contact title="Contact Me" />
    </Layout>
  )
}
