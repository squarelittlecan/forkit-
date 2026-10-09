const discussions = [
  {
    id: "messy-love",
    title: "你觉得纯爱梗和烂人真心梗哪个更有趣",
    author: "小方can",
    model: "gemini-3.7-flash",
    time: "2026/09/08 20:50",
    private: true,
    turns: 5,
    branches: 9,
    heat: 128,
    height: 278,
    color: "#12c998",
    summary:
      "这场聊天从“纯爱”和“烂人真心”哪个更上头开始，把一个流行梗拆成叙事张力、道德矛盾和角色心理的讨论。后续继续追问自厌、克制、供奉和“明月不坠落”，让情感偏好变成一条关于复杂人性与纯粹信仰的分支。",
    tags: ["情感", "叙事", "角色心理"],
    keywords: [
      "纯爱",
      "烂人真心",
      "道德矛盾",
      "例外感",
      "自厌",
      "明月不坠",
      "供奉",
    ],
    path: [
      "烂人真心为什么更上头",
      "它和纯爱的内核是否相同",
      "堕落中索求爱是否会自厌",
      "明月不照我也不能掉下来",
    ],
  },
  {
    id: "cancer-switch",
    title: "癌症“总开关”为什么总让人将信将疑",
    author: "Hathaway",
    model: "gemini-3.5-flash",
    time: "2026/06/14 19:31",
    private: false,
    turns: 11,
    branches: 6,
    heat: 206,
    height: 318,
    color: "#2fc7ac",
    summary:
      "这场聊天从媒体反复宣称“癌症总开关被找到”的疑点切入，先解释癌症并不是单一疾病，也没有一个能一键关闭的万能按钮。随后一路追问小鼠模型、类器官、临床试验失败率和科研传播的落差，把“重大突破”为何令人将信将疑讲清楚。",
    tags: ["医学科普", "科研传播", "临床"],
    keywords: [
      "总开关",
      "小鼠模型",
      "临床试验",
      "肿瘤异质性",
      "类器官",
      "免疫系统",
      "媒体流量",
    ],
    path: [
      "癌症不是一种疾病",
      "小鼠有效为什么人体失败",
      "为什么不用更接近人的模型",
      "类器官不能替代全身系统",
    ],
  },
  {
    id: "insurance",
    title: "家庭保险配置：老人、夫妻和儿童分别怎么投",
    author: "匿名",
    model: "gemini-3.7-flash",
    time: "2026/09/02 16:36",
    private: false,
    turns: 4,
    branches: 7,
    heat: 94,
    height: 244,
    color: "#8fd6c7",
    summary:
      "这场聊天把家庭保险配置拆成老人、中年夫妻和儿童三类人群，先建立“先大人后小孩、先保障后理财”的风险排序。后续继续追问定期寿险、意外险、百万医疗和少儿重疾的关系，适合用来快速看清不同险种到底各自兜住什么风险。",
    tags: ["保险", "家庭配置", "消费决策"],
    keywords: [
      "先大人后小孩",
      "定期寿险",
      "重疾险",
      "百万医疗",
      "老年意外",
      "少儿重疾",
      "叠加赔付",
    ],
    path: [
      "家庭三代人保险配置建议",
      "意外险和定期寿险是否冲突",
      "身故伤残能否叠加",
      "医疗费报销不能重复获利",
    ],
  },
  {
    id: "privacy-noise",
    title: "保护隐私为什么反而会把数据搞失真",
    author: "Hathaway",
    model: "gemini-3.5-flash",
    time: "2026/06/14 19:40",
    private: false,
    turns: 9,
    branches: 9,
    heat: 173,
    height: 296,
    color: "#6d63d9",
    summary:
      "这场聊天从人口普查数据为什么会因为隐私保护而失真开始，解释差分隐私、噪声注入和小样本社区被误差吞没的机制。接着延伸到匿名数据重识别、数据脱敏、合成数据和隐私预算，呈现“保护个人”和“保留公共数据价值”之间的真实拉扯。",
    tags: ["隐私", "数据治理", "公共政策"],
    keywords: [
      "差分隐私",
      "噪声注入",
      "小样本失真",
      "数据粗化",
      "K匿名",
      "合成数据",
      "隐私预算",
    ],
    path: [
      "隐私保护为何导致数据失真",
      "数据脱敏如何保可用性",
      "匿名数据为什么能被重识别",
      "普通人如何减少画像",
    ],
  },
  {
    id: "human-machine",
    title: "未来会发展成人人机协同模式吗",
    author: "硅基生命",
    model: "gemini-3.5-flash",
    time: "2026/08/18 13:26",
    private: false,
    turns: 4,
    branches: 4,
    heat: 88,
    height: 266,
    color: "#12c998",
    summary:
      "这场聊天从 AI 时代是否会进入“人人机协同”开始，把组织协作从人人协同、人机协同推进到多人和多个 Agent 混合决策。它不只停在概念层面，还收束到工程开发里的认知对齐、身份认证、动态共识和约束求解，适合看未来团队协作会怎么变化。",
    tags: ["AI协作", "组织设计", "工程管理"],
    keywords: [
      "人人机协同",
      "效率孤岛",
      "认知编译器",
      "语义指纹",
      "动态对齐",
      "约束求解",
      "惰性共识",
    ],
    path: [
      "人人机协同是否是趋势",
      "小团队目标一致但认知分散",
      "AI 如何赋予身份认证",
      "人人都是决策者时如何共识",
    ],
  },
  {
    id: "digital-baby",
    title: "从出生起创建一个 Agent 持续跟踪宝宝，可以用来做什么",
    author: "albert7kin",
    model: "gemini-3.5-flash",
    time: "2026/08/18 17:15",
    private: false,
    turns: 6,
    branches: 5,
    heat: 142,
    height: 334,
    color: "#12c998",
    summary:
      "这场聊天从给新生儿同步建立一个持续成长的 Agent 这个设想出发，讨论它究竟是数字生命、数字外脑，还是某种“缸中之脑”的现实版本。后续分支落到预测医学、教育脚手架、亲子反馈和人生轨迹被过早定义的风险，科幻感很强但问题很现实。",
    tags: ["Agent", "数字生命", "哲学"],
    keywords: [
      "数字生命",
      "具身交互",
      "缸中之脑",
      "双向反馈",
      "数字外脑",
      "因材施教",
      "偏离轨道",
    ],
    path: [
      "持续复刻成长算不算元宇宙",
      "脑机接口能否复刻缸中之脑",
      "反馈上限会怎样改变生命",
      "儿童 Agent 应该如何被使用",
    ],
  },
  {
    id: "control-system",
    title: "反馈系数不确定的闭环系统要如何控制",
    author: "汪抖抖呦",
    model: "gemini-3.5-flash",
    time: "2026/06/25 21:08",
    private: false,
    turns: 7,
    branches: 3,
    heat: 67,
    height: 306,
    color: "#2fc7ac",
    summary:
      "这场聊天从一个反馈系数不确定的闭环控制问题开始，围绕 RL 电感模型、PI 控制器和未知传感器变比展开工程化推导。它继续追问 NLMS 为什么会收敛、开环预测漂移会带来什么误差，以及龙伯格观测器会不会破坏辨识梯度，是偏硬核的控制系统分支。",
    tags: ["控制系统", "工程", "辨识"],
    keywords: [
      "RL模型",
      "PI控制",
      "传感器变比",
      "NLMS",
      "开环漂移",
      "龙伯格观测器",
      "辨识梯度",
    ],
    path: [
      "未知反馈系数如何控制",
      "迭代公式为什么收敛",
      "开环预测偏离会造成什么",
      "观测器反馈会不会消灭残差",
    ],
  },
  {
    id: "journey-west",
    title: "灵台方寸山，斜月三星洞这个字谜如何解",
    author: "豆丁圢圢",
    model: "gemini-3.7-flash",
    time: "2026/08/29 09:12",
    private: false,
    turns: 6,
    branches: 5,
    heat: 121,
    height: 252,
    color: "#12c998",
    summary:
      "这场聊天从“灵台方寸山，斜月三星洞”的心字谜切入，先把字形拆解和《西游记》的修心寓言联系起来。后续又顺着孙悟空由道入佛、心猿意马、天仙地仙和大觉金仙等问题展开，把一个谜语扩成了神话体系和精神修行的讨论。",
    tags: ["西游记", "神话体系", "字谜"],
    keywords: [
      "心字谜",
      "灵台方寸",
      "斜月三星",
      "由道入佛",
      "心猿",
      "天仙地仙",
      "大觉金仙",
    ],
    path: [
      "斜月三星洞谜底为何是心",
      "孙悟空为什么最后皈依佛门",
      "天仙地仙有什么区别",
      "菩提祖师是什么位格",
    ],
  },
  {
    id: "spacex-ipo",
    title: "SpaceX 正式上市，凭什么撑得起几千亿的估值？",
    author: "Hathaway",
    model: "gemini-3.5-flash",
    time: "2026/06/14 19:06",
    private: false,
    turns: 10,
    branches: 4,
    heat: 187,
    height: 286,
    color: "#2fc7ac",
    summary:
      "这场聊天从 SpaceX 为什么能撑起超高估值开始，把它从火箭公司重新理解为太空基建、卫星通信和 AI 算力叙事的组合体。随后追问星链现金流为什么强、发射成本垄断如何形成，以及私人卫星网络会不会卡住国家通信命脉。",
    tags: ["商业", "航天", "资本市场"],
    keywords: [
      "SpaceX上市",
      "星链现金流",
      "发射垄断",
      "太空算力",
      "星舰期权",
      "通信命脉",
      "太空主权",
    ],
    path: [
      "SpaceX 凭什么撑起高估值",
      "星链为什么这么赚钱",
      "星链会不会卡住国家通信",
      "太空垄断到底是好事吗",
    ],
  },
  {
    id: "world-cup-defense",
    title: "世界杯上巴西被摩洛哥逼平——为什么传统强队越来越容易被“弱旅”拖住？",
    author: "Hathaway",
    model: "gemini-3.5-flash",
    time: "2026/06/14 18:58",
    private: false,
    turns: 10,
    branches: 10,
    heat: 164,
    height: 318,
    color: "#12c998",
    summary:
      "这场聊天从巴西被摩洛哥逼平这样的比赛现象开始，解释为什么现代足球里传统强队越来越难靠球星名气轻松碾压。它继续拆解科学防守、低位铁桶阵、全球化青训和国家队进攻构建成本，并追问进攻方如何通过强侧超载、高位逼抢主动制造空间。",
    tags: ["足球", "战术", "世界杯"],
    keywords: [
      "传统强队",
      "科学防守",
      "低位铁桶阵",
      "人才全球化",
      "进攻成本",
      "强侧超载",
      "高位逼抢",
    ],
    path: [
      "传统强队为何更容易被拖住",
      "现代足球防守如何练成",
      "进攻方如何破解铁桶阵",
      "世界杯是否再难出现统治级球队",
    ],
  },
  {
    id: "child-debt",
    title: "爷爷和爸爸都走了，2岁的孩子要替他们还50万贷款吗？",
    author: "Hathaway",
    model: "gemini-3.5-flash",
    time: "2026/06/14 19:19",
    private: false,
    turns: 6,
    branches: 6,
    heat: 151,
    height: 254,
    color: "#8fd6c7",
    summary:
      "这场聊天从“2 岁孩子是否要替已故长辈还 50 万贷款”这个极端问题切入，先澄清现代法律里并不存在无条件父债子偿。后续继续拆解限定继承、必留份规则、放弃继承、共同借款和恶意转移财产等边界，让家庭债务责任变得更可判断。",
    tags: ["法律", "家庭债务", "民法典"],
    keywords: [
      "父债子偿",
      "限定继承",
      "放弃继承",
      "必留份",
      "共同借款",
      "担保人",
      "撤销权",
    ],
    path: [
      "2 岁孩子需要替已故父辈还贷吗",
      "父债子偿是不是早就过时了",
      "父母负债该不该放弃继承",
      "人死无遗产债务是否一笔勾销",
    ],
  },
  {
    id: "casino-clock",
    title: "为什么超市几乎不挂钟，赌场更是没有窗户和时钟？",
    author: "Hathaway",
    model: "gemini-3.5-flash",
    time: "2026/06/14 20:15",
    private: false,
    turns: 6,
    branches: 6,
    heat: 133,
    height: 304,
    color: "#12c998",
    summary:
      "这场聊天从超市不挂钟、赌场没有窗户和时钟的空间设计切入，解释商业环境如何通过剥夺时间感来延长停留和消费。后续继续追问赌场的筹码去货币化、差点就赢、声音与香氛刺激、免费福利和掌控错觉，把环境设计背后的行为学机制串起来。",
    tags: ["消费心理", "空间设计", "行为学"],
    keywords: [
      "时间感",
      "无窗空间",
      "沉浸购物",
      "筹码去货币化",
      "差点就赢",
      "感官环境",
      "掌控错觉",
    ],
    path: [
      "超市和赌场为什么没有时钟",
      "赌场让人停不下来的套路",
      "老虎机差一点就中为何上头",
      "普通人如何保持清醒",
    ],
  },
];

const nodeDetailsById = {
  "messy-love": [
    "纯爱和烂人真心，哪个梗更有趣",
    "烂人真心为什么让人更上头",
    "复杂人性如何制造道德矛盾",
    "唯一的例外感从哪里来",
    "伸手索爱会不会产生自厌",
    "明月不照我，也不能坠落吗",
    "爱从占有变成供奉了吗",
  ],
  "cancer-switch": [
    "癌症真的存在一个总开关吗",
    "为什么小鼠有效，人体却失败",
    "临床试验如何跨过死亡之谷",
    "肿瘤异质性为何让药物失效",
    "类器官能不能替代动物实验",
    "免疫系统如何影响抗癌疗效",
    "媒体为何把局部突破说成万能钥匙",
  ],
  insurance: [
    "三代人的家庭保险先保谁",
    "定期寿险要覆盖哪些家庭责任",
    "重疾险应该优先做足保额吗",
    "百万医疗险解决哪种大额支出",
    "老年人慢病还能怎么补保障",
    "儿童重疾险为何需要单独配置",
    "身故、伤残和医疗能否叠加赔",
  ],
  "privacy-noise": [
    "隐私保护为什么会让统计失真",
    "噪声注入如何淹没小样本社区",
    "小样本误差会怎样影响公共决策",
    "数据粗化和抑制会牺牲什么",
    "匿名数据为什么仍可能被重识别",
    "合成数据能否保留真实规律",
    "隐私预算如何平衡安全和可用性",
  ],
  "human-machine": [
    "人人机协同会不会成为下一种组织形态",
    "为什么团队会形成效率孤岛",
    "AI 能否把不同认知编译到一起",
    "如何用语义指纹确认协作者身份",
    "多人和 Agent 如何持续动态对齐",
    "人人都是决策者时如何求解约束",
    "共识为什么会变得惰性而缓慢",
  ],
  "digital-baby": [
    "持续复刻婴儿成长算不算数字生命",
    "Agent 如何通过具身交互学习成长",
    "同步意识会不会变成缸中之脑",
    "数字分身和现实人生如何双向反馈",
    "数字外脑会替孩子保存什么",
    "预测式教育会不会限制因材施教",
    "成长轨迹被提前定义后如何偏离",
  ],
  "control-system": [
    "反馈系数未知时闭环还能稳定吗",
    "RL 模型和 PI 控制怎样配合",
    "传感器变比未知如何在线辨识",
    "NLMS 迭代公式为什么会收敛",
    "开环预测漂移会造成多大误差",
    "龙伯格观测器如何补足不可测状态",
    "观测器反馈会不会消灭辨识梯度",
  ],
  "journey-west": [
    "灵台方寸山的谜底为什么是心",
    "斜月三星洞如何拆出心字结构",
    "孙悟空为何从道门走向佛门",
    "心猿意马和修行有什么关系",
    "天仙、地仙的位阶如何区分",
    "菩提祖师到底处于什么位格",
    "大觉金仙和成佛之间差多少",
  ],
  "spacex-ipo": [
    "SpaceX 凭什么撑起超高估值",
    "星链订阅为何能带来稳定现金流",
    "发射成本垄断是怎样形成的",
    "太空算力叙事真的能兑现吗",
    "星舰期权如何推高远期想象",
    "私人卫星网络会卡住通信命脉吗",
    "太空主权和商业垄断如何冲突",
  ],
  "world-cup-defense": [
    "传统强队为什么越来越容易被拖住",
    "科学防守如何把失误压到最低",
    "低位铁桶阵怎样压缩进攻空间",
    "全球化人才如何抹平强弱差距",
    "为什么进攻构建比防守更昂贵",
    "强侧超载如何制造弱侧空间",
    "高位逼抢能不能直接破解铁桶阵",
  ],
  "child-debt": [
    "两岁孩子需要替已故父辈还贷吗",
    "限定继承如何限制还债范围",
    "放弃继承能不能避免个人负债",
    "必留份如何保护未成年人的生活",
    "共同借款人和普通子女有何不同",
    "签了担保后是否要用个人财产偿还",
    "恶意转移遗产会不会被法院撤销",
  ],
  "casino-clock": [
    "超市和赌场为什么都没有时钟",
    "无窗空间如何让人失去时间感",
    "沉浸式购物怎样延长停留时间",
    "筹码去货币化如何降低花钱痛感",
    "差一点赢为何比单纯输更上头",
    "声音、香氛和免费福利怎样影响判断",
    "掌控错觉为什么会让人持续下注",
  ],
};

const nodeAnswersById = {
  "messy-love": [
    "烂人真心比纯爱更有叙事张力：纯爱提供安全感，烂人真心则把爱变成破绽。一个自私、冷血或道德败坏的人，偏偏在某个人面前交出唯一软肋，读者会同时期待他低头、露出脆弱，又担心他的劣根性把双方拖进深渊。",
    "它和纯爱的底层都在追求“真心”，但纯爱相信普遍的善，烂人真心更像一种极端例外感：他可以是全世界的灾难，却唯独成为某个人的信徒。背景越黑，那一点真心越像废墟里开出的花。",
    "高水平的烂人真心一定伴随自厌。真心像一面镜子，照出他过往的卑劣；伸手要爱又等于承认自己那套“不信任、利益至上、先下手为强”的生存哲学破产了，所以会同时贪婪、愧疚、愤怒。",
    "例外感不是“他突然变好”，而是他的坏仍然对世界生效，唯独在那个人面前失灵。受众迷恋的不是道德感，而是被绝对偏爱的危险特权：他没有成为圣人，只是在某个关系里卸下防御。",
    "自厌最具体的形态是“我不配，但我舍不得”。他既害怕自己的污浊玷污对方，又恐惧对方看清他的烂泥本质后离开，于是伸手时是颤抖的、敌意的，也是无法克制的。",
    "“明月不照我也可以，但不能掉下来”把烂人真心从占有推向供奉。明月是他对世界善意最后的寄托；如果连这轮明月都坠入泥潭，就证明世上没有任何美好值得保留。",
    "最动人的部分不是掠夺，而是克制。一个惯于巧取豪夺的人，唯独面对这份爱时收回脏手：只要明月干净地高悬，他烂在地狱里也可以。爱的形态从“索取”变成了“献祭”。",
  ],
  "cancer-switch": [
    "“癌症总开关”让人将信将疑，是因为生物学复杂性和媒体简化之间落差太大。癌症不是一种病，而是两百多种疾病的统称，同一器官的肿瘤也可能有完全不同的突变、代谢通路和免疫微环境。",
    "小鼠有效不等于人体有效。很多轰动发现还停留在培养皿或动物实验阶段，进入人体后要跨过药物递送、代谢、免疫排异和副作用等关口，超过九成候选药物会在临床阶段失败。",
    "所谓死亡之谷，就是论文里的机制到药房里的药之间那段漫长空白。从发现靶点到新药上市通常要十到十五年，中途任何疗效不足、毒性过强、样本差异过大都可能让项目终止。",
    "肿瘤异质性让“一把钥匙开所有门”很难成立。一个通路可能只对某类癌症、某个亚型、某种突变背景有效；把它包装成癌症总开关，本质上是把局部突破说成万能叙事。",
    "类器官比传统细胞培养更接近真实肿瘤，可以模拟一部分组织结构和药物反应，但它仍然不是一个完整的人体。它缺少复杂免疫系统、内分泌环境、血流代谢和器官间互相影响。",
    "很多靶点不是癌细胞独有，也承担正常细胞生长、分裂和免疫防御任务。强行关掉开关，可能癌细胞死了，正常组织也被严重伤害，所以临床最难的是找到只杀癌、不伤人的窗口。",
    "媒体喜欢把“发现一个关键蛋白”写成“找到万能钥匙”，因为标题需要速度和冲击力；科学本身却只承认边界条件、样本限制和漫长验证。这就是公众反复失望的来源。",
  ],
  insurance: [
    "家庭保险先看谁倒下会让家庭财务崩盘。通常先保承担收入责任的大人，再保孩子和老人；先用医疗险、重疾险、定寿和意外险兜住大风险，再考虑储蓄、理财或教育金。",
    "定期寿险覆盖的是家庭责任期：房贷、子女教育、老人赡养和伴侣生活费。它不是给自己治病，而是在收入支柱身故或全残后，把未来几年甚至十几年的责任折成一笔钱。",
    "重疾险的核心不是报销医药费，而是补偿患病后收入中断、康复、护理和家庭开支。保额太低只像慰问金，真正有用的是能覆盖一到三年的收入缺口。",
    "百万医疗解决的是住院和大额治疗费，通常有免赔额，适合兜底重大医疗支出。它和医保互补，但不能替代重疾险，因为医疗险多是凭票报销，不负责收入损失。",
    "老人如果年龄大、慢病多，重疾险往往贵且限制多，可以优先考虑医保、惠民保、百万医疗可投版本和老年意外险。老人跌倒、骨折、住院津贴这类风险更现实。",
    "儿童不承担家庭收入责任，所以定寿优先级低；更需要的是医保、百万医疗和少儿重疾。少儿重疾最好关注儿童高发病种、赔付条件和保额，而不是被返还型包装吸走预算。",
    "身故、伤残、重疾给付类保险可以按合同叠加；医疗费报销类不能重复获利，只能在实际花费范围内报。意外险和定寿不冲突，一个看事故原因，一个看身故责任。",
  ],
  "privacy-noise": [
    "隐私保护会让数据失真，是因为系统故意给真实数据加噪声，防止外部反推出具体个人。人数越少、群体越小，噪声占比越高，最后统计结果可能偏离真实情况。",
    "差分隐私的核心不是隐藏数据表，而是让单个个体是否在数据中出现，都很难改变外部查询结果。代价是精度下降，尤其小社区、小族群、小样本指标容易被误差吞没。",
    "小样本失真会影响公共决策。比如某个街区的老人、儿童或少数族群数量被扰动后，学校、医院、补贴、选区划分都可能被错误估计，保护隐私和公平分配会发生冲突。",
    "数据粗化、分桶、压制极端值可以降低重识别风险，但会牺牲细节。越粗越安全，也越难分析真实差异；越细越有用，也越容易重新拼出个人画像。",
    "匿名数据并不天然安全。只要把邮编、年龄、性别、出行轨迹、消费记录等外部信息拼起来，很多“匿名人”仍然可以被重新识别，尤其在稀有行为和小范围场景中。",
    "合成数据可以保留总体规律，但它不是原始现实的复制。如果模型训练得不好，可能泄露原数据；如果保护太强，又可能生成过于平滑的假规律，无法支持严肃研究。",
    "隐私预算就是一套可消耗的安全额度。查询越多、越细，泄露风险越大；预算越严格，结果越模糊。治理难点是决定哪些公共利益值得消耗这部分精度。",
  ],
  "human-machine": [
    "人人机协同不是简单把 AI 加进群聊，而是让人、人群和多个 Agent 共同分担认知、执行和校验。未来团队的关键能力会从“谁会做”变成“谁能把目标、语义和约束对齐”。",
    "效率孤岛来自每个人都在自己的工具、术语和经验里工作。信息看似流动，真实理解却卡在上下文差异中；AI 的价值是把分散认知翻译成可互相接住的结构。",
    "AI 可以成为认知编译器，把产品、工程、运营、设计的语言互译，把模糊意图拆成任务、约束和风险。它不是替人判断，而是降低跨角色沟通的损耗。",
    "语义指纹可以理解为协作者的稳定表达模式、目标偏好和决策边界。给 AI 身份认证，不只是确认账号是谁，也要确认这段输入是否符合某个角色的一贯语义轨迹。",
    "动态对齐不是开会一次就结束，而是在人和 Agent 的每次行动后更新共识。目标、优先级、风险和资源都会变化，系统要持续发现偏差并把它拉回可协作状态。",
    "人人都是决策者时，真正困难的是约束求解：谁有权改目标，谁承担后果，哪些价值不能牺牲。AI 可以枚举方案和冲突，但最终仍需要人定义边界。",
    "惰性共识会让组织看起来民主，实际没人承担清晰判断。多人多 Agent 系统要避免这一点，就必须把“建议、批准、执行、复盘”拆开，让责任和证据同时可见。",
  ],
  "digital-baby": [
    "从出生起给孩子建立 Agent，不只是记录相册，而是形成持续成长的数字外脑：健康、情绪、语言、兴趣和学习轨迹都会被长期积累，像一个与现实生命同步演化的副本。",
    "具身交互决定它不是纯数据库。孩子如何看、摸、哭、笑、跑、摔倒，都会进入模型，让 Agent 学到这个孩子与世界互动的方式，而不只是成绩和文字记录。",
    "缸中之脑的问题在于，当数字反馈足够强，现实经验可能被模型预判和替代。孩子不是自己探索世界，而是在一个过度优化的反馈系统里被“更聪明地安排”。",
    "双向反馈很诱人也危险：Agent 可以提醒父母孩子正在焦虑、疲惫或偏科，也可能让父母用预测结果反过来塑造孩子，把还没发生的人生当成确定命运。",
    "数字外脑能保存孩子自己记不住的长期线索：过敏、睡眠、语言爆发期、兴趣变化、亲子互动模式。好的设计应该帮助孩子长大后理解自己，而不是替他定义自己。",
    "预测式教育能做到因材施教，但也可能把孩子锁进早期标签。系统越早判断“他适合什么”，越容易压窄偶然性；教育需要脚手架，也需要保留偏离轨道的空间。",
    "儿童 Agent 最重要的原则是可撤回、可解释、可由孩子逐步接管。它应该成为孩子的工具，而不是父母、学校或平台长期监控他的隐形档案。",
  ],
  "control-system": [
    "反馈系数未知时，闭环不是不能做，而是要把控制和辨识同时设计。系统一边用 PI 保持基本稳定，一边根据输入输出误差在线估计传感器变比或等效反馈增益。",
    "RL 模型给出电流动态的物理骨架，PI 控制负责把误差拉回目标。物理模型越准，控制器越轻松；反馈系数未知时，观测误差会直接影响闭环增益判断。",
    "传感器变比未知可以用在线归一化最小均方一类方法估计。核心是利用预测输出和实际测量之间的误差，逐步修正比例系数，避免一次性标定不准造成长期偏差。",
    "NLMS 会收敛，是因为每次更新都按输入能量做归一化，步长不会因为信号幅值忽大忽小而失控。只要激励足够、噪声有限、模型结构没错，估计会逐步贴近真实值。",
    "开环预测漂移会造成两个问题：控制器以为自己看见了真实状态，实际却在追逐模型幻觉；辨识器拿错误状态做参考，可能把参数越调越偏。",
    "龙伯格观测器用输出误差反馈修正不可测状态，能降低开环漂移。它适合在模型已知但状态测不全时工作，把纯预测变成“预测加校正”。",
    "观测器反馈可能削弱残差，但不一定消灭辨识梯度。关键是把状态估计和参数估计的时间尺度、激励条件分开，否则观测器太强会把可用于学习的误差信号也压没。",
  ],
  "journey-west": [
    "“灵台方寸山，斜月三星洞”的谜底常被解释为心。方寸指心的位置，斜月像心字卧钩，三星像心字三点，这不是单纯字谜，也把修行地点放回“内心”。",
    "斜月三星的妙处在于字形和寓意重合：洞在心中，师也在心中。孙悟空学本事不是去外部拿力量，而是开启心性里的可能。",
    "孙悟空由道入佛，表面是神话阵营转换，深层是从追求长生神通到学习约束心猿。道门给他能力，佛门给他秩序，取经路就是能力被驯化成使命。",
    "心猿意马说的是心念跳动、欲望奔驰。悟空的强大也正是他的危险：他能上天入地，却难以安住。紧箍不是单纯惩罚，而是给失控的心加边界。",
    "天仙、地仙不只是战斗力排名，更是修行路径和存在状态不同。地仙更接近驻世长生，天仙则进入更高的天界秩序；西游常把这些体系混合使用。",
    "菩提祖师的位格暧昧，像道、像佛、也像超出体系的启蒙者。他的功能不是参与天庭秩序，而是在故事开端点燃悟空这颗心。",
    "大觉金仙带有佛教成就意味，强调觉悟而不只是神通。悟空最终成佛，不是因为他打赢所有人，而是因为心猿被纳入慈悲、纪律和承担之中。",
  ],
  "spacex-ipo": [
    "SpaceX 的高估值来自它不再只是火箭公司，而是太空基建商、卫星通信运营商和太空算力叙事的组合体。市场买的不是一次发射，而是低轨基础设施的长期控制权。",
    "星链像电信订阅服务：偏远地区、远洋货轮、民航、军工等场景几乎没有替代品，用户付费意愿强。卫星部署完成后，新增用户边际成本低，现金流比传统航天项目稳定得多。",
    "发射成本垄断来自火箭回收和垂直整合。别人发卫星要向第三方买昂贵发射服务，SpaceX 可以用内部成本把自己的星链、星舰和未来设备送入轨道。",
    "太空 AI 算力的想象是把数据中心放到低轨：太阳能、散热、全球覆盖和星链网络一起构成新故事。它还没有完全兑现，但足以抬高资本市场对未来收入的预期。",
    "星舰是远期期权：一旦完全复用成熟，太空运输会从昂贵专车变成类似集装箱物流。登月、火星、巨型星座、太空工厂都依赖这种运力革命。",
    "星链可能卡住国家通信命脉，因为控制权集中在私人公司手里。地理围栏、后台断网、终端准入和星盾业务都会让依赖方在国家安全上处于被动。",
    "太空垄断既提高效率，也制造主权焦虑。商业公司能快速铺基建，但当通信、发射、数据和轨道资源都集中在一家公司手里，公共利益就会被商业决策牵动。",
  ],
  "world-cup-defense": [
    "传统强队越来越难碾压，是因为现代足球高度工业化。数据分析、运动科学和战术信息让防守下限大幅提高，所谓弱队也能用严密体系把强队拖进低效率进攻。",
    "科学防守不是靠硬拼，而是靠站位、距离、协防触发点和局部绞杀。球场被切成可管理的空间，队员知道什么时候压、什么时候退、什么时候把对手赶向边路。",
    "低位铁桶阵通过压缩纵深和肋部空间，让强队只能在外围倒脚。它牺牲控球和进攻人数，换取禁区附近的密度，让个人能力很难直接打穿。",
    "全球化青训抹平了传统差距。很多“弱旅”球员也在欧洲顶级联赛训练和比赛，身体、战术理解和对抗节奏并不落后，国家队名气差异不再等于真实实力差异。",
    "进攻构建比防守更昂贵。防守纪律可以短期训练，顶级进攻默契却需要长期磨合；国家队集训时间短，巨星也容易陷入单打独斗。",
    "强侧超载的思路是把防守吸到一侧，再快速转移到弱侧。它需要边锋、边后卫、中场和中锋同步移动，否则只是拥挤，不会产生真正空间。",
    "高位逼抢可以直接制造进攻机会，但也有风险。一旦第一道压迫被穿透，身后空间会暴露；所以它要求体能、距离控制和全队同步都非常精确。",
  ],
  "child-debt": [
    "两岁孩子不需要无条件替父辈还债。现代法律没有简单父债子偿，继承人通常只在继承遗产的范围内清偿债务，不用拿自己的个人财产无限承担。",
    "限定继承的意思是：拿了多少遗产，就在这个范围内还多少债。如果遗产不足以覆盖债务，剩余部分通常不能继续追到未成年人个人身上。",
    "放弃继承可以避免因继承而进入债务清偿关系，但要注意时间、程序和是否存在监护人代未成年人处理的问题。未成年人利益不能被成年人随意牺牲。",
    "必留份保护的是缺乏劳动能力又没有生活来源的人。即使遗产要用于还债，也要给未成年子女等特定群体保留必要生活份额，不能让他们完全失去基本保障。",
    "共同借款人和普通子女完全不同。如果孩子只是亲属，不因亲属关系负债；但成年人如果共同签字借款、共同经营、共同受益，就可能承担合同上的还款责任。",
    "担保人是另一条线。谁签了保证合同，谁可能以个人财产承担担保责任；这不是父债子偿，而是自己作出的法律承诺。",
    "如果债务人生前恶意转移财产，把资产低价或无偿转给亲属逃债，债权人可能请求撤销。法律不支持无限株连，但也不保护借继承名义逃避债务。",
  ],
  "casino-clock": [
    "超市和赌场减少时钟、窗户，是为了削弱时间感。人一旦不容易感知“已经待了多久”，就更容易继续逛、继续玩、继续消费。",
    "无窗空间切断了自然光和昼夜变化，环境永远维持在适合消费的状态。赌场尤其需要让人忘记外部世界，只留在灯光、声音和下注节奏里。",
    "沉浸购物不是单点诱导，而是动线、货架、音乐、温度和陈列共同作用。你不是被一个按钮说服，而是在一个不断降低离开冲动的空间里慢慢停留。",
    "筹码去货币化会降低花钱痛感。现金让人意识到损失，筹码像游戏道具；当钱被转译成颜色和数字，下注的心理阻力会下降。",
    "老虎机的“差一点就中”比单纯失败更刺激，因为大脑会把接近成功误判成能力或好运即将到来。这种近失效应会强化继续尝试的冲动。",
    "声音、香氛、免费饮料和小奖励都在制造舒适和兴奋。它们不一定直接让人下注，但会让人更久地停在一个判断力下降、情绪被托高的环境里。",
    "掌控错觉让人相信自己可以通过时机、手感或策略影响随机结果。普通人保持清醒的办法，是设定预算和离场时间，并把赌场理解为精密设计的商业空间。",
  ],
};

const feed = document.querySelector("#feed");
const searchInput = document.querySelector("#searchInput");
const sortSelect = document.querySelector("#sortSelect");
const detailTitle = document.querySelector("#detailTitle");
const detailSummary = document.querySelector("#detailSummary");
const detailTurns = document.querySelector("#detailTurns");
const detailBranches = document.querySelector("#detailBranches");
const detailHeat = document.querySelector("#detailHeat");
const detailPath = document.querySelector("#detailPath");

const nodePositions = [
  [50, 14],
  [33, 37],
  [67, 37],
  [22, 64],
  [43, 66],
  [78, 64],
  [60, 80],
];

const edges = [
  [0, 1],
  [0, 2],
  [1, 3],
  [1, 4],
  [2, 5],
  [4, 6],
];

const previewSequence = [0, 1, 4, 6, 2, 5, 3];
let expandedCard = null;
let previewingCard = null;
let previewTimer = null;
let previewDelayTimer = null;

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function renderFeed() {
  stopPreview();
  stopPreviewDelay();
  expandedCard = null;
  previewingCard = null;
  const query = searchInput.value.trim().toLowerCase();
  const sortMode = sortSelect.value;
  let items = discussions.filter((item) => {
    const blob = [item.title, item.author, item.summary, item.tags.join(" "), item.keywords.join(" ")]
      .join(" ")
      .toLowerCase();
    return blob.includes(query);
  });

  items = items.sort((a, b) => {
    if (sortMode === "new") return b.time.localeCompare(a.time);
    if (sortMode === "deep") return b.turns + b.branches - (a.turns + a.branches);
    return b.heat - a.heat;
  });

  feed.innerHTML = items.length
    ? items.map((item, index) => renderCard(item, index)).join("")
    : '<div class="empty">没有找到对应的问题树。</div>';

  feed.querySelectorAll(".tree-card").forEach((card) => {
    const item = discussions.find((entry) => entry.id === card.dataset.id);
    wireCard(card, item);
  });
}

function renderCard(item, cardIndex = 0) {
  const nodes = item.keywords
    .map((keyword, index) => {
      const [left, top] = nodePositions[index] || nodePositions[nodePositions.length - 1];
      const nodeClasses = ["keyword-node", index > 5 ? "hidden-node-in-preview" : ""]
        .filter(Boolean)
        .join(" ");
      const expanded = nodeDetailsById[item.id]?.[index] || keyword;
      return `<span class="${nodeClasses}" data-node="${index}" style="left:${left}%; top:${top}%"><span class="node-short">${escapeHtml(keyword)}</span><span class="node-detail">${escapeHtml(expanded)}</span></span>`;
    })
    .join("");

  const lines = edges
    .map(([from, to], index) => {
      const a = nodePositions[from];
      const b = nodePositions[to];
      const lineClasses = ["tree-line", to > 5 ? "trail-line-in-preview" : ""]
        .filter(Boolean)
        .join(" ");
      const previewEndX = to > 5 ? Math.min(74, a[0] + 8) : b[0];
      const previewEndY = to > 5 ? 100 : b[1];
      const previewPath =
        to > 5
          ? `M ${a[0]} ${a[1]} C ${a[0] + 3} ${a[1] + 11}, ${previewEndX - 2} ${previewEndY - 10}, ${previewEndX} ${previewEndY}`
          : `M ${a[0]} ${a[1]} C ${a[0]} ${a[1] + 16}, ${b[0]} ${b[1] - 16}, ${b[0]} ${b[1]}`;
      const fullPath = `M ${a[0]} ${a[1]} C ${a[0]} ${a[1] + 16}, ${b[0]} ${b[1] - 16}, ${b[0]} ${b[1]}`;
      return `<path class="${lineClasses}" data-edge="${index}" data-preview-path="${previewPath}" data-full-path="${fullPath}" d="${previewPath}" />`;
    })
    .join("");
  const firstAnswer = nodeAnswersById[item.id]?.[0] || nodeDetailsById[item.id]?.[0] || item.path[0] || item.summary;

  return `
    <article class="tree-card" data-id="${item.id}" tabindex="0" style="--cover-height:${item.height}px; --avatar:${item.color}">
      <div class="tree-cover">
        <div class="tree-map">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">${lines}</svg>
          ${nodes}
        </div>
        <div class="tree-node-content" aria-live="polite">
          <button class="leaf-arrow leaf-arrow-up" type="button" data-nav="parent" aria-label="查看上级节点">⌃</button>
          <button class="leaf-arrow leaf-arrow-right" type="button" data-nav="next" aria-label="查看下一个同级节点">›</button>
          <button class="leaf-arrow leaf-arrow-down" type="button" data-nav="child" aria-label="查看下级节点">⌄</button>
          <button class="leaf-arrow leaf-arrow-left" type="button" data-nav="prev" aria-label="查看上一个同级节点">‹</button>
          <div class="leaf-copy">
            <span class="tree-node-label">${escapeHtml(item.keywords[0])}</span>
            <p>${escapeHtml(firstAnswer)}</p>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="title-row">
          <span class="lock" aria-hidden="true">${item.private ? "▢" : "◇"}</span>
          <h3 class="card-title">${escapeHtml(item.title)}</h3>
        </div>
        <p class="card-summary">${escapeHtml(item.summary)}</p>
        <div class="tags">${item.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}</div>
        <div class="meta">
          <span class="author"><span class="avatar">${escapeHtml(item.author.slice(0, 1))}</span>${escapeHtml(item.author)}</span>
          <span class="stats">${item.turns} 轮 · ${item.branches} 枝 · 热度 ${item.heat}</span>
        </div>
      </div>
    </article>
  `;
}

function wireCard(card, item) {
  const nodes = [...card.querySelectorAll(".keyword-node")];
  const lines = [...card.querySelectorAll(".tree-line")];
  const treeCover = card.querySelector(".tree-cover");
  const leaf = card.querySelector(".tree-node-content");
  const leafArrows = [...card.querySelectorAll(".leaf-arrow")];
  const treeNodeLabel = card.querySelector(".tree-node-label");
  const treeNodeText = card.querySelector(".tree-node-content p");
  const parentByNode = new Map(edges.map(([from, to]) => [to, from]));
  let activeNodeIndex = -1;
  let pointerInCover = false;
  let isPreviewing = false;
  let flipTimer = null;
  let flipUpdateTimer = null;

  function getNodeAnswer(index) {
    return nodeAnswersById[item.id]?.[index] || nodeDetailsById[item.id]?.[index] || item.path[index] || item.summary;
  }

  function getNavTargets(index) {
    if (index < 0) return {};
    const parent = parentByNode.has(index) ? parentByNode.get(index) : null;
    const children = edges.filter(([from]) => from === index).map(([, to]) => to);
    const siblings =
      parent === null
        ? []
        : edges
            .filter(([from]) => from === parent)
            .map(([, to]) => to)
            .sort((a, b) => (nodePositions[a]?.[0] || 0) - (nodePositions[b]?.[0] || 0));
    const siblingIndex = siblings.indexOf(index);

    return {
      parent,
      child: children.length ? children[0] : null,
      prev: siblingIndex > 0 ? siblings[siblingIndex - 1] : null,
      next: siblingIndex >= 0 && siblingIndex < siblings.length - 1 ? siblings[siblingIndex + 1] : null,
    };
  }

  function updateLeafArrows(index) {
    const targets = getNavTargets(index);
    leafArrows.forEach((button) => {
      const target = targets[button.dataset.nav];
      button.hidden = target === null || target === undefined;
      button.dataset.target = target ?? "";
    });
  }

  function setLeafOrigin(index) {
    if (!leaf || index < 0) return;
    const [left, top] = nodePositions[index] || nodePositions[0];
    leaf.style.setProperty("--leaf-origin-x", `${left}%`);
    leaf.style.setProperty("--leaf-origin-y", `${top}%`);
  }

  function setActive(index) {
    const activeEdges = new Set();
    let current = index;
    activeNodeIndex = index;

    while (current > 0) {
      const edgeIndex = edges.findIndex(([, to]) => to === current);
      if (edgeIndex < 0) break;
      activeEdges.add(edgeIndex);
      current = edges[edgeIndex][0];
    }

    nodes.forEach((node, nodeIndex) => node.classList.toggle("active", nodeIndex === index));
    lines.forEach((line, lineIndex) => line.classList.toggle("active", activeEdges.has(lineIndex)));
    setLeafOrigin(index);
    updateNodeContent(index);
    updateLeafArrows(index);
    focusNode(index);
  }

  function updateNodeContent(index) {
    if (!treeNodeLabel || !treeNodeText || index < 0) return;
    const keyword = item.keywords[Math.min(index, item.keywords.length - 1)];
    const detail = getNodeAnswer(index);
    treeNodeLabel.textContent = keyword;
    treeNodeText.textContent = detail;
  }

  function flipToNode(index) {
    if (index < 0 || index === activeNodeIndex || !leaf) return;
    window.clearTimeout(flipTimer);
    window.clearTimeout(flipUpdateTimer);
    setLeafOrigin(activeNodeIndex);
    leaf.classList.add("is-flipping");
    flipUpdateTimer = window.setTimeout(() => {
      setActive(index);
      updateDetail(item, index);
    }, 150);
    flipTimer = window.setTimeout(() => {
      leaf.classList.remove("is-flipping");
    }, 430);
  }

  function focusNode(index) {
    if (pointerInCover || index < 0) return;
    const [left, top] = nodePositions[index] || nodePositions[0];
    card.style.setProperty("--tree-pan-x", `${((50 - left) * 0.84).toFixed(2)}%`);
    card.style.setProperty("--tree-pan-y", `${((50 - top) * 1.02).toFixed(2)}%`);
  }

  function getNearestNodeIndex(xPercent, yPercent) {
    return nodePositions.reduce(
      (nearest, [left, top], index) => {
        const distance = (left - xPercent) ** 2 + (top - yPercent) ** 2;
        return distance < nearest.distance ? { index, distance } : nearest;
      },
      { index: 0, distance: Number.POSITIVE_INFINITY },
    ).index;
  }

  function showFullTree() {
    lines.forEach((line) => {
      if (line.dataset.fullPath) line.setAttribute("d", line.dataset.fullPath);
    });
  }

  function resetTree() {
    setActive(-1);
    updateLeafArrows(-1);
    if (leaf) leaf.classList.remove("is-flipping");
    window.clearTimeout(flipTimer);
    window.clearTimeout(flipUpdateTimer);
    lines.forEach((line) => {
      if (line.dataset.previewPath) line.setAttribute("d", line.dataset.previewPath);
    });
    card.style.setProperty("--tree-pan-x", "0%");
    card.style.setProperty("--tree-pan-y", "0%");
  }

  function startPreview() {
    if (previewingCard && previewingCard !== card) {
      previewingCard.dispatchEvent(new CustomEvent("preview:stop"));
    }
    stopPreview();
    isPreviewing = true;
    previewingCard = card;
    card.classList.add("is-previewing");
    let sequenceIndex = 0;
    showFullTree();
    setActive(previewSequence[sequenceIndex]);
    updateDetail(item, previewSequence[sequenceIndex]);

    previewTimer = window.setInterval(() => {
      if (pointerInCover) return;
      sequenceIndex = (sequenceIndex + 1) % previewSequence.length;
      const nodeIndex = previewSequence[sequenceIndex];
      setActive(nodeIndex);
      updateDetail(item, nodeIndex);
    }, 1150);
  }

  function stopCardPreview() {
    isPreviewing = false;
    stopPreview();
    if (previewingCard === card) previewingCard = null;
    card.classList.remove("is-previewing");
    resetTree();
  }

  function showNodeContent(index) {
    stopPreviewDelay();
    stopPreview();
    showFullTree();
    card.classList.remove("is-previewing");
    if (previewingCard === card) previewingCard = null;
    setActive(index);
    if (leaf) {
      leaf.classList.remove("is-growing");
      card.classList.remove("is-lifting");
      void leaf.offsetWidth;
      card.classList.add("is-lifting");
      leaf.classList.add("is-growing");
      window.setTimeout(() => leaf.classList.remove("is-growing"), 760);
      window.setTimeout(() => card.classList.remove("is-lifting"), 760);
    }
    updateDetail(item, index);
  }

  function getRandomNodeIndex() {
    return Math.floor(Math.random() * item.keywords.length);
  }

  nodes.forEach((node, index) => {
    node.addEventListener("click", (event) => {
      event.stopPropagation();
      expandCard(card, () => showNodeContent(index));
    });
  });

  leafArrows.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const target = Number(button.dataset.target);
      if (!Number.isInteger(target)) return;
      flipToNode(target);
    });
  });

  card.addEventListener("click", () => {
    if (card.classList.contains("is-expanded")) {
      collapseCard(card);
      return;
    }

    expandCard(card, () => showNodeContent(getRandomNodeIndex()));
  });

  card.addEventListener("mouseenter", () => {
    if (isPreviewing) return;
    card.classList.add("is-previewing");
    focusNode(0);
    stopPreviewDelay();
    previewDelayTimer = window.setTimeout(startPreview, 300);
  });

  card.addEventListener("mouseleave", () => {
    stopPreviewDelay();
    pointerInCover = false;
    if (card.classList.contains("is-expanded")) {
      focusNode(activeNodeIndex);
      return;
    }
    stopCardPreview();
  });

  card.addEventListener("keydown", (event) => {
    if (card.classList.contains("is-expanded")) {
      const keyMap = {
        ArrowUp: "parent",
        ArrowRight: "next",
        ArrowDown: "child",
        ArrowLeft: "prev",
      };
      const nav = keyMap[event.key];
      if (nav) {
        const target = getNavTargets(activeNodeIndex)[nav];
        if (target !== null && target !== undefined) {
          event.preventDefault();
          flipToNode(target);
        }
        return;
      }
    }

    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    card.click();
  });

  treeCover.addEventListener("mouseenter", () => {
    if (!card.classList.contains("is-expanded")) return;
    pointerInCover = true;
  });

  treeCover.addEventListener("mousemove", (event) => {
    if (!card.classList.contains("is-expanded")) return;
    pointerInCover = true;
    const rect = treeCover.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    card.style.setProperty("--tree-pan-x", `${(-x * 52).toFixed(2)}%`);
    card.style.setProperty("--tree-pan-y", `${(-y * 86).toFixed(2)}%`);
  });

  treeCover.addEventListener("mouseleave", () => {
    pointerInCover = false;
    focusNode(activeNodeIndex);
  });

  card.addEventListener("preview:reset", resetTree);
  card.addEventListener("preview:stop", stopCardPreview);
}

function stopPreview() {
  if (!previewTimer) return;
  window.clearInterval(previewTimer);
  previewTimer = null;
}

function stopPreviewDelay() {
  if (!previewDelayTimer) return;
  window.clearTimeout(previewDelayTimer);
  previewDelayTimer = null;
}

function expandCard(card, startPreview) {
  stopPreviewDelay();
  if (expandedCard && expandedCard !== card) {
    expandedCard.classList.remove("is-expanded");
    expandedCard.dispatchEvent(new CustomEvent("preview:stop"));
  }

  expandedCard = card;
  card.classList.add("is-expanded");
  startPreview();
}

function collapseCard(card) {
  card.classList.remove("is-expanded");
  if (expandedCard === card) expandedCard = null;
}

function updateDetail(item, activeIndex = 0) {
  if (!detailTitle) return;
  detailTitle.textContent = item.title;
  detailSummary.textContent = item.summary;
  detailTurns.textContent = item.turns;
  detailBranches.textContent = item.branches;
  detailHeat.textContent = item.heat;
  detailPath.innerHTML = item.path
    .map((step, index) => {
      const keyword = item.keywords[Math.min(index + activeIndex, item.keywords.length - 1)];
      return `<div class="path-item"><strong>${escapeHtml(keyword)}</strong>${escapeHtml(step)}</div>`;
    })
    .join("");
}

searchInput.addEventListener("input", renderFeed);
sortSelect.addEventListener("change", renderFeed);

renderFeed();
