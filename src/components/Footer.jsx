import React from 'react'
import SocialLinks from '../constants/socialLinks'

const Footer = () => {
  return (
    <footer>
      <div>
        <SocialLinks />
        <h4>
          copyright&copy;{new Date().getFullYear()}
          <span>IO</span> all right reserved
        </h4>
      </div>
    </footer>
  )
}

export default Footer
