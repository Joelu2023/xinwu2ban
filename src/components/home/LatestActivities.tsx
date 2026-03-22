import { Link } from 'react-router-dom'
import SectionShell from '../ui/SectionShell'
import HomeSectionHeader from './HomeSectionHeader'
import { previewActivities } from '../../data/placeholders'

export default function LatestActivities() {
  return (
    <SectionShell className="border-t border-brand-border/60 bg-brand-surface">
      <HomeSectionHeader
        eyebrow="活动"
        title="最新活动"
        lead="新吴二班持续通过课程学习、读书分享、企业参访、小组共学和主题交流等方式，推动同学之间的深度连接与真实成长。每一次活动，不只是参与，更是认知升级、行动触发与成果沉淀的起点。"
      />

      <div className="mt-14 grid gap-8 sm:grid-cols-2">
        {previewActivities.map((a) => (
          <article
            key={a.title}
            className="home-card-quiet group flex flex-col rounded-2xl border border-brand-border/80 bg-brand-canvas/25 p-7 md:p-8"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="text-[10px] font-medium tracking-[0.3em] text-brand-accent">
                {a.tag}
              </span>
              <span
                className="h-px w-10 bg-brand-border transition-colors duration-300 group-hover:bg-brand-accent/40"
                aria-hidden
              />
            </div>
            <h3 className="mt-5 font-serif text-xl font-semibold text-brand-primary">
              {a.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-[1.85] text-brand-muted">
              {a.desc}
            </p>
            <div className="home-placeholder mt-6 h-32" />
          </article>
        ))}
      </div>

      <p className="mt-14 text-center">
        <Link
          to="/activities"
          className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-brand-secondary transition-colors hover:text-brand-primary"
        >
          <span className="h-px w-6 bg-brand-accent/60" aria-hidden />
          前往活动中心
          <span className="h-px w-6 bg-brand-accent/60" aria-hidden />
        </Link>
      </p>
    </SectionShell>
  )
}
