import { motion } from 'framer-motion'
import { projects } from '../data/content'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.55 }}
      >
        <p className="section-label">Projects</p>
        <h2 className="section-title">Featured open work</h2>
        <p className="section-lead">
          Clone-friendly demos across email security, HITL verification, clinical AI, and data
          pipelines.
        </p>
        <div className="projects-grid">
          {projects.map((project, i) => (
            <motion.a
              key={project.href}
              className="project-card"
              href={project.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
            >
              <h3>{project.title}</h3>
              <p>{project.blurb}</p>
              <div className="chips">
                {project.tech.map((t) => (
                  <span className="chip" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <div className="project-link">
                View on GitHub <span>→</span>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
