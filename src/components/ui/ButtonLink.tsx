import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'outline' | 'ghost'

type Props = {
  to: string
  children: ReactNode
  variant?: Variant
  className?: string
}

const base =
  'inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary'

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-primary text-brand-canvas hover:bg-brand-secondary focus-visible:outline-brand-secondary',
  outline:
    'border border-brand-primary text-brand-primary hover:bg-brand-primary/5',
  ghost: 'text-brand-secondary hover:bg-brand-border/40',
}

export default function ButtonLink({
  to,
  children,
  variant = 'primary',
  className = '',
}: Props) {
  return (
    <Link to={to} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  )
}
