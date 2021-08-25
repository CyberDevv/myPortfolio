import React from 'react'
import SocialLinks from "../constants/socialLinks"

const Hero = () => {
  return (
    <div className="hero flex flex-col lg:flex-row w-full items-center justify-center tracking-widest">
      {/* Section one */}
      <div className="lg:w-7/12 w-full text-center z-10">
        <h5 className="lg:text-xl">Front-End Developer</h5>
        <div className="bg-gray-200 w-full h-px my-8"></div>
        <SocialLinks styleClass="flex justify-evenly text-xl lg:text-2xl" />
      </div>

      {/* section two */}
      <div className="lg:w-5/12 flex flex-col items-center justify-center mt-16 lg:mt-0 z-10">
        <h1 className="text-6xl lg:text-8xl font-bold">
          Hell<span className="text-primary">o</span>,
        </h1>
        <h4 className="text-3xl lg:text-5xl mt-4 lg:mt-6">I am Ibrahim</h4>

        <button className="bg-primary py-2 px-10 br-5 lg:mt-20 rounded-3xl mt-16 lg:text-xl lg:px-16 lg:py-3 lg:rounded-full">
          Hire Me!
        </button>
      </div>
    </div>
  )
}

export default Hero
