import React from "react"
import { motion } from "framer-motion"
import "./works.css"
import Work1 from "../../assets/img/work1.gif"
import Work2 from "../../assets/img/work2.gif"
import Work3 from "../../assets/img/work3.gif"
import Work4 from "../../assets/img/work4.gif"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

import { Pagination } from "swiper"

const data = [
  {
    title: "Whatsapp App",
    description: "Aplication for sending messages",
    img: Work1,
  },
  {
    title: "Notas App",
    description: "Aplication for notes to organized your life",
    img: Work2,
  },
  {
    title: "Plants Web",
    description: "Look for the best plants",
    img: Work3,
  },
  {
    title: "Gym App",
    description: "Aplication for training",
    img: Work4,
  },
]

const Works = () => {
  return (
    <section id="Works" className="secion-works">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 1 }}
      >
        My Projects
      </motion.h2>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, type: "spring", bounce: 0.6, delay: 1.5 }}
        viewport={{ once: true }}
        className="container-carrousel"
      >
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          className="container-works"
        >
          {data.map(({ title, description, img }, index) => {
            return (
              <SwiperSlide key={index} className="work">
                <img src={img} alt={title} />
                <div className="work-info">
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <button class="learn-more">
                    <span class="circle" aria-hidden="true">
                      <span class="icon arrow"></span>
                    </span>
                    <span class="button-text">View on Github</span>
                  </button>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </motion.div>
    </section>
  )
}

export default Works
