type Align = 'left' | 'center'

type Props = {
  eyebrow?: string
  title: string
  lead?: string
  align?: Align
  className?: string
}

export default function HomeSectionHeader({
  eyebrow,
  title,
  lead,
  align = 'left',
  className = '',
}: Props) {
  const isCenter = align === 'center'

  return (
    <div
      className={[
        isCenter ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl',
        className,
      ].join(' ')}
    >
      {eyebrow ? (
        <p
          className={[
            'text-[11px] font-medium tracking-[0.45em] text-brand-accent',
            isCenter ? 'justify-center' : '',
          ].join(' ')}
        >
          {eyebrow}
        </p>
      ) : null}
      <div
        className={[
          'mt-3',
          isCenter ? 'flex flex-col items-center' : 'flex gap-5',
        ].join(' ')}
      >
        {!isCenter ? (
          <span
            className="home-title-mark mt-2 hidden h-[2.75rem] w-px shrink-0 sm:block"
            aria-hidden
          />
        ) : (
          <span
            className="home-title-mark mb-4 h-px w-12 shrink-0 sm:w-16"
            aria-hidden
          />
        )}
        <div className={isCenter ? 'w-full' : 'min-w-0 flex-1'}>
          <h2 className="font-serif text-[1.65rem] font-semibold leading-[1.28] tracking-[0.04em] text-brand-primary md:text-3xl md:leading-[1.22]">
            {title}
          </h2>
          {lead ? (
            <p
              className={[
                'inner-prose mt-6 max-w-xl text-[15px] text-brand-muted md:mt-7 md:text-base',
                isCenter ? 'mx-auto' : '',
              ].join(' ')}
            >
              {lead}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  )
}
