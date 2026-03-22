import type { ReactNode } from 'react'

type Props = {
  id?: string
  children: ReactNode
  className?: string
  innerClassName?: string
}

export default function SectionShell({
  id,
  children,
  className = '',
  innerClassName = '',
}: Props) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div
        className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${innerClassName}`}
      >
        {children}
      </div>
    </section>
  )
}
