import React, { useState } from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import JobsList from "../constants/jobs"
import Resume from "../../static/James.Su-Shum.Resume.pdf"

const Jobs = () => {
  const jobsList = JobsList.sort(function (a, b) {
    return b.id - a.id
  })
  const [value, setValue] = useState(0)
  const { company, date, position, desc } = jobsList[value]

  return (
    <section className="section jobs" id="experience">
      <Title title="Experience" />
      <div className="jobs-center">
        {/* Button Container */}
        <div className="btn-container">
          {jobsList.map((job, index) => {
            return (
              <button
                key={index}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {job.company}
              </button>
            )
          })}
        </div>
        {/* Job Info */}
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {desc.map((item, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{item}</p>
              </div>
            )
          })}
        </article>
      </div>
      <a href={Resume} target="_blank" className="btn center-btn">
        Download Resume
      </a>
    </section>
  )
}

export default Jobs
