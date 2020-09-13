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
    text: "blog",
    url: "/blog/",
  },
  {
    id: 5,
    text: "contact",
    url: "/contact/",
  },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})
// I KNOW WE CAN COMBINE IT !!!!!

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
