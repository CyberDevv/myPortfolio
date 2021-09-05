import React from 'react'
import HeaderTitles from '../components/HeaderTitles'
import Layout from "../components/layout"
import Seo from "../components/seo"
import Project from '../components/Projects'

const project = () => {
  return (
    <Layout>
      <Seo title="Projects" desc= "This is the project page" />
      <HeaderTitles title="Projects" className="projectTitle mb-16" />
      <Project />
    </Layout>
  )
}

export default project
