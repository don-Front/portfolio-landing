import { motion } from 'framer-motion'
import {
  Brain,
  Gauge,
  Layers,
  Lock,
  Radio,
  Workflow,
} from 'lucide-react'

const items = [
  {
    icon: Brain,
    title: 'Narrative intelligence',
    body: 'Surface the stories your audience actually repeats — not just volume, but meaning clusters.',
  },
  {
    icon: Radio,
    title: 'Omni-signal ingest',
    body: 'Pull social, paid, CRM, and news into one timeline with conflict-aware deduplication.',
  },
  {
    icon: Gauge,
    title: 'Creative health scores',
    body: 'Fatigue, novelty, and fit metrics per asset family, updated as campaigns breathe.',
  },
  {
    icon: Workflow,
    title: 'Playbooks that ship',
    body: 'Turn insights into briefs, channel mixes, and experiment backlogs in two clicks.',
  },
  {
    icon: Layers,
    title: 'Brand guardrails',
    body: 'Voice, visual tokens, and compliance checks run before anything leaves draft.',
  },
  {
    icon: Lock,
    title: 'Enterprise-ready',
    body: 'SSO, audit trails, and regional data residency for teams who cannot compromise.',
  },
] as const

const easeOutExpo = [0.22, 1, 0.36, 1] as const

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.06 * i, duration: 0.45, ease: easeOutExpo },
  }),
}

export function Features() {
  return (
    <section
      id="features"
      className="relative border-t border-white/[0.06] bg-surface/50 px-4 py-24 md:px-6 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(45,212,191,0.03),transparent)]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
            Features
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Everything your studio was missing
          </h2>
          <p className="mt-4 text-muted md:text-lg">
            A single surface for strategists, designers, and growth — without another tab spiral.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.article
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={cardVariants}
                className="group glass-panel rounded-2xl p-6 transition duration-300 hover:border-teal/25 hover:shadow-[0_0_40px_rgba(45,212,191,0.08)]"
              >
                <div className="mb-4 inline-flex rounded-xl border border-white/10 bg-white/[0.04] p-3 text-teal transition group-hover:border-teal/30 group-hover:bg-teal/10">
                  <Icon className="size-5" strokeWidth={1.75} aria-hidden />
                </div>
                <h3 className="font-display text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
