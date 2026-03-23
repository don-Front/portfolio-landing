import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Studio',
    price: '$49',
    period: '/mo',
    blurb: 'For lean teams validating narrative-market fit.',
    features: ['3 data sources', '2 seats', 'Weekly digest', 'Slack alerts'],
    cta: 'Start trial',
    highlighted: false,
  },
  {
    name: 'Scale',
    price: '$189',
    period: '/mo',
    blurb: 'For brands running always-on creative engines.',
    features: [
      'Unlimited sources',
      '12 seats',
      'Creative health scores',
      'SSO (SAML)',
      'Priority support',
    ],
    cta: 'Get Scale',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    blurb: 'For holding companies and regulated industries.',
    features: ['Dedicated CSM', 'VPC deploy', 'Custom models', 'SLA 99.95%'],
    cta: 'Talk to us',
    highlighted: false,
  },
] as const

export function Pricing() {
  return (
    <section
      id="pricing"
      className="relative border-t border-white/[0.06] bg-surface/30 px-4 py-24 md:px-6 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">Pricing</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Plans that grow with your signal volume
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted md:text-lg">
            No hidden seats for viewers. Upgrade when your channels multiply.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: 0.08 * i, duration: 0.45 }}
              className={`relative flex flex-col rounded-3xl border p-8 ${
                plan.highlighted
                  ? 'border-teal/40 bg-gradient-to-b from-teal/10 to-ink/80 shadow-[0_0_60px_rgba(45,212,191,0.12)] ring-1 ring-teal/20'
                  : 'border-white/[0.08] bg-ink/40 glass-panel'
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-teal to-teal-dim px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink">
                  Most popular
                </span>
              )}
              <h3 className="font-display text-xl font-semibold text-white">{plan.name}</h3>
              <p className="mt-2 text-sm text-muted">{plan.blurb}</p>
              <p className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-4xl font-semibold text-white">{plan.price}</span>
                {plan.period && (
                  <span className="text-sm text-muted">{plan.period}</span>
                )}
              </p>
              <ul className="mt-8 flex flex-1 flex-col gap-3 text-sm text-fog">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-teal" aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 block rounded-full py-3.5 text-center text-sm font-semibold transition ${
                  plan.highlighted
                    ? 'bg-white text-ink hover:bg-fog'
                    : 'border border-white/15 bg-white/[0.04] text-white hover:border-teal/40'
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
