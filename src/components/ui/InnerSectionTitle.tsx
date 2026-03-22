type Props = {
  kicker?: string
  title: string
  subtitle?: string
  className?: string
}

/**
 * 内页分区标题：小眉标 + 衬线主标题 + 可选说明，配合左侧细金线，强调文化感与层次。
 */
export default function InnerSectionTitle({
  kicker,
  title,
  subtitle,
  className = '',
}: Props) {
  return (
    <div className={className}>
      {kicker ? (
        <p className="text-[10px] font-medium tracking-[0.45em] text-brand-accent">
          {kicker}
        </p>
      ) : null}
      <div className="mt-3 flex gap-4 md:gap-5">
        <span
          className="home-title-mark mt-1.5 hidden h-12 w-px shrink-0 sm:block"
          aria-hidden
        />
        <div className="min-w-0">
          <h2 className="font-serif text-[1.45rem] font-semibold leading-[1.28] tracking-[0.04em] text-brand-primary md:text-[1.65rem] md:leading-[1.25]">
            {title}
          </h2>
          {subtitle ? (
            <p className="inner-prose mt-5 max-w-xl text-sm text-brand-muted md:mt-6 md:text-[15px]">
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  )
}
