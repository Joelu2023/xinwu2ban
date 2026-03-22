import ButtonLink from '../ui/ButtonLink'

const spirit = ['敬天爱人', '利他经营', '长期主义', '知行合一'] as const
const together = ['共学', '共修', '共创', '共长'] as const

export default function HeroSection() {
  return (
    <section className="home-hero-bg border-b border-brand-border/80">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid items-start gap-14 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16">
          <div className="min-w-0">
            <p className="text-[11px] font-medium tracking-[0.4em] text-brand-secondary/90">
              苏州 · 经营者学习平台
            </p>

            <h1 className="mt-6 font-serif text-[2.35rem] font-semibold leading-[1.15] tracking-[0.04em] text-brand-primary sm:text-5xl lg:text-[3.15rem]">
              苏州盛和塾
              <span className="relative ms-2 inline-block whitespace-nowrap sm:ms-3">
                <span className="relative z-10">经营者学习平台</span>
                <span
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-brand-accent/45 sm:-bottom-1.5"
                  aria-hidden
                />
              </span>
            </h1>

            <p className="mt-6 max-w-xl font-serif text-xl font-medium text-brand-secondary sm:text-2xl sm:leading-snug">
              一群经营者的长期主义成长学习平台
            </p>

            <p className="inner-prose mt-10 max-w-lg text-[15px] text-brand-muted sm:text-base">
              以敬天爱人与利他经营为底层信念，
              <span className="text-brand-text/85">以三年成长闭环为路径，</span>
              连接同学、沉淀学习、推动实践、形成成果，
              <span className="mt-3 block text-brand-text/90">
                让成长真正发生，让经营真正升级。
              </span>
            </p>

            <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <ButtonLink
                to="/about"
                className="min-w-[8.5rem] px-7 py-3 text-[15px] tracking-wide"
              >
                了解班级
              </ButtonLink>
              <ButtonLink
                to="/growth"
                variant="outline"
                className="min-w-[8.5rem] border-brand-primary/35 px-7 py-3 text-[15px] tracking-wide"
              >
                查看成长体系
              </ButtonLink>
              <ButtonLink
                to="/learning"
                variant="ghost"
                className="px-5 py-3 text-[15px] text-brand-secondary"
              >
                进入学习中心
              </ButtonLink>
            </div>

            <div className="mt-14 flex flex-wrap gap-2 border-t border-brand-border/70 pt-10">
              {spirit.map((w) => (
                <span
                  key={w}
                  className="rounded-sm border border-brand-border/80 bg-brand-surface/70 px-3 py-1.5 text-xs tracking-wider text-brand-secondary"
                >
                  {w}
                </span>
              ))}
            </div>
          </div>

          <aside className="relative lg:pt-4">
            <div
              className="relative overflow-hidden rounded-2xl border border-brand-border/90 bg-brand-surface/80 p-8 shadow-[0_24px_60px_-40px_rgba(31,58,74,0.45)]"
              aria-label="班级印记"
            >
              <div
                className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full border border-brand-accent/15"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -bottom-10 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-brand-primary/[0.04]"
                aria-hidden
              />

              <p className="text-center text-[10px] tracking-[0.5em] text-brand-muted">
                班级印记
              </p>
              <div className="mx-auto mt-8 flex h-36 w-36 items-center justify-center rounded-full border-2 border-brand-accent/35 bg-brand-canvas/50 font-serif text-3xl font-semibold tracking-[0.15em] text-brand-primary ring-4 ring-brand-border/40 ring-offset-4 ring-offset-brand-surface">
                二班
              </div>
              <p className="mt-8 text-center text-sm leading-relaxed text-brand-muted">
                新吴二班
                <span className="mx-1 text-brand-border">·</span>
                三年同行
              </p>
              <p className="mt-3 text-center font-serif text-xs leading-loose text-brand-secondary/90">
                共学，共修，共创，共长
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
              {together.map((word) => (
                <div
                  key={word}
                  className="home-card-quiet rounded-lg px-3 py-3 text-center text-sm tracking-[0.12em] text-brand-secondary"
                >
                  {word}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
