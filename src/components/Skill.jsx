import { motion } from "framer-motion"
import React from "react"

const Skill = ({ skill, progress, className }) => {
  const skillVariant = {
    initial: { x: "-100vw" },
    final: { x: 0 },
  }

  const bar = {
    initial: { width: 0 },
    final: {
      width: "100%",
      transition: {
        duration: 3,
      },
    },
  }

  const progressBar = {
    initial: { width: 0 },
    final: {
      width: "100%",
      transition: {
        duration: 3,
      },
    },
  }
  return (
    <motion.div className="flex items-start flex-col" variants={skillVariant}>
      <div className="w-full flex justify-start items-center space-x-2">
        <motion.div
          className="w-full h-3 bg-gray-500 rounded-full"
          variants={bar}
        >
          <motion.div
            className={`${
              className ? className : ""
            } h-full bg-primary rounded-full`}
            variants={progressBar}
          ></motion.div>
        </motion.div>
        <h6 className="text-sm text-gray-400">{progress}%</h6>
      </div>
      <h6 className="mt-3 uppercase">{skill}</h6>
    </motion.div>
  )
}

export default Skill
