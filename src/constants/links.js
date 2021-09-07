import React from "react"
import { motion } from "framer-motion"
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

const PageLinks = ({
  styleClass,
  linkStyle,
  activeStyleClass,
  variants,
}) => {
  return (
    <motion.ul
      className={`${styleClass ? styleClass : ""}`}
      initial="hidden"
      animate="show"
      variants={variants}
    >
      {data.map(link => {
        return (
          <motion.li
            key={link.id}
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: "50" }}
          >
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
