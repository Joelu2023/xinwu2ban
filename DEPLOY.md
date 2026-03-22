# Vercel 部署指南（推荐 · 全班可访问的 https）

本项目是 **Vite + React（React Router）单页应用**。  
仓库根目录的 **`vercel.json`** 已配置：

- **构建**：`npm run build`
- **输出目录**：`dist`
- **SPA 路由**：所有路径 **rewrite 到 `/index.html`**，避免直接打开 `/about`、`/growth` 等出现 404。

---

## 方式 A：连接 GitHub（推荐，推送代码即自动部署）

### 1. 代码放到 GitHub

若本地还没有远程仓库，在 GitHub 新建空仓库后执行（把 URL 换成你的）：

```bash
cd e:\xinwu2ban
git remote add origin https://github.com/你的用户名/你的仓库名.git
git branch -M main
git push -u origin main
```

之后每次 `git push`，Vercel 会自动重新构建并发布。

### 2. 在 Vercel 导入项目

1. 打开 [https://vercel.com](https://vercel.com) ，用 GitHub 账号登录（或绑定 GitHub）。
2. 点击 **Add New…** → **Project** → **Import** 你的仓库。
3. **Framework Preset** 一般会识别为 **Vite**；请确认：
   - **Build Command**：`npm run build`
   - **Output Directory**：`dist`
   - **Install Command**：`npm install`（默认即可）
4. 点击 **Deploy**。首次约 1～2 分钟完成后，会得到形如 **`https://项目名.vercel.app`** 的地址，发给全班即可。

### 3. 自定义域名（可选）

在 Vercel 该项目 → **Settings** → **Domains** 添加你的域名，按提示配置 DNS（通常一条 **CNAME** 指向 `cname.vercel.com`）。

---

## 方式 B：Vercel CLI（不先建 GitHub 也行）

1. 安装 [Node.js](https://nodejs.org/)（建议 **20+**，与本仓库 `.nvmrc` 的 **22** 一致更佳）。
2. 全局安装 CLI：`npm i -g vercel`
3. 在项目根目录执行：

```bash
cd e:\xinwu2ban
vercel login
vercel          # 首次：预览环境
vercel --prod   # 上线生产环境，得到 https 地址
```

CLI 会读取根目录 **`vercel.json`**，无需再手工配 SPA 回退。

---

## 本地自检（可选）

```bash
npm install
npm run build
```

成功后 `dist/` 即为 Vercel 要发布的静态文件。

---

## 常见问题

| 现象 | 处理 |
|------|------|
| 首页能开，子路由刷新 404 | 确认仓库根目录 **`vercel.json`** 已提交并包含 **`rewrites`**。 |
| 构建报错 | 本地先跑通 `npm run build`；看 Vercel 部署日志里 Node 版本，必要时在 Vercel 项目 **Settings → Node.js Version** 选 **22.x**。 |

更多说明见 [Vercel 文档](https://vercel.com/docs)。
