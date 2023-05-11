import React, { useState } from "react"
// import { memesData } from "../memesData.js"

export default function Meme() {
  // const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")
  const [memeImage, setMemeImage] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  })
  // const [allMemeImages, setAllMemeImages] = useState(memesData)
  const [allMemeImages, setAllMemeImages] = useState([])
  React.useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes")
      const data = await res.json()
      setAllMemeImages(data.data.memes)
    }
    getMemes()
  }, [])

  function getMemeImage() {
    // const memesArray = allMemeImages.data.memes
    const randomIndex = Math.floor(Math.random() * allMemeImages.length)
    const url = allMemeImages[randomIndex].url
    setMemeImage((prevMem) => ({
      ...prevMem,
      randomImage: url,
    }))
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
          Get a new meme image 📸
        </button>
      </div>
      <img src={memeImage.randomImage} className="meme--image" alt="meme" />
    </main>
  )
}
