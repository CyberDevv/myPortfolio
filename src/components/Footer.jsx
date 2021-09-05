import React from "react"
import SocialLinks from "../constants/socialLinks"

const Footer = () => {
  return (
    <footer>
      <div className="flex justify-around items-center py-8">
        <h4 className="text-sm tracking-widest">
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
