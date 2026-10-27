import { motion } from 'framer-motion'
import { profile } from '../data/content'

export default function Portrait() {
  return (
    <aside className="layout-portrait desktop-portrait" aria-label="Portrait">
      <motion.div
        className="portrait-frame"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="portrait-glow" />
        <img
          className="portrait-img"
          src="/hero-cutout.png"
          alt={`${profile.name} in a blue suit`}
        />
      </motion.div>
    </aside>
  )
}
