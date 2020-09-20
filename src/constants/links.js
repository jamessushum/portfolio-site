import React from "react"
import { Link } from "gatsby"
const data = [
  {
    id: 1,
    text: "About",
    url: "/#about-me",
  },
  {
    id: 2,
    text: "Experience",
    url: "/#experience",
  },
  {
    id: 3,
    text: "Portfolio",
    url: "/#projects",
  },
  {
    id: 4,
    text: "Contact",
    url: "/#contact",
  },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})

export default ({ styleClass, toggleSidebar }) => {
  return (
    <ul
      className={`page-links ${styleClass ? styleClass : ""}`}
      onClick={toggleSidebar}
    >
      {tempLinks}
    </ul>
  )
}
