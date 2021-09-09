import React, { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { AiOutlineCloseCircle } from "react-icons/ai"
import PageLinks from "../constants/links"
import { FaAlignRight } from "react-icons/fa"
import SocialLink from "../constants/socialLinks"
import Particles from "react-particles-js"
import { Link } from "gatsby"

const NavBar = () => {
  const [navBarOpened, isNavBarOpened] = useState(false)

  const navVariant = {
    initial: { opacity: 0 },
    final: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        when: "beforeChildren",
      },
    },
  }

  const logoVariant = {
    initial: { y: "-1000px" },
    final: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        mass: 0.6,
      },
    },
    hover: {
      scale: 1.3,
    },
  }

  const navMenuVariant = {
    initial: { y: "-100vh" },
    final: {
      y: 0,
      transition: {
        staggerChildren: 0.5,
      },
    },
  }

  const navTogglerVariant = {
    initial: { y: "-1000px" },
    final: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        mass: 0.6,
      },
    },
  }

  const navMenuLinkVariant = {
    initial: { opacity: 0, x: -100 },
    final: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        mass: 0.6,
        when: ""
      },
    },
  }
  
  const mobileNavMenuVariants = {
    initial: { x: "-100vw" },
    final: { x: 0 },
  }

  const navSocialLinkVariants = {
    initial: { y: "-100vh" },
    final: {
      y: 0,
      transition: {
        staggerChildren: 0.5,
      },
    },
  }

  const navSocialLinkChildrenVariants = {
    initial: { opacity: 0, y: -100 },
    final: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        mass: 0.6,
      },
    },
  }

  return (
    <motion.nav
      className="navBar"
      variants={navVariant}
      initial="initial"
      animate="final"
    >
      <div className="container flex items-center px-4 py-4 mx-auto lg:py-8 lg:space-x-32 navBarDecendant">
        <div className="z-10 flex items-center justify-between flex-grow lg:flex-grow-0">
          {/* ANCHOR Logo */}
          <motion.div
            className="text-xl font-bold tracking-widest"
            variants={logoVariant}
            whileHover="hover"
            initial="initial"
            animate="final"
          >
            <Link to="/">IO</Link>
          </motion.div>

          {/* ANCHOR NavToggler */}
          <motion.button
            type="button"
            className="text-xl bg-transparent focus:outline-none lg:hidden"
            variants={navTogglerVariant}
            onClick={() => isNavBarOpened(!navBarOpened)}
          >
            <FaAlignRight />
          </motion.button>
        </div>

        {/* ANCHOR navMenu */}
        <PageLinks
          styleClass="list-none lg:flex space-x-12 items-center hidden justify-around capitalize tracking-widest text-light w-8/12 z-10 overflow-hidden"
          linkStyle="navItem py-1"
          activeStyleClass="text-primary font-semibold active"
          variants={navMenuVariant}
          variants2={navMenuLinkVariant}
        ></PageLinks>

        {/* ANCHOR mobile NavMenu */}
        <AnimatePresence>
          {navBarOpened && (
            <motion.div
              className="fixed top-0 left-0 z-50 w-full h-screen text-gray-200 bg-darker"
              variants={mobileNavMenuVariants}
              initial="initial"
              animate="final"
              exit="initial"
            >
              <Particles
                className="absolute top-0 left-0 w-full h-screen"
                params={{
                  detectRetina: true,
                  // fpsLimit: 60,
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

              {/* Close button */}
              <button
                className="focus:outline-none"
                onClick={() => isNavBarOpened(!navBarOpened)}
              >
                <AiOutlineCloseCircle className="absolute text-3xl top-4 right-4" />
              </button>

              <div className="flex flex-col items-center justify-center h-full space-y-16">
                <PageLinks
                  styleClass="list-none flex flex-col justify-center items-center uppercase font-bold text-xl tracking-widest leading-10 space-y-8"
                  linkStyle=""
                  activeStyleClass="mobileActive relative"
                  variants={navMenuVariant}
                  variants2={navMenuLinkVariant}
                ></PageLinks>

                <SocialLink
                  styleClass="list-none flex justify-evenly text-xl text-2xl w-full"
                  variants={navSocialLinkVariants}
                  variants2={navSocialLinkChildrenVariants}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default NavBar
