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
  function handleChange(event) {
    const { name, value } = event.target
    setMemeImage((prevMem) => ({
      ...prevMem,
      [name]: value,
    }))
  }
  return (
    <main>
      <div className="form">
        <input
          type="text"
          className="form--input"
          placeholder="Top text"
          name="topText"
          value={memeImage.topText}
          onChange={handleChange}
        ></input>
        <input
          type="text"
          className="form--input"
          placeholder="Buttom text"
          name="bottomText"
          value={memeImage.bottomText}
          onChange={handleChange}
        ></input>
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 📸
        </button>

        <div className="meme">
          <img src={memeImage.randomImage} className="meme--img" alt="meme" />
          <h2 className="meme--text top">{memeImage.topText}</h2>
          <h2 className="meme--text bottom">{memeImage.bottomText}</h2>
        </div>
      </div>
    </main>
  )
}
