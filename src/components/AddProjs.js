import React from "react"
import Title from "./Title"
import AddProj from "./AddProj"
import Projects from "../constants/projects"

export const AddProjs = ({ title }) => {
  return (
    <section className="section">
      <Title title={title} />
      <div className="section-center blogs-center">
        {Projects.map(project => {
          return <AddProj key={project.id} {...project} />
        })}
      </div>
    </section>
  )
}
export default AddProjs
