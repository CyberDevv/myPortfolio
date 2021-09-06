import React from "react"
import SocialLinks from "../constants/socialLinks"

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col sm:flex-row justify-around items-center py-8 space-y-4 sm:space-x-0 px-4">
        <h4 className="text-xs sm:text-sm tracking-widest text-center">
          copyright&copy;{new Date().getFullYear()}{" "}
          <span className="uppercase text-primary">CyberDevv</span> all right
          reserved
        </h4>
        <SocialLinks styleClass="flex text-xl space-x-12 " />
      </div>
    </footer>
  )
}

export default Footer
