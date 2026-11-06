import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Check, Clock } from 'lucide-react'

import { Container, PageIntro, SectionHead } from '../components/studio/PageShell'
import { skillGroups, tools, processSteps, services } from '../data/site'
import { cn } from '../lib/utils'

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = services[activeIndex]

  return (
    <div className="bg-paper">
      <Container>
        <PageIntro
          eyebrow="Services / 服务能力"
          title={
            <>
              从一句口号，
              <br />
              到一套语言。
            </>
          }
          lede="我以项目制工作，也接受长期陪跑。无论哪种方式，合作都从一次充分的对谈开始——先确认问题值得解决，再谈预算与时间。"
          meta={[
            { label: '起接规模', value: '¥60,000 起' },
            { label: '档期', value: '2026 Q1 有 1 个名额' },
            { label: '合作方式', value: '全案 / 专项 / 顾问' },
            { label: '平均周期', value: '4–14 周' },
          ]}
        />
      </Container>

      <Container>
        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <ul className="border-t border-paper-line">
              {services.map((service, index) => {
                const isActive = index === activeIndex
                return (
                  <li key={service.index}>
                    <button
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      aria-pressed={isActive}
                      className={cn(
                        'group flex w-full items-start justify-between gap-4 border-b border-paper-line px-3 py-6 text-left transition-colors duration-300',
                        isActive ? 'bg-white' : 'hover:bg-white/60',
                      )}
                    >
                      <span className="flex items-start gap-4">
                        <span className="mt-1.5 font-mono text-[11px] tracking-[0.16em] text-ink-muted">
                          {service.index}
                        </span>
                        <span>
                          <span
                            className={cn(
                              'block font-display text-2xl tracking-tight transition-colors',
                              isActive ? 'text-forest' : 'text-ink group-hover:text-forest',
                            )}
                          >
                            {service.title}
                          </span>
                          <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">
                            {service.en}
                          </span>
                        </span>
                      </span>
                      <span className="shrink-0 pt-1 font-mono text-[11px] text-ink-muted">{service.price}</span>
                    </button>
                  </li>
                )
              })}
            </ul>

            <div className="mt-8 rounded-sm bg-forest p-6 text-paper">
              <p className="font-display text-xl leading-snug">不确定适合哪一项？</p>
              <p className="mt-2 text-[13px] leading-relaxed text-paper/70">
                写下一段项目背景，我会在 48 小时内回复一个初步判断，不收费、不推销。
              </p>
              <Link
                to="/contact"
                className="group mt-5 inline-flex items-center gap-2 text-sm font-medium text-paper"
              >
                发送项目简述
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-sm border border-paper-line bg-white p-7 md:p-9">
              <div className="flex items-start justify-between gap-6 border-b border-paper-line pb-6">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
                    Service {active.index}
                  </p>
                  <h2 className="display-title mt-3 text-3xl leading-tight">{active.title}</h2>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-paper-deep px-3 py-1.5 font-mono text-[10px] tracking-[0.1em] text-ink-soft">
                  <Clock className="h-3 w-3" />
                  {active.duration}
                </span>
              </div>

              <p className="mt-6 text-[15px] leading-[1.9] text-ink-soft">{active.description}</p>

              <p className="eyebrow mt-8">交付内容</p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {active.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink-soft">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-forest-tint text-forest">
                      <Check className="h-3 w-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-paper-line pt-6">
                <div>
                  <p className="eyebrow">参考报价</p>
                  <p className="mt-2 font-display text-2xl tabular-nums text-ink">{active.price}</p>
                  <p className="mt-1 text-[11px] text-ink-muted">不含第三方费用（字体授权、印刷、拍摄）</p>
                </div>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm text-paper transition-transform duration-300 hover:-translate-y-0.5"
                >
                  咨询这项服务
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* 合作流程 */}
      <section className="border-y border-paper-line bg-white py-16 md:py-20">
        <Container>
          <SectionHead
            index="01"
            label="Process"
            title="四个阶段，十一周左右"
            description="每个阶段都有明确的交付物与确认节点，减少后期返工。"
          />
          <ol className="mt-12 grid gap-px overflow-hidden rounded-sm bg-paper-line sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <li key={step.step} className="group bg-paper p-6 transition-colors duration-300 hover:bg-paper-deep/70 md:p-7">
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-[11px] tracking-[0.16em] text-ink-muted">{step.step}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-forest">{step.note}</span>
                </div>
                <h3 className="mt-8 font-display text-xl tracking-tight text-ink">{step.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-ink-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* 技能工具 */}
      <section className="py-16 md:py-20">
        <Container>
          <SectionHead
            index="02"
            label="Capability"
            title="技能与工具"
            description="熟练度按近三年实际交付衡量，而不是按软件版本。"
          />
          <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="space-y-10 lg:col-span-7">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <div className="flex items-baseline justify-between border-b border-paper-line pb-3">
                    <h3 className="text-sm font-medium text-ink">{group.title}</h3>
                    <span className="eyebrow">{group.note}</span>
                  </div>
                  <ul className="mt-6 space-y-6">
                    {group.items.map((item) => (
                      <li key={item.name} className="group">
                        <div className="flex items-baseline justify-between gap-4">
                          <span className="text-[15px] text-ink-soft">{item.name}</span>
                          <span className="font-mono text-[11px] tabular-nums text-ink-muted">
                            {item.years} / {item.level}
                          </span>
                        </div>
                        <div className="mt-2 h-[3px] w-full overflow-hidden rounded-full bg-paper-deep">
                          <div
                            className="h-full rounded-full bg-forest transition-all duration-700 group-hover:bg-clay"
                            style={{ width: `${item.level}%` }}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="lg:col-span-5">
              <p className="eyebrow">Stack</p>
              <h3 className="mt-3 font-display text-2xl text-ink">日常工具</h3>
              <ul className="mt-6 border-t border-paper-line">
                {tools.map((tool) => (
                  <li
                    key={tool.name}
                    className="flex items-baseline justify-between border-b border-paper-line py-3.5 transition-colors hover:text-forest"
                  >
                    <span className="text-sm text-ink">{tool.name}</span>
                    <span className="text-[12px] text-ink-muted">{tool.note}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-[12px] leading-relaxed text-ink-muted">
                额外掌握：Webflow / Framer 上线、基础前端（React + Tailwind），使设计能直接交付为可用界面。
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
