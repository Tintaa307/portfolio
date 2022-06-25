import * as React from "react"
import { motion } from "framer-motion"

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

const menuParts = [
  {
    name: "#Home",
  },
  {
    name: "#About",
  },
  {
    name: "#Works",
  },
  {
    name: "#Skills",
  },
  {
    name: "#Contact",
  },
]

const icons = [
  {
    name: "ri-home-4-line",
  },
  {
    name: "ri-user-line",
  },
  {
    name: "ri-file-list-line",
  },
  {
    name: "ri-code-line",
  },
  {
    name: "ri-mail-send-line",
  },
]

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"]

export const MenuItem = ({ i }) => {
  const style = { border: `2px solid ${colors[i]}`, padding: "12px" }
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="icon-placeholder" style={style}>
        <i className={icons[i].name}></i>
      </div>
      <div className="text-placeholder" style={style}>
        <a href={menuParts[i].name}>{menuParts[i].name}</a>
      </div>
    </motion.li>
  )
}
