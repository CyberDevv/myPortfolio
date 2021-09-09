import React from "react"
import HeaderTitles from "../components/HeaderTitles"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Project from "../components/Projects"
import { motion } from "framer-motion"

const projectVariant = {
  initial: { opacity: 0 },
  final: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      when: "beforeChildren",
      delay: 3,
    },
  },
}

const project = () => {
  return (
    <Layout>
      <Seo title="Projects" desc="This is the project page" />
      <motion.div variants= {projectVariant} initial= "initial" animate= "final">
        <HeaderTitles title="Projects" className="projectTitle mb-16" />
        <Project />
      </motion.div>
    </Layout>
  )
}

export default project
