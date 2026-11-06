import { useMemo, useState } from 'react'
import { LayoutGrid, Rows3 } from 'lucide-react'

import { Container, PageIntro } from '../components/studio/PageShell'
import { ProjectCard } from '../components/studio/ProjectCard'
import { ProjectFilter } from '../components/studio/ProjectFilter'
import { projects, type ProjectCategory } from '../data/site'
import { cn } from '../lib/utils'

type ViewMode = 'grid' | 'list'

export default function Work() {
  const [category, setCategory] = useState<ProjectCategory | '全部'>('全部')
  const [view, setView] = useState<ViewMode>('grid')

  const filtered = useMemo(
    () => (category === '全部' ? projects : projects.filter((project) => project.category === category)),
    [category],
  )

  return (
    <div className="bg-paper">
      <Container>
        <PageIntro
          eyebrow="Index / Selected Work"
          title={
            <>
              作品索引
              <span className="ml-4 align-middle font-sans text-base uppercase tracking-[0.2em] text-ink-muted">
                {projects.length} cases
              </span>
            </>
          }
          lede="从 2014 年至今，我参与过三十余个品牌与产品项目。这里挑选了其中六个完整案例，每个案例都包含问题背景、方法与可验证的结果。"
          meta={[
            { label: '分类', value: '品牌 / 产品 / 编辑 / 指导' },
            { label: '时间跨度', value: '2023 — 2025' },
            { label: '合作形式', value: '全案 / 专项委托' },
            { label: '本页案例', value: '06 个完整案例' },
          ]}
        />

        <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex-1">
            <ProjectFilter active={category} onChange={setCategory} />
          </div>
          <div className="flex items-center gap-1 self-start rounded-full border border-paper-line bg-white p-1">
            <button
              type="button"
              onClick={() => setView('grid')}
              aria-pressed={view === 'grid'}
              aria-label="网格视图"
              className={cn(
                'inline-flex h-8 w-8 items-center justify-center rounded-full transition-colors',
                view === 'grid' ? 'bg-forest text-paper' : 'text-ink-muted hover:text-ink',
              )}
            >
              <LayoutGrid className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setView('list')}
              aria-pressed={view === 'list'}
              aria-label="列表视图"
              className={cn(
                'inline-flex h-8 w-8 items-center justify-center rounded-full transition-colors',
                view === 'list' ? 'bg-forest text-paper' : 'text-ink-muted hover:text-ink',
              )}
            >
              <Rows3 className="h-4 w-4" />
            </button>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="my-24 rounded-sm border border-dashed border-paper-line py-20 text-center">
            <p className="text-sm text-ink-muted">该分类暂无公开案例，可切换其他分类。</p>
          </div>
        ) : view === 'grid' ? (
          <div className="mt-10 grid gap-x-8 gap-y-14 sm:grid-cols-2">
            {filtered.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <ul className="mt-10 border-b border-paper-line">
            {filtered.map((project, index) => (
              <li key={project.slug}>
                <a
                  href={`#/work/${project.slug}`}
                  className="group grid grid-cols-1 items-center gap-4 border-t border-paper-line py-5 transition-colors hover:bg-white/70 md:grid-cols-12 md:gap-6 md:px-3"
                >
                  <span className="font-mono text-[11px] tracking-[0.18em] text-ink-muted md:col-span-1">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="cover-media hidden aspect-[16/10] rounded-sm bg-[#e7e2d5] md:col-span-2 md:block">
                    <img src={project.cover} alt="" className="h-full w-full object-cover" />
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="font-display text-2xl tracking-tight text-ink transition-colors group-hover:text-forest">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-[13px] text-ink-muted">{project.titleEn}</p>
                  </div>
                  <p className="text-[13px] leading-relaxed text-ink-muted md:col-span-3">{project.summary}</p>
                  <div className="flex items-center justify-between md:col-span-2 md:justify-end md:gap-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted">
                      {project.category}
                    </span>
                    <span className="font-mono text-[11px] tabular-nums text-ink-soft">{project.year}</span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-20 mb-4 flex flex-col items-start justify-between gap-4 border-t border-paper-line pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-ink-muted">没找到合适的案例？我也可以聊聊你的行业。</p>
          <a href={`mailto:hello@studiolin.design`} className="link-underline">
            发送项目简述
          </a>
        </div>
      </Container>
    </div>
  )
}
