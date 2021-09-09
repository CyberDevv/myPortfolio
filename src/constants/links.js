import React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"

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

const PageLinks = ({
  styleClass,
  linkStyle,
  activeStyleClass,
  variants,
  variants2,
}) => {
  return (
    <motion.ul
      className={`${styleClass ? styleClass : ""}`}
      variants={variants}
    >
      {data.map(link => {
        return (
          <motion.li key={link.id} variants={variants2}>
            <Link
              className={`${linkStyle ? linkStyle : ""}`}
              activeClassName={`${activeStyleClass ? activeStyleClass : ""}`}
              to={link.url}
            >
              {link.text}
            </Link>
          </motion.li>
        )
      })}
    </motion.ul>
  )
}

export default PageLinks
