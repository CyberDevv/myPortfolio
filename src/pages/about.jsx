import { motion } from "framer-motion"
import React from "react"
import AboutMe from "../components/AboutMe"
import HeaderTitles from "../components/HeaderTitles"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Skills from "../components/Skills"

const aboutVariant = {
  initial: { opacity: 0 },
  final: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      when: "beforeChildren",
      delay: 3
    },
  },
}

const about = () => {
  return (
    <Layout>
      <Seo
        title="About"
        desc="Know more about me and also checkout some of my skills."
      />
      <motion.div variants={aboutVariant} initial= "initial" animate= "final">
        <HeaderTitles
          title="Know About Me"
          className="aboutTitle"
        />

        <AboutMe />

        {/* Skills */}

        <HeaderTitles
          title="Skills"
          className="skillTitle mt-32"
        />

        <Skills />
      </motion.div>
    </Layout>
  )
}

export default about
