import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

import { profile } from '../../data/site'
import { Container } from './PageShell'

const footerNav = [
  { to: '/work', label: '作品 Case Studies' },
  { to: '/about', label: '关于 About' },
  { to: '/services', label: '服务 Services' },
  { to: '/journal', label: '文章 Journal' },
  { to: '/contact', label: '联系 Contact' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-paper-line bg-paper-deep/60">
      <Container className="py-14 md:py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-[clamp(1.6rem,2.6vw,2.2rem)] leading-tight tracking-tight text-ink">
              一起做点
              <br />
              经得起看的东西。
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="link-underline mt-6 text-ink"
            >
              {profile.email}
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <p className="mt-8 max-w-xs text-xs leading-relaxed text-ink-muted">{profile.availability}</p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <p className="eyebrow">Index</p>
            <ul className="mt-4 space-y-2.5">
              {footerNav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-ink-soft transition-colors hover:text-forest"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow">Elsewhere</p>
            <ul className="mt-4 space-y-2.5">
              {profile.socials.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href.replace('#', '')}
                    className="group inline-flex items-center gap-1.5 text-sm text-ink-soft transition-colors hover:text-forest"
                  >
                    {item.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-ink-muted">
              {profile.studio}
              <br />
              {profile.location}
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-paper-line pt-6 text-[11px] text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <span className="font-mono uppercase tracking-[0.16em]">
            © 2014–2026 {profile.nameEn} · All rights reserved
          </span>
          <span>视觉与代码 / 本人完成 · 最后更新 2026.01</span>
        </div>
      </Container>
    </footer>
  )
}
