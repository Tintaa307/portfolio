import React from "react"
import { motion } from "framer-motion"
import "./skills.css"

const Skills = () => {
  return (
    <section className="section-skills">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 1 }}
        viewport={{ once: true }}
      >
        My Skills
      </motion.h2>
      <div className="container-skills">
        <div className="container-categories">
          <div className="category all">All</div>
          <div className="category design">
            <i class="ri-pencil-ruler-2-line"></i>
          </div>
          <div className="category backend">
            <i class="ri-code-s-slash-line"></i>
          </div>
          <div className="category tools">
            <i class="ri-tools-fill"></i>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
