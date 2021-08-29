import React from "react"
import { motion } from "framer-motion"

const HeaderTitles = ({ title }) => {
  return (
    <motion.h1
      className="text-5xl font-black headerTitle relative pt-2 uppercase leading-loose"
      initial={{ opacity: 0 }}
      animate= {{opacity: 1}}
      transition= {{delay: 2}}
    >
      {title}
    </motion.h1>
  )
}

export default HeaderTitles
