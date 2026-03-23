import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="relative px-4 py-24 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/[0.1] bg-gradient-to-br from-teal/15 via-ink to-rose-glow/10 p-10 md:p-14 lg:p-16"
        >
          <div
            className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-teal/20 blur-[80px]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-amber/15 blur-[70px]"
            aria-hidden
          />

          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Ready to see your brand in high definition?
            </h2>
            <p className="mt-4 text-muted md:text-lg">
              Drop your work email — we’ll send a sandbox workspace and a sample insight pack.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row sm:items-stretch"
            >
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@company.com"
                className="min-h-[52px] flex-1 rounded-2xl border border-white/15 bg-ink/60 px-5 text-sm text-white placeholder:text-muted backdrop-blur-md outline-none transition focus:border-teal/50 focus:ring-2 focus:ring-teal/20"
              />
              <button
                type="submit"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl bg-white px-8 text-sm font-semibold text-ink transition hover:bg-fog"
              >
                {sent ? 'You’re on the list' : 'Request access'}
                <Send className="size-4" aria-hidden />
              </button>
            </form>
            {sent && (
              <p className="mt-4 text-sm text-teal" role="status">
                Thanks — this is a demo form for portfolio purposes.
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
