import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

import { profile } from '../../data/site'
import { cn } from '../../lib/utils'
import { Container } from './PageShell'

const navItems = [
  { to: '/work', label: '作品', en: 'Work' },
  { to: '/about', label: '关于', en: 'About' },
  { to: '/services', label: '服务', en: 'Services' },
  { to: '/journal', label: '文章', en: 'Journal' },
]

function Clock() {
  const [now, setNow] = useState(() => new Date())
  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 30_000)
    return () => window.clearInterval(timer)
  }, [])
  const time = new Intl.DateTimeFormat('zh-CN', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: 'Asia/Shanghai',
  }).format(now)
  return (
    <span className="font-mono text-[11px] tracking-[0.16em] text-ink-muted">
      HANGZHOU {time}
    </span>
  )
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header className="sticky top-0 z-40 border-b border-paper-line bg-paper/85 backdrop-blur-md">
      <Container className="flex h-[72px] items-center justify-between gap-6">
        <Link to="/" className="group flex items-baseline gap-3">
          <span className="font-display text-[22px] leading-none tracking-tight text-ink transition-opacity group-hover:opacity-70">
            林知遥
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.24em] text-ink-muted sm:inline">
            Studio LIN
          </span>
        </Link>

        <nav aria-label="主导航" className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'relative py-1 text-[13px] tracking-wide transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-ink after:transition-transform after:duration-300 hover:text-ink hover:after:scale-x-100',
                  isActive ? 'text-ink after:scale-x-100' : 'text-ink-muted',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <Clock />
          <Link
            to="/contact"
            className="hidden rounded-full bg-ink px-5 py-2.5 text-[13px] font-medium text-paper transition-transform duration-300 hover:-translate-y-0.5 hover:bg-forest md:inline-flex"
          >
            开始合作
          </Link>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? '关闭菜单' : '打开菜单'}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-paper-line text-ink transition-colors hover:bg-ink hover:text-paper md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </Container>

      {open ? (
        <div className="border-t border-paper-line bg-paper md:hidden">
          <Container className="flex flex-col py-2">
            {[...navItems, { to: '/contact', label: '联系', en: 'Contact' }].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="flex items-center justify-between border-b border-paper-line/70 py-4 last:border-b-0"
              >
                <span className="text-base text-ink">{item.label}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">
                  {item.en}
                </span>
              </Link>
            ))}
            <p className="py-4 text-xs text-ink-muted">{profile.availability}</p>
          </Container>
        </div>
      ) : null}
    </header>
  )
}
