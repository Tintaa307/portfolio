import { useState, useEffect } from "react"
import logo from "./logo.svg"
import "./App.css"
import { Nav } from "./components/nav/Nav"
import Home from "./components/home/Home"
import About from "./components/about/About"
import { motion } from "framer-motion"
import Works from "./components/works/Works"
import Skills from "./components/skills/Skills"
import mixitup from "mixitup"

function App() {
  useEffect(() => {
    const mixer = mixitup(".container-categories")
    mixer.filter(".all")
  }, [])

  return (
    <>
      <Nav />
      <Home />
      <About />
      <Works />
      <Skills />
    </>
  )
}

export default App
