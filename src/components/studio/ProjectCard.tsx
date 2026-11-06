import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

import type { Project } from '../../data/site'
import { cn } from '../../lib/utils'

const toneClass: Record<Project['coverTone'], string> = {
  forest: 'bg-forest-tint',
  sand: 'bg-[#e9e2d3]',
  stone: 'bg-[#e4e2dc]',
  ink: 'bg-[#dcdad2]',
}

const ratioClass: Record<Project['layout'], string> = {
  wide: 'aspect-[16/10] md:aspect-[16/9]',
  tall: 'aspect-[4/5]',
  standard: 'aspect-[4/3]',
}

export function ProjectCard({ project, size = 'md' }: { project: Project; size?: 'md' | 'lg' }) {
  return (
    <Link to={`/work/${project.slug}`} className="group block">
      <div className={cn('cover-media relative rounded-sm', toneClass[project.coverTone], ratioClass[project.layout])}>
        <img
          src={project.cover}
          alt={project.coverAlt}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span className="rounded-full bg-paper/90 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink">
            {project.category}
          </span>
          <span className="font-mono text-[10px] tracking-[0.16em] text-ink/70">{project.year}</span>
        </div>
        <span className="pointer-events-none absolute bottom-4 right-4 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-paper text-ink opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>

      <div className="mt-4 flex items-start justify-between gap-6 border-t border-paper-line pt-4">
        <div>
          <h3
            className={cn(
              'font-display tracking-tight text-ink transition-colors group-hover:text-forest',
              size === 'lg' ? 'text-2xl md:text-[28px]' : 'text-xl',
            )}
          >
            {project.title}
          </h3>
          <p className="mt-1.5 text-[13px] text-ink-muted">
            {project.titleEn} · {project.client}
          </p>
        </div>
        <span className="mt-1 shrink-0 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted">
          {project.services[0]}
        </span>
      </div>
      {size === 'lg' ? (
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-soft">{project.summary}</p>
      ) : null}
    </Link>
  )
}
