import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"
import FeaturedProjects from "../constants/featuredProjects"

const Projects = ({ title }) => {
  return (
    <section className="section projects" id="projects">
      <Title title={title} />
      <div className="section-center projects-center">
        {FeaturedProjects.map((project, index) => {
          return <Project key={project.id} index={index} {...project} />
        })}
      </div>
    </section>
  )
}

export default Projects
