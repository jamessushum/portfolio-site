import React from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: "https://github.com/jamessushum",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/jamessushum/",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={link.url}
        className="social-link"
      >
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
