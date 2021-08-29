import React from "react"
import { motion } from 'framer-motion'
import { Link } from "gatsby"

const data = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about/",
  },
  {
    id: 3,
    text: "projects",
    url: "/projects/",
  },
  {
    id: 5,
    text: "contact",
    url: "/contact/",
  },
]

const PageLinks = ({ styleClass, linkStyle, activeStyleClass }) => {
  return (
    <motion.ul
      className={`${styleClass ? styleClass : ""}`}
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{
        staggerChildren: 0.5,
        type: "tween",
        delay: 0.5,
        duration: 2,
      }}
    >
      {data.map(link => {
        return (
          <li key={link.id}>
            <Link
              className={`${linkStyle ? linkStyle : ""}`}
              activeClassName={`${activeStyleClass ? activeStyleClass : ""}`}
              to={link.url}
            >
              {link.text}
            </Link>
          </li>
        )
      })}
    </motion.ul>
  )
}

export default PageLinks
