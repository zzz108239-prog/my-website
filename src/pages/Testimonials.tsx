import { Link } from 'react-router-dom'
import { ArrowUpRight, Quote } from 'lucide-react'

import { Container, PageIntro, SectionHead } from '../components/studio/PageShell'
import { testimonials, projects } from '../data/site'

export default function Testimonials() {
  return (
    <div className="bg-paper">
      <Container>
        <PageIntro
          eyebrow="Testimonials / 客户评价"
          title={
            <>
              合作结束后，
              <br />
              他们怎么说。
            </>
          }
          lede="下面的话来自真实的项目结项访谈，保留原话，未做修辞润色。我喜欢把客户的反馈当作项目的第二次设计：它告诉我这套语言是否真的被用起来了。"
          meta={[
            { label: '评价来源', value: '结项访谈 04 段' },
            { label: '覆盖行业', value: '茶饮 / 文旅 / 出版 / 酒店' },
            { label: '长期客户', value: '11 家' },
            { label: '返约比例', value: '约 62%' },
          ]}
        />
      </Container>

      <Container>
        <div className="grid gap-6 py-12 md:gap-8 lg:grid-cols-2">
          {testimonials.map((item, index) => {
            const project = projects.find((entry) => item.project.includes(entry.category)) ?? projects[index]
            return (
              <figure
                key={item.name}
                className="group flex flex-col justify-between rounded-sm border border-paper-line bg-white p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-forest/30 hover:shadow-[0_24px_40px_-32px_rgba(31,61,51,0.65)] md:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <Quote className="h-6 w-6 text-forest/30 transition-colors group-hover:text-forest/60" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">
                      {String(index + 1).padStart(2, '0')} / 04
                    </span>
                  </div>
                  <blockquote className="mt-6 font-display text-[20px] leading-[1.7] tracking-tight text-ink md:text-[22px]">
                    {item.quote}
                  </blockquote>
                </div>
                <figcaption className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-paper-line pt-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-forest-tint font-mono text-[11px] tracking-wider text-forest">
                      {item.initials}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-ink">{item.name}</p>
                      <p className="text-xs text-ink-muted">{item.role}</p>
                    </div>
                  </div>
                  <Link
                    to={`/work/${project.slug}`}
                    className="link-underline text-[12px] text-ink-muted hover:text-forest"
                  >
                    {item.project}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </figcaption>
              </figure>
            )
          })}
        </div>
      </Container>

      <Container>
        <div className="mb-6 border-t border-paper-line pt-8">
          <SectionHead
            index="—"
            label="Working together"
            title="我更在意合作的过程"
            description="好的结果往往来自清晰的分工与频繁的校准。以下是我在合作中坚持的三件事。"
          />
          <div className="mt-10 grid gap-px overflow-hidden rounded-sm bg-paper-line sm:grid-cols-3">
            {[
              { title: '透明报价', text: '报价列出每一项工作与预计工时，不设隐藏条款。' },
              { title: '双周同步', text: '每两周一次线上或线下评审，任何方向调整都在会上确认。' },
              { title: '源文件归属', text: '结项后交付全部源文件与规范，客户无需再依赖我。' },
            ].map((item) => (
              <div key={item.title} className="bg-white p-6">
                <p className="text-sm font-medium text-ink">{item.title}</p>
                <p className="mt-2 text-[13px] leading-relaxed text-ink-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}
