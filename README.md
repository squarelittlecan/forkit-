# ForkitChat Frontend Demo

这是一个纯前端静态原型，可以直接放到 GitHub Pages 展示。项目不需要构建、不需要后端，也不需要安装依赖。

## 文件

- `index.html`：页面结构
- `styles.css`：暗色社区风格、桌面三瀑布流、关键词树视觉
- `app.js`：样例数据、搜索、排序、卡片 hover 动效、详情面板
- `.nojekyll`：让 GitHub Pages 按普通静态站点发布

## 本地预览

直接打开 `index.html` 即可预览。也可以在这个目录启动任意静态服务器。

## 发布到 GitHub Pages

1. 在 GitHub 新建一个公开仓库，例如 `forkitchat-demo`。
2. 把本目录下的文件上传到仓库根目录：
   - `index.html`
   - `styles.css`
   - `app.js`
   - `README.md`
   - `.nojekyll`
3. 进入仓库的 `Settings`。
4. 打开左侧 `Pages`。
5. 在 `Build and deployment` 中选择：
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
6. 保存后等待 GitHub Pages 部署完成。

部署完成后，访问地址通常是：

```text
https://你的用户名.github.io/forkitchat-demo/
```

## 数据替换

样例数据都在 `app.js` 的 `discussions` 数组里。后续接数据库时，可以把每条聊天映射成：

- `title`：聊天标题
- `author`：发起者
- `summary`：聊天摘要
- `keywords`：封面树关键词
- `path`：主干追问路径
- `turns`：对话轮次
- `branches`：分支数量
- `heat`：互动或推荐权重
