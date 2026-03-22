import { Link } from 'react-router-dom'
import { navItems } from '../../data/navigation'

export default function Footer() {
  return (
    <footer className="border-t border-brand-border/90 bg-brand-surface">
      <div className="pointer-events-none h-px w-full bg-gradient-to-r from-transparent via-brand-border to-transparent" />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:gap-16 lg:grid-cols-[1.15fr_1fr_1fr]">
          <div>
            <p className="font-serif text-lg font-semibold tracking-wide text-brand-primary">
              盛和塾新吴二班
            </p>
            <p className="inner-prose mt-4 max-w-sm text-sm leading-[1.95] text-brand-muted">
              以三年成长闭环为主线，沉淀学习成果，连接同学企业，推动经营实践落地的班级成长平台。
            </p>
          </div>

          <div>
            <p className="text-[10px] font-medium tracking-[0.45em] text-brand-accent">
              导航
            </p>
            <nav className="mt-4" aria-label="页脚导航">
              <ul className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="text-sm text-brand-muted transition-colors hover:text-brand-primary"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <p className="text-[10px] font-medium tracking-[0.45em] text-brand-accent">
              后续沉淀
            </p>
            <p className="inner-prose mt-4 text-sm leading-[1.9] text-brand-muted">
              活动报名、学习打卡、作业提交、成员中心、通知公告、班委后台、数据看板等能力，将随班级运营逐步接入{' '}
              <Link
                to="/portal"
                className="text-brand-secondary underline-offset-4 hover:underline"
              >
                班级入口
              </Link>
              。
            </p>
          </div>
        </div>

        <div className="mt-16 border-t border-brand-border/80 pt-12 text-center">
          <p className="font-serif text-base tracking-wide text-brand-primary">
            共学，共修，共创，共长。
          </p>
          <p className="inner-prose mx-auto mt-3 max-w-md text-sm leading-[1.95] text-brand-muted">
            让每一次学习，都走向更真实的经营与人生成长。
          </p>
          <p className="mt-8 text-[11px] tracking-[0.08em] text-brand-muted/75">
            © {new Date().getFullYear()} 盛和塾新吴二班
          </p>
        </div>
      </div>
    </footer>
  )
}
