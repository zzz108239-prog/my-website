import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'

import { Container } from '../components/studio/PageShell'
import { articles, findArticle } from '../data/site'

export default function ArticleDetail({ article }: { article: NonNullable<ReturnType<typeof findArticle>> }) {
  const index = articles.findIndex((item) => item.slug === article.slug)
  const next = articles[(index + 1) % articles.length]

  return (
    <div className="bg-paper">
      <Container>
        <div className="flex items-center justify-between border-b border-paper-line py-6">
          <Link to="/journal" className="link-underline text-ink-muted hover:text-ink">
            <ArrowLeft className="h-4 w-4" />
            全部文章
          </Link>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
            Journal {String(index + 1).padStart(2, '0')} / {String(articles.length).padStart(2, '0')}
          </span>
        </div>

        <article className="mx-auto max-w-3xl py-12 md:py-16">
          <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted">
            <span className="rounded-full bg-forest-tint px-2.5 py-1 text-forest">{article.category}</span>
            <span>{article.date}</span>
            <span>· {article.readingTime}</span>
          </div>
          <h1 className="display-title mt-6 text-[clamp(2rem,4.4vw,3.2rem)] leading-[1.12]">{article.title}</h1>
          <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-muted">{article.titleEn}</p>
          <p className="mt-7 border-l-2 border-forest/30 pl-5 text-[15px] leading-[1.9] text-ink-soft">
            {article.excerpt}
          </p>

          <div className="cover-media mt-9 aspect-[16/9] rounded-sm bg-[#e7e2d5]">
            <img src={article.cover} alt={article.title} className="h-full w-full object-cover" />
          </div>

          <div className="mt-10 space-y-6 text-[16px] leading-[2] text-ink-soft">
            {article.body.map((paragraph) => (
              <p key={paragraph.slice(0, 12)}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-12 flex items-center justify-between border-y border-paper-line py-5">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">
              文 / 林知遥 · Studio LIN
            </span>
            <span className="text-[12px] text-ink-muted">最后编辑 {article.date}</span>
          </div>
        </article>

        <div className="mb-6 border-t border-paper-line pt-8">
          <p className="eyebrow">Read next</p>
          <Link to={`/journal/${next.slug}`} className="group mt-4 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted">
                {next.category} · {next.readingTime}
              </p>
              <h2 className="display-title mt-2 text-2xl tracking-tight transition-colors group-hover:text-forest md:text-3xl">
                {next.title}
              </h2>
            </div>
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-paper-line text-ink transition-all duration-300 group-hover:border-forest group-hover:bg-forest group-hover:text-paper">
              <ArrowUpRight className="h-5 w-5" />
            </span>
          </Link>
        </div>
      </Container>
    </div>
  )
}
