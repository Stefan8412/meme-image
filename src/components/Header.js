import React from "react"
import favicon from "../images/favicon.png"

export default function Header() {
  return (
    <header className="header">
      <img
        src={favicon}
        alt="logo"
        width={35}
        height={35}
        className="header--image"
      />
      <h2 className="header--title">Meme-generator</h2>
      <h4 className="header--project">React Course - Project 3</h4>
    </header>
  )
}
