import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'

const Skill = ({skill, progress, className}) => {
  return (
    <AnimatePresence>
      <div className="flex items-start flex-col">
        <div className="w-full flex justify-center items-center space-x-2">
          <div className="w-full h-3 bg-gray-500 rounded-full">
            <div
              className={`${className ? className : ""} h-full bg-primary rounded-full`}
            ></div>
          </div>
          <h6 className="text-sm text-gray-400">{progress}%</h6>
        </div>
        <h6 className="mt-3 uppercase">{skill}</h6>
      </div>
    </AnimatePresence>
  )
}

export default Skill
