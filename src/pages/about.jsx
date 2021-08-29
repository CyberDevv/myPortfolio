import React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'

const about = () => {
  return (
    <Layout>
      <Seo title="About" />
      <div className="px-4 py-4">
        <h1 className="text-5xl font-bold headerTitle relative py-2">Know About Me</h1>
      </div>
    </Layout>
  )
}

export default about