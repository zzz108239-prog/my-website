export type ProjectCategory = '品牌识别' | '数字产品' | '艺术指导' | '编辑设计'

export const projectCategories: Array<'全部' | ProjectCategory> = [
  '全部',
  '品牌识别',
  '数字产品',
  '艺术指导',
  '编辑设计',
]

export type ProjectMetric = {
  value: string
  label: string
}

export type Project = {
  slug: string
  title: string
  titleEn: string
  client: string
  category: ProjectCategory
  year: string
  role: string
  summary: string
  cover: string
  coverAlt: string
  coverTone: 'forest' | 'sand' | 'stone' | 'ink'
  layout: 'wide' | 'tall' | 'standard'
  featured: boolean
  services: string[]
  metrics: ProjectMetric[]
  challenge: string
  approach: string[]
  outcome: string
  gallery: Array<{ src: string; alt: string; caption: string }>
}

export const profile = {
  name: '林知遥',
  nameEn: 'LIN ZHIYAO',
  role: '独立品牌与界面设计师 / 艺术指导',
  studio: 'Studio LIN · 杭州',
  since: '2014',
  valueProposition:
    '为消费与文化品牌构建有温度的品牌识别与数字体验，让纸面的克制延续到屏幕之上。',
  intro:
    '十二年里，我陪三十多个品牌从只有一句口号的阶段，走到拥有完整视觉语言的阶段。我的工作介于编辑设计与产品设计之间：先找到品牌真正想说的话，再决定它该以怎样的方式被看见。',
  avatar: 'https://modao.cc/agent-py/media/generated_images/2026-11-06/75581d0b138a4352b063e7e71fb5f382.jpg#desc=Portrait%20of%20a%20designer%20in%20a%20warm%20sunlit%20studio',
  workspace: 'https://modao.cc/agent-py/media/generated_images/2026-11-06/987145fa8beb4acf9d42f8c48ed58ed4.jpg#desc=Designer%20workspace%20with%20type%20specimens%20and%20printed%20proofs',
  email: 'hello@studiolin.design',
  phone: '+86 138 2048 7712',
  location: '中国 · 杭州（可远程协作）',
  availability: '2026 年 Q1 起接受新项目委托',
  socials: [
    { label: 'Behance', href: '#/work' },
    { label: '小红书', href: '#/about' },
    { label: 'Are.na', href: '#/journal' },
    { label: '邮件订阅', href: '#/contact' },
  ],
}

export const stats = [
  { value: '12', unit: '年', label: '独立执业经验' },
  { value: '34', unit: '个', label: '品牌与产品项目' },
  { value: '9', unit: '项', label: '设计奖项与收录' },
  { value: '11', unit: '周', label: '平均项目周期' },
]

export const projects: Project[] = [
  {
    slug: 'yunqi-tea',
    title: '云栖茶事',
    titleEn: 'Yunqi Tea House',
    client: '云栖茶事 · 杭州',
    category: '品牌识别',
    year: '2025',
    role: '品牌策略 / 视觉识别 / 包装',
    summary:
      '为一家只做三款茶的新式茶屋重建识别系统：以宋代茶器的留白与比例，换取货架上的一眼安静。',
    cover:
      'https://modao.cc/agent-py/media/generated_images/2026-11-06/bbf5877a611e4d7d8d51b90cfde1eae9.jpg#desc=Minimal%20tea%20brand%20packaging%20flat%20lay%20on%20warm%20paper',
    coverAlt: '云栖茶事品牌包装平铺展示',
    coverTone: 'forest',
    layout: 'wide',
    featured: true,
    services: ['品牌策略', '标志与字体系统', '包装结构与印刷', '空间物料'],
    metrics: [
      { value: '+42%', label: '首店复购率提升' },
      { value: '3', label: '统一 SKU 结构' },
      { value: '6 周', label: '从提案到量产' },
    ],
    challenge:
      '云栖茶事最早是景区边一间三十平的小店，靠熟人推荐维持生意。2024 年开始进入商场与线上渠道后，原有手写标签与随性配色在不同业态里完全失去一致性，品牌辨识度被稀释成「又一家新中式茶」。',
    approach: [
      '把 SKU 从十七款压缩为三款，并以「一山、一水、一炉」建立命名体系，让顾客先记住三种茶，而不是十七种包装。',
      '以宋版书的竖排节奏设计标签，字体做了克制的摹刻处理，留出大量空白让茶叶本身成为主角。',
      '包装结构采用可完全展开的折页：拆开即是一张冲泡说明与一张产地地图，兼顾实用与收藏。',
      '为门店开发一套印刷规范，让收银小票、纸袋与菜单共享同一套字号与间距关系。',
    ],
    outcome:
      '2025 年春季上新后，首店复购率提升 42%，三家新店的物料复用率超过 80%。项目被《亚太包装设计年鉴 2025》收录。',
    gallery: [
      {
        src: 'https://modao.cc/agent-py/media/generated_images/2026-11-06/74c4a89a7a2148b298a3c6e254c98e98.jpg#desc=Tea%20tin%20labels%20close%20up%20with%20vertical%20Chinese%20typography',
        alt: '竖排标签细节',
        caption: '标签采用竖排节奏，留白比例参照宋版书行距。',
      },
      {
        src: 'https://modao.cc/agent-py/media/generated_images/2026-11-06/4ba4c3ac83db40699ed0d61d62e41ccb.jpg#desc=Unfolded%20packaging%20sheet%20with%20brew%20guide%20and%20origin%20map',
        alt: '展开式包装结构',
        caption: '展开即得冲泡说明与产地地图，折页本身成为内容载体。',
      },
      {
        src: 'https://modao.cc/agent-py/media/generated_images/2026-11-06/b4a40534432343919d3ef1a78d25abe8.jpg#desc=Storefront%20signage%20in%20deep%20green%20with%20brushed%20metal%20lettering',
        alt: '门店招牌',
        caption: '门店招牌使用拉丝黄铜与墨绿底，控制在不喧哗的亮度。',
      },
    ],
  },
  {
    slug: 'beilu-app',
    title: '北陆旅行',
    titleEn: 'Beilu Travel App',
    client: '北陆文旅集团',
    category: '数字产品',
    year: '2025',
    role: '产品策略 / 体验设计 / 设计系统',
    summary:
      '把一份 48 页的纸质行程，重做成能在火车信号里打开、可离线使用的行程 App。',
    cover:
      'https://modao.cc/agent-py/media/generated_images/2026-11-06/23e916971cd84f55b4e49fc68a7a5b49.jpg#desc=Travel%20app%20screens%20mounted%20on%20stone%20wall%20in%20soft%20daylight',
    coverAlt: '北陆旅行 App 界面展示',
    coverTone: 'stone',
    layout: 'tall',
    featured: true,
    services: ['用户研究', '信息架构', '交互与视觉设计', '设计系统交付'],
    metrics: [
      { value: '4.1 分', label: '应用商店评分' },
      { value: '-38%', label: '客服行程咨询量' },
      { value: '128', label: '交付组件数' },
    ],
    challenge:
      '北陆的线路大多穿过山区，网络信号断续。旧版 App 依赖实时接口，用户一旦进入无人区就只剩一张空白地图，客服每天要回答上百次相同的行程问题。',
    approach: [
      '把行程做成「可下载的卡片」，预先缓存到本地，断网时仍可查看每日站点、换乘与用餐安排。',
      '重构信息架构，以「天」为主轴而非以功能为分类，减少游客在旅途中的决策成本。',
      '建立一套 128 个组件、含中日双语字阶的设计系统，供内部与外包团队共用。',
      '用纸质行程的手感做视觉母题：细线分隔、编号印章与柔和纸张底色。',
    ],
    outcome:
      '上线首季度评分从 2.9 升至 4.1，客服行程类咨询下降 38%，设计系统已覆盖后续三条新线路。',
    gallery: [
      {
        src: 'https://modao.cc/agent-py/media/generated_images/2026-11-06/4068749378ef4497a176d8969ab6323e.jpg#desc=Offline%20itinerary%20cards%20on%20a%20mobile%20screen%20in%20mountain%20light',
        alt: '离线行程卡片',
        caption: '离线卡片保留纸质行程的编号与印章语言。',
      },
      {
        src: 'https://modao.cc/agent-py/media/generated_images/2026-11-06/4cbd43f43f5149c689a247bf576f2672.jpg#desc=Design%20system%20sheet%20with%20typography%20scale%20and%20color%20tokens',
        alt: '设计系统规范',
        caption: '双语字阶与色彩令牌，面向内外团队同时交付。',
      },
      {
        src: 'https://modao.cc/agent-py/media/generated_images/2026-11-06/ec483011d9214697826329a3d2dca22b.jpg#desc=Usability%20testing%20session%20notes%20and%20wireframe%20prints%20on%20a%20desk',
        alt: '可用性测试现场',
        caption: '两轮共 14 位真实游客参与的可用性测试。',
      },
    ],
  },
  {
    slug: 'salt-magazine',
    title: '盐 Salt 季刊',
    titleEn: 'Salt Quarterly',
    client: '独立出版 · 上海',
    category: '编辑设计',
    year: '2024',
    role: '艺术指导 / 版式设计 / 印刷监理',
    summary:
      '一本关于沿海饮食的独立季刊，用网格与字距讲述潮汐的节奏。',
    cover:
      'https://modao.cc/agent-py/media/generated_images/2026-11-06/c34fa58f294846cd854754ffc04e8486.jpg#desc=Independent%20food%20magazine%20spreads%20with%20generous%20white%20space',
    coverAlt: '盐季刊内页版式',
    coverTone: 'sand',
    layout: 'standard',
    featured: true,
    services: ['编辑设计', '封面艺术指导', '特约插画协调', '印刷与纸张选型'],
    metrics: [
      { value: '4 期', label: '连续合作期数' },
      { value: '3 印', label: '每期首刷售罄' },
      { value: '156 页', label: '单期平均篇幅' },
    ],
    challenge:
      '创刊第三期面临成本压力，编辑部希望在不大幅提高预算的前提下，让杂志在书店陈列中更有存在感。',
    approach: [
      '建立 12 栏弹性网格，让食谱、长文与摄影可以共享一套版式规则而不显重复。',
      '以「潮线」为视觉母题：每期封面都有一条起伏的细线，位置随主题变化。',
      '改用两种再生纸，并通过控制网点密度让成本下降 14%，质感反而更接近海风。',
    ],
    outcome: '连续四期首刷售罄，第三期加印两次；杂志进入 26 家独立书店常设陈列。',
    gallery: [
      {
        src: 'https://modao.cc/agent-py/media/generated_images/2026-11-06/9d2d18cfe0f0411c85081f3a31052f84.jpg#desc=Magazine%20spread%20with%20large%20photograph%20and%20narrow%20text%20column',
        alt: '大图与窄栏对比',
        caption: '大图与窄栏的强对比，让阅读节奏随翻页呼吸。',
      },
      {
        src: 'https://modao.cc/agent-py/media/generated_images/2026-11-06/00b38bce36d34463bc9ca9e256c22f83.jpg#desc=Salt%20quarterly%20cover%20with%20undulating%20thin%20line%20motif',
        alt: '封面潮线母题',
        caption: '「潮线」作为贯穿各期的封面母题。',
      },
      {
        src: 'https://modao.cc/agent-py/media/generated_images/2026-11-06/e86b23c220fb4fd29ea7673f5e80b8c3.jpg#desc=Printed%20magazine%20stack%20on%20linen%20table%20with%20recycled%20paper%20texture',
        alt: '成品书影',
        caption: '再生纸的纤维感在灯下尤为明显。',
      },
    ],
  },
  {
    slug: 'hillside-hotel',
    title: '半山酒店',
    titleEn: 'Hillside Retreat',
    client: '半山精品酒店 · 莫干山',
    category: '艺术指导',
    year: '2024',
    role: '品牌艺术指导 / 影像与场景',
    summary:
      '为一家只有十二间房的精品酒店定下安静、克制的品牌语气，从导视到房卡一以贯之。',
    cover:
      'https://modao.cc/agent-py/media/generated_images/2026-11-06/b8aed8db28fc45bf9ce4cde5767fe6e6.jpg#desc=Boutique%20hotel%20identity%20applied%20to%20key%20card%20and%20door%20sign',
    coverAlt: '半山酒店品牌物料',
    coverTone: 'forest',
    layout: 'standard',
    featured: false,
    services: ['品牌语气', '导视系统', '客房物料', '拍摄指导'],
    metrics: [
      { value: '+27%', label: '直订比例提升' },
      { value: '12', label: '客房全量改造' },
      { value: '5 类', label: '统一物料规格' },
    ],
    challenge:
      '酒店二期扩建后，业主希望品牌既能被记住，又不抢走山林本身的注意力。',
    approach: [
      '确立「退一步」的视觉原则：所有物料降低饱和度，让窗外的绿成为主色。',
      '导视使用压凹工艺而非彩印，在自然光下靠阴影辨识。',
      '制定拍摄指引，要求所有官方影像避开人造光，仅使用晨昏两段自然光。',
    ],
    outcome: '直订比例提升 27%，品牌手册成为当地民宿主口中的参考范本。',
    gallery: [
      {
        src: 'https://modao.cc/agent-py/media/generated_images/2026-11-06/953477e3111544afb34a6d9494000f36.jpg#desc=Debossed%20wayfinding%20sign%20in%20quiet%20woodland%20light',
        alt: '压凹导视',
        caption: '压凹工艺的导视在树影中靠明暗辨识。',
      },
      {
        src: 'https://modao.cc/agent-py/media/generated_images/2026-11-06/33b1b55b6af8432e948d601b4801273b.jpg#desc=Hotel%20room%20materials%20flat%20lay%20on%20linen%20bedding',
        alt: '客房物料',
        caption: '客房物料控制在两种材质、五种规格之内。',
      },
    ],
  },
  {
    slug: 'grain-bakery',
    title: '谷拾面包',
    titleEn: 'Grain & Gather',
    client: '谷拾面包 · 成都',
    category: '品牌识别',
    year: '2023',
    role: '视觉识别 / 包装 / 门店系统',
    summary:
      '为一家社区面包房设计会「随时间发涨」的识别系统，让营业时间成为品牌的一部分。',
    cover:
      'https://modao.cc/agent-py/media/generated_images/2026-11-06/fe99b2b0532446cdb271ecda0d8d21c9.jpg#desc=Artisan%20bakery%20brand%20paper%20bags%20and%20bread%20on%20wooden%20counter',
    coverAlt: '谷拾面包品牌包装',
    coverTone: 'sand',
    layout: 'standard',
    featured: false,
    services: ['标志系统', '包装与纸袋', '门店视觉', '社交媒体模板'],
    metrics: [
      { value: '2 家', label: '一年新开门店' },
      { value: '+61%', label: '社媒互动率' },
      { value: '18 款', label: '统一包装规格' },
    ],
    challenge:
      '社区面包房靠口碑经营，但包装与门头在两年内出现了七个版本，外卖平台上显得像三家不同的店。',
    approach: [
      '以小麦的胚芽为标志原型，线条粗细随包装尺寸等比缩放，保证远看近看都成立。',
      '把出炉时间做成可替换的印章，让每只纸袋都带着今天的日期细节。',
      '制定门店视觉手册，覆盖灯箱、价签与外卖平台头图。',
    ],
    outcome: '一年内新增两家门店，外卖平台平均互动率提升 61%。',
    gallery: [
      {
        src: 'https://modao.cc/agent-py/media/generated_images/2026-11-06/1653cc37c21a40d1a88dd20c2b251fd7.jpg#desc=Bakery%20paper%20bag%20with%20stamped%20baking%20time%20detail',
        alt: '印章细节',
        caption: '出炉时间印章让每只纸袋都独一无二。',
      },
      {
        src: 'https://modao.cc/agent-py/media/generated_images/2026-11-06/f3ec051531084c47b9d368966e40d821.jpg#desc=Community%20bakery%20storefront%20with%20warm%20lightbox%20sign',
        alt: '门店灯箱',
        caption: '灯箱字体遵循等比缩放的笔画规则。',
      },
    ],
  },
  {
    slug: 'arc-fitness',
    title: 'Arc 训练',
    titleEn: 'Arc Training',
    client: 'Arc 综合训练工作室',
    category: '数字产品',
    year: '2023',
    role: '体验设计 / 视觉系统',
    summary:
      '把硬核训练数据翻译成不制造焦虑的日常语言，让坚持本身变得可被看见。',
    cover:
      'https://modao.cc/agent-py/media/generated_images/2026-11-06/bdbc1c52b0084fe3a7ec0e102b0525e1.jpg#desc=Fitness%20training%20app%20dashboard%20with%20calm%20data%20visualisation',
    coverAlt: 'Arc 训练 App 数据界面',
    coverTone: 'ink',
    layout: 'wide',
    featured: false,
    services: ['体验设计', '数据可视化', '动效规范', '品牌延展'],
    metrics: [
      { value: '+19%', label: '周活跃用户' },
      { value: '-52%', label: '课程取消率' },
      { value: '4 套', label: '训练强度模型' },
    ],
    challenge:
      '会员看不懂训练数据，教练每周都需要重复解释同一张曲线图。',
    approach: [
      '以「本周节奏」替代单一热度值，用四种强度色块拼接训练结构。',
      '界面语言去掉竞技化措辞，改为描述体感与恢复建议。',
      '为教练端设计课堂小结模板，一键生成可分享的图文卡片。',
    ],
    outcome: '周活跃用户提升 19%，课程取消率下降 52%，教练端小结生成时间缩短至 2 分钟。',
    gallery: [
      {
        src: 'https://modao.cc/agent-py/media/generated_images/2026-11-06/772f5a60fa8a438088aaba722c9383ec.jpg#desc=Weekly%20training%20rhythm%20chart%20on%20a%20tablet%20screen',
        alt: '节奏图',
        caption: '「本周节奏」用四种强度色块替代抽象曲线。',
      },
      {
        src: 'https://modao.cc/agent-py/media/generated_images/2026-11-06/3f8ae99b69884f6497a2267913152e50.jpg#desc=Coach%20summary%20card%20template%20printed%20on%20studio%20wall',
        alt: '教练小结模板',
        caption: '教练课堂小结模板，两分钟生成可分享图文。',
      },
    ],
  },
]

export const findProject = (slug: string) => projects.find((project) => project.slug === slug)

export const services = [
  {
    index: '01',
    title: '品牌识别系统',
    en: 'Brand Identity',
    description:
      '从品牌核心命题出发，构建标志、字体、色彩与图形语言，并落地为一套可延续五年的使用规范。',
    deliverables: ['品牌策略与命名', '标志与字体系统', '视觉规范手册', '物料与印刷监理'],
    duration: '6–10 周',
    price: '起 ¥80,000',
  },
  {
    index: '02',
    title: '数字产品设计',
    en: 'Digital Product',
    description:
      '覆盖研究、信息架构到交互与视觉的完整链路，交付可直接进入开发的界面与设计系统。',
    deliverables: ['用户研究与旅程', '信息架构与原型', '界面与动效设计', '组件库交付'],
    duration: '8–14 周',
    price: '起 ¥120,000',
  },
  {
    index: '03',
    title: '编辑与艺术指导',
    en: 'Editorial & Art Direction',
    description:
      '为杂志、画册与内容品牌建立版式秩序与影像语气，把控从设计到印厂的最后一道工序。',
    deliverables: ['版式与网格系统', '影像与插画指导', '封面艺术指导', '印刷与纸张选型'],
    duration: '4–8 周',
    price: '起 ¥60,000',
  },
  {
    index: '04',
    title: '品牌陪跑顾问',
    en: 'Studio Retainer',
    description:
      '以月度合作的方式进入团队，负责日常设计评审、规范维护与新品视觉延展。',
    deliverables: ['双周设计评审', '规范与模版维护', '新品视觉延展', '团队分享与培训'],
    duration: '按月合作',
    price: '¥18,000 / 月',
  },
]

export const skillGroups = [
  {
    title: '设计能力',
    note: '主控方向',
    items: [
      { name: '品牌识别系统', level: 96, years: '12 年' },
      { name: '编辑与版式设计', level: 94, years: '10 年' },
      { name: '界面与交互设计', level: 88, years: '8 年' },
      { name: '设计系统搭建', level: 85, years: '6 年' },
    ],
  },
  {
    title: '研究与方法',
    note: '支撑方向',
    items: [
      { name: '用户访谈', level: 82, years: '7 年' },
      { name: '可用性测试', level: 78, years: '6 年' },
      { name: '品牌策略工作坊', level: 86, years: '9 年' },
      { name: '信息架构', level: 84, years: '7 年' },
    ],
  },
]

export const tools = [
  { name: 'Figma', note: '界面与协作' },
  { name: 'Illustrator', note: '标志与图形' },
  { name: 'InDesign', note: '版式与印前' },
  { name: 'Blender', note: '场景与材质' },
  { name: 'After Effects', note: '动效预演' },
  { name: 'Framer', note: '网站原型' },
]

export const experience = [
  {
    period: '2021 — 至今',
    title: 'Studio LIN 独立设计室',
    role: '创始人 / 设计主理人',
    location: '杭州',
    description: '带领 2–3 人的小团队，服务消费、文化与酒店类品牌，年承接 4–6 个项目。',
    highlights: ['34 个完整品牌与产品项目', '9 项行业奖项与收录', '长期合作客户 11 家'],
  },
  {
    period: '2018 — 2021',
    title: '白昼设计事务所',
    role: '资深设计师 → 设计主管',
    location: '上海',
    description: '负责品牌识别与数字体验双线项目，主导建立公司内部的设计评审流程。',
    highlights: ['主导 9 个品牌升级项目', '管理 5 人设计小组', '建立提案与评审标准'],
  },
  {
    period: '2016 — 2018',
    title: '《城记》独立杂志',
    role: '视觉编辑',
    location: '上海',
    description: '与编辑部共同完成双月刊的版式设计与印刷监制，打磨出对版式节奏的长期判断。',
    highlights: ['12 期双月刊全量设计', '建立杂志网格规范', '合作摄影师 30+ 位'],
  },
  {
    period: '2014 — 2016',
    title: 'MOOK 品牌顾问',
    role: '视觉设计师',
    location: '杭州',
    description: '从物料延展起步，逐步参与到品牌诊断与视觉系统的搭建中。',
    highlights: ['参与 20+ 品牌项目', '完成首个全案识别系统', '建立基础印刷知识体系'],
  },
]

export const testimonials = [
  {
    quote:
      '知遥最难得的是先问「这个品牌想说什么」，再谈画面。她把我们两年没想清楚的市场定位，用三周时间变成了一句所有人都能记住的话。',
    name: '周青',
    role: '云栖茶事 创始人',
    project: '品牌识别系统',
    initials: 'ZQ',
  },
  {
    quote:
      '我们带着一份 48 页的纸质行程来找她。她没有被现有流程牵着走，而是直接去山里坐了一趟冬季的车，回来后交出了完全不同的信息结构。',
    name: '杨沐',
    role: '北陆文旅 产品负责人',
    project: '数字产品设计',
    initials: 'YM',
  },
  {
    quote:
      '印刷前的那两周，她每天守在印厂校色。这种对细节的认真，是编辑部最放心把季刊交出去的理由。',
    name: '何星野',
    role: '盐 Salt 季刊 主编',
    project: '编辑设计',
    initials: 'HX',
  },
  {
    quote:
      '她给我们的不只是一套视觉，更是一套团队能自己延续下去的方法。二期扩建时，我们几乎没再找外部设计。',
    name: '沈一',
    role: '半山酒店 业者',
    project: '艺术指导',
    initials: 'SY',
  },
]

export type Article = {
  slug: string
  title: string
  titleEn: string
  excerpt: string
  category: string
  date: string
  readingTime: string
  cover: string
  body: string[]
}

export const articles: Article[] = [
  {
    slug: 'quiet-brand',
    title: '安静的品牌，如何被听见',
    titleEn: 'How a quiet brand gets heard',
    excerpt:
      '克制不等于没有观点。这篇文章拆解了三个低饱和度识别系统，讨论「少说」如何反而提高记忆度。',
    category: '品牌方法',
    date: '2025-09-18',
    readingTime: '8 分钟',
    cover:
      'https://modao.cc/agent-py/media/generated_images/2026-11-06/dcc6ede3c60f4f2e9d81b13daf11335e.jpg#desc=Sparse%20brand%20identity%20study%20with%20paper%20swatches%20and%20type%20samples',
    body: [
      '很多品牌把「高级」等同于低饱和色与大留白，但真正让克制成立的，是背后有一套明确到可以执行的判断标准。否则留白只是空白，低饱和只是没力气。',
      '第一个判断是：你的包装在货架上，最想让人记住哪一件事？云栖茶事的答案是「三种茶」。所以我们把 SKU 砍到三款，把十七种图形收拢成一条竖线。',
      '第二个判断是：这个视觉元素在最小的尺寸下还成立吗？纸袋上的印章只有 18mm，线宽必须重算。',
      '第三个判断是：团队能否在没有设计师在场时继续做出正确的决定。这也是为什么我每个项目都交付一本不足 40 页的使用手册，而不是一本百页的图册。',
    ],
  },
  {
    slug: 'grid-rhythm',
    title: '网格不是约束，是呼吸的刻度',
    titleEn: 'A grid is a scale for breathing',
    excerpt:
      '从《盐》四季刊的版式出发，聊聊十二栏网格如何让长文与摄影在同一页上彼此退让。',
    category: '编辑设计',
    date: '2025-06-02',
    readingTime: '6 分钟',
    cover:
      'https://modao.cc/agent-py/media/generated_images/2026-11-06/21e51c9ff2d94275b0388bcd33f417bf.jpg#desc=Editorial%20grid%20layout%20sketches%20on%20tracing%20paper',
    body: [
      '很多人把网格理解为「必须对齐的线」，但在编辑设计里，网格更像音乐的拍号：它规定了呼吸的位置，而不规定旋律。',
      '《盐》使用的十二栏网格允许三分之一、二分之一与整幅摄影三种基本节奏。食谱页用三分之一图文混排，长文用二分之一留白，开篇则整幅铺满。',
      '当三种节奏在一本 156 页的杂志里反复出现，读者会形成肌肉记忆，翻页变成一种可预期的舒适。',
      '这也是为什么我从不在中途修改网格：它的价值恰恰来自稳定。',
    ],
  },
  {
    slug: 'design-system-legacy',
    title: '设计系统的真正交付，是判断力',
    titleEn: 'A design system ships judgement',
    excerpt:
      '128 个组件只是开始。这篇文章记录北陆旅行项目里，我们如何把「什么情况下可以破例」也写进系统。',
    category: '数字产品',
    date: '2025-03-11',
    readingTime: '10 分钟',
    cover:
      'https://modao.cc/agent-py/media/generated_images/2026-11-06/58d515c0a4684f47b1fe99c18ccf5a51.jpg#desc=Component%20library%20documentation%20page%20with%20spacing%20and%20type%20tokens',
    body: [
      '设计系统交付后最常听到的问题是：这个情况能用别的做法吗？如果答案是「不可以」，团队会绕开系统；如果答案是「都可以」，系统就失效了。',
      '在北陆的项目里，我们在每个组件旁写了三件事：它解决什么问题、在什么情况下不适用、破例时需要记录在哪里。',
      '这看起来像多余的工作，但它让外包团队在第一周就做出了与主团队一致的页面，而不是在第三周才收到退回意见。',
      '系统真正的价值不是一致性本身，而是让一致性变成一种低成本的选择。',
    ],
  },
  {
    slug: 'working-with-clients',
    title: '与客户开好第一次工作坊',
    titleEn: 'Running the first workshop well',
    excerpt:
      '一个 90 分钟的结构化工作坊，往往比三次提案会议更能确定方向。附上我用了五年的议程模板。',
    category: '工作方法',
    date: '2024-11-27',
    readingTime: '7 分钟',
    cover:
      'https://modao.cc/agent-py/media/generated_images/2026-11-06/029e641c29f144c3a77098182a0f445b.jpg#desc=Workshop%20sticky%20notes%20and%20printed%20agenda%20on%20a%20studio%20table',
    body: [
      '第一次工作坊的目标不是说服客户，而是让客户内部先达成一致。很多项目真正的阻力来自客户团队之间的分歧，而不是设计师的方案。',
      '我的议程只有三段：品牌当下的三句实话、三年后希望被如何描述、有哪些绝对不能做的事。第三段往往耗时最长，也最有价值。',
      '结束前我会让每个人用一句话写下自己认为的最重要结论，当场比对。差异越早暴露，后面的返工越少。',
    ],
  },
]

export const findArticle = (slug: string) => articles.find((article) => article.slug === slug)

export const processSteps = [
  { step: '01', title: '诊断与对齐', note: '2 周', text: '访谈关键决策者与用户，明确品牌当下真正需要解决的问题。' },
  { step: '02', title: '方向与提案', note: '2–3 周', text: '提供三条可落地的视觉方向，每条都附上真实场景的应用样机。' },
  { step: '03', title: '深化与打磨', note: '3–5 周', text: '在选定方向上完成全量物料、界面或版式，并同步建立使用规范。' },
  { step: '04', title: '交付与陪跑', note: '1–2 周', text: '与开发、印厂或内部团队对接，交付源文件与规范，并在首月内提供支持。' },
]
