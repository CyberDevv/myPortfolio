import React from "react"
import { motion } from "framer-motion"

import PageLinks from "../constants/links"
import { FaAlignRight } from "react-icons/fa"

const NavBar = () => {
  return (
    <nav>
      <div className="flex items-center py-4 lg:py-8 lg:space-x-32">
        <div className="flex justify-between items-center flex-grow lg:flex-grow-0 z-10">
          {/* Logo */}
          <motion.h4
            className="text-xl font-bold"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 50 }}
          >
            IO
          </motion.h4>

          {/* NavToggler */}
          <motion.button
            type="button"
            className="text-xl bg-transparent transition-colors cursor-pointer focus:outline-none lg:hidden"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 50, delay: 0.5 }}
          >
            <FaAlignRight />
          </motion.button>
        </div>

        {/* navMenu */}
        <PageLinks
          styleClass="lg:flex space-x-12 items-center hidden justify-around capitalize tracking-widest text-light w-8/12 z-10 overflow-hidden"
          linkStyle="navItem py-1"
          activeStyleClass="text-primary font-semibold active"
        ></PageLinks>
      </div>
    </nav>
  )
}

export default NavBar
