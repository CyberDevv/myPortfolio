import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Project from "./Project"

const Projects = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiProjects: { nodes: projects },
  } = data
  console.log(projects)
  return (
    <div>
      {projects.map((project, index) => {
        return <Project key={project.id} index={index} {...project} />
      })}
    </div>
  )
}

const query = graphql`
  {
    allStrapiProjects {
      nodes {
        id
        Title
        URL
        Description
        SourceCodeLInk
        TechnologyUsed {
          id
          input
        }
        Placeholder {
          localFile {
            childImageSharp {
              fluid(fit: CONTAIN) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`

export default Projects
