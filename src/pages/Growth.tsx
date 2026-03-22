import PageIntro from '../components/ui/PageIntro'
import SectionShell from '../components/ui/SectionShell'

const phases = [
  {
    n: '一',
    title: '第一年｜认知扎根',
    goal: '建立经营哲学与学习习惯，形成班级信任基础。',
    focus: [
      '建立经营哲学底座',
      '学习盛和塾核心理念',
      '养成复盘与分享习惯',
      '建立班级连接与信任',
    ],
    tasks: [
      '完成规定课程学习与笔记整理',
      '参与小组共学与班级分享',
      '每月一次经营复盘记录',
    ],
    outputs: ['学习笔记', '复盘记录', '小组共学纪要'],
    review: '参与度、复盘频率、分享质量与同伴反馈（占位指标）。',
  },
  {
    n: '二',
    title: '第二年｜经营实战',
    goal: '把理念转化为企业中的真实动作与团队协同。',
    focus: [
      '把理念带入企业经营',
      '推动管理实践',
      '打通团队协作',
      '做出真实改变',
    ],
    tasks: [
      '选定 1–2 个经营改善课题并推进',
      '在部门内形成目标共识与例会机制',
      '至少一次跨部门协同实践',
    ],
    outputs: ['课题计划与阶段总结', '会议纪要样例', '改善前后对比材料'],
    review: '课题推进度、团队反馈、经营数据或现场变化（占位）。',
  },
  {
    n: '三',
    title: '第三年｜成果跃迁',
    goal: '沉淀方法论与案例，扩大个人与企业的影响力。',
    focus: [
      '输出案例',
      '形成方法论',
      '放大个人与企业影响力',
      '完成三年成果沉淀',
    ],
    tasks: [
      '完成一篇可分享的经营案例',
      '整理个人三年成长地图',
      '参与班级成果共创（分享 / 参访 / 共创活动）',
    ],
    outputs: ['成果案例文稿', '方法论一页纸', '三年成长总结'],
    review: '案例完整度、可复制性、对他人启发程度（占位）。',
  },
] as const

function FieldLabel({ children }: { children: string }) {
  return (
    <h3 className="text-[10px] font-medium tracking-[0.35em] text-brand-accent">
      {children}
    </h3>
  )
}

export default function Growth() {
  return (
    <article>
      <PageIntro
        eyebrow="体系"
        title="三年成长体系"
        lead="新吴二班希望把三年的学习旅程，从「上课型成长」升级为「闭环型成长」。每一年都有不同重点，但最终目标一致：让每位同学真正发生改变，让学习真正转化为经营与人生的成长成果。"
      />

      <SectionShell className="bg-brand-canvas">
        <div className="space-y-12 md:space-y-16">
          {phases.map((p) => (
            <section
              key={p.title}
              className="home-card-quiet relative overflow-hidden rounded-2xl p-8 md:p-10 lg:p-12"
            >
              <div
                className="absolute left-0 right-0 top-0 h-[3px] bg-brand-accent/70"
                aria-hidden
              />
              <div className="flex flex-col gap-6 border-b border-brand-border/60 pb-8 md:flex-row md:items-end md:justify-between">
                <div className="min-w-0">
                  <div className="flex items-center gap-4">
                    <span
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-accent/35 font-serif text-lg text-brand-primary"
                      aria-hidden
                    >
                      {p.n}
                    </span>
                    <h2 className="font-serif text-[1.35rem] font-semibold tracking-wide text-brand-primary md:text-[1.5rem]">
                      {p.title}
                    </h2>
                  </div>
                  <p className="inner-prose mt-5 max-w-3xl text-sm font-medium leading-[2] text-brand-secondary md:text-[15px]">
                    阶段目标：{p.goal}
                  </p>
                </div>
              </div>

              <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-12">
                <div>
                  <FieldLabel>学习重点</FieldLabel>
                  <ul className="mt-4 space-y-3 text-sm leading-[1.95] text-brand-muted md:text-[15px]">
                    {p.focus.map((x) => (
                      <li key={x} className="flex gap-3">
                        <span
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-accent/75"
                          aria-hidden
                        />
                        <span className="inner-prose">{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <FieldLabel>行动任务</FieldLabel>
                  <ul className="mt-4 space-y-3 text-sm leading-[1.95] text-brand-muted md:text-[15px]">
                    {p.tasks.map((x) => (
                      <li key={x} className="flex gap-3">
                        <span
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-accent/75"
                          aria-hidden
                        />
                        <span className="inner-prose">{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <FieldLabel>输出要求</FieldLabel>
                  <ul className="mt-4 space-y-3 text-sm leading-[1.95] text-brand-muted md:text-[15px]">
                    {p.outputs.map((x) => (
                      <li key={x} className="flex gap-3">
                        <span
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-accent/75"
                          aria-hidden
                        />
                        <span className="inner-prose">{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <FieldLabel>成长评估</FieldLabel>
                  <p className="inner-prose mt-4 text-sm leading-[2] text-brand-muted md:text-[15px]">
                    {p.review}
                  </p>
                </div>
              </div>
            </section>
          ))}
        </div>

        <figure className="mx-auto mt-20 max-w-2xl border-y border-brand-border/70 py-10 text-center">
          <blockquote className="font-serif text-lg leading-[1.9] text-brand-primary md:text-xl">
            三年，不止是学习完成，而是成长发生。
          </blockquote>
        </figure>
      </SectionShell>
    </article>
  )
}
