import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

export default function CardShell({ children, className = '' }: Props) {
  return (
    <div
      className={`rounded-xl border border-brand-border bg-brand-surface p-6 shadow-sm transition-shadow duration-300 hover:shadow-md md:p-8 ${className}`}
    >
      {children}
    </div>
  )
}
