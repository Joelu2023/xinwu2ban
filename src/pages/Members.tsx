import PageIntro from '../components/ui/PageIntro'
import SectionShell from '../components/ui/SectionShell'
import InnerSectionTitle from '../components/ui/InnerSectionTitle'
import { previewMembers } from '../data/placeholders'

const keywords = [
  '利他经营',
  '组织升级',
  '接班成长',
  '企业文化',
  '精益经营',
  '团队协同',
  '数字化转型',
] as const

const roster = [
  ...previewMembers,
  {
    name: '同学姓名',
    company: '示例服务公司',
    industry: '专业服务',
    keywords: ['知行合一', '长期主义'],
  },
] as const

export default function Members() {
  return (
    <article>
      <PageIntro
        eyebrow="同行"
        title="成员风采"
        lead="新吴二班的价值，不只在课程，也在同学。每一位同学，都是一个独特的经营者、实践者与成长者。在这里，我们看见彼此的企业、彼此的特点、彼此的困惑，也看见彼此的力量与可能性。"
      />

      <SectionShell className="bg-brand-canvas">
        <InnerSectionTitle
          kicker="名录"
          title="成员名录"
          subtitle="以下为占位卡片。后续可接入成员中心与可见范围，让展示服务于连接，而非攀比。"
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {roster.map((m, idx) => (
            <article
              key={`${m.name}-${idx}`}
              className="home-card-quiet rounded-2xl p-7 md:p-8"
            >
              <div className="flex gap-5">
                <div className="flex h-[4.25rem] w-[4.25rem] shrink-0 items-center justify-center rounded-full border-2 border-brand-border/90 bg-brand-canvas/80 font-serif text-sm text-brand-muted ring-2 ring-brand-accent/15 ring-offset-2 ring-offset-brand-surface">
                  像
                </div>
                <div className="min-w-0">
                  <p className="text-[15px] font-medium text-brand-text">{m.name}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-brand-muted">
                    {m.company}
                  </p>
                  <p className="mt-2 text-[11px] tracking-[0.12em] text-brand-accent/95">
                    {m.industry}
                  </p>
                  <p className="mt-3 text-xs text-brand-muted">职务角色 · 占位</p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-1.5 border-t border-brand-border/50 pt-6">
                {m.keywords.map((k) => (
                  <span
                    key={k}
                    className="rounded-sm border border-brand-border/80 bg-brand-canvas/50 px-2 py-0.5 text-[11px] text-brand-secondary"
                  >
                    {k}
                  </span>
                ))}
                <span className="rounded-sm border border-dashed border-brand-border/80 px-2 py-0.5 text-[11px] text-brand-muted">
                  个性标签
                </span>
              </div>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="border-t border-brand-border/60 bg-brand-surface">
        <InnerSectionTitle
          kicker="企业"
          title="企业介绍"
          subtitle="企业一页纸、主营业务、发展阶段与当下课题，将在此以图文形式沉淀。建议后续与成果案例库互通，避免信息重复维护。"
        />
        <div className="home-placeholder mt-12 min-h-[12rem] md:min-h-[14rem]" />
      </SectionShell>

      <SectionShell className="bg-brand-canvas">
        <InnerSectionTitle
          kicker="关键词"
          title="成长关键词"
          subtitle="关键词用于「相互识别」，不是贴标签。同一关键词下，每个人的实践路径可能完全不同。"
        />
        <ul className="mt-10 flex flex-wrap gap-2.5">
          {keywords.map((k) => (
            <li key={k}>
              <span className="inline-block rounded-sm border border-brand-border/90 bg-brand-surface/90 px-3.5 py-2 text-sm text-brand-secondary">
                {k}
              </span>
            </li>
          ))}
        </ul>
      </SectionShell>

      <SectionShell className="border-t border-brand-border/60 bg-brand-surface">
        <InnerSectionTitle
          kicker="故事"
          title="同学故事"
          subtitle="故事不必宏大，但必须真实：困惑、行动、改变与仍在路上的部分，同样珍贵。"
        />
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <article className="home-card-quiet rounded-2xl p-8 md:p-9">
            <h3 className="font-serif text-lg font-semibold text-brand-primary">
              故事标题 · 占位
            </h3>
            <p className="inner-prose mt-4 text-sm leading-[2] text-brand-muted md:text-[15px]">
              从困惑到行动，从行动到改变——同学故事用于呈现真实心路与实践路径（正文占位）。
            </p>
            <div className="home-placeholder mt-8 min-h-[9rem]" />
          </article>
          <article className="home-card-quiet rounded-2xl p-8 md:p-9">
            <h3 className="font-serif text-lg font-semibold text-brand-primary">
              故事标题 · 占位
            </h3>
            <p className="inner-prose mt-4 text-sm leading-[2] text-brand-muted md:text-[15px]">
              彼此看见的前提是愿意打开经营现场；彼此成就的基础是持续的利他分享（正文占位）。
            </p>
            <div className="home-placeholder mt-8 min-h-[9rem]" />
          </article>
        </div>
        <figure className="mx-auto mt-16 max-w-xl border-t border-brand-border/70 pt-12 text-center">
          <blockquote className="font-serif text-base leading-[1.9] text-brand-primary md:text-lg">
            彼此看见，才能彼此理解；彼此成就，才能共同成长。
          </blockquote>
        </figure>
      </SectionShell>
    </article>
  )
}
