import { motion } from "framer-motion"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Tilt from "react-parallax-tilt"
import Project from "./Project"

const projectVariant = {
  initial: { opacity: 0 },
  final: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
}

const Projects = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiProjects: { nodes: projects },
  } = data
  return (
    <motion.div variants={projectVariant}>
      {projects.map((project, index) => {
        return (
          <Tilt
            key={project.id}
            index={index}
            className="parallax-effect md:p-4 lg:p-16"
            perspective={800}
            scale= {0.9}
          >
            <Project {...project} />
          </Tilt>
        )
      })}
    </motion.div>
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
