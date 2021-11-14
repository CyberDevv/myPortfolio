import React, { useState, useEffect } from "react"
import Particles from "react-particles-js"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Lottie from "react-lottie"
import * as animationData from "../json/loader.json"
import { motion } from "framer-motion"

const IndexPage = () => {
  // Config for lottie
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  }

  const loaderVariant = {
    initial: {
      opacity: 0,
    },
    final: {
      opacity: 1,
    },
  }

  const particleVariant = {
    initial: { opacity: 0 },
    final: {
      opacity: 0.5,
      transition: {
        duration: 3,
      },
    },
  }

  // UseState Hook
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <>
      {loading ? (
        // ANCHOR  Loader
        <motion.div
          className="fixed h-screen w-full"
          variants={loaderVariant}
          initial="initial"
          animate="final"
        >
          <Lottie
            options={defaultOptions}
            ariaRole="div"
            style={{ pointerEvents: "none" }}
          />
        </motion.div>
      ) : (
        // ANCHOR Index section
        <Layout index>
          <Seo
            title="Home"
            desc="Welcome to my portfolio where you can see some details about me and my social links and also some projects I've built."
          />

          {/* Particle for mobile */}
          <motion.div
            className="md:hidden"
            variants={particleVariant}
            initial="initial"
            animate="final"
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

          {/* Particles for laptop */}
          <motion.div
            className="hidden md:inline"
            variants={particleVariant}
            initial="initial"
            animate="final"
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

          {/* Particles for bigScreens  */}
          <motion.div
            className="hidden 2xl:inline"
            variants={particleVariant}
            initial="initial"
            animate="final"
          >
            <Particles
              className="absolute top-0 left-0 h-screen w-full"
              params={{
                particles: {
                  number: {
                    value: 150,
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
      )}
    </>
  )
}

export default IndexPage
