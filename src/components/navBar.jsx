import React, { useState } from "react"
import { motion } from "framer-motion"
import { AiOutlineCloseCircle } from "react-icons/ai"
import PageLinks from "../constants/links"
import { FaAlignRight } from "react-icons/fa"
import SocialLink from "../constants/socialLinks"

const NavBar = () => {
  const [navBarOpened, isNavBarOpened] = useState(false)
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
            onClick={() => isNavBarOpened(!navBarOpened)}
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

        {/* mobile NavMenu */}
        <div
          className={`${
            navBarOpened ? "fixed" : "hidden"
          } top-0 left-0 h-screen w-full bg-darker z-50 text-gray-200`}
        >
          <button
            className="focus:outline-none"
            onClick={() => isNavBarOpened(!navBarOpened)}
          >
            <AiOutlineCloseCircle className="text-3xl absolute top-4 right-4" />
          </button>
          <div className="flex justify-center items-center h-full flex-col space-y-16">
            <PageLinks
              styleClass="flex flex-col justify-center items-center uppercase font-bold text-xl tracking-widest leading-10 space-y-8"
              linkStyle=""
              activeStyleClass="mobileActive relative"
            ></PageLinks>
            <SocialLink styleClass="flex justify-evenly text-xl text-2xl w-full" />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
