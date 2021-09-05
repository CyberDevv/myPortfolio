import { motion } from "framer-motion"
import React from "react"
import Particles from "react-particles-js"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  return (
    <Layout index>
      <Seo title="Home" desc="This is the home page" />
      <motion.div
        className="md:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      >
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
      </motion.div>

      <motion.div
        className="hidden md:inline"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      >
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
      </motion.div>

      <Hero />
    </Layout>
  )
}

export default IndexPage
