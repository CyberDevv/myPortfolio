import React from 'react'
import HeaderTitles from '../components/HeaderTitles'
import Layout from '../components/layout'
import Seo from '../components/seo'

const contact = () => {
  return (
    <Layout>
      <Seo title="Contact" />
      <HeaderTitles title="Contact" className="contactTitle" />
    </Layout>
  )
}

export default contact
