import { motion } from 'framer-motion'
import { Link2, LineChart, Rocket } from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: Link2,
    title: 'Connect your stack',
    body: 'OAuth into channels and warehouses. Lumen normalizes formats and resolves entity overlap.',
  },
  {
    step: '02',
    icon: LineChart,
    title: 'Let the model synthesize',
    body: 'Our graph ranks what matters this week: risks, whitespace, and creative angles worth testing.',
  },
  {
    step: '03',
    icon: Rocket,
    title: 'Brief and ship',
    body: 'Export living briefs to Notion, Figma, or your DAM. Stakeholders stay aligned on one truth.',
  },
] as const

export function About() {
  return (
    <section id="about" className="relative px-4 py-24 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber">
              About / How it works
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
              From noise to narrative, without the grind
            </h2>
            <p className="mt-5 text-muted md:text-lg">
              Lumen is built for teams who own how a brand shows up everywhere. We replace static
              dashboards with a living map of perception — so you react to culture, not lagging
              spreadsheets.
            </p>

            <div className="mt-10 rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.05] to-transparent p-8">
              <p className="font-display text-xl italic text-fog md:text-2xl">
                “We stopped debating what audiences feel. Lumen shows the pattern — we ship the
                story.”
              </p>
              <p className="mt-4 text-sm font-medium text-muted">
                — Creative Director, Series B consumer brand
              </p>
            </div>
          </motion.div>

          <div className="space-y-5">
            {steps.map((s, i) => {
              const Icon = s.icon
              return (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: 0.1 * i, duration: 0.45 }}
                  className="relative flex gap-5 rounded-2xl border border-white/[0.07] bg-ink/60 p-6 backdrop-blur-sm md:gap-6 md:p-7"
                >
                  <span className="font-display text-sm font-semibold text-teal/80">{s.step}</span>
                  <div className="min-w-0 flex-1">
                    <div className="mb-3 inline-flex rounded-lg bg-amber/10 p-2 text-amber">
                      <Icon className="size-5" strokeWidth={1.75} aria-hidden />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-white">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
