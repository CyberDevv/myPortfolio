import React from "react"
import Particles from "react-particles-js"

import Hero from "../components/Hero"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <div className= "md:hidden">
        <Particles
          className="absolute top-0 left-0 h-screen w-full"
          params={{
            particles: {
              number: {
                value: 50,
              },
              size: {
                value: 3,
              },
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                  parallax: {
                    enable: true,
                    force: 60,
                    smooth: 10,
                  },
                },
              },
            },
            responsive: [],
          }}
        />
      </div>

      <div className="hidden md:inline">
        <Particles
          className="absolute top-0 left-0 h-screen w-full"
          params={{
            particles: {
              number: {
                value: 100,
              },
              size: {
                value: 3,
              },
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                  parallax: {
                    enable: true,
                    force: 60,
                    smooth: 10,
                  },
                },
              },
            },
            responsive: [],
          }}
        />
      </div>
      <Hero />
    </Layout>
  )
}

export default IndexPage
