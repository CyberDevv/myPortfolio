import React from "react"
import Ripples from "react-ripples"
import { Link } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const Hero = () => {
  return (
    <div className="hero flex flex-col lg:flex-row w-full items-center justify-center tracking-widest py-52 md:py-0">
      {/* Section one */}
      <div className="lg:w-7/12 w-full text-center z-10">
        {/* Title */}
        <h5
          className="sm:text-lg lg:text-xl"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 2, stiffness: 50, type: "spring" }}
        >
          Front-End Developer
        </h5>

        {/* Divider */}

        <div
          className="bg-gray-200 w-full h-px my-8"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 2.5, stiffness: 50, type: "spring" }}
        ></div>

        {/* Social Links */}

        <SocialLinks
          styleClass="list-none flex justify-evenly text-xl sm:text-2xl lg:text-2xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 3,
            stiffness: 50,
            damping: 5,
            type: "spring",
          }}
        />
      </div>

      {/* section two */}
      <div className="lg:w-5/12 flex flex-col items-center justify-center mt-16 lg:mt-0 z-10">
        {/* Greeting Text */}
        <h1
          className="text-6xl sm:text-7xl lg:text-8xl font-bold"
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          transition={{ delay: 2, stiffness: 50, type: "spring" }}
        >
          Hell<span className="text-primary">o</span>,
        </h1>

        {/* Introduction */}

        <h4
          className="text-3xl sm:text-4xl lg:text-5xl mt-4 lg:mt-6 lg:mb-20 mb-16"
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          transition={{ delay: 2.5, stiffness: 50, type: "spring" }}
        >
          I am Ibrahim
        </h4>

        {/* Hire me button */}

        <div
          className="rounded-3xl overflow-hidden mb-2q"
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          transition={{ delay: 3, stiffness: 50, type: "spring" }}
        >
          <Ripples>
            <Link
              to="/contact"
              className="btn bg-primary hover:bg-primaryDark sm:text-lg"
            >
              Hire Me!
            </Link>
          </Ripples>
        </div>
      </div>
    </div>
  )
}

export default Hero
