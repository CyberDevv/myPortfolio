import { motion } from 'framer-motion'
import React from 'react'

const FormInput = ({label, type, name, variants}) => {
  return (
    <div className="relative w-full textInput">
      <motion.input
        className="w-full p-4 placeholder-gray-400 rounded focus:border-b-2 focus:border-primary bg-formDark focus:outline-none"
        type= {type}
        name={name}
        placeholder= {label}
        variants= {variants}
      />
    </div>
  )
}

export default FormInput
