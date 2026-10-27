import { motion } from 'framer-motion'
import { skillGroups } from '../data/content'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55 }}
      >
        <p className="section-label">Skills</p>
        <h2 className="section-title">Stack I ship with</h2>
        <p className="section-lead">
          Production GenAI, agentic workflows, and data platforms — from FastAPI services to Kafka
          and lakehouse pipelines.
        </p>
        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <motion.article
              key={group.title}
              className="skill-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <h3>{group.title}</h3>
              <div className="chips">
                {group.items.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
