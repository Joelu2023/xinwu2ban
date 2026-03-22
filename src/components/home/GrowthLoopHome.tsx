import SectionShell from '../ui/SectionShell'
import HomeSectionHeader from './HomeSectionHeader'

const phases = [
  {
    year: '第一年',
    title: '认知扎根',
    body: '建立经营哲学底座，学习盛和塾核心理念，养成复盘与分享习惯，建立班级连接与信任。',
  },
  {
    year: '第二年',
    title: '经营实战',
    body: '将理念带入企业经营，推动管理实践，打通团队协作，做出真实改变。',
  },
  {
    year: '第三年',
    title: '成果跃迁',
    body: '输出案例、形成方法论、放大个人与企业影响力，完成三年成果沉淀。',
  },
] as const

export default function GrowthLoopHome() {
  return (
    <SectionShell className="border-t border-brand-border/60 bg-brand-surface">
      <HomeSectionHeader
        eyebrow="三年"
        title="三年成长闭环"
        lead="从学理念，到做实践，到出成果，形成真正可持续的成长闭环。"
      />

      <div className="relative mt-16 md:mt-20">
        <div
          className="pointer-events-none absolute left-0 right-0 top-[2.25rem] hidden h-px bg-gradient-to-r from-brand-border via-brand-accent/35 to-brand-border md:block"
          aria-hidden
        />
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {phases.map((p, i) => (
            <article
              key={p.year}
              className="home-card-quiet relative rounded-2xl border border-brand-border/80 bg-brand-canvas/35 p-7 md:p-8"
            >
              <div
                className="absolute left-0 right-0 top-0 h-[3px] rounded-t-2xl bg-brand-accent/70"
                aria-hidden
              />
              <div className="flex items-baseline justify-between gap-3">
                <p className="text-[10px] font-medium tracking-[0.35em] text-brand-accent">
                  {p.year}
                </p>
                <span
                  className="font-serif text-4xl font-semibold tabular-nums text-brand-border/80"
                  aria-hidden
                >
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-serif text-xl font-semibold tracking-wide text-brand-primary">
                {p.title}
              </h3>
              <p className="mt-4 text-sm leading-[1.85] text-brand-muted">{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  )
}
