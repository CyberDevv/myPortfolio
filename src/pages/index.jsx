import React from "react"
import ParticleAnimation from "react-particle-animation"

import Hero from "../components/Hero"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <ParticleAnimation
        numParticles={300}
        background={{ r: 23, g: 23, b: 23, a: 40 }}
        color={{ r: 255, g: 255, b: 255, a: 255 }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: "0",
          left: "0"
        }}
      />
      <Hero />
    </Layout>
  )
}

export default IndexPage
