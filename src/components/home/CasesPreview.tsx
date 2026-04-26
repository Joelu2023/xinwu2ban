import { Link } from 'react-router-dom'
import SectionShell from '../ui/SectionShell'
import HomeSectionHeader from './HomeSectionHeader'
import { previewCases } from '../../data/placeholders'
import ImageSlot from '../ui/ImageSlot'

export default function CasesPreview() {
  return (
    <SectionShell className="border-t border-brand-border/60 bg-brand-surface">
      <HomeSectionHeader
        eyebrow="成果"
        title="成果案例精选"
        lead="真正有价值的学习，不止停留在课堂。新吴二班希望把每一次学习转化为经营改善、组织变化、个人成长和企业升级的真实成果。案例库不是成果展示墙，而是班级共同成长的见证。"
      />

      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {previewCases.map((c) => (
          <article
            key={c.title}
            className="home-card-quiet overflow-hidden rounded-2xl border border-brand-border/80 bg-brand-canvas/20"
          >
            <div className="p-7 pb-5 md:p-8 md:pb-6">
              <p className="text-[10px] font-medium tracking-[0.3em] text-brand-accent">
                {c.category}
              </p>
              <h3 className="mt-3 font-serif text-xl font-semibold text-brand-primary">
                {c.title}
              </h3>
              <p className="mt-3 text-sm leading-[1.85] text-brand-muted">
                {c.summary}
              </p>
            </div>
            <ImageSlot
              src={c.cover}
              alt={`${c.title}封面`}
              ratio="4/3"
              className="mx-7 mb-7 md:mx-8 md:mb-8"
            />
          </article>
        ))}
      </div>

      <p className="mt-14 text-center">
        <Link
          to="/cases"
          className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-brand-secondary transition-colors hover:text-brand-primary"
        >
          <span className="h-px w-6 bg-brand-accent/60" aria-hidden />
          浏览成果案例库
          <span className="h-px w-6 bg-brand-accent/60" aria-hidden />
        </Link>
      </p>
    </SectionShell>
  )
}
