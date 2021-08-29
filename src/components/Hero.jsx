import React from "react"
import SocialLinks from "../constants/socialLinks"
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <div className="hero flex flex-col lg:flex-row w-full items-center justify-center tracking-widest">
      {/* Section one */}
      <div className="lg:w-7/12 w-full text-center z-10">
        <motion.h5
          className="lg:text-xl"
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ delay: 2, stiffness: 50, type: "spring" }}
        >
          Front-End Developer
        </motion.h5>
        <motion.div
          className="bg-gray-200 w-full h-px my-8"
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ delay: 2.5, stiffness: 50, type: "spring" }}
        ></motion.div>
        <SocialLinks styleClass="flex justify-evenly text-xl lg:text-2xl" />
      </div>

      {/* section two */}
      <div className="lg:w-5/12 flex flex-col items-center justify-center mt-16 lg:mt-0 z-10">
        <motion.h1
          className="text-6xl lg:text-8xl font-bold"
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          transition={{ delay: 2, stiffness: 50, type: "spring" }}
        >
          Hell<span className="text-primary">o</span>,
        </motion.h1>
        <motion.h4
          className="text-3xl lg:text-5xl mt-4 lg:mt-6"
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          transition={{ delay: 2.5, stiffness: 50, type: "spring" }}
        >
          I am Ibrahim
        </motion.h4>

        <motion.button
          className="btn bg-primary hover:bg-primaryDark"
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          transition={{ delay: 3, stiffness: 50, type: "spring" }}
        >
          Hire Me!
        </motion.button>
      </div>
    </div>
  )
}

export default Hero
