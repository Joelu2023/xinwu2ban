import PageIntro from '../components/ui/PageIntro'
import SectionShell from '../components/ui/SectionShell'
import InnerSectionTitle from '../components/ui/InnerSectionTitle'
import ImageSlot from '../components/ui/ImageSlot'

const categories = [
  '企业经营改善案例',
  '组织管理案例',
  '个人成长案例',
  '学习实践案例',
  '利他经营案例',
] as const

const sampleCase = {
  title: '示例案例标题（占位）',
  category: '企业经营改善案例',
  cover: '/images/cases/cases-detail-01.png',
  sections: [
    { k: '背景', v: '企业阶段、行业环境与经营目标简述。' },
    { k: '问题', v: '当时最关键的经营或组织痛点。' },
    { k: '行动', v: '采取了哪些具体措施与推进节奏。' },
    { k: '改变', v: '量化或质化的变化与可持续机制。' },
    { k: '感悟', v: '经营者个人与团队的心智变化。' },
  ],
} as const

export default function Cases() {
  return (
    <article>
      <PageIntro
        eyebrow="见证"
        title="成果案例库"
        lead="成果案例库，是新吴二班最重要的长期资产之一。它记录的不只是「学了什么」，更是「做出了什么改变」。一个班级是否真正有生命力，不只看活动有多热闹，更看是否不断产出真实的成长成果。"
      />

      <SectionShell className="bg-brand-canvas">
        <InnerSectionTitle
          kicker="分类"
          title="案例分类"
          subtitle="分类是为了检索与对照，不是为了把人分成三六九等。每一条案例背后，都是时间与勇气的堆叠。"
        />
        <ul className="mt-10 flex flex-wrap gap-2.5">
          {categories.map((c) => (
            <li key={c}>
              <span className="inline-block max-w-full rounded-sm border border-brand-border/90 bg-brand-surface/90 px-3.5 py-2 text-sm leading-snug text-brand-secondary">
                {c}
              </span>
            </li>
          ))}
        </ul>
      </SectionShell>

      <SectionShell className="border-t border-brand-border/60 bg-brand-surface">
        <InnerSectionTitle
          kicker="范式"
          title="精选案例结构示范"
          subtitle="推荐结构：背景—问题—行动—改变—感悟。写清楚「改变了什么」，比写漂亮话更重要。"
        />

        <div className="mt-12 home-card-quiet rounded-2xl p-8 md:p-10 lg:p-12">
          <header className="border-b border-brand-border/60 pb-8">
            <p className="text-[10px] font-medium tracking-[0.35em] text-brand-accent">
              {sampleCase.category}
            </p>
            <h2 className="mt-4 font-serif text-[1.35rem] font-semibold tracking-wide text-brand-primary md:text-[1.5rem]">
              {sampleCase.title}
            </h2>
          </header>
          <div className="mt-10 space-y-8">
            {sampleCase.sections.map((s) => (
              <div
                key={s.k}
                className="border-l-2 border-brand-accent/35 pl-5 md:pl-6"
              >
                <h3 className="text-[10px] font-medium tracking-[0.35em] text-brand-accent">
                  {s.k}
                </h3>
                <p className="inner-prose mt-3 text-sm leading-[2] text-brand-muted md:text-[15px]">
                  {s.v}
                </p>
              </div>
            ))}
          </div>
          <ImageSlot
            src={sampleCase.cover}
            alt="案例结构示范封面"
            ratio="16/9"
            className="mt-10"
          />
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {categories.slice(0, 4).map((c, idx) => (
            <article
              key={c}
              className="home-card-quiet flex flex-col rounded-2xl p-8 md:p-9"
            >
              <p className="text-[10px] font-medium tracking-[0.35em] text-brand-accent">
                案例卡片 · 占位
              </p>
              <h3 className="mt-4 font-serif text-lg font-semibold text-brand-primary">
                {c}
              </h3>
              <p className="inner-prose mt-3 flex-1 text-sm leading-[2] text-brand-muted md:text-[15px]">
                背景 / 问题 / 行动 / 改变 / 感悟 结构展示；后续接入列表与详情页。
              </p>
              <ImageSlot
                src={`/images/cases/cases-list-0${idx + 1}.png`}
                alt={`${c}列表封面`}
                ratio="4/3"
                className="mt-6"
              />
            </article>
          ))}
        </div>

        <figure className="mx-auto mt-20 max-w-2xl border-t border-brand-border/70 pt-12 text-center">
          <blockquote className="inner-prose text-sm leading-[2] text-brand-muted md:text-[15px]">
            最有力量的学习成果，不是写在纸上，而是发生在企业与人生里。
          </blockquote>
        </figure>
      </SectionShell>
    </article>
  )
}
