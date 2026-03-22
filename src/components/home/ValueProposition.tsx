import SectionShell from '../ui/SectionShell'
import HomeSectionHeader from './HomeSectionHeader'

export default function ValueProposition() {
  return (
    <SectionShell className="relative bg-brand-canvas">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-border to-transparent"
        aria-hidden
      />
      <HomeSectionHeader
        align="center"
        eyebrow="定位"
        title="班级价值主张"
        lead="新吴二班不仅是一群同学的相聚，更是一段共同修炼、共同实践、共同成长的长期旅程。这个平台的意义，不只是展示班级，更是沉淀学习、连接同学、推动行动、形成成果，让三年学习真正转化为企业升级与个人成长。"
      />
      <figure className="mx-auto mt-16 max-w-lg border-y border-brand-border/55 py-11 text-center md:mt-20">
        <blockquote className="font-serif text-lg leading-[1.9] tracking-[0.03em] text-brand-primary/95 md:text-[1.35rem] md:leading-[1.85]">
          <span className="text-brand-accent/85">「</span>
          以三年成长闭环为主线，沉淀学习成果，连接同学企业，推动经营实践落地。
          <span className="text-brand-accent/85">」</span>
        </blockquote>
        <figcaption className="mt-7 text-[11px] tracking-[0.28em] text-brand-muted">
          新吴二班 · 一句话定位
        </figcaption>
      </figure>
    </SectionShell>
  )
}
