import React from 'react'
import AboutMe from '../components/AboutMe'
import HeaderTitles from '../components/HeaderTitles'
import Layout from '../components/layout'
import Seo from '../components/seo'

const about = () => {
  return (
    <Layout>
      <Seo title="About" />
      <HeaderTitles title="Know About Me" />
      <AboutMe />
    </Layout>
  )
}

export default about