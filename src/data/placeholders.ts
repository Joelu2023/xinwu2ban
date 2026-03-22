export const previewMembers = [
  {
    name: '同学姓名',
    company: '示例企业有限公司',
    industry: '制造业',
    keywords: ['利他经营', '组织升级'],
  },
  {
    name: '同学姓名',
    company: '示例科技股份公司',
    industry: '科技服务',
    keywords: ['团队协同', '精益经营'],
  },
  {
    name: '同学姓名',
    company: '示例商贸集团',
    industry: '零售流通',
    keywords: ['企业文化', '数字化转型'],
  },
  {
    name: '同学姓名',
    company: '示例实业公司',
    industry: '装备制造',
    keywords: ['接班成长', '长期主义'],
  },
] as const

export const previewActivities = [
  {
    title: '课程学习',
    desc: '系统学习经营哲学与实学方法，课后复盘与心得沉淀。',
    tag: '月度节奏',
  },
  {
    title: '企业参访',
    desc: '走进同学企业，看见真实经营现场与管理实践。',
    tag: '深度连接',
  },
  {
    title: '读书会',
    desc: '共读经典与塾内资料，形成小组讨论与分享输出。',
    tag: '共学共修',
  },
  {
    title: '小组共学',
    desc: '围绕主题任务协作推进，把学习转化为行动课题。',
    tag: '实践触发',
  },
] as const

export const previewCases = [
  {
    title: '企业经营改善案例',
    category: '企业改善',
    summary: '从现场管理到经营数字，逐步形成可持续改善机制。',
  },
  {
    title: '组织管理案例',
    category: '组织管理',
    summary: '打通部门协同与目标共识，让团队真正朝一个方向用力。',
  },
  {
    title: '个人成长案例',
    category: '个人成长',
    summary: '经营者心智升级与领导力修炼，带动组织氛围积极变化。',
  },
  {
    title: '利他经营案例',
    category: '利他经营',
    summary: '以客户与员工为起点重构价值，形成长期信任关系。',
  },
] as const

export const dashboardStats = [
  { label: '班级成员数', value: '—', hint: '后续接入成员数据' },
  { label: '班级活动数', value: '—', hint: '课程 / 参访 / 读书会等' },
  { label: '学习主题数', value: '—', hint: '阶段性主题沉淀' },
  { label: '优秀作业数', value: '—', hint: '复盘与输出记录' },
  { label: '成果案例数', value: '—', hint: '案例库持续更新' },
  { label: '企业参访数', value: '—', hint: '走进企业的次数' },
] as const
