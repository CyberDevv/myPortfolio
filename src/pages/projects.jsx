import React from "react"
import HeaderTitles from "../components/HeaderTitles"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Project from "../components/Projects"
import { motion } from "framer-motion"

const isWindow = typeof window !== "undefined"
const isDocumnent = typeof document !== "undefined"

const project = () => {
  let vw = null
  if (isWindow && isDocumnent) {
    vw = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    )
  }
  const projectVariant = {
    initial: { opacity: 0 },
    final: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        when: "beforeChildren",
        delay: vw >= 1024 ? 1.5 : 0.5,
      },
    },
  }
  return (
    <Layout>
      <Seo title="Projects" desc="This is the project page" />
      <motion.div variants={projectVariant} initial="initial" animate="final">
        <HeaderTitles title="Projects" className="projectTitle mb-16" />
        <Project />
      </motion.div>
    </Layout>
  )
}

export default project
