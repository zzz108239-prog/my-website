import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'

import { Container, SectionHead } from '../components/studio/PageShell'
import { Badge } from '../components/ui/badge'
import { projectCategories, projects, type Project } from '../data/site'

export default function ProjectDetail({ project }: { project: Project }) {
  const currentIndex = projects.findIndex((item) => item.slug === project.slug)
  const nextProject = projects[(currentIndex + 1) % projects.length]
  const related = projects
    .filter((item) => item.slug !== project.slug && item.category === project.category)
    .concat(projects.filter((item) => item.slug !== project.slug && item.category !== project.category))
    .slice(0, 2)

  return (
    <article className="bg-paper">
      <Container>
        <div className="flex items-center justify-between border-b border-paper-line py-6">
          <Link to="/work" className="link-underline text-ink-muted hover:text-ink">
            <ArrowLeft className="h-4 w-4" />
            全部作品
          </Link>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
            Case {String(currentIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
          </span>
        </div>

        <header className="rise-in py-10 md:py-14">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="soft" className="tracking-[0.12em]">{project.category}</Badge>
            <span className="font-mono text-[11px] tracking-[0.16em] text-ink-muted">{project.year}</span>
            <span className="h-1 w-1 rounded-full bg-ink-muted/40" />
            <span className="text-[13px] text-ink-muted">{project.client}</span>
          </div>
          <h1 className="display-title mt-6 text-[clamp(2.4rem,6vw,4.6rem)] leading-[1.02]">{project.title}</h1>
          <p className="mt-3 font-mono text-[12px] uppercase tracking-[0.22em] text-ink-muted">
            {project.titleEn}
          </p>
          <p className="mt-7 max-w-2xl text-base leading-[1.85] text-ink-soft md:text-lg">{project.summary}</p>
        </header>
      </Container>

      <Container>
        <div className="cover-media aspect-[16/9] rounded-sm bg-[#e7e2d5]">
          <img src={project.cover} alt={project.coverAlt} className="h-full w-full object-cover" />
        </div>
        <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted">
          Fig. 01 — {project.titleEn} 主视觉
        </p>
      </Container>

      <Container>
        <div className="mt-14 grid gap-10 border-y border-paper-line py-10 md:grid-cols-12 md:gap-8">
          <dl className="grid grid-cols-2 gap-6 md:col-span-8 md:grid-cols-4">
            <div>
              <dt className="eyebrow">客户</dt>
              <dd className="mt-2 text-sm text-ink">{project.client}</dd>
            </div>
            <div>
              <dt className="eyebrow">角色</dt>
              <dd className="mt-2 text-sm leading-relaxed text-ink">{project.role}</dd>
            </div>
            <div>
              <dt className="eyebrow">年份</dt>
              <dd className="mt-2 text-sm tabular-nums text-ink">{project.year}</dd>
            </div>
            <div>
              <dt className="eyebrow">分类</dt>
              <dd className="mt-2 text-sm text-ink">{project.category}</dd>
            </div>
          </dl>
          <div className="md:col-span-4">
            <p className="eyebrow">服务内容</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.services.map((service) => (
                <li
                  key={service}
                  className="rounded-full border border-paper-line bg-white px-3 py-1 text-[11px] text-ink-soft"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <Container>
        <div className="grid gap-12 py-14 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <p className="eyebrow">01 / Brief</p>
            <h2 className="display-title mt-4 text-2xl leading-tight">项目背景与挑战</h2>
            <p className="mt-5 text-[15px] leading-[1.95] text-ink-soft">{project.challenge}</p>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="eyebrow">02 / Approach</p>
            <h2 className="display-title mt-4 text-2xl leading-tight">我做了什么</h2>
            <ol className="mt-6 divide-y divide-paper-line border-y border-paper-line">
              {project.approach.map((item, index) => (
                <li key={item} className="flex gap-5 py-5">
                  <span className="mt-0.5 font-mono text-[11px] tracking-[0.14em] text-ink-muted">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="text-[15px] leading-[1.85] text-ink-soft">{item}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>

      <Container>
        <div className="grid gap-5 sm:grid-cols-2">
          {project.gallery.map((shot) => (
            <figure key={shot.alt} className="group">
              <div className="cover-media aspect-[4/3] rounded-sm bg-[#e7e2d5]">
                <img src={shot.src} alt={shot.alt} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <figcaption className="mt-3 flex gap-3 text-[12px] leading-relaxed text-ink-muted">
                <span className="font-mono text-[10px] tracking-[0.14em]">Fig.</span>
                {shot.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>

      <Container>
        <div className="mt-16 rounded-sm border border-paper-line bg-white p-7 md:p-10">
          <p className="eyebrow">03 / Outcome</p>
          <h2 className="display-title mt-4 text-2xl leading-tight">结果与反馈</h2>
          <p className="mt-5 max-w-3xl text-[15px] leading-[1.95] text-ink-soft">{project.outcome}</p>
          <dl className="mt-8 grid gap-6 border-t border-paper-line pt-6 sm:grid-cols-3">
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <dt className="text-[12px] text-ink-muted">{metric.label}</dt>
                <dd className="mt-2 font-display text-3xl leading-none tabular-nums text-forest">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>

      <Container>
        <div className="mt-16 md:mt-20">
          <SectionHead index="→" label="Next case" title="继续浏览" />
          <Link
            to={`/work/${nextProject.slug}`}
            className="group mt-8 flex flex-col gap-6 border-t border-paper-line pt-6 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-muted">
                {nextProject.category} · {nextProject.year}
              </p>
              <h3 className="display-title mt-3 text-3xl tracking-tight transition-colors group-hover:text-forest md:text-4xl">
                {nextProject.title}
              </h3>
            </div>
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-paper-line text-ink transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-forest group-hover:bg-forest group-hover:text-paper">
              <ArrowRight className="h-5 w-5" />
            </span>
          </Link>

          <div className="mt-14 grid gap-8 border-t border-paper-line pt-8 sm:grid-cols-2">
            {related.map((item) => (
              <Link key={item.slug} to={`/work/${item.slug}`} className="group flex items-center gap-4">
                <div className="cover-media h-20 w-28 shrink-0 rounded-sm bg-[#e7e2d5]">
                  <img src={item.cover} alt="" className="h-full w-full object-cover" />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted">
                    {item.category}
                  </p>
                  <p className="mt-1 font-display text-lg text-ink transition-colors group-hover:text-forest">
                    {item.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-14 mb-6 flex flex-col items-start justify-between gap-4 rounded-sm bg-paper-deep p-6 sm:flex-row sm:items-center md:p-8">
            <div>
              <p className="font-display text-xl text-ink">想做一个类似 {project.category} 的项目？</p>
              <p className="mt-1 text-[13px] text-ink-muted">
                当前开放委托：{projectCategories.slice(1).join(' / ')}
              </p>
            </div>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm text-paper transition-transform duration-300 hover:-translate-y-0.5"
            >
              开始沟通
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </Container>
    </article>
  )
}
