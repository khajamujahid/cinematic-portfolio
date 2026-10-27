import { motion } from 'framer-motion'
import { about } from '../data/content'

export default function About() {
  return (
    <section id="about" className="section">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55 }}
      >
        <p className="section-label">About</p>
        <h2 className="section-title">Engineer first. Demos that ship.</h2>
        <div className="about-copy about-copy--solo">
          {about.map((para) => (
            <p key={para.slice(0, 32)}>{para}</p>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
