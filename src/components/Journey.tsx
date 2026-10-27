import { motion } from 'framer-motion'
import { journey } from '../data/content'

export default function Journey() {
  return (
    <section id="journey" className="section">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.55 }}
      >
        <p className="section-label">Journey</p>
        <h2 className="section-title">Path so far</h2>
        <p className="section-lead">
          Healthcare AI, commerce-scale backends, and enterprise delivery — grounded in a Data
          Science M.S.
        </p>
        <div className="timeline">
          {journey.map((item, i) => (
            <motion.article
              key={`${item.org}-${item.role}`}
              className="timeline-item"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div className="timeline-meta">
                <h3>{item.role}</h3>
                <span className="org">{item.org}</span>
                <span className="period">{item.period}</span>
              </div>
              <p>{item.detail}</p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
