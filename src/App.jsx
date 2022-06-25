import { useState } from "react"
import logo from "./logo.svg"
import "./App.css"
import { Nav } from "./components/nav/Nav"
import Home from "./components/home/Home"
import About from "./components/about/About"
import { motion } from "framer-motion"
import Works from "./components/works/Works"

function App() {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Works />
    </>
  )
}

export default App
