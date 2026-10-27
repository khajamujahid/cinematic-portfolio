export const profile = {
  name: 'Khaja Mohammed',
  fullName: 'Khaja Mujahiddin Mohammed',
  headline:
    'AI Software Engineer & Data Engineer | Generative AI · Agentic AI · Python · FastAPI · Kafka',
  shortTitle: 'AI Software Engineer · Data Engineer · GenAI',
  location: 'New Haven, CT',
  email: 'muhammedshoaib835@gmail.com',
  linkedin: 'https://www.linkedin.com/in/mujahiddin-md-6b21b1390',
  github: 'https://github.com/khajamujahid',
}

export const about = [
  'I’m an AI Software Engineer and Data Engineer with 5+ years shipping production AI platforms, distributed data pipelines, and high-concurrency backends. My work sits at the intersection of Generative AI, agentic workflows, and reliable Python/Java services that teams can actually run in production.',
  'Recently I’ve focused on healthcare AI systems — FastAPI microservices, governed RAG pipelines, PySpark/Databricks lakehouse work, and real-time event flows on Kafka — across payer/provider workflows. Before that I built commerce and enterprise platforms spanning checkout-scale services, B2B procurement integrations, and full-stack features in React/Next.js.',
  'I care about demos that work: clean APIs, grounded LLM answers, HITL where it matters, and open projects people can clone and run. I hold an M.S. in Data Science from the University of New Haven.',
]

export const skillGroups = [
  {
    title: 'Languages',
    items: ['Python', 'Java', 'SQL', 'TypeScript', 'JavaScript'],
  },
  {
    title: 'Frameworks & Backend',
    items: [
      'FastAPI',
      'Spring Boot',
      'React',
      'Next.js',
      'Vue.js',
      'gRPC',
      'Pydantic',
      'Microservices',
    ],
  },
  {
    title: 'Data · ML · AI',
    items: [
      'Generative AI',
      'Agentic AI',
      'RAG',
      'LLMs',
      'Embeddings',
      'PySpark',
      'Databricks',
      'Delta Lake',
      'Snowflake',
      'Kafka',
      'PostgreSQL',
      'Redis',
      'MongoDB',
      'pgvector',
      'OpenSearch',
    ],
  },
  {
    title: 'Cloud & Tools',
    items: [
      'AWS',
      'Azure',
      'GCP',
      'OCI',
      'Docker',
      'Kubernetes',
      'Terraform',
      'GitHub Actions',
      'Jenkins',
      'ArgoCD',
      'Prometheus',
      'Grafana',
      'pytest',
    ],
  },
]

export const projects = [
  {
    title: 'InboxGuard',
    blurb: 'Spam email detector with a live inspect UI (TF-IDF + logistic regression).',
    tech: ['TypeScript', 'ML'],
    href: 'https://github.com/khajamujahid/inboxguard',
  },
  {
    title: 'Veritas HITL Platform',
    blurb: 'Human-in-the-loop multimodal fake news detection.',
    tech: ['Python', 'ML', 'HITL'],
    href: 'https://github.com/khajamujahid/veritas-hitl-platform',
  },
  {
    title: 'Clinical AI Agent',
    blurb: 'Clinical-oriented AI agent project.',
    tech: ['Python', 'GenAI'],
    href: 'https://github.com/khajamujahid/Clinical-AI-Agent',
  },
  {
    title: 'Quik Pik Store',
    blurb: 'A&S Quik Pik storefront.',
    tech: ['Web', 'Storefront'],
    href: 'https://github.com/khajamujahid/quik-pik-store',
  },
  {
    title: 'Multimodal Fake News Detection',
    blurb: 'Multimodal misinformation detection research/build.',
    tech: ['Python', 'ML'],
    href: 'https://github.com/khajamujahid/Multimodel-Fake-News-Detection',
  },
  {
    title: 'Cloud-Based Data Pipeline Optimization',
    blurb: 'Data pipeline optimization project.',
    tech: ['Cloud', 'Data Engineering'],
    href: 'https://github.com/khajamujahid/Cloud-Based-Data-Pipeline-Optimization',
  },
]

export const journey = [
  {
    role: 'AI Software Engineer',
    org: 'Optum',
    period: 'Jul 2025 – Present',
    detail:
      'Production Python/FastAPI services, governed RAG, Databricks/PySpark, Kafka/event workflows for healthcare AI products.',
  },
  {
    role: 'Software / Data Engineer',
    org: 'Staples',
    period: 'Prior',
    detail:
      'High-concurrency commerce backends, Kafka/streaming, Java/Spring + Python services, B2B procurement integrations.',
  },
  {
    role: 'Full-Stack & Backend Delivery',
    org: 'SRIK / Enterprise Consulting',
    period: 'Earlier',
    detail: 'Full-stack and backend delivery, integrations, and modernization.',
  },
  {
    role: 'M.S. Data Science',
    org: 'University of New Haven',
    period: 'Education',
    detail: 'Graduate focus on data science, applied ML, and production analytics.',
  },
  {
    role: 'Certifications',
    org: 'Oracle Cloud',
    period: 'Optional',
    detail:
      'OCI Multicloud Architect · Oracle Analytics Cloud (OAC) · OCI AI & Data Platform.',
  },
]

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
] as const
