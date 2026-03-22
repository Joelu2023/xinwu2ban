import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { navItems } from '../../data/navigation'

function desktopLinkClass(isActive: boolean) {
  return [
    'relative rounded-sm border-b-2 px-2.5 py-2 text-[13px] tracking-wide transition-colors duration-200',
    isActive
      ? 'border-brand-accent/75 text-brand-primary'
      : 'border-transparent text-brand-muted hover:border-brand-border/80 hover:text-brand-text',
  ].join(' ')
}

function mobileLinkClass(isActive: boolean) {
  return [
    'block rounded-sm px-3 py-2.5 text-center text-[14px] tracking-wide transition-colors',
    isActive
      ? 'bg-brand-surface/90 text-brand-primary'
      : 'text-brand-muted hover:bg-brand-surface/50 hover:text-brand-text',
  ].join(' ')
}

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-brand-border/90 bg-brand-canvas/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="group flex shrink-0 flex-col leading-tight"
          onClick={() => setOpen(false)}
        >
          <span className="font-serif text-[1.05rem] font-semibold tracking-wide text-brand-primary transition-colors group-hover:text-brand-secondary">
            盛和塾新吴二班
          </span>
          <span className="hidden text-[11px] text-brand-muted sm:block">
            经营者成长共同体 · 无锡新吴
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex lg:flex-wrap lg:justify-end"
          aria-label="主导航"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => desktopLinkClass(isActive)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-sm border border-brand-border/90 bg-brand-surface/90 px-3 py-2 text-[13px] tracking-wide text-brand-primary lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? '收起' : '目录'}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-brand-border/80 bg-brand-canvas lg:hidden"
        >
          <nav
            className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6"
            aria-label="移动端导航"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) => mobileLinkClass(isActive)}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  )
}
