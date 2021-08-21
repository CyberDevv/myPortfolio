import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import NavBar from "./navBar"

const Layout = ({ children }) => {
  return (
    <div className= "min-h-screen container mx-auto px-4 lg:px-0">
      <NavBar />
      {children}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
