import { Link } from 'react-router-dom'
import PageIntro from '../components/ui/PageIntro'
import SectionShell from '../components/ui/SectionShell'
import InnerSectionTitle from '../components/ui/InnerSectionTitle'
import ImageSlot from '../components/ui/ImageSlot'

const types = [
  '课程学习',
  '企业参访',
  '读书会',
  '小组共学',
  '主题交流',
  '班级团建',
] as const

const past = [
  {
    title: '主题交流纪要',
    date: 'YYYY 年 MM 月',
    note: '占位条目',
    image: '/images/activities/activities-review-01.png',
  },
  {
    title: '企业参访手记',
    date: 'YYYY 年 MM 月',
    note: '占位条目',
    image: '/images/activities/activities-review-02.png',
  },
  {
    title: '读书会摘要',
    date: 'YYYY 年 MM 月',
    note: '占位条目',
    image: '/images/activities/activities-review-03.png',
  },
] as const

export default function Activities() {
  return (
    <article>
      <PageIntro
        eyebrow="现场"
        title="活动中心"
        lead="活动中心承载着新吴二班日常运营的节奏。课程学习、企业参访、读书会、小组共学、主题交流与班级共创，都将在这里被组织、记录与沉淀。活动不是形式，而是成长被触发的现场。"
      />

      <SectionShell className="bg-brand-canvas">
        <InnerSectionTitle
          kicker="节律"
          title="活动日历"
          subtitle="月视图占位。后续可接入报名状态、地点、资料链接与回顾入口，让节奏「看得见」，但不喧闹。"
        />
        <div className="mt-12 overflow-hidden rounded-2xl border border-brand-border/90 bg-brand-surface/95 p-6 md:p-8">
          <div className="flex flex-col gap-2 border-b border-brand-border/60 pb-5 md:flex-row md:items-baseline md:justify-between">
            <p className="font-serif text-base text-brand-primary">本月</p>
            <p className="text-xs tracking-[0.25em] text-brand-muted">
              日历占位 · 非教务系统风格
            </p>
          </div>
          <div className="mt-6 grid grid-cols-7 gap-1.5 text-center text-[11px] text-brand-muted md:gap-2 md:text-xs">
            {['一', '二', '三', '四', '五', '六', '日'].map((d) => (
              <div
                key={d}
                className="py-2 font-medium tracking-widest text-brand-text/90"
              >
                {d}
              </div>
            ))}
            {Array.from({ length: 35 }).map((_, i) => (
              <div
                key={i}
                className="flex min-h-11 items-center justify-center rounded-md border border-brand-border/35 bg-brand-canvas/50 text-[11px] tabular-nums text-brand-muted/80 md:min-h-12"
              >
                {i < 31 ? i + 1 : ''}
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell className="border-t border-brand-border/60 bg-brand-surface">
        <InnerSectionTitle
          kicker="形态"
          title="活动类型"
          subtitle="不同类型，对应不同的触发方式：有的偏认知，有的偏现场，有的偏关系。此处仅作结构提示。"
        />
        <ul className="mt-10 flex flex-wrap gap-2.5">
          {types.map((t) => (
            <li key={t}>
              <span className="inline-block rounded-sm border border-brand-border/90 bg-brand-canvas/40 px-3.5 py-2 text-sm tracking-wide text-brand-secondary">
                {t}
              </span>
            </li>
          ))}
        </ul>
      </SectionShell>

      <SectionShell className="bg-brand-canvas">
        <InnerSectionTitle
          kicker="回望"
          title="往期回顾"
          subtitle="用纪要、照片与关键收获沉淀现场，而不是用「热闹」替代「成长」。"
        />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {past.map((x) => (
            <article
              key={x.title}
              className="home-card-quiet flex flex-col rounded-2xl p-7 md:p-8"
            >
              <p className="text-[10px] font-medium tracking-[0.35em] text-brand-accent">
                {x.date}
              </p>
              <h3 className="mt-4 font-serif text-lg font-semibold text-brand-primary">
                {x.title}
              </h3>
              <p className="mt-2 text-xs text-brand-muted">{x.note}</p>
              <ImageSlot
                src={x.image}
                alt={`${x.title}回顾图片`}
                ratio="16/9"
                className="mt-6"
              />
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="border-t border-brand-border/60 bg-brand-surface">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[10px] font-medium tracking-[0.45em] text-brand-accent">
            参与
          </p>
          <h2 className="mt-4 font-serif text-xl font-semibold text-brand-primary md:text-2xl">
            报名入口
          </h2>
          <p className="inner-prose mx-auto mt-5 max-w-lg text-sm leading-[2] text-brand-muted md:text-[15px]">
            活动报名、签到与资料下载等功能，将统一收束至班级入口，避免信息散落在各处。
          </p>
          <Link
            to="/portal"
            className="mt-10 inline-flex border-b border-brand-primary/40 pb-0.5 text-sm font-medium tracking-wide text-brand-primary transition-colors hover:border-brand-accent hover:text-brand-secondary"
          >
            前往班级入口
          </Link>
        </div>
        <figure className="mx-auto mt-16 max-w-xl border-t border-brand-border/70 pt-12 text-center">
          <blockquote className="inner-prose text-sm leading-[2] text-brand-muted md:text-[15px]">
            活动的价值，不是参加过，而是它是否推动了一个人往前走。
          </blockquote>
        </figure>
      </SectionShell>
    </article>
  )
}
