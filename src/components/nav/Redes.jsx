import React from "react"
import { motion } from "framer-motion"
import "./nav.css"

const redes = [
  {
    name: "ri-instagram-line",
    url: "https://www.instagram.com/tinta_gonzaa/",
  },
  {
    name: "ri-github-line",
    url: "https://github.com/Tintaa307",
  },
  {
    name: "ri-linkedin-line",
    url: "https://www.linkedin.com/in/tinta-gonzaa-b9a8a817b/",
  },
]

export const Redes = () => {
  return (
    <div className="container-redes">
      <div className="container-redes-icon">
        {redes.map(({ name, url }, index) => (
          <a href={url} key={index} target="_blank">
            <motion.i
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.3 }}
              className={name}
              style={{ color: "#fff" }}
            />
          </a>
        ))}
      </div>
    </div>
  )
}
