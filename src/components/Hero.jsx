import React from 'react'
import SocialLinks from "../constants/socialLinks"

const Hero = () => {
  return (
    <div className="hero flex flex-col lg:flex-row w-full items-center justify-center tracking-widest">

      {/* Section one */}
      <div className="lg:w-8/12 w-full text-center">
        <h5>Front-End Developer</h5>
        <div className= "bg-gray-200 w-full h-px my-8"></div>
        <SocialLinks styleClass= "flex justify-evenly text-xl" />
      </div>

      {/* section two */}
      <div className="lg:w-4/12 flex flex-col items-center justify-center mt-16">
        <h1 className="text-6xl font-bold">
          Hell<span className="text-primary">o</span>,
        </h1>
        <h4 className="text-3xl mt-4">I am Ibrahim</h4>

        <button className="bg-primary py-2 px-10 br-5 rounded-3xl mt-16">
          Hire Me!
        </button>
      </div>

    </div>
  )
}

export default Hero
