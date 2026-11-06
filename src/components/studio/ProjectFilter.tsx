import { projectCategories, projects, type ProjectCategory } from '../../data/site'
import { cn } from '../../lib/utils'

export function ProjectFilter({
  active,
  onChange,
}: {
  active: ProjectCategory | '全部'
  onChange: (value: ProjectCategory | '全部') => void
}) {
  return (
    <div className="flex flex-col gap-4 border-y border-paper-line py-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap items-center gap-2">
        {projectCategories.map((category) => {
          const count =
            category === '全部'
              ? projects.length
              : projects.filter((project) => project.category === category).length
          const isActive = active === category
          return (
            <button
              key={category}
              type="button"
              onClick={() => onChange(category)}
              aria-pressed={isActive}
              className={cn(
                'inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[13px] transition-all duration-300',
                isActive
                  ? 'border-forest bg-forest text-paper'
                  : 'border-transparent bg-transparent text-ink-muted hover:border-paper-line hover:bg-white hover:text-ink',
              )}
            >
              {category}
              <span
                className={cn(
                  'font-mono text-[10px] tracking-[0.1em]',
                  isActive ? 'text-paper/70' : 'text-ink-muted/70',
                )}
              >
                {String(count).padStart(2, '0')}
              </span>
            </button>
          )
        })}
      </div>
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-muted sm:shrink-0">
        显示 {active === '全部' ? '全部项目' : active}
      </p>
    </div>
  )
}
