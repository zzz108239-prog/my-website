import { Link } from 'react-router-dom'
import { ArrowUpRight, Award, MapPin, PenLine } from 'lucide-react'

import { Container, PageIntro, SectionHead } from '../components/studio/PageShell'
import { Marquee } from '../components/studio/Marquee'
import { experience, profile, stats, testimonials, tools } from '../data/site'

const awards = [
  { year: '2025', title: '亚太包装设计年鉴 收录', org: '《亚太包装设计年鉴》', note: '云栖茶事' },
  { year: '2024', title: '编辑设计金奖', org: '中国平面设计双年展', note: '盐 Salt 季刊' },
  { year: '2024', title: '年度体验设计提名', org: 'UX Design Awards', note: '北陆旅行 App' },
  { year: '2022', title: '品牌设计优异奖', org: 'Tokyo TDC 年度评审展', note: '谷拾面包' },
]

export default function About() {
  return (
    <div className="bg-paper">
      <Container>
        <PageIntro
          eyebrow="About / 关于我"
          title={
            <>
              设计是关于
              <br />
              如何被记住的事。
            </>
          }
          lede={profile.intro}
          meta={[
            { label: '姓名', value: profile.name },
            { label: '执业', value: `2014 年起 · ${new Date().getFullYear() - 2014} 年` },
            { label: '所在', value: '杭州 / 可远程' },
            { label: '协作', value: '独立 + 小团队' },
          ]}
        />
      </Container>

      <Container>
        <div className="grid gap-10 py-14 md:grid-cols-12 md:gap-12">
          <figure className="md:col-span-5">
            <div className="cover-media aspect-[4/5] rounded-sm bg-[#e7e2d5]">
              <img src={profile.avatar} alt="林知遥在工作室的肖像" className="h-full w-full object-cover" />
            </div>
            <figcaption className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted">
              <span>{profile.nameEn} · Portrait</span>
              <span>Hangzhou, 2025</span>
            </figcaption>
          </figure>

          <div className="md:col-span-6 md:col-start-7">
            <p className="eyebrow">A letter from me</p>
            <div className="mt-5 space-y-5 text-[15px] leading-[1.95] text-ink-soft">
              <p>
                我是在排版课室里学会看东西的。那时我替校刊做版式，第一次意识到：同样一段文字，行距多出两毫米，读者就多愿意再读一段。这个发现到现在仍然是我工作的底层逻辑——
                <span className="text-ink">先调整被阅读的方式，再谈风格。</span>
              </p>
              <p>
                2014 年我开始独立执业。最早三年做大量物料与包装，靠手感活着；后来在《城记》杂志做视觉编辑，学会了在有限页数里安排轻重；再后来进入数字产品，把纸面的节奏翻译成屏幕里的呼吸。
              </p>
              <p>
                现在的 Studio LIN 很小，通常是我加一到两位协作者。这样的规模让我能同时保持对细节的把控与对客户的面对面沟通。我不追求做出很多项目，只想每一个都值得放进这份作品集。
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-paper-line pt-6 text-[13px] text-ink-soft">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-ink-muted" /> {profile.location}
              </span>
              <span className="inline-flex items-center gap-2">
                <PenLine className="h-4 w-4 text-ink-muted" /> 每月写一篇设计笔记
              </span>
              <span className="inline-flex items-center gap-2">
                <Award className="h-4 w-4 text-ink-muted" /> 9 项行业收录与奖项
              </span>
            </div>

            <div className="mt-8 rounded-sm bg-white p-6 ring-1 ring-paper-line">
              <p className="font-display text-lg leading-snug text-ink">
                “如果一本书的留白让你呼吸顺畅，那就是我想做的设计。”
              </p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">
                Working principle · 01
              </p>
            </div>
          </div>
        </div>
      </Container>

      <Marquee
        items={['Brand', 'Editorial', 'Product', 'Art direction', 'Type', 'Print', 'Rhythm', 'Restraint']}
      />

      <section className="py-16 md:py-20">
        <Container>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="border-t border-paper-line pt-5">
                <p className="flex items-baseline gap-1">
                  <span className="font-display text-4xl tabular-nums text-ink">{item.value}</span>
                  <span className="text-xs text-ink-muted">{item.unit}</span>
                </p>
                <p className="mt-2 text-[12px] text-ink-muted">{item.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-paper-line bg-white py-16 md:py-20">
        <Container>
          <SectionHead
            index="01"
            label="Experience"
            title="工作经历"
            description="从版式编辑到独立设计室，十二年的路径可以概括为三件事：看得多想得少。"
          />
          <ol className="mt-12 divide-y divide-paper-line border-t border-paper-line">
            {experience.map((job) => (
              <li key={job.title} className="grid gap-4 py-8 md:grid-cols-12 md:gap-8">
                <p className="font-mono text-[11px] tracking-[0.16em] text-ink-muted md:col-span-2">
                  {job.period}
                </p>
                <div className="md:col-span-4">
                  <h3 className="text-lg font-medium text-ink">{job.title}</h3>
                  <p className="mt-1 text-[13px] text-ink-muted">
                    {job.role} · {job.location}
                  </p>
                </div>
                <div className="md:col-span-6">
                  <p className="text-sm leading-relaxed text-ink-soft">{job.description}</p>
                  <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1">
                    {job.highlights.map((item) => (
                      <li key={item} className="text-[12px] text-ink-muted">
                        · {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionHead
                index="02"
                label="Recognition"
                title="奖项与收录"
                description="感谢评审与编辑们的工作。"
              />
            </div>
            <ul className="divide-y divide-paper-line border-y border-paper-line lg:col-span-8">
              {awards.map((award) => (
                <li
                  key={award.title}
                  className="group grid grid-cols-1 gap-2 py-5 transition-colors hover:bg-white/60 sm:grid-cols-12 sm:items-baseline sm:gap-6 sm:px-3"
                >
                  <span className="font-mono text-[11px] tabular-nums text-ink-muted sm:col-span-2">
                    {award.year}
                  </span>
                  <span className="text-sm font-medium text-ink sm:col-span-5">{award.title}</span>
                  <span className="text-[13px] text-ink-muted sm:col-span-3">{award.org}</span>
                  <span className="text-[12px] text-ink-muted sm:col-span-2 sm:text-right">{award.note}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="border-t border-paper-line py-16 md:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="eyebrow">Tools</p>
              <h2 className="display-title mt-4 text-3xl">常用工具</h2>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-muted">
                工具只是手段。下面的软件构成我日常的完整工作流，从最初的白纸到最终的文件交付。
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:col-span-8">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="group rounded-sm border border-paper-line bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-forest/30 hover:shadow-[0_16px_26px_-22px_rgba(31,61,51,0.6)]"
                >
                  <p className="text-sm font-medium text-ink">{tool.name}</p>
                  <p className="mt-1 text-[11px] text-ink-muted">{tool.note}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-paper-line bg-white py-16 md:py-20">
        <Container>
          <SectionHead index="03" label="Kind words" title="合作方说" />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {testimonials.slice(0, 2).map((item) => (
              <figure key={item.name} className="rounded-sm border border-paper-line p-7">
                <blockquote className="font-display text-[19px] leading-[1.7] text-ink">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-paper-line pt-4 text-[13px] text-ink-muted">
                  <span className="text-ink">{item.name}</span> · {item.role}
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-paper-line pt-8 sm:flex-row sm:items-center">
            <p className="font-display text-2xl text-ink">想看看这些方法用在了什么项目上？</p>
            <Link
              to="/work"
              className="group inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-sm text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
            >
              浏览精选作品
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  )
}
