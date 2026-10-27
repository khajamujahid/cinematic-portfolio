import { motion } from 'framer-motion'
import { profile } from '../data/content'

type HeroProps = {
  showPortrait?: boolean
}

export default function Hero({ showPortrait = true }: HeroProps) {
  return (
    <section id="home" className="hero section" style={{ paddingTop: 0 }}>
      <motion.p
        className="hero-kicker"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {profile.location} · Open to collaboration
      </motion.p>
      <motion.h1
        className="hero-name"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.05 }}
      >
        {profile.name.split(' ')[0]}
        <br />
        <em>{profile.name.split(' ').slice(1).join(' ')}</em>
      </motion.h1>
      <motion.p
        className="hero-headline"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.12 }}
      >
        {profile.shortTitle}
      </motion.p>
      <motion.p
        className="hero-location"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.18 }}
      >
        {profile.headline}
      </motion.p>
      <motion.div
        className="hero-actions"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.24 }}
      >
        <a className="btn btn-primary" href="#projects">
          View projects
        </a>
        <a className="btn btn-ghost" href="#contact">
          Contact me
        </a>
      </motion.div>
      <motion.div
        className="hero-stats"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.32 }}
      >
        <div className="stat">
          <strong>5+</strong>
          <span>Years shipping</span>
        </div>
        <div className="stat">
          <strong>GenAI</strong>
          <span>RAG · Agents</span>
        </div>
        <div className="stat">
          <strong>Prod</strong>
          <span>Data platforms</span>
        </div>
      </motion.div>

      {showPortrait && (
        <div className="mobile-portrait portrait-frame" aria-hidden={false}>
          <div className="portrait-glow" />
          <img
            className="portrait-img"
            src="/hero-cutout.png"
            alt={`${profile.name} — professional portrait`}
          />
        </div>
      )}
    </section>
  )
}
