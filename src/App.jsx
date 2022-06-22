import { useState } from "react"
import logo from "./logo.svg"
import "./App.css"
import { Nav } from "./components/nav/Nav"
import Home from "./components/home/Home"
import { motion } from "framer-motion"

function App() {
  return (
    <>
      <Nav />
      <Home />
    </>
  )
}

export default App
