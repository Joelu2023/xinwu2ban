import PageIntro from '../components/ui/PageIntro'
import SectionShell from '../components/ui/SectionShell'
import InnerSectionTitle from '../components/ui/InnerSectionTitle'

const entries = [
  {
    title: '成员登录入口',
    note: '账号体系与权限。进入后可见个人相关通知、作业与成长记录（占位）。',
  },
  {
    title: '作业提交入口',
    note: '复盘、课题与实践报告提交。强调结构清晰与可追溯（占位）。',
  },
  {
    title: '活动报名入口',
    note: '活动列表、名额与资料回执。与活动中心联动（占位）。',
  },
  {
    title: '通知公告入口',
    note: '班级重要提醒与共识文件，避免信息淹没在群聊里（占位）。',
  },
  {
    title: '资料下载入口',
    note: '课件、共读材料与共学模板，服务沉淀而非堆叠（占位）。',
  },
  {
    title: '成长档案入口',
    note: '个人三年成长地图与关键输出汇总（占位）。',
  },
] as const

export default function Portal() {
  return (
    <article>
      <PageIntro
        eyebrow="连接"
        title="班级入口"
        lead="班级入口是新吴二班后续运营功能的预留区。它将逐步承载成员登录、作业提交、活动报名、通知公告、学习打卡、资料下载等功能，成为班级日常运营和成长记录的支撑平台。"
      />

      <SectionShell className="border-t border-brand-border/60 bg-brand-surface">
        <InnerSectionTitle
          kicker="将逐步开放"
          title="运营功能入口"
          subtitle="以下入口以「说明与结构」为主，不使用夸张按钮与营销话术。真正上线时，再承接流程与权限。"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {entries.map((e) => (
            <section
              key={e.title}
              className="home-card-quiet flex flex-col rounded-2xl p-8 md:p-9"
            >
              <h2 className="font-serif text-lg font-semibold tracking-wide text-brand-primary">
                {e.title}
              </h2>
              <p className="inner-prose mt-4 flex-1 text-sm leading-[2] text-brand-muted md:text-[15px]">
                {e.note}
              </p>
              <p className="mt-8 border-t border-brand-border/60 pt-6 text-center font-serif text-sm text-brand-muted">
                即将开放
              </p>
            </section>
          ))}
        </div>

        <figure className="mx-auto mt-20 max-w-2xl border-t border-brand-border/70 pt-12 text-center">
          <blockquote className="inner-prose text-sm leading-[2] text-brand-muted md:text-[15px]">
            一个真正有生命力的班级，不只是线下相聚，也要有线上持续连接的载体。
          </blockquote>
        </figure>
      </SectionShell>
    </article>
  )
}
