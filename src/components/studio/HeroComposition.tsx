import { Link } from 'react-router-dom'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'

import { profile, stats } from '../../data/site'
import { cn } from '../../lib/utils'

export function HeroComposition() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto w-full max-w-frame px-5 pb-16 pt-12 sm:px-8 md:pb-24 md:pt-16 lg:px-12">
        {/* 顶部竖标 */}
        <div className="flex items-start justify-between gap-6 border-b border-paper-line pb-6">
          <span className="eyebrow">Portfolio 2026 — Vol. 08</span>
          <span className="hidden max-w-[220px] text-right font-mono text-[10px] uppercase leading-relaxed tracking-[0.18em] text-ink-muted md:block">
            Brand identity · Digital product · Art direction
          </span>
        </div>

        <div className="grid gap-10 pt-10 lg:grid-cols-12 lg:gap-8 lg:pt-14">
          {/* 主标题 */}
          <div className="rise-in lg:col-span-7">
            <p className="flex items-center gap-3 text-sm text-ink-soft">
              <span className="h-px w-10 bg-ink/30" />
              {profile.name} · {profile.role}
            </p>

            <h1 className="display-title mt-6 text-[clamp(2.9rem,7.4vw,5.6rem)] leading-[0.98]">
              让品牌
              <br />
              有<span className="italic text-forest">呼吸</span>的
              <br />
              空间与界面
            </h1>

            <p className="mt-8 max-w-lg text-[15px] leading-[1.9] text-ink-soft md:text-base">
              {profile.valueProposition}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                to="/work"
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-forest px-7 text-sm font-medium text-paper transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest-soft hover:shadow-[0_18px_30px_-20px_rgba(31,61,51,0.9)]"
              >
                浏览精选作品
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                to="/contact"
                className="group inline-flex h-12 items-center gap-2 rounded-full border border-ink/20 px-7 text-sm font-medium text-ink transition-all duration-300 hover:border-ink hover:bg-ink hover:text-paper"
              >
                讨论一个项目
                <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </Link>
            </div>

            <dl className="mt-12 grid max-w-xl grid-cols-2 gap-x-6 gap-y-7 border-t border-paper-line pt-7 sm:grid-cols-4">
              {stats.map((item) => (
                <div key={item.label}>
                  <dt className="sr-only">{item.label}</dt>
                  <dd className="flex items-baseline gap-1">
                    <span className="font-display text-3xl tabular-nums text-ink">{item.value}</span>
                    <span className="text-[11px] text-ink-muted">{item.unit}</span>
                  </dd>
                  <p className="mt-1 text-[11px] leading-snug text-ink-muted">{item.label}</p>
                </div>
              ))}
            </dl>
          </div>

          {/* 头像 + 工作场景拼贴 */}
          <div className="relative lg:col-span-5">
            <div className="grid grid-cols-5 gap-3 sm:gap-4">
              <figure className="col-span-4 group relative">
                <div className="cover-media aspect-[4/5] rounded-sm bg-[#e6e1d4]">
                  <img
                    src={profile.workspace}
                    alt="林知遥的工作台：字体样本、打样稿与整理中的色卡"
                    className="h-full w-full object-cover"
                  />
                </div>
                <figcaption className="mt-2 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted">
                  <span>Workspace / Studio LIN</span>
                  <span>Fig. 01</span>
                </figcaption>
              </figure>

              <div className="col-span-1 flex flex-col justify-between gap-3">
                <figure className="group flex-1">
                  <div className="cover-media h-full min-h-[120px] rounded-sm bg-[#e3e7e1]">
                    <img
                      src={profile.avatar}
                      alt="林知遥在工作室自然光下的肖像"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </figure>
                <div className="rounded-sm border border-paper-line bg-white p-3 text-center">
                  <span className="font-mono text-[9px] uppercase leading-tight tracking-[0.14em] text-ink-muted">
                    Open for
                    <br />
                    2026 Q1
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-start gap-4 border-t border-paper-line pt-4">
              <span className="font-display text-2xl leading-none text-forest">“</span>
              <p className="text-[13px] leading-relaxed text-ink-soft">
                设计不是把东西做得更好看，而是让一个品牌终于能准确地介绍自己。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 底部装饰节奏线 */}
      <div className={cn('mx-auto w-full max-w-frame px-5 pb-6 sm:px-8 lg:px-12')}>
        <div className="flex items-end justify-between gap-2 border-b border-paper-line pb-3">
          {Array.from({ length: 24 }).map((_, index) => (
            <span
              key={index}
              className="w-px bg-ink/20"
              style={{ height: `${8 + ((index * 13) % 26)}px` }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
