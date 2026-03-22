import PageIntro from '../components/ui/PageIntro'
import SectionShell from '../components/ui/SectionShell'
import InnerSectionTitle from '../components/ui/InnerSectionTitle'

const values = [
  '敬天爱人',
  '利他经营',
  '长期主义',
  '知行合一',
] as const

const charter = [
  '真诚交流，彼此尊重',
  '主动参与，共同建设',
  '认真复盘，重视输出',
  '知行合一，重在践行',
  '利他分享，彼此成就',
  '长期同行，不急功近利',
] as const

export default function About() {
  return (
    <article>
      <PageIntro
        eyebrow="班级"
        title="关于新吴二班"
        lead="盛和塾新吴二班，是一群经营者、管理者和成长同行者组成的学习平台。我们相信，真正有力量的学习，不只是知识输入，而是认知的改变、行动的发生、经营的改善与人生的成长。"
      />

      <SectionShell className="bg-brand-canvas">
        <InnerSectionTitle
          kicker="相识"
          title="班级简介"
          subtitle="新吴二班以「班级官网 + 三年成长平台 + 学习成果沉淀平台 + 班级运营中枢」为定位，面向企业经营者学习平台，承载班级文化、成长体系、学习沉淀、成员连接、活动运营与成果案例。"
        />
        <p className="inner-prose mt-10 max-w-3xl text-sm leading-[2] text-brand-muted md:text-[15px]">
          我们刻意保持页面的克制与留白：不是为了热闹展示，而是为了把「学习平台」的温度与长期主义的笃定，慢慢读进去。
        </p>
      </SectionShell>

      <SectionShell className="border-t border-brand-border/60 bg-brand-surface">
        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
          <div className="home-card-quiet relative overflow-hidden rounded-2xl p-8 md:p-10">
            <div
              className="absolute left-0 right-0 top-0 h-[3px] bg-brand-accent/70"
              aria-hidden
            />
            <p className="text-[10px] font-medium tracking-[0.4em] text-brand-accent">
              使命
            </p>
            <h2 className="mt-4 font-serif text-xl font-semibold text-brand-primary">
              班级使命
            </h2>
            <p className="inner-prose mt-5 text-sm leading-[2] text-brand-muted md:text-[15px]">
              以共学促进认知升级，以共创推动经营实践，以共修实现长期成长。
            </p>
          </div>
          <div className="home-card-quiet relative overflow-hidden rounded-2xl p-8 md:p-10">
            <div
              className="absolute left-0 right-0 top-0 h-[3px] bg-brand-accent/70"
              aria-hidden
            />
            <p className="text-[10px] font-medium tracking-[0.4em] text-brand-accent">
              愿景
            </p>
            <h2 className="mt-4 font-serif text-xl font-semibold text-brand-primary">
              班级愿景
            </h2>
            <p className="inner-prose mt-5 text-sm leading-[2] text-brand-muted md:text-[15px]">
              建设一个真正能让经营者彼此成就、共同进步、持续沉淀成果的成长学习平台。
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-brand-canvas">
        <InnerSectionTitle
          kicker="信念"
          title="班级价值观"
          subtitle="价值观不是口号，而是日常交流与决策时，彼此默认的底线与方向。"
        />
        <ul className="mt-12 flex flex-wrap gap-3">
          {values.map((v) => (
            <li key={v}>
              <span className="inline-block rounded-sm border border-brand-border/90 bg-brand-surface/90 px-4 py-2.5 text-sm tracking-wide text-brand-secondary">
                {v}
              </span>
            </li>
          ))}
        </ul>
      </SectionShell>

      <SectionShell className="border-t border-brand-border/60 bg-brand-surface">
        <InnerSectionTitle
          kicker="结构"
          title="组织架构"
          subtitle="班委分工、职能小组与协作机制的具体说明将在此沉淀。建议后续补充：班长、学习委员、活动委员、文宣与资料、财务与后勤等角色与职责。"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {['班委统筹', '学习运营', '活动组织', '文宣沉淀'].map((role) => (
            <div
              key={role}
              className="home-card-quiet rounded-2xl p-6 text-center md:p-7"
            >
              <p className="text-sm font-medium tracking-wide text-brand-primary">
                {role}
              </p>
              <div className="home-placeholder mx-auto mt-5 h-20 w-full max-w-[8rem]" />
              <p className="mt-4 text-xs leading-relaxed text-brand-muted">
                职责与成员 · 占位
              </p>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="bg-brand-canvas">
        <InnerSectionTitle
          kicker="约定"
          title="班级公约"
          subtitle="公约的意义，是把「学习平台」从情绪认同，落实为可执行的相处方式。"
        />
        <div className="mt-12 max-w-3xl border-l-2 border-brand-accent/45 pl-6 md:pl-8">
          <ul className="space-y-4 text-sm leading-[2] text-brand-muted md:text-[15px]">
            {charter.map((line) => (
              <li key={line} className="flex gap-3">
                <span
                  className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-brand-accent/75"
                  aria-hidden
                />
                <span className="inner-prose">{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </SectionShell>
    </article>
  )
}
