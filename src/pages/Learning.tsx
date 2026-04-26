import PageIntro from '../components/ui/PageIntro'
import SectionShell from '../components/ui/SectionShell'
import InnerSectionTitle from '../components/ui/InnerSectionTitle'
import ImageSlot from '../components/ui/ImageSlot'

const blocks = [
  {
    title: '课程主题库',
    desc: '按阶段归档课程主题、讲义摘要与延伸阅读，形成可检索的班级知识索引。',
    image: '/images/learning/learning-course-01.png',
  },
  {
    title: '读书分享',
    desc: '读书会材料、讨论提纲与优秀分享稿，支持重复学习与二次传播。',
    image: '/images/learning/learning-reading-01.png',
  },
  {
    title: '课程笔记',
    desc: '同学笔记精选与结构模板，帮助后来者更快进入学习状态。',
    image: '/images/learning/learning-notes-01.png',
  },
  {
    title: '优秀作业',
    desc: '复盘、实践报告与课题作业的优秀范例，强调可借鉴而非攀比。',
    image: '/images/learning/learning-homework-01.png',
  },
  {
    title: '学习地图',
    desc: '三年能力路径与主题地图，帮助个人对照成长节奏与输出节奏。',
    image: '/images/learning/learning-map-01.png',
  },
] as const

export default function Learning() {
  return (
    <article>
      <PageIntro
        eyebrow="知味"
        title="学习中心"
        lead="学习中心是新吴二班的知识沉淀区。所有课程主题、读书分享、学习笔记、优秀作业与成长地图，都将在这里逐步沉淀为班级共同资产。让学习不止发生在课堂，更能持续留下来、传递下去。"
      />

      <SectionShell className="border-t border-brand-border/60 bg-brand-surface">
        <InnerSectionTitle
          kicker="沉淀"
          title="五大学习模块"
          subtitle="模块将按班级节奏逐步充实。此处以结构与留白为主，避免做成「资料超市」式的堆砌感。"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {blocks.slice(0, 4).map((b) => (
            <div
              key={b.title}
              className="home-card-quiet flex flex-col rounded-2xl p-8 md:p-9"
            >
              <h2 className="font-serif text-lg font-semibold tracking-wide text-brand-primary md:text-xl">
                {b.title}
              </h2>
              <p className="inner-prose mt-4 flex-1 text-sm leading-[2] text-brand-muted md:text-[15px]">
                {b.desc}
              </p>
              <ImageSlot
                src={b.image}
                alt={`${b.title}模块封面`}
                ratio="16/9"
                className="mt-8"
              />
              <p className="mt-3 text-center text-[11px] tracking-[0.15em] text-brand-muted">
                内容列表占位
              </p>
            </div>
          ))}
          <div className="home-card-quiet rounded-2xl p-8 md:col-span-2 md:p-10">
            <div className="md:flex md:items-start md:justify-between md:gap-10">
              <div className="max-w-xl">
                <h2 className="font-serif text-lg font-semibold tracking-wide text-brand-primary md:text-xl">
                  {blocks[4].title}
                </h2>
                <p className="inner-prose mt-4 text-sm leading-[2] text-brand-muted md:text-[15px]">
                  {blocks[4].desc}
                </p>
              </div>
              <ImageSlot
                src={blocks[4].image}
                alt="学习地图示意图"
                ratio="4/3"
                className="mt-8 flex-1 md:mt-0 md:max-w-md"
              />
            </div>
            <p className="mt-6 text-center text-[11px] tracking-[0.15em] text-brand-muted md:text-left">
              后续接入资料库与权限分级
            </p>
          </div>
        </div>

        <figure className="mx-auto mt-20 max-w-2xl border-t border-brand-border/70 pt-12 text-center">
          <blockquote className="inner-prose text-sm leading-[2] text-brand-muted md:text-[15px]">
            学习真正有价值，不是因为内容很多，而是因为它开始改变我们。
          </blockquote>
        </figure>
      </SectionShell>
    </article>
  )
}
