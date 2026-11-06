import { cn } from '../../lib/utils'

export function Marquee({ items, className }: { items: string[]; className?: string }) {
  const loop = [...items, ...items]
  return (
    <div className={cn('relative overflow-hidden border-y border-paper-line bg-paper-deep/50', className)}>
      <div className="marquee-track flex w-max items-center gap-10 py-4">
        {loop.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-10 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.24em] text-ink-muted"
          >
            {item}
            <span aria-hidden className="h-1 w-1 rounded-full bg-ink-muted/50" />
          </span>
        ))}
      </div>
    </div>
  )
}
