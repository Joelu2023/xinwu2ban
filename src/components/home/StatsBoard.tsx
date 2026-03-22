import SectionShell from '../ui/SectionShell'
import HomeSectionHeader from './HomeSectionHeader'
import { dashboardStats } from '../../data/placeholders'

export default function StatsBoard() {
  return (
    <SectionShell className="bg-brand-canvas pb-20 md:pb-28">
      <HomeSectionHeader
        align="center"
        eyebrow="足迹"
        title="班级数据看板"
        lead="轻量、温暖的数据呈现，记录学习平台的成长足迹。后续可接入真实统计，让「我们一起走了多远」可被感知。"
      />

      <div className="mx-auto mt-16 max-w-5xl">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-brand-border/80 bg-brand-border/50 sm:grid-cols-2 lg:grid-cols-3">
          {dashboardStats.map((s) => (
            <div
              key={s.label}
              className="bg-brand-surface/95 px-6 py-9 text-center md:px-8 md:py-10"
            >
              <p className="text-[11px] tracking-[0.2em] text-brand-muted">
                {s.label}
              </p>
              <p className="mt-4 font-serif text-4xl font-semibold tabular-nums text-brand-primary md:text-[2.75rem]">
                {s.value}
              </p>
              <p className="mx-auto mt-3 max-w-[14rem] text-xs leading-relaxed text-brand-muted/90">
                {s.hint}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  )
}
