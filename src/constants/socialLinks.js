import { motion } from "framer-motion"
import React from "react"

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
    url: "https://www.facebook.com/odesola.ibrahim.dev",
  },
  {
    id: 2,
    icon: <FaLinkedin className="socialIcon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/odesolaibrahim/",
  },
  {
    id: 3,
    icon: <FaTwitterSquare className="socialIcon"></FaTwitterSquare>,
    url: "https://twitter.com/CyberDevv",
  },
  {
    id: 4,
    icon: <FaGithubSquare className="socialIcon"></FaGithubSquare>,
    url: "https://github.com/CyberDevv",
  },
]

const navSocialLinkVariants = {
  initial: { y: "-100vh" },
  final: {
    y: 0,
    transition: {
      staggerChildren: 0.5,
    },
  },
}

const navSocialLinkChildrenVariants = {
  initial: { opacity: 0, y: -100 },
  final: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      mass: 0.6,
    },
  },
}

const SocialLinks = ({ styleClass }) => {
  return (
    <motion.ul
      className={`${styleClass ? styleClass : ""}`}
      variants={navSocialLinkVariants}
    >
      {data.map(link => {
        return (
          <motion.li key={link.id} variants={navSocialLinkChildrenVariants}>
            <a href={link.url}>{link.icon}</a>
          </motion.li>
        )
      })}
    </motion.ul>
  )
}

export default SocialLinks
