import React from 'react'
import PageLinks from '../constants/links'
import { FaAlignRight } from 'react-icons/fa'

const NavBar = () => {
  return (
    <nav>
      <div className="flex items-center py-4 lg:py-8 lg:space-x-32">
        <div className="flex justify-between items-center flex-grow lg:flex-grow-0 z-10">
          {/* Logo */}
          <h4 className="text-xl font-bold">IO</h4>

          {/* NavToggler */}
          <button
            type="button"
            className="text-xl bg-transparent transition-colors cursor-pointer focus:outline-none lg:hidden"
          >
            <FaAlignRight />
          </button>
        </div>

        {/* navMenu */}
        <PageLinks
          styleClass="lg:flex space-x-12 items-center hidden justify-around capitalize tracking-widest text-light w-8/12 z-10"
          linkStyle="navItem py-1"
          activeStyleClass="text-primary font-semibold active"
        ></PageLinks>
      </div>
    </nav>
  )
}

export default NavBar
