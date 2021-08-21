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
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>
      {data.map(link => {
        return (
          <li key={link.id}>
            <a href={link.url} className="social-link">
              {link.icon}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default socialLinks