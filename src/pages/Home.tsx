import HeroSection from '../components/home/HeroSection'
import ValueProposition from '../components/home/ValueProposition'
import GrowthLoopHome from '../components/home/GrowthLoopHome'
import MonthlyFocus from '../components/home/MonthlyFocus'
import LatestActivities from '../components/home/LatestActivities'
import MembersPreview from '../components/home/MembersPreview'
import CasesPreview from '../components/home/CasesPreview'
import StatsBoard from '../components/home/StatsBoard'

/**
 * 首页：新吴二班气质 — 纸感留白、墨色主调、暖金点缀、克制动效。
 * 模块顺序：Hero → 价值主张 → 三年闭环 → 本月重点 → 活动 → 成员 → 案例 → 数据看板（页脚由 MainLayout 统一）。
 */
export default function Home() {
  return (
    <article className="home-root">
      <HeroSection />
      <ValueProposition />
      <GrowthLoopHome />
      <MonthlyFocus />
      <LatestActivities />
      <MembersPreview />
      <CasesPreview />
      <StatsBoard />
    </article>
  )
}
