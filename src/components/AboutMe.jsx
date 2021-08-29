import React from "react"
import { motion } from "framer-motion"
import { StaticImage } from "gatsby-plugin-image"

const AboutMe = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="lg:w-1/2">Yo</div>
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <StaticImage
          src="../images/myImage.jpg"
          alt="myImage"
          className="rounded-full"
          placeholder="tracedSVG"
        />
      </motion.div>
    </div>
  )
}

export default AboutMe
