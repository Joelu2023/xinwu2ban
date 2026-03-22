import SectionShell from '../ui/SectionShell'
import HomeSectionHeader from './HomeSectionHeader'

const bullets = [
  '本月课程学习与课后复盘',
  '小组共学讨论与心得输出',
  '企业实践课题推进',
  '优秀作业与案例分享',
] as const

export default function MonthlyFocus() {
  return (
    <SectionShell className="bg-brand-canvas">
      <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-2xl">
          <HomeSectionHeader
            eyebrow="本月"
            title="本月主题 / 当前重点"
            lead="班级运营节奏的可视化窗口。后续可接入课表、通知与小组任务，让「当下要做什么」一目了然。"
          />
        </div>
        <div className="shrink-0 md:pt-2">
          <span className="inline-flex items-center gap-2 rounded-sm border border-brand-accent/35 bg-brand-surface/90 px-4 py-2 text-[11px] tracking-[0.2em] text-brand-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-accent/80" />
            运营看板 · 占位
          </span>
        </div>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-12 lg:gap-8">
        <div className="home-card-quiet flex flex-col rounded-2xl border border-brand-border/80 bg-brand-surface/90 p-7 lg:col-span-7 lg:p-9">
          <p className="text-[10px] font-medium tracking-[0.35em] text-brand-accent">
            本月课程主题
          </p>
          <h3 className="mt-4 font-serif text-2xl font-semibold text-brand-primary md:text-[1.65rem]">
            利他经营与组织成长
          </h3>
          <p className="mt-5 max-w-xl text-sm leading-[1.85] text-brand-muted">
            以利他之心审视客户与组织关系，推动团队共识与协同落地。
          </p>
          <div className="home-placeholder mt-8 min-h-[140px] flex-1" />
        </div>

        <div className="flex flex-col gap-6 lg:col-span-5">
          <div className="home-card-quiet rounded-2xl border border-brand-border/80 bg-brand-surface/90 p-7 lg:p-8">
            <p className="text-[10px] font-medium tracking-[0.35em] text-brand-accent">
              当前学习重点
            </p>
            <ul className="mt-5 space-y-3.5 text-sm leading-relaxed text-brand-muted">
              {bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-accent/80"
                    aria-hidden
                  />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="home-card-quiet rounded-2xl border border-brand-border/80 bg-brand-surface/90 p-7 lg:p-8">
            <p className="text-[10px] font-medium tracking-[0.35em] text-brand-accent">
              小组共学任务
            </p>
            <p className="mt-4 text-sm leading-[1.85] text-brand-muted">
              各小组围绕本月主题完成一次结构化讨论，并输出一页纸心得摘要（占位）。
            </p>
          </div>
        </div>

        <div className="home-card-quiet rounded-2xl border border-brand-border/80 bg-brand-surface/90 p-7 lg:col-span-12 lg:p-9">
          <p className="text-[10px] font-medium tracking-[0.35em] text-brand-accent">
            优秀作业 / 优秀分享
          </p>
          <div className="mt-5 grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-center">
            <div className="home-placeholder aspect-video w-full md:aspect-auto md:min-h-[200px]" />
            <div>
              <p className="font-serif text-base text-brand-primary">
                预留展示位
              </p>
              <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                后续接入作业与分享库：封面、作者、摘要与延伸阅读，让优秀实践被看见、被复用。
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  )
}
