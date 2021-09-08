import React from "react"
import { motion } from "framer-motion"

const HeaderTitles = ({ title, className, transition }) => {
  return (
      <motion.h1
        className={` ${
          className ? className : ""
        } lg:text-5xl font-black headerTitle relative pt-2 uppercase leading-loose`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit= {{opacity: 0}}
        transition={transition}
      >
        {title}
      </motion.h1>
  )
}

export default HeaderTitles
