import React from "react"
import Header from "./components/Header"
import Meme from "./components/Meme"
import Footer from "./components/Footer"
/**
 * Challenge: Build the Header component
 */
export default function App() {
  return (
    <div className="app">
      <Header />
      <Meme />
      <Footer />
    </div>
  )
}
