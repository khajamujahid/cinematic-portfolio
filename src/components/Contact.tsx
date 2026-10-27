import { motion } from 'framer-motion'
import { profile } from '../data/content'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <motion.div
        className="contact-panel"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55 }}
      >
        <p className="section-label">Contact</p>
        <h2 className="section-title">Let’s build something real</h2>
        <p className="section-lead" style={{ marginBottom: 0 }}>
          GenAI apps, RAG + HITL, FastAPI backends, and full-stack AI demos. Reach out anytime.
        </p>
        <div className="contact-actions">
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>
            Email
          </a>
          <a
            className="btn btn-ghost"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </motion.div>
    </section>
  )
}
