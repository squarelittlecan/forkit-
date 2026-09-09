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
      "从纯爱与烂人真心的叙事张力，追问到自厌、供奉、明月不坠落的古典悲剧感。",
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
      "从媒体标题里的重大突破，展开到小鼠模型、类器官、临床死亡之谷和科研传播的落差。",
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
      "从家庭风险排序，到中年夫妻、老人、儿童的险种优先级，并继续追问寿险和意外险是否冲突。",
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
      "从人口普查加噪声的争议，延伸到差分隐私、匿名重识别、数据脱敏和公共利益之间的平衡。",
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
      "从宏观人人机协同，收束到一周工程开发里的认知对齐、身份认证和共识形成。",
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
      "从数字生命和缸中之脑的设想，落到数字外脑、预测医学、教育脚手架和人生预定义的风险。",
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
      "从 RL 电感模型的传感器变比辨识，追问到 NLMS 收敛、开环漂移和观测器对辨识梯度的破坏。",
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
      "从一个心字谜，展开到西游记的修心寓言、孙悟空由道入佛，以及天仙地仙和金仙体系。",
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
      "从 SpaceX 的估值叙事，展开到星链现金流、发射成本垄断、太空 AI 算力和通信主权风险。",
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
      "从传统强队被拖住，追问到现代防守工业化、全球化人才网络，以及进攻方如何主动制造空间。",
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
      "从一个极端家庭债务问题，拆出限定继承、必留份规则、担保签字和恶意转移财产等法律边界。",
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
      "从商业空间剥夺时间感，延伸到赌场的筹码去货币化、差点就赢、感官环境和掌控错觉。",
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
  [47, 16],
  [28, 33],
  [62, 35],
  [14, 54],
  [43, 58],
  [78, 57],
  [58, 77],
];

const edges = [
  [0, 1],
  [0, 2],
  [1, 3],
  [1, 4],
  [2, 5],
  [4, 6],
];

let selectedId = discussions[0].id;

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
    ? items.map(renderCard).join("")
    : '<div class="empty">没有找到对应的问题树。</div>';

  feed.querySelectorAll(".tree-card").forEach((card) => {
    const item = discussions.find((entry) => entry.id === card.dataset.id);
    wireCard(card, item);
  });
}

function renderCard(item) {
  const nodes = item.keywords
    .map((keyword, index) => {
      const [left, top] = nodePositions[index] || nodePositions[nodePositions.length - 1];
      return `<span class="keyword-node ${index === 0 ? "active" : ""}" data-node="${index}" style="left:${left}%; top:${top}%">${escapeHtml(keyword)}</span>`;
    })
    .join("");

  const lines = edges
    .map(([from, to], index) => {
      const a = nodePositions[from];
      const b = nodePositions[to];
      return `<path class="tree-line ${index === 0 ? "active" : ""}" data-edge="${index}" d="M ${a[0]} ${a[1]} C ${a[0]} ${a[1] + 16}, ${b[0]} ${b[1] - 16}, ${b[0]} ${b[1]}" />`;
    })
    .join("");

  return `
    <article class="tree-card ${item.id === selectedId ? "selected" : ""}" data-id="${item.id}" style="--cover-height:${item.height}px; --avatar:${item.color}">
      <div class="tree-cover">
        <div class="tree-map">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">${lines}</svg>
          ${nodes}
          <span class="flow-cursor" style="left:47%; top:16%"></span>
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
          <span class="stats">${item.turns} 轮 · ${item.branches} 枝 · ${item.heat}</span>
        </div>
      </div>
    </article>
  `;
}

function wireCard(card, item) {
  const cover = card.querySelector(".tree-cover");
  const map = card.querySelector(".tree-map");
  const nodes = [...card.querySelectorAll(".keyword-node")];
  const lines = [...card.querySelectorAll(".tree-line")];
  const cursor = card.querySelector(".flow-cursor");
  let rafId = null;
  let pan = { x: -10, y: -7 };
  let targetPan = { x: -10, y: -7 };

  function setActive(index) {
    nodes.forEach((node, nodeIndex) => node.classList.toggle("active", nodeIndex === index));
    lines.forEach((line, lineIndex) => line.classList.toggle("active", lineIndex === Math.max(0, index - 1)));
    const [left, top] = nodePositions[index] || nodePositions[0];
    cursor.style.left = `${left}%`;
    cursor.style.top = `${top}%`;
  }

  function applyPan() {
    pan.x += (targetPan.x - pan.x) * 0.08;
    pan.y += (targetPan.y - pan.y) * 0.08;
    map.style.setProperty("--pan-x", `${pan.x}%`);
    map.style.setProperty("--pan-y", `${pan.y}%`);

    if (Math.abs(targetPan.x - pan.x) > 0.02 || Math.abs(targetPan.y - pan.y) > 0.02) {
      rafId = requestAnimationFrame(applyPan);
    } else {
      rafId = null;
    }
  }

  function setPanTarget(x, y) {
    targetPan = {
      x: x < 0.38 ? 0 : x > 0.62 ? -28 : -10,
      y: y < 0.38 ? 0 : y > 0.62 ? -24 : -7,
    };
    if (!rafId) rafId = requestAnimationFrame(applyPan);
  }

  cover.addEventListener("mousemove", (event) => {
    const rect = cover.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const directionIndex = Math.min(
      item.keywords.length - 1,
      Math.max(0, Math.round((x * 0.58 + y * 0.42) * (item.keywords.length - 1))),
    );
    setPanTarget(x, y);
    setActive(directionIndex);
    updateDetail(item, directionIndex);
  });

  cover.addEventListener("mouseleave", () => {
    targetPan = { x: -10, y: -7 };
    if (!rafId) rafId = requestAnimationFrame(applyPan);
    setActive(0);
    if (selectedId === item.id) updateDetail(item, 0);
  });

  card.addEventListener("click", () => {
    selectedId = item.id;
    document.querySelectorAll(".tree-card").forEach((node) => node.classList.remove("selected"));
    card.classList.add("selected");
    updateDetail(item, 0);
  });
}

function updateDetail(item, activeIndex = 0) {
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
updateDetail(discussions[0]);
