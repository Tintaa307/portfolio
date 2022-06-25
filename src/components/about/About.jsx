import React, { useState } from "react"
import { motion } from "framer-motion"
import "./about.css"
import Gif from "../../assets/img/about-gif.gif"

const About = () => {
  return (
    <section id="About" className="section-about">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 1 }}
      >
        About Me
      </motion.h2>
      <div className="container-about">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            type: "spring",
            bounce: 0.5,
            delay: 1.4,
          }}
          className="container-content"
        >
          <motion.p>
            I'm a full-stack developer with a passion for building beautiful
            responsive websites. I'm currently working as a front-end developer.
            I learned so much technology while working as a front-end, and i
            want to learn more. Always learning is my goal.
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            type: "spring",
            bounce: 0.5,
            delay: 1.4,
          }}
          className="container-gif"
        >
          <img src={Gif} alt="Mi gif forntend" />
        </motion.div>
      </div>
    </section>
  )
}

export default About
