import React from "react"
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

const PageLinks = ({ styleClass, linkStyle }) => {
  return (
    <ul className={`${styleClass ? styleClass : ""}`}>
      {data.map(link => {
        return (
          <li key={link.id}>
            <Link className={`${linkStyle ? linkStyle : ""}`} to={link.url}>
              {link.text}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default PageLinks
