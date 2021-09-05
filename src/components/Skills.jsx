import { AnimatePresence, motion } from "framer-motion"
import React from "react"
import Skill from "./Skill"

const Skills = () => {
  const container = {
    hidden: { x: "-100vw" },
    show: {
      x: 0,
      transition: {
        delay: 4,
        staggerChildren: 0.5,
        delayChildren: 4,
      },
    },
  }

  return (
    <AnimatePresence>
      <motion.div
        className="grid lg:grid-cols-2 gap-8 lg:gap-x-32 my-8"
        variants={container}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <Skill skill="Html5" progress="97" className="max-w-97%" />
        <Skill skill="CSS3" progress="95" className="max-w-95%" />
        <Skill skill="Javascript" progress="90" className="max-w-90%" />
        <Skill skill="TypeScript" progress="50" className="max-w-50%" />
        <Skill skill="TailwindCSS" progress="100" className="w-full" />
        <Skill skill="NodeJS" progress="70" className="max-w-70%" />
        <Skill skill="ReactJS" progress="87" className="max-w-87%" />
        <Skill skill="GatsbyJS" progress="87" className="max-w-87%" />
        <Skill skill="Git" progress="88" className="max-w-88%" />
        <Skill skill="Communication" progress="90" className="max-w-90%" />
      </motion.div>
    </AnimatePresence>
  )
}

export default Skills
