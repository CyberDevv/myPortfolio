import React from "react"
import Ripples from "react-ripples"
import { Link } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import { motion } from "framer-motion"

const heroVarariant = {
  initial: { opacity: 0 },
  final: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      when: "beforeChildren",
      delay: 3,
    },
  },
}

const fallingVariant = {
  initial: { opacity: 0, y: -100 },
  final: { opacity: 1, y: 0 },
}

const Hero = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center w-full tracking-widest hero lg:flex-row py-52 md:py-0"
      variants={heroVarariant}
      initial="initial"
      animate="final"
    >
      {/* Section one */}
      <div className="z-10 w-full text-center lg:w-7/12">
        {/* Title */}
        <motion.h5 className="sm:text-lg lg:text-xl" variants={fallingVariant}>
          Front-End Developer
        </motion.h5>

        {/* Divider */}

        <motion.div
          className="w-full h-px my-8 bg-gray-200"
          variants={fallingVariant}
        ></motion.div>

        {/* Social Links */}

        <SocialLinks styleClass="list-none flex justify-evenly text-xl sm:text-2xl lg:text-2xl" />
      </div>

      {/* section two */}
      <div className="z-10 flex flex-col items-center justify-center mt-16 lg:w-5/12 lg:mt-0">
        {/* Greeting Text */}
        <motion.h1
          className="text-6xl font-bold sm:text-7xl lg:text-8xl"
          variants={fallingVariant}
        >
          Hell<span className="text-primary">o</span>,
        </motion.h1>

        {/* Introduction */}

        <motion.h4
          className="mt-4 mb-16 text-3xl sm:text-4xl lg:text-5xl lg:mt-6 lg:mb-20"
          variants={fallingVariant}
        >
          I am Ibrahim
        </motion.h4>

        {/* Hire me button */}

        <motion.div
          className="overflow-hidden rounded-3xl mb-2"
          variants={fallingVariant}
        >
          <Ripples>
            <Link
              to="/contact"
              className="btn bg-primary hover:bg-primaryDark sm:text-lg"
            >
              Hire Me!
            </Link>
          </Ripples>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Hero
