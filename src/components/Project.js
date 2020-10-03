import React from "react"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"

const Project = ({ desc, title, github, stack, url, image, index }) => {
  return (
    <article className="project">
      <img src={image} alt={title} className="project-img" />
      <div className="project-info">
        <span className="project-number">Featured Project</span>
        <h3>{title}</h3>
        <p className="project-desc">{desc}</p>
        <div className="project-stack">
          {stack.map((item, index) => {
            return <span key={index}>{item}</span>
          })}
        </div>
        <div className="project-links">
          <a href={github} target="_blank" rel="noopener noreferrer">
            <FaGithubSquare className="project-icon" />
          </a>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <FaShareSquare className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  )
}

export default Project
