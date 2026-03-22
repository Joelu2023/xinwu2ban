type Props = {
  title: string
  lead: string
  eyebrow?: string
}

/**
 * 内页页头：纸感底色、宽行距中文、衬线标题，避免「通栏广告条」气质。
 */
export default function PageIntro({ title, lead, eyebrow }: Props) {
  return (
    <header className="page-intro-bg border-b border-brand-border/80">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {eyebrow ? (
          <p className="text-[10px] font-medium tracking-[0.5em] text-brand-accent">
            {eyebrow}
          </p>
        ) : null}
        <div className="mt-5 flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-16">
          <div className="min-w-0 flex-1">
            <h1 className="font-serif text-[2rem] font-semibold leading-[1.22] tracking-[0.04em] text-brand-primary sm:text-[2.35rem] md:text-[2.55rem] md:leading-[1.2]">
              {title}
            </h1>
            <p className="inner-prose mt-9 max-w-lg text-[15px] text-brand-muted md:mt-10 md:text-base">
              {lead}
            </p>
          </div>
          <aside className="mt-12 shrink-0 border-t border-brand-border/60 pt-9 lg:mt-0 lg:w-[15.5rem] lg:border-l lg:border-t-0 lg:pt-0 lg:pl-10">
            <p className="font-serif text-[0.95rem] leading-relaxed tracking-[0.08em] text-brand-secondary">
              新吴二班
            </p>
            <p className="inner-prose mt-4 text-xs text-brand-muted">
              共学，共修，共创，共长。
              <span className="mt-4 block text-[11px] tracking-[0.22em] text-brand-accent/85">
                长期主义 · 知行合一
              </span>
            </p>
          </aside>
        </div>
      </div>
    </header>
  )
}
