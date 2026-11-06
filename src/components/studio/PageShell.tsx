import type { ReactNode } from 'react'

import { cn } from '../../lib/utils'

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn('mx-auto w-full max-w-frame px-5 sm:px-8 lg:px-12', className)}>{children}</div>
}

/** 杂志式章节头：左侧编号 + 标题，右侧引导文案 */
export function SectionHead({
  index,
  label,
  title,
  description,
  action,
  className,
}: {
  index: string
  label: string
  title: ReactNode
  description?: string
  action?: ReactNode
  className?: string
}) {
  return (
    <div className={cn('border-t border-paper-line pt-8', className)}>
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-[11px] tracking-[0.2em] text-ink-muted">{index}</span>
            <span className="eyebrow">{label}</span>
          </div>
          <h2 className="display-title mt-4 text-[clamp(1.9rem,3.4vw,2.9rem)] leading-[1.12]">{title}</h2>
        </div>
        <div className="flex max-w-sm flex-col gap-4 md:items-end md:text-right">
          {description ? (
            <p className="text-sm leading-relaxed text-ink-muted">{description}</p>
          ) : null}
          {action}
        </div>
      </div>
    </div>
  )
}

/** 页头：用于内页的标题区 */
export function PageIntro({
  eyebrow,
  title,
  lede,
  meta,
}: {
  eyebrow: string
  title: ReactNode
  lede?: string
  meta?: Array<{ label: string; value: string }>
}) {
  return (
    <header className="rise-in border-b border-paper-line pb-14 pt-10 md:pb-16 md:pt-14">
      <span className="eyebrow">{eyebrow}</span>
      <h1 className="display-title mt-6 max-w-4xl text-[clamp(2.4rem,5.6vw,4.5rem)] leading-[1.02]">{title}</h1>
      {lede ? (
        <p className="mt-8 max-w-2xl text-[15px] leading-[1.85] text-ink-soft md:text-base">{lede}</p>
      ) : null}
      {meta && meta.length > 0 ? (
        <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-paper-line pt-6 sm:grid-cols-4">
          {meta.map((item) => (
            <div key={item.label}>
              <dt className="eyebrow">{item.label}</dt>
              <dd className="mt-2 text-sm font-medium text-ink">{item.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}
    </header>
  )
}
