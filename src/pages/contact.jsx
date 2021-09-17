import React from "react"
import HeaderTitles from "../components/HeaderTitles"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as animationData from "../json/contact.json"
import ContactForm from "../components/ContactForm"
import Lottie from "react-lottie"
import { motion } from "framer-motion"

const isWindow = typeof window !== "undefined"
const isDocumnent = typeof document !== "undefined"

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  className: "wow"
}

const subsectionVarinat = {
  initial: { opacity: 0 },
  final: {
    opacity: 1, transition: {staggerChildren: 0.5}
  },
}

const imageVariant = {
  initial: { opacity: 0 },
  final: {
    opacity: 1,
  },
}

const interestVarinat = {
  initial: { opacity: 0, x: -100 },
  final: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      mass: 0.6,
    },
  },
}

const contact = () => {
  let vw = null
  if (isWindow && isDocumnent) {
    vw = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    )
  }
  const contactVariant = {
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
  return (
    <Layout>
      <Seo title="Contact" desc="This is the contact page" />
      <motion.div variants={contactVariant} initial="initial" animate="final">
        <HeaderTitles title="Get In Touch" className="contactTitle" />

        <div
          className="flex items-center justify-center"
          style={{ "min-height": "83vh" }}
        >
          <motion.div
            className="flex flex-col items-center justify-center space-x-0 lg:flex-row lg:space-x-8"
            variants={subsectionVarinat}
          >
            <div className="w-full py-8 lg:py-0 lg:w-1/2">
              <motion.i className="IWithSVG" variants={imageVariant}>
                {/* ANCHOR Lottie */}
                <Lottie
                  options={defaultOptions}
                  ariaRole="div"
                  style={{ pointerEvents: "none" }}
                />
              </motion.i>
            </div>
            <div className="w-full py-8 lg:w-1/2 lg:py-0">
              <motion.h6 className="px-4 text-xs tracking-widest text-gray-300 capitalize border-l-4 sm:text-sm border-primary" variants= {interestVarinat}>
                I’m interested in freelance opportunities – especially ambitious
                or large projects. However, if you have other request or
                question, don’t hesitate to use the form.
              </motion.h6>

              {/* Form */}
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Layout>
  )
}

export default contact
