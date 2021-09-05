import React from "react"
import AboutMe from "../components/AboutMe"
import HeaderTitles from "../components/HeaderTitles"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Skills from "../components/Skills"

const about = () => {
  return (
    <Layout>
      <Seo title="About" desc="This is about me" />
      <HeaderTitles
        title="Know About Me"
        className="aboutTitle"
        transition={{ delay: 2 }}
      />
      <AboutMe />
      <HeaderTitles
        title="Skills"
        className="skillTitle mt-32"
        transition={{ delay: 5.2 }}
      />
      <Skills />
    </Layout>
  )
}

export default about
