import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AiOutlineCloseCircle } from "react-icons/ai"
import PageLinks from "../constants/links"
import { FaAlignRight } from "react-icons/fa"
import SocialLink from "../constants/socialLinks"
import Particles from "react-particles-js"

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
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{
            type: "tween",
            delay: 0.5,
            duration: 2,
          }}
        ></PageLinks>

        {/* mobile NavMenu */}
        <AnimatePresence>
          {navBarOpened && (
            <motion.div
              className="fixed top-0 left-0 h-screen w-full bg-darker z-50 text-gray-200"
              animate={{ x: 0 }}
              initial={{ x: "-100vw" }}
              exit={{ x: "-100vw" }}
            >
              <Particles
                className="absolute top-0 left-0 h-screen w-full"
                params={{
                  detectRetina: true,
                  fpsLimit: 60,
                  particles: {
                    links: {
                      enable: false,
                    },
                    move: {
                      outModes: {
                        default: "destroy",
                        bottom: "destroy",
                        left: "destroy",
                        right: "destroy",
                        top: "destroy",
                      },
                      random: false,
                      speed: 7,
                    },
                    number: {
                      limit: 0,
                      value: 0,
                    },
                    opacity: {
                      value: 0.4,
                    },
                    shape: {
                      type: "circle",
                    },
                    size: {
                      value: {
                        min: 0.1,
                        max: 10,
                      },
                      animation: {
                        count: 0,
                        enable: true,
                        speed: 5,
                        sync: true,
                        destroy: "max",
                        startValue: "min",
                        minimumValue: 0.1,
                      },
                    },
                  },
                  pauseOnBlur: true,
                  zLayers: 100,
                  emitters: {
                    rate: {
                      quantity: 2,
                      delay: 0.1,
                    },
                    startCount: 0,
                    size: {
                      mode: "percent",
                      height: 0,
                      width: 100,
                    },
                    direction: "top",
                    position: {
                      x: 50,
                      y: 100,
                    },
                  },
                }}
              />

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
                  initial={{ x: "-100vw" }}
                  animate={{ x: 0 }}
                  transition={{
                    delay: 0.5,
                  }}
                ></PageLinks>
                <SocialLink
                  styleClass="flex justify-evenly text-xl text-2xl w-full"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 1,
                    stiffness: 50,
                    damping: 5,
                    type: "spring",
                  }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default NavBar
