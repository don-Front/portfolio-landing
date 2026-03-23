import { Github, Linkedin, Twitter } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'About', href: '#about' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
] as const

const social = [
  { label: 'Twitter', href: 'https://twitter.com', icon: Twitter },
  { label: 'GitHub', href: 'https://github.com', icon: Github },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
] as const

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-ink px-4 py-14 md:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg font-semibold text-white">
            Lumen<span className="text-teal">.</span>
          </p>
          <p className="mt-2 max-w-xs text-sm text-muted">
            Portfolio demo — fictional product. Crafted to showcase UI engineering and layout craft.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-3" aria-label="Footer">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted transition hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {social.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex rounded-xl border border-white/10 p-2.5 text-muted transition hover:border-teal/30 hover:text-teal"
              aria-label={label}
            >
              <Icon className="size-5" aria-hidden />
            </a>
          ))}
        </div>
      </div>

      <p className="mx-auto mt-12 max-w-6xl border-t border-white/[0.06] pt-8 text-center text-xs text-muted md:text-left">
        © {new Date().getFullYear()} Lumen (demo). All rights reserved — for portfolio use only.
      </p>
    </footer>
  )
}
