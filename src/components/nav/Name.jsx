import React from "react"
import { motion } from "framer-motion"

export const Name = () => {
  const letter = [
    {
      name: "V",
    },
    {
      name: "a",
    },
    {
      name: "l",
    },
    {
      name: "e",
    },
    {
      name: "n",
    },
    {
      name: "t",
    },
    {
      name: "i",
    },
    {
      name: "n",
    },
    {
      name: " ",
    },
    {
      name: "g",
    },
    {
      name: "o",
    },
    {
      name: "n",
    },
    {
      name: "z",
    },
    {
      name: "a",
    },
    {
      name: "l",
    },
    {
      name: "e",
    },
    {
      name: "z",
    },
  ]

  return (
    <div className="container-name">
      <h1 aria-label="Valentin Gonzalez">
        {letter.map((letter, index) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            key={index}
          >
            {letter.name}
          </motion.span>
        ))}
      </h1>
    </div>
  )
}
