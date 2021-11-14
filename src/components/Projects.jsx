import { motion } from "framer-motion"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
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
            <Project {...project} />
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
