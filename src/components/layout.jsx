import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import NavBar from "./navBar"
import Footer from "./Footer"

const Layout = ({ children, index }) => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 md:px-4">
        <NavBar />
        {children}
      </div>
      {index || <Footer />}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
