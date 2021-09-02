import React from 'react'
import HeaderTitles from '../components/HeaderTitles'
import Layout from "../components/layout"
import Seo from "../components/seo"

const project = () => {
  return (
    <Layout>
      <Seo title="Projects" />
      <HeaderTitles title="Projects" className="projectTitle" />
    </Layout>
  )
}

export default project
