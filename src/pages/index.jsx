import React, { useEffect, useState } from "react"
import Particles from "react-particles-js"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Lottie from "react-lottie"
import * as animationData from "../json/loader.json"

const IndexPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  }
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])
  return (
    <div>
      {loading ? (
        <div className= "fixed h-screen w-full">
          <Lottie
            options={defaultOptions}
            ariaRole="div"
            style={{ pointerEvents: "none" }}
          />
        </div>
      ) : (
        <Layout index>
          <Seo
            title="Home"
            desc="Welcome to my portfolio where you can see some details about me and my social links and also some projects I've built."
          />
          <div
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
          </div>

          <div
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
          </div>

          <div
            className="hidden 2xl:inline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
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
          </div>

          <Hero />
        </Layout>
      )}
    </div>
  )
}

export default IndexPage
