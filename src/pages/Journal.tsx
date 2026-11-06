import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

import { Container, PageIntro } from '../components/studio/PageShell'
import { articles } from '../data/site'
import { cn } from '../lib/utils'

export default function Journal() {
  const categories = useMemo(() => ['全部', ...Array.from(new Set(articles.map((item) => item.category)))], [])
  const [category, setCategory] = useState('全部')

  const filtered = category === '全部' ? articles : articles.filter((item) => item.category === category)
  const [lead, ...rest] = filtered

  return (
    <div className="bg-paper">
      <Container>
        <PageIntro
          eyebrow="Journal / 文章记录"
          title={
            <>
              设计笔记
              <span className="ml-4 align-middle font-sans text-base uppercase tracking-[0.2em] text-ink-muted">
                {articles.length} notes
              </span>
            </>
          }
          lede="写作是我整理判断的方式。这里的文章多来自真实项目中的复盘：哪些决定做对了，哪些地方当时就应该停下来。"
          meta={[
            { label: '更新', value: '每月 1–2 篇' },
            { label: '题材', value: '品牌 / 编辑 / 产品' },
            { label: '阅读时长', value: '6–10 分钟' },
            { label: '订阅', value: '邮件通讯 · 低频' },
          ]}
        />

        <div className="mt-8 flex flex-wrap gap-2 border-b border-paper-line pb-4">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              aria-pressed={category === item}
              className={cn(
                'rounded-full px-4 py-2 text-[13px] transition-colors',
                category === item
                  ? 'bg-forest text-paper'
                  : 'text-ink-muted hover:bg-white hover:text-ink',
              )}
            >
              {item}
            </button>
          ))}
        </div>

        {lead ? (
          <Link to={`/journal/${lead.slug}`} className="group mt-10 grid gap-8 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <div className="cover-media aspect-[16/10] rounded-sm bg-[#e7e2d5]">
                <img src={lead.cover} alt={lead.title} className="h-full w-full object-cover" />
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted">
                <span className="rounded-full bg-forest-tint px-2.5 py-1 text-forest">{lead.category}</span>
                <span>{lead.date}</span>
                <span>· {lead.readingTime}</span>
              </div>
              <h2 className="display-title mt-5 text-[clamp(1.7rem,3vw,2.4rem)] leading-tight transition-colors group-hover:text-forest">
                {lead.title}
              </h2>
              <p className="mt-4 text-sm leading-[1.9] text-ink-soft">{lead.excerpt}</p>
              <span className="link-underline mt-6">
                阅读全文
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        ) : (
          <p className="mt-16 rounded-sm border border-dashed border-paper-line py-16 text-center text-sm text-ink-muted">
            该分类下暂时没有文章。
          </p>
        )}

        <ul className="mt-14 mb-6 divide-y divide-paper-line border-y border-paper-line">
          {rest.map((article) => (
            <li key={article.slug}>
              <Link to={`/journal/${article.slug}`} className="group grid gap-4 py-6 sm:grid-cols-12 sm:items-center">
                <div className="cover-media aspect-[16/10] rounded-sm bg-[#e7e2d5] sm:col-span-3">
                  <img src={article.cover} alt="" loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="sm:col-span-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted">
                    {article.category} · {article.date}
                  </p>
                  <h3 className="mt-2 font-display text-xl tracking-tight text-ink transition-colors group-hover:text-forest">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-ink-muted">{article.excerpt}</p>
                </div>
                <div className="flex items-center justify-between sm:col-span-3 sm:justify-end sm:gap-4">
                  <span className="font-mono text-[11px] text-ink-muted">{article.readingTime}</span>
                  <ArrowUpRight className="h-4 w-4 text-ink-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-forest" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  )
}
