import { useMemo, useState } from 'react'
import { ProjectCard } from './ProjectCard'
import { ProjectFilter } from './ProjectFilter'
import { projects, type ProjectCategory } from '../../data/site'
import { cn } from '../../lib/utils'

/** 首页作品展示：分类筛选 + 网格/横向案例双视图 */
export function ProjectShowcase() {
  const [category, setCategory] = useState<ProjectCategory | '全部'>('全部')
  const [view, setView] = useState<'grid' | 'rail'>('grid')

  const filtered = useMemo(
    () => (category === '全部' ? projects : projects.filter((project) => project.category === category)),
    [category],
  )

  return (
    <div>
      <div className="mt-8">
        <ProjectFilter active={category} onChange={setCategory} />
      </div>

      <div className="mt-5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-1 rounded-full border border-paper-line bg-white p-1">
          {([
            { key: 'grid', label: '网格' },
            { key: 'rail', label: '横向案例' },
          ] as const).map((item) => (
            <button
              key={item.key}
              type="button"
              onClick={() => setView(item.key)}
              aria-pressed={view === item.key}
              className={cn(
                'rounded-full px-4 py-1.5 text-[12px] transition-colors duration-300',
                view === item.key ? 'bg-forest text-paper' : 'text-ink-muted hover:text-ink',
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted">
          {filtered.length} results
        </p>
      </div>

      {filtered.length === 0 ? (
        <div className="mt-10 rounded-sm border border-dashed border-paper-line py-20 text-center">
          <p className="text-sm text-ink-muted">该分类的案例正在整理中，可切换其他分类浏览。</p>
        </div>
      ) : view === 'grid' ? (
        <div className="mt-10">
          <ProjectCard project={filtered[0]} size="lg" />
          <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-12">
            {filtered.slice(1).map((project, index) => (
              <div key={project.slug} className={index % 2 === 0 ? 'lg:col-span-5' : 'lg:col-span-7'}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
          {filtered.map((project, index) => (
            <article key={project.slug} className="group w-[85%] shrink-0 snap-start sm:w-[520px]">
              <a href={`#/work/${project.slug}`} className="block">
                <div className="cover-media relative aspect-[16/10] rounded-sm bg-[#e7e2d5]">
                  <img src={project.cover} alt={project.coverAlt} className="h-full w-full object-cover" />
                  <span className="absolute bottom-4 left-4 rounded-full bg-paper/90 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-ink">
                    {String(index + 1).padStart(2, '0')} / {String(filtered.length).padStart(2, '0')}
                  </span>
                </div>
                <div className="mt-4 flex items-start justify-between gap-6 border-t border-paper-line pt-4">
                  <div>
                    <h3 className="font-display text-xl tracking-tight text-ink transition-colors group-hover:text-forest">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-[12px] text-ink-muted">{project.titleEn}</p>
                  </div>
                  <p className="max-w-[240px] text-right text-[12px] leading-relaxed text-ink-muted">
                    {project.summary}
                  </p>
                </div>
              </a>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}
