import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

const easeOutExpo = [0.22, 1, 0.36, 1] as const

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.55, ease: easeOutExpo },
  }),
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 pb-24 pt-28 md:px-6 md:pb-32 md:pt-36"
    >
      <div className="pointer-events-none absolute inset-0 mesh-bg noise-overlay" aria-hidden />

      <div className="pointer-events-none absolute left-1/2 top-24 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-teal/15 blur-[100px] md:top-32 md:h-[560px] md:w-[560px]" />

      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
        <div>
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-teal backdrop-blur-md"
          >
            <Sparkles className="size-3.5" aria-hidden />
            New: Creative foresight engine
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            Brand signals,{' '}
            <span className="text-gradient">crystallized</span>
            <br />
            into creative direction.
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg"
          >
            Lumen unifies social listening, competitor moves, and campaign performance
            into one calm workspace — so your team ships on-brand creative faster.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink shadow-lg transition hover:bg-fog"
            >
              Start free trial
              <ArrowRight
                className="size-4 transition group-hover:translate-x-0.5"
                aria-hidden
              />
            </a>
            <a
              href="#about"
              className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-fog backdrop-blur-sm transition hover:border-teal/40 hover:text-white"
            >
              See how it works
            </a>
          </motion.div>

          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-14 flex flex-wrap items-center gap-8 border-t border-white/[0.06] pt-10"
          >
            {[
              { k: 'Teams', v: '2.4k+' },
              { k: 'Markets', v: '48' },
              { k: 'Uptime', v: '99.9%' },
            ].map((stat) => (
              <div key={stat.k}>
                <p className="font-display text-2xl font-semibold text-white md:text-3xl">
                  {stat.v}
                </p>
                <p className="text-xs font-medium uppercase tracking-wider text-muted">
                  {stat.k}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: easeOutExpo }}
          className="relative"
        >
          <div className="glass-panel relative overflow-hidden rounded-3xl p-1">
            <div className="rounded-[1.35rem] bg-gradient-to-br from-white/[0.08] to-transparent p-6 md:p-8">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-widest text-muted">
                  Live pulse
                </span>
                <span className="flex items-center gap-2 text-xs text-teal">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
                  </span>
                  Synced
                </span>
              </div>

              <div className="space-y-4">
                {[
                  { label: 'Sentiment shift', val: '+12%', tone: 'text-teal' },
                  { label: 'Creative fatigue', val: 'Low', tone: 'text-amber' },
                  { label: 'Next best channel', val: 'Short video', tone: 'text-fog' },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between rounded-2xl border border-white/[0.06] bg-ink/40 px-4 py-3.5"
                  >
                    <span className="text-sm text-muted">{row.label}</span>
                    <span className={`text-sm font-semibold ${row.tone}`}>{row.val}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3">
                {[40, 72, 55].map((h, i) => (
                  <div
                    key={i}
                    className="flex flex-col justify-end rounded-xl border border-white/[0.06] bg-gradient-to-t from-teal/20 to-transparent p-3"
                    style={{ height: `${h + 48}px` }}
                  >
                    <div
                      className="rounded-md bg-gradient-to-t from-teal to-teal-dim/80"
                      style={{ height: `${h}%`, minHeight: '24px' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className="absolute -right-6 -top-6 hidden h-24 w-24 rounded-2xl border border-amber/30 bg-amber/10 blur-sm md:block"
            aria-hidden
          />
          <div
            className="absolute -bottom-4 -left-4 hidden h-20 w-20 rounded-full border border-teal/20 bg-teal/10 md:block"
            aria-hidden
          />
        </motion.div>
      </div>
    </section>
  )
}
