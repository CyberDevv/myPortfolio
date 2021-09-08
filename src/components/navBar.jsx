import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AiOutlineCloseCircle } from "react-icons/ai"
import PageLinks from "../constants/links"
import { FaAlignRight } from "react-icons/fa"
import SocialLink from "../constants/socialLinks"
import Particles from "react-particles-js"

const NavBar = () => {
  const [navBarOpened, isNavBarOpened] = useState(false)
  const container = {
    hidden: { x: "-100vw" },
    show: {
      x: 0,
      transition: {
        delay: 0.5,
        // staggerChildren: 5,
        // delayChildren: 4,
      },
    },
  }
  return (
    <nav className="navBar">
      <div className="container flex items-center px-4 py-4 mx-auto lg:py-8 lg:space-x-32 navBarDecendant">
        <div className="z-10 flex items-center justify-between flex-grow lg:flex-grow-0">
          {/* Logo */}
          <h4
            className="text-xl font-bold"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 50 }}
          >
            IO
          </h4>

          {/* NavToggler */}
          <button
            type="button"
            className="text-xl transition-colors bg-transparent cursor-pointer focus:outline-none lg:hidden"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 50, delay: 0.5 }}
            onClick={() => isNavBarOpened(!navBarOpened)}
          >
            <FaAlignRight />
          </button>
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
            <div
              className="fixed top-0 left-0 z-50 w-full h-screen text-gray-200 bg-darker"
              animate={{ x: 0 }}
              initial={{ x: "-100vw" }}
              exit={{ x: "-100vw" }}
            >
              <Particles
                className="absolute top-0 left-0 w-full h-screen"
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
                <AiOutlineCloseCircle className="absolute text-3xl top-4 right-4" />
              </button>
              <div className="flex flex-col items-center justify-center h-full space-y-16">
                <PageLinks
                  styleClass="flex flex-col justify-center items-center uppercase font-bold text-xl tracking-widest leading-10 space-y-8"
                  linkStyle=""
                  activeStyleClass="mobileActive relative"
                  variants={container}
                ></PageLinks>
                <SocialLink
                  styleClass="flex justify-evenly text-xl text-2xl w-full"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 1.5,
                    stiffness: 50,
                    damping: 5,
                    type: "spring",
                  }}
                />
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default NavBar
