import React from "react"
import { motion } from "framer-motion"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaGithubSquare,
  FaTwitterSquare,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaFacebookSquare className="socialIcon"></FaFacebookSquare>,
    url: "https://www.twitter.com",
  },
  {
    id: 2,
    icon: <FaLinkedin className="socialIcon"></FaLinkedin>,
    url: "https://www.twitter.com",
  },
  {
    id: 3,
    icon: <FaTwitterSquare className="socialIcon"></FaTwitterSquare>,
    url: "https://www.twitter.com",
  },
  {
    id: 4,
    icon: <FaGithubSquare className="socialIcon"></FaGithubSquare>,
    url: "https://www.twitter.com",
  },
]

const socialLinks = ({ styleClass }) => {
  return (
    <motion.ul
      className={`social-links ${styleClass ? styleClass : ""}`}
      initial={{opacity: 0, y: -50 }}
      animate={{opacity: 1, y: 0 }}
      transition= {{delay: 3, stiffness: 50, damping: 5, type: "spring"}}
    >
      {data.map(link => {
        return (
          <li key={link.id}>
            <a href={link.url} className="social-link">
              {link.icon}
            </a>
          </li>
        )
      })}
    </motion.ul>
  )
}

export default socialLinks