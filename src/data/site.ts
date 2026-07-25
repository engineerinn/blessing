export type NavLink = { label: string; href: string }
export type Service = { t: string; b: string }
export type WhyItem = { lead: string; b: string }
export type Step = { n: string; t: string; b: string }
export type BuildItem = { t: string; b: string }

export const NAV: NavLink[] = [
  { label: 'Services', href: '#services' },
  { label: 'Approach', href: '#approach' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
]

export const TOOLS: string[] = [
  'Python',
  'FastAPI',
  'LangChain',
  'Elasticsearch',
  'PostgreSQL',
  'pgvector',
  'Docker',
  'AWS',
]

export const SERVICES: Service[] = [
  { t: 'LLM & RAG systems', b: 'Retrieval pipelines that ground models in your own content — accurate, traceable, evaluated.' },
  { t: 'Semantic search', b: 'Search and reranking that match what people mean, not just the words they typed.' },
  { t: 'Backend engineering', b: 'FastAPI services and data infrastructure built to stay reliable in production.' },
  { t: 'AI product advisory', b: 'Feasibility, architecture, and reviews that de-risk the build before you commit.' },
  { t: 'Evaluation & guardrails', b: "Know when your AI is right — and catch it when it's wrong, before users do." },
  { t: 'Training & workshops', b: 'Get your team productive with LLMs, RAG, and modern Python backends.' },
]

export const WHY: WhyItem[] = [
  { lead: 'End-to-end', b: 'One senior engineer takes it from prototype to production — no handoffs, no telephone game between teams.' },
  { lead: 'Seoul-based, global-ready', b: 'Comfortable across Korean and international projects, working in English or in-market.' },
  { lead: 'Grounded in real work', b: 'Built on years of shipping LLM products and backends end to end — not slideware.' },
]

export const STEPS: Step[] = [
  { n: '01', t: 'Discover', b: 'Understand the problem, the data, and the constraints. Define what \u201cgood\u201d means and how we\u2019ll measure it.' },
  { n: '02', t: 'Prototype', b: 'Build a working slice fast, test it against real data, and prove the approach before scaling.' },
  { n: '03', t: 'Harden', b: 'Add evaluation, guardrails, observability, and the backend to run it dependably in production.' },
  { n: '04', t: 'Handover', b: 'Ship it, document it, and leave your team able to run and extend it — with training if you want it.' },
]

export const BUILDS: BuildItem[] = [
  { t: 'Knowledge assistants', b: 'Internal Q&A over your documents, policies, and tickets — answers that cite their sources and say \u201cI don\u2019t know\u201d when they should.' },
  { t: 'Search that gets intent', b: 'Semantic search and reranking layered onto your catalog or content, so people find the right thing, not just the nearest keyword.' },
  { t: 'AI features in your product', b: 'Summaries, extraction, and drafting wired into your app — with the evaluation and guardrails to trust them in front of users.' },
]