import React from "react"
import Img from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"

const Project = ({
  Title,
  URL,
  Description,
  SourceCodeLInk,
  TechnologyUsed,
  Placeholder,
  index,
}) => {
  return (
    <div className="project">
      <Img
        fluid={Placeholder.localFile.childImageSharp.fluid}
        alt={Title}
        className="project-img"
      />
      <div className="project-info py-4">
        <h3 className="text-primary capiterlize tracking-wider">{Title}</h3>
        <p className="project-desc">{Description}</p>
        <div className="project-stack mt-4">
          {TechnologyUsed.map(item => {
            return <span className= "my-1" key={item.id}>{item.input}</span>
          })}
        </div>
        <div className="flex items-center">
          <a
            href={SourceCodeLInk}
            className="project-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare />
          </a>
          <a
            href={URL}
            className="project-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaShareSquare />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Project
