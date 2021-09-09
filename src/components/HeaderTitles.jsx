import React from "react"
import { motion } from "framer-motion"

const titleVariant = {
  initial: { opacity: 0 },
  final: { opacity: 1 },
}

const HeaderTitles = ({ title, className }) => {
  return (
    <motion.h1
      className={` ${
        className ? className : ""
      } lg:text-5xl font-black headerTitle relative pt-2 uppercase leading-loose`}
      variants={titleVariant}
    >
      {title}
    </motion.h1>
  )
}

export default HeaderTitles
