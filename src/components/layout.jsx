import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import NavBar from "./navBar"
import Footer from "./Footer"
import { Helmet } from "react-helmet"
import { withPrefix } from "gatsby"

const Layout = ({ children, index }) => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="container mx-auto px-4 md:px-4">{children}</div>
      {index || <Footer />}
      <Helmet>
        <script src={withPrefix("script.js")} type="text/javascript" />
      </Helmet>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
