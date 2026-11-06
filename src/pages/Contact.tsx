import { useState } from 'react'
import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react'
import { toast } from 'sonner'

import { Container, PageIntro } from '../components/studio/PageShell'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import { profile, projects } from '../data/site'
import { cn } from '../lib/utils'

type FormState = {
  name: string
  email: string
  company: string
  project: string
  budget: string
  timeline: string
  message: string
}

const budgets = ['¥6–10 万', '¥10–15 万', '¥15 万以上', '月度合作']
const timelines = ['1 个月内启动', '1–2 个月内', '2 个月后', '尚未确定']

const emptyForm: FormState = {
  name: '',
  email: '',
  company: '',
  project: '',
  budget: budgets[1],
  timeline: timelines[1],
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState<FormState>(emptyForm)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [submitted, setSubmitted] = useState<{ name: string; email: string; project: string; budget: string; message: string } | null>(null)

  const update = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }))
    setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors: Partial<Record<keyof FormState, string>> = {}
    if (form.name.trim().length < 2) nextErrors.name = '请填写你的称呼，至少 2 个字'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) nextErrors.email = '请填写有效的邮箱地址'
    if (!form.project) nextErrors.project = '请选择项目类型，方便我判断是否合适'
    if (form.message.trim().length < 20) nextErrors.message = '请用至少 20 个字简单描述项目背景'

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      toast.error('还有几项需要补充')
      return
    }

    setSubmitted({
      name: form.name.trim(),
      email: form.email.trim(),
      project: form.project,
      budget: form.budget,
      message: form.message.trim(),
    })
    toast.success('咨询已记录，我会在 48 小时内回复')
  }

  return (
    <div className="bg-paper">
      <Container>
        <PageIntro
          eyebrow="Contact / 联系"
          title={
            <>
              说说你的项目，
              <br />
              我们开始对话。
            </>
          }
          lede="填写下方表格，或用邮件直接联系我。每条咨询我都会亲自阅读，48 小时内给出一个诚实的初步判断——包括可能不适合的情况。"
        />

        <div className="grid gap-12 py-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="rounded-sm border border-forest/20 bg-white p-7 md:p-9">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-forest">
                  Enquiry received
                </p>
                <h2 className="display-title mt-3 text-3xl leading-tight">谢谢，{submitted.name}。</h2>
                <p className="mt-4 text-sm leading-[1.9] text-ink-soft">
                  我已收到你关于「{submitted.project}」的咨询。以下是我这边的初步记录，你可以在邮件正文外补充更多背景。
                </p>
                <dl className="mt-7 divide-y divide-paper-line border-y border-paper-line text-sm">
                  <div className="flex justify-between gap-4 py-3">
                    <dt className="text-ink-muted">联系邮箱</dt>
                    <dd className="text-ink">{submitted.email}</dd>
                  </div>
                  <div className="flex justify-between gap-4 py-3">
                    <dt className="text-ink-muted">项目类型</dt>
                    <dd className="text-ink">{submitted.project}</dd>
                  </div>
                  <div className="flex justify-between gap-4 py-3">
                    <dt className="text-ink-muted">预算区间</dt>
                    <dd className="text-ink">{submitted.budget}</dd>
                  </div>
                </dl>
                <p className="mt-6 border-l-2 border-paper-line pl-4 text-[13px] leading-relaxed text-ink-muted">
                  “{submitted.message}”
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSubmitted(null)
                      setForm(emptyForm)
                    }}
                  >
                    再提交一条
                  </Button>
                  <Button asChild>
                    <a href={`mailto:${profile.email}?subject=${encodeURIComponent(`项目咨询：${submitted.project}`)}`}>
                      同时发一封邮件
                      <Send className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={submit} noValidate className="rounded-sm border border-paper-line bg-white p-6 md:p-9">
                <div className="flex items-center justify-between border-b border-paper-line pb-5">
                  <h2 className="font-display text-xl text-ink">项目咨询表</h2>
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted">
                    ~ 3 分钟
                  </span>
                </div>

                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-[13px] font-medium text-ink">
                      称呼 <span className="text-clay">*</span>
                    </span>
                    <Input
                      value={form.name}
                      onChange={(event) => update('name', event.target.value)}
                      placeholder="例如：周青"
                      aria-invalid={Boolean(errors.name)}
                      className={cn(errors.name && 'border-clay/60 focus-visible:border-clay focus-visible:ring-clay/15')}
                    />
                    {errors.name ? <span className="mt-1.5 block text-[11px] text-clay">{errors.name}</span> : null}
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-[13px] font-medium text-ink">
                      邮箱 <span className="text-clay">*</span>
                    </span>
                    <Input
                      type="email"
                      value={form.email}
                      onChange={(event) => update('email', event.target.value)}
                      placeholder="you@company.com"
                      aria-invalid={Boolean(errors.email)}
                      className={cn(errors.email && 'border-clay/60 focus-visible:border-clay focus-visible:ring-clay/15')}
                    />
                    {errors.email ? <span className="mt-1.5 block text-[11px] text-clay">{errors.email}</span> : null}
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="mb-2 block text-[13px] font-medium text-ink">品牌 / 公司</span>
                    <Input
                      value={form.company}
                      onChange={(event) => update('company', event.target.value)}
                      placeholder="例如：云栖茶事（可留空）"
                    />
                  </label>
                </div>

                <fieldset className="mt-7">
                  <legend className="mb-3 text-[13px] font-medium text-ink">
                    项目类型 <span className="text-clay">*</span>
                  </legend>
                  <div className="flex flex-wrap gap-2">
                    {[...new Set(projects.map((project) => project.category))].map((category) => (
                      <button
                        key={category}
                        type="button"
                        onClick={() => update('project', category)}
                        aria-pressed={form.project === category}
                        className={cn(
                          'rounded-full border px-4 py-2 text-[13px] transition-all duration-300',
                          form.project === category
                            ? 'border-forest bg-forest text-paper'
                            : 'border-paper-line bg-paper/60 text-ink-soft hover:border-ink/30 hover:text-ink',
                        )}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                  {errors.project ? <span className="mt-2 block text-[11px] text-clay">{errors.project}</span> : null}
                </fieldset>

                <div className="mt-7 grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-[13px] font-medium text-ink">预算区间</span>
                    <div className="flex flex-wrap gap-2">
                      {budgets.map((budget) => (
                        <button
                          key={budget}
                          type="button"
                          onClick={() => update('budget', budget)}
                          aria-pressed={form.budget === budget}
                          className={cn(
                            'rounded-full border px-3 py-1.5 text-[12px] transition-colors',
                            form.budget === budget
                              ? 'border-forest bg-forest-tint text-forest'
                              : 'border-paper-line text-ink-muted hover:text-ink',
                          )}
                        >
                          {budget}
                        </button>
                      ))}
                    </div>
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-[13px] font-medium text-ink">期望启动时间</span>
                    <div className="flex flex-wrap gap-2">
                      {timelines.map((timeline) => (
                        <button
                          key={timeline}
                          type="button"
                          onClick={() => update('timeline', timeline)}
                          aria-pressed={form.timeline === timeline}
                          className={cn(
                            'rounded-full border px-3 py-1.5 text-[12px] transition-colors',
                            form.timeline === timeline
                              ? 'border-forest bg-forest-tint text-forest'
                              : 'border-paper-line text-ink-muted hover:text-ink',
                          )}
                        >
                          {timeline}
                        </button>
                      ))}
                    </div>
                  </label>
                </div>

                <label className="mt-7 block">
                  <span className="mb-2 flex items-center justify-between text-[13px] font-medium text-ink">
                    项目简述 <span className="text-clay">*</span>
                    <span className="font-mono text-[10px] tracking-[0.1em] text-ink-muted">
                      {form.message.trim().length} / 20 字起
                    </span>
                  </span>
                  <Textarea
                    value={form.message}
                    onChange={(event) => update('message', event.target.value)}
                    placeholder="我们在做什么、目前遇到了什么问题、为什么想找外部设计师……写 3–5 句就好。"
                    aria-invalid={Boolean(errors.message)}
                    className={cn(errors.message && 'border-clay/60 focus-visible:border-clay focus-visible:ring-clay/15')}
                  />
                  {errors.message ? <span className="mt-1.5 block text-[11px] text-clay">{errors.message}</span> : null}
                </label>

                <div className="mt-7 flex flex-col gap-3 border-t border-paper-line pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-[11px] leading-relaxed text-ink-muted">
                    表单内容仅用于回复本次咨询，不会用于任何营销用途。
                  </p>
                  <Button type="submit" className="group shrink-0">
                    提交咨询
                    <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Button>
                </div>
              </form>
            )}
          </div>

          <aside className="lg:col-span-5">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-sm bg-forest p-7 text-paper">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/60">Direct</p>
                <a
                  href={`mailto:${profile.email}`}
                  className="mt-4 flex items-center gap-2 font-display text-xl transition-opacity hover:opacity-80"
                >
                  <Mail className="h-4 w-4" />
                  {profile.email}
                </a>
                <p className="mt-5 flex items-center gap-2 text-sm text-paper/80">
                  <Phone className="h-4 w-4" /> {profile.phone}
                </p>
                <p className="mt-2 flex items-center gap-2 text-sm text-paper/80">
                  <MapPin className="h-4 w-4" /> {profile.location}
                </p>
                <p className="mt-2 flex items-center gap-2 text-sm text-paper/80">
                  <Clock className="h-4 w-4" /> 工作日 09:30 — 18:30
                </p>
                <p className="mt-6 border-t border-paper/15 pt-4 text-[12px] leading-relaxed text-paper/70">
                  {profile.availability}
                </p>
              </div>

              <div className="rounded-sm border border-paper-line bg-white p-6">
                <p className="eyebrow">在写信之前</p>
                <ul className="mt-4 space-y-3 text-[13px] leading-relaxed text-ink-soft">
                  {[
                    '预算在 ¥60,000 以上的项目与我日常承接节奏更匹配。',
                    '如果是时间很紧的项目，请在表格里说明，我会尽快给出是否可行。',
                    '我通常会拒绝「先出几个方案看看」的合作方式，请理解。',
                  ].map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-forest" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </div>
  )
}
