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
    color: "#25e2a4",
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
    color: "#61a8ff",
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
    color: "#f5d56a",
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
    color: "#b76dff",
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
    color: "#25e2a4",
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
    color: "#ff3157",
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
    color: "#61a8ff",
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
    color: "#25e2a4",
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
    color: "#61a8ff",
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
    color: "#25e2a4",
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
    color: "#f5d56a",
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
    color: "#ff3157",
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
  [48, 13],
  [27, 39],
  [69, 40],
  [9, 72],
  [42, 75],
  [88, 72],
  [61, 90],
];

const edges = [
  [0, 1],
  [0, 2],
  [1, 3],
  [1, 4],
  [2, 5],
  [4, 6],
];

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function renderFeed() {
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
      const expanded = (nodeDetailsById[item.id]?.[index] || keyword).split(/[，。！？、：:]/)[0];
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

  return `
    <article class="tree-card" data-id="${item.id}" tabindex="0" style="--cover-height:${item.height}px; --avatar:${item.color}">
      <div class="tree-cover">
        <div class="tree-map">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">${lines}</svg>
          ${nodes}
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

  function setActive(index) {
    const activeEdges = new Set();
    let current = index;

    while (current > 0) {
      const edgeIndex = edges.findIndex(([, to]) => to === current);
      if (edgeIndex < 0) break;
      activeEdges.add(edgeIndex);
      current = edges[edgeIndex][0];
    }

    nodes.forEach((node, nodeIndex) => node.classList.toggle("active", nodeIndex === index));
    lines.forEach((line, lineIndex) => line.classList.toggle("active", activeEdges.has(lineIndex)));
  }

  card.addEventListener("mouseenter", () => {
    setActive(-1);
    lines.forEach((line) => {
      if (line.dataset.fullPath) line.setAttribute("d", line.dataset.fullPath);
    });
    updateDetail(item, 0);
  });

  nodes.forEach((node, index) => {
    node.addEventListener("mouseenter", () => {
      setActive(index);
      updateDetail(item, index);
    });
  });

  card.addEventListener("mouseleave", () => {
    lines.forEach((line) => {
      if (line.dataset.previewPath) line.setAttribute("d", line.dataset.previewPath);
    });
  });

  treeCover.addEventListener("mousemove", (event) => {
    const rect = treeCover.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    card.style.setProperty("--tree-pan-x", `${(-x * 80).toFixed(2)}%`);
    card.style.setProperty("--tree-pan-y", `${(-y * 80).toFixed(2)}%`);
  });

  treeCover.addEventListener("mouseleave", () => {
    card.style.setProperty("--tree-pan-x", "0%");
    card.style.setProperty("--tree-pan-y", "0%");
  });
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
