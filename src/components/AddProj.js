import React from "react"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"

const AddProj = ({ title, desc, github, url, stack }) => {
  return (
    <article className="blog">
      <div className="blog-card">
        <h4>{title}</h4>
        <p>{desc}</p>
        <div className="project-stack">
          {stack.map((item, index) => {
            return <span key={index}>{item}</span>
          })}
        </div>
        <div className="project-links">
          <a href={github} target="_blank" rel="noopener noreferrer">
            <FaGithubSquare className="project-icon" />
          </a>
          {url === "" ? null : (
            <a href={url} target="_blank" rel="noopener noreferrer">
              <FaShareSquare className="project-icon" />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default AddProj
