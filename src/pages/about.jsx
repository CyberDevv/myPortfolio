import { motion, useAnimation } from "framer-motion"
import React, { useEffect } from "react"
import AboutMe from "../components/AboutMe"
import HeaderTitles from "../components/HeaderTitles"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Skills from "../components/Skills"
import { useInView } from "react-intersection-observer"

const vw = Math.max(
  document.documentElement.clientWidth || 0,
  window.innerWidth || 0
)

const aboutVariant = {
  initial: { opacity: 0 },
  final: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      when: "beforeChildren",
      delay: vw >= 1024 ? 2.5 : 1,
    },
  },
}

const About = () => {
  const { ref, inView } = useInView({threshold: 0.2})
  const animation = useAnimation()
  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1
      })
    }
    if (!inView) {
      animation.start({opacity: 0})
    }
    console.log("use effect hook, inview = ", inView)
  }, [inView])
  return (
    <Layout>
      <Seo
        title="About"
        desc="Know more about me and also checkout some of my skills."
      />
      <motion.div variants={aboutVariant} initial="initial" animate="final">
        <HeaderTitles title="Know About Me" className="aboutTitle" />

        <AboutMe />

        {/* Skills */}

        <motion.div ref={ref} animate= {animation}>
          <HeaderTitles title="Skills" className="skillTitle mt-32" />

          <Skills />
        </motion.div>
      </motion.div>
    </Layout>
  )
}

export default About
