import React, { useState } from "react"
import { memesData } from "../memesData.js"

export default function Meme() {
  const [image, setImage] = useState("")
  function getMemeImage() {
    const memesArray = memesData.data.memes
    const randomIndex = Math.floor(Math.random() * memesArray.length)
    setImage(memesArray[randomIndex].url)
  }
  return (
    <main>
      <div className="form">
        <input
          type="text"
          className="form--input"
          placeholder="Top text"
        ></input>
        <input
          type="text"
          className="form--input"
          placeholder="Buttom text"
        ></input>
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image
        </button>
      </div>
      <img src={image} className="meme--image" />
    </main>
  )
}
