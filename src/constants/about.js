import React from "react"
import { FaCode, FaSketch, FaAndroid } from "react-icons/fa"
export default [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "From Financial Models to Web Applications",
    text: (
      <div>
        <p>
          Hi my name is James, I'm a finance professional turned software
          developer.
        </p>
        <p>
          I began my professional career in the Investment Banking and Private
          Equity industry where I had the opportunity to not only hone my
          analytical skills but also work with many diverse clients and
          cross-functional teams.
        </p>
        <p>
          During my time in these industries I took ownership of several
          ancillary projects automating and improving workflow efficiency. The
          results and impact of these projects led me to pursue a career
          transition into software development where I strive to leverage my
          analytical and process-oriented mindset to help others solve
          challenging problems.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: "Technologies I'm Currently Using",
    text: (
      <ul style={{ textAlign: "center" }}>
        <li>JavaScript</li>
        <li>React</li>
        <li>C#</li>
        <li>.NET Core</li>
        <li>SQL Server</li>
        <li>CSS3</li>
        <li>HTML5</li>
      </ul>
    ),
  },
  // {
  //   id: 3,
  //   icon: <FaAndroid className="service-icon" />,
  //   title: "Technology Stack",
  //   text: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`,
  // },
]
