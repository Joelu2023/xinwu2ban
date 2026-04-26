import { Link } from 'react-router-dom'
import SectionShell from '../ui/SectionShell'
import HomeSectionHeader from './HomeSectionHeader'
import { previewMembers } from '../../data/placeholders'
import ImageSlot from '../ui/ImageSlot'

export default function MembersPreview() {
  return (
    <SectionShell className="bg-brand-canvas">
      <HomeSectionHeader
        eyebrow="同学"
        title="成员风采"
        lead="这里汇聚着来自不同企业、不同阶段、不同领域的经营者与管理者。大家带着各自的企业问题而来，也带着开放、利他、精进的心态同行。在共同学习中，看见彼此；在共同实践中，彼此成就。"
      />

      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {previewMembers.map((m, idx) => (
          <article
            key={`${m.name}-${idx}`}
            className="home-card-quiet rounded-2xl border border-brand-border/80 bg-brand-surface/90 p-6 text-center md:p-7"
          >
            <ImageSlot
              src={m.avatar}
              alt={`${m.name}头像`}
              ratio="1/1"
              className="mx-auto h-[4.5rem] w-[4.5rem] rounded-full ring-2 ring-brand-accent/20 ring-offset-2 ring-offset-brand-surface"
            />
            <p className="mt-5 text-[15px] font-medium text-brand-text">{m.name}</p>
            <p className="mt-1.5 text-xs leading-relaxed text-brand-muted">
              {m.company}
            </p>
            <p className="mt-2 text-[11px] tracking-wider text-brand-accent/95">
              {m.industry}
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-1.5">
              {m.keywords.map((k) => (
                <span
                  key={k}
                  className="rounded-sm border border-brand-border/70 bg-brand-canvas/60 px-2 py-0.5 text-[11px] text-brand-secondary"
                >
                  {k}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <p className="mt-14 text-center">
        <Link
          to="/members"
          className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-brand-secondary transition-colors hover:text-brand-primary"
        >
          <span className="h-px w-6 bg-brand-accent/60" aria-hidden />
          查看成员名录
          <span className="h-px w-6 bg-brand-accent/60" aria-hidden />
        </Link>
      </p>
    </SectionShell>
  )
}
