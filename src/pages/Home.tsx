import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Mail } from 'lucide-react'

import { Container, SectionHead } from '../components/studio/PageShell'
import { HeroComposition } from '../components/studio/HeroComposition'
import { Marquee } from '../components/studio/Marquee'
import { ProjectCard } from '../components/studio/ProjectCard'
import { ProjectShowcase } from '../components/studio/ProjectShowcase'
import {
  articles,
  experience,
  profile,
  projects,
  services,
  skillGroups,
  testimonials,
} from '../data/site'

export default function Home() {
  const featured = projects.filter((project) => project.featured)
  const highlights = [projects[0], projects[2], projects[4]]

  return (
    <div className="bg-paper pb-4">
      <HeroComposition />

      <Marquee
        items={[
          '品牌识别',
          '数字产品',
          '编辑设计',
          '艺术指导',
          '设计系统',
          '包装与印刷',
          'Selected works 2014—2026',
        ]}
      />

      {/* 01 精选作品 */}
      <section id="work" className="py-16 md:py-24">
        <Container>
          <SectionHead
            index="01"
            label="Selected Work"
            title={
              <>
                精选作品
                <span className="ml-3 align-middle font-sans text-sm uppercase tracking-[0.2em] text-ink-muted">
                  / 2014—2026
                </span>
              </>
            }
            description="从茶品牌到山区旅行 App，每个项目都始于一个具体的问题。按分类筛选并切换展示方式，查看完整案例。"
            action={
              <Link to="/work" className="link-underline">
                查看全部 {projects.length} 个案例
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            }
          />
          <ProjectShowcase />

          <div className="mt-16 flex flex-col gap-5 border-y border-paper-line py-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="eyebrow">Featured · {featured.length} cases</p>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">
              横向滑动查看 →
            </span>
          </div>
          <div className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6">
            {featured.map((project) => (
              <Link
                key={project.slug}
                to={`/work/${project.slug}`}
                className="group w-[78%] shrink-0 snap-start sm:w-[340px]"
              >
                <div className="cover-media aspect-[16/11] rounded-sm bg-[#e7e2d5]">
                  <img
                    src={project.cover}
                    alt={project.coverAlt}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-3 flex items-baseline justify-between border-t border-paper-line pt-3">
                  <span className="font-display text-lg text-ink transition-colors group-hover:text-forest">
                    {project.title}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted">
                    {project.category}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 02 关于我 */}
      <section className="border-y border-paper-line bg-white py-16 md:py-24">
        <Container>
          <SectionHead
            index="02"
            label="About"
            title="在纸与屏之间，做克制的工作"
            description={profile.intro}
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <div className="grid gap-x-8 gap-y-6 sm:grid-cols-3">
                {[
                  { label: '现居', value: '杭州 · 莫干山路' },
                  { label: '执业', value: '2014 年至今' },
                  { label: '身份', value: '独立设计师' },
                ].map((item) => (
                  <div key={item.label} className="border-t border-paper-line pt-4">
                    <p className="eyebrow">{item.label}</p>
                    <p className="mt-2 text-sm text-ink">{item.value}</p>
                  </div>
                ))}
              </div>
              <p className="mt-10 text-[15px] leading-[1.95] text-ink-soft">
                我的方法很朴素：先花两周把问题问清楚，再用一条能被记住的视觉线索，贯穿品牌所有触点。我相信好设计需要时间发酵，所以每个季度最多只接两个完整项目。
              </p>
              <Link to="/about" className="link-underline mt-8">
                阅读完整介绍
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-3">
                <div className="cover-media col-span-2 aspect-[16/9] rounded-sm bg-[#e6e1d4]">
                  <img src={profile.workspace} alt="工作室桌面与设计样本" className="h-full w-full object-cover" />
                </div>
                <div className="cover-media aspect-square rounded-sm bg-[#e3e7e1]">
                  <img src={profile.avatar} alt="设计师肖像" className="h-full w-full object-cover" />
                </div>
                <div className="flex flex-col justify-between rounded-sm bg-forest p-5 text-paper">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper/70">Status</span>
                  <div>
                    <p className="font-display text-xl leading-snug">2026 年 Q1</p>
                    <p className="mt-2 text-xs leading-relaxed text-paper/70">
                      还有 1 个完整项目名额，接受品牌与产品委托。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 03 服务能力 */}
      <section className="py-16 md:py-24">
        <Container>
          <SectionHead
            index="03"
            label="Services"
            title="我能为品牌带来什么"
            description="四项合作方式，覆盖从一句口号到一整套可延展视觉语言的完整过程。"
            action={
              <Link to="/services" className="link-underline">
                服务细节与报价
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            }
          />
          <div className="mt-10">
            {services.map((service) => (
              <Link
                key={service.index}
                to="/services"
                className="group grid grid-cols-1 items-baseline gap-3 border-t border-paper-line py-7 transition-colors last:border-b hover:bg-white/60 md:grid-cols-12 md:gap-6 md:px-2"
              >
                <span className="font-mono text-[11px] tracking-[0.18em] text-ink-muted md:col-span-1">
                  {service.index}
                </span>
                <h3 className="font-display text-2xl tracking-tight text-ink transition-colors group-hover:text-forest md:col-span-4">
                  {service.title}
                  <span className="ml-3 font-sans text-[11px] uppercase tracking-[0.16em] text-ink-muted">
                    {service.en}
                  </span>
                </h3>
                <p className="text-sm leading-relaxed text-ink-muted md:col-span-5">{service.description}</p>
                <div className="flex items-center justify-between md:col-span-2 md:justify-end md:gap-6">
                  <span className="font-mono text-[11px] tracking-[0.1em] text-ink-soft">{service.price}</span>
                  <ArrowUpRight className="h-4 w-4 text-ink-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-forest" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 04 技能与经历 */}
      <section className="border-y border-paper-line bg-white py-16 md:py-24">
        <Container>
          <SectionHead
            index="04"
            label="Capability & Experience"
            title="能力地图与工作经历"
            description="十二年，从编辑设计进入品牌与产品。以下是目前的能力结构与主要经历。"
          />
          <div className="mt-12 grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              {skillGroups.map((group) => (
                <div key={group.title} className="mb-10 last:mb-0">
                  <div className="flex items-baseline justify-between border-b border-paper-line pb-3">
                    <h3 className="text-sm font-medium text-ink">{group.title}</h3>
                    <span className="eyebrow">{group.note}</span>
                  </div>
                  <ul className="mt-5 space-y-5">
                    {group.items.map((item) => (
                      <li key={item.name}>
                        <div className="flex items-baseline justify-between gap-4">
                          <span className="text-sm text-ink-soft">{item.name}</span>
                          <span className="font-mono text-[11px] tabular-nums text-ink-muted">{item.years}</span>
                        </div>
                        <div className="mt-2 h-px w-full bg-paper-line">
                          <div className="h-px bg-forest" style={{ width: `${item.level}%` }} />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="lg:col-span-7">
              <ol className="relative border-l border-paper-line pl-6">
                {experience.map((job) => (
                  <li key={job.title} className="relative pb-9 last:pb-0">
                    <span className="absolute -left-[25px] top-1.5 h-2 w-2 rounded-full border border-paper-line bg-paper ring-4 ring-white" />
                    <p className="font-mono text-[11px] tracking-[0.16em] text-ink-muted">{job.period}</p>
                    <h3 className="mt-2 text-lg font-medium text-ink">{job.title}</h3>
                    <p className="mt-1 text-[13px] text-ink-soft">
                      {job.role} · {job.location}
                    </p>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-muted">{job.description}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </section>

      {/* 05 客户评价 */}
      <section className="py-16 md:py-24">
        <Container>
          <SectionHead
            index="05"
            label="Testimonials"
            title="合作方怎么说"
            action={
              <Link to="/testimonials" className="link-underline">
                查看全部评价
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            }
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-paper-line bg-paper-line md:grid-cols-2">
            {testimonials.map((item, index) => (
              <figure key={item.name} className="flex h-full flex-col justify-between bg-paper p-7 md:p-9">
                <blockquote className="font-display text-[19px] leading-[1.65] tracking-tight text-ink md:text-[21px]">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-8 flex items-center justify-between border-t border-paper-line pt-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-forest-tint font-mono text-[11px] tracking-wider text-forest">
                      {item.initials}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-ink">{item.name}</p>
                      <p className="text-xs text-ink-muted">{item.role}</p>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      {/* 06 文章记录 */}
      <section className="border-t border-paper-line py-16 md:py-24">
        <Container>
          <SectionHead
            index="06"
            label="Journal"
            title="写作与思考"
            description="关于品牌方法、编辑版式与协作过程的笔记，每月更新一到两篇。"
            action={
              <Link to="/journal" className="link-underline">
                全部文章
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            }
          />
          <div className="mt-10 divide-y divide-paper-line border-b border-paper-line">
            {articles.map((article) => (
              <Link
                key={article.slug}
                to={`/journal/${article.slug}`}
                className="group flex flex-col gap-3 border-t border-paper-line py-6 sm:flex-row sm:items-center sm:gap-8"
              >
                <span className="w-24 shrink-0 font-mono text-[11px] tracking-[0.12em] text-ink-muted">
                  {article.date}
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-xl tracking-tight text-ink transition-colors group-hover:text-forest">
                    {article.title}
                  </h3>
                  <p className="mt-1 text-[13px] text-ink-muted sm:hidden">{article.excerpt}</p>
                </div>
                <span className="hidden max-w-sm flex-1 text-[13px] leading-relaxed text-ink-muted md:block">
                  {article.excerpt}
                </span>
                <span className="flex shrink-0 items-center gap-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted">
                    {article.category}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-ink-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-forest" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 联系 CTA */}
      <section className="pb-16 md:pb-24">
        <Container>
          <div className="relative overflow-hidden rounded-sm bg-forest px-6 py-14 text-paper md:px-14 md:py-20">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-paper/10" />
            <div className="pointer-events-none absolute -right-10 top-10 h-52 w-52 rounded-full border border-paper/10" />
            <div className="grid gap-10 md:grid-cols-12">
              <div className="md:col-span-7">
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/60">
                  Let’s work together
                </span>
                <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.2rem)] leading-[1.08] tracking-tightest">
                  有一个项目想聊聊？
                  <br />
                  写信给我。
                </h2>
                <p className="mt-6 max-w-md text-sm leading-relaxed text-paper/70">{profile.availability}</p>
              </div>
              <div className="flex flex-col justify-end gap-4 md:col-span-5 md:items-end">
                <a
                  href={`mailto:${profile.email}`}
                  className="group inline-flex items-center gap-2 text-lg text-paper transition-opacity hover:opacity-80"
                >
                  <Mail className="h-4 w-4" />
                  {profile.email}
                </a>
                <Link
                  to="/contact"
                  className="group inline-flex h-12 items-center gap-2 rounded-full bg-paper px-7 text-sm font-medium text-ink transition-transform duration-300 hover:-translate-y-0.5"
                >
                  填写项目咨询表
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 代表作品索引 */}
      <section className="pb-16 md:pb-24">
        <Container>
          <div className="flex items-center justify-between border-t border-paper-line pt-6">
            <p className="eyebrow">Representative works</p>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">
              03 / Highlights
            </span>
          </div>
          <div className="mt-8 grid gap-10 md:grid-cols-3">
            {highlights.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </section>
    </div>
  )
}
