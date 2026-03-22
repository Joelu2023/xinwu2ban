# 部署说明（静态站 · 公网 https）

本项目为 Vite 构建的 React 单页应用（SPA），**必须**配置「所有路径回到 `index.html`」，否则直接打开 `/about` 等子路由会 404。

本地构建：

```bash
npm install
npm run build
```

产物在 `dist/` 目录。

---

## 方案一：Vercel（推荐，上手快）

1. 将代码推送到 GitHub / GitLab / Bitbucket（仓库根目录即本项目）。
2. 打开 [vercel.com](https://vercel.com) 登录，**Add New Project** → 导入该仓库。
3. 框架一般会自动识别为 Vite；Build Command：`npm run build`，Output Directory：`dist`（通常已自动填好）。
4. 项目根目录已含 `vercel.json`，已为 SPA 写好 **rewrites**，部署完成后会得到 `https://你的项目.vercel.app`。
5. 可在 Vercel 控制台绑定自己的域名。

**不用 Git 时**：安装 [Vercel CLI](https://vercel.com/docs/cli) 后，在项目根目录执行 `vercel`，按提示登录与确认；生产环境执行 `vercel --prod`。

---

## 方案二：Netlify

1. 将代码推送到 Git 仓库，在 [netlify.com](https://www.netlify.com) **Add new site** → Import。
2. 根目录已含 `netlify.toml`：`build` 命令与 `publish = "dist"` 及 SPA **redirects** 已配置。
3. 部署完成后会得到 `https://xxx.netlify.app`，可在站点设置里绑定域名。

**拖拽部署**：本地执行 `npm run build` 后，把 **`dist` 文件夹**拖到 Netlify Drop（若仅用控制台配置，需在后台 Redirects 里加 `/* /index.html 200`）。

---

## 方案三：阿里云 OSS + CDN（静态网站托管）

1. 创建 OSS Bucket，开启**静态页面**：默认首页 `index.html`，**错误页也设为 `index.html`**（否则子路由刷新会 404）。
2. 本地 `npm run build`，将 **`dist` 内全部文件**上传到 Bucket 根路径（保持 `index.html` 在根目录）。
3. （可选）为该 Bucket 或自定义域名配置 CDN，开启 HTTPS。

---

## 方案四：腾讯云 COS 静态网站

1. 创建存储桶，开启**静态网站**，索引文档 `index.html`，**错误文档同样填 `index.html`**（实现 SPA 回退）。
2. `npm run build` 后上传 `dist` 内全部文件到桶的网站目录（按控制台说明操作）。
3. 绑定自定义域名并配置 HTTPS（CDN/证书按腾讯云文档）。

---

## 方案五：Cloudflare Pages

连接 Git 仓库后，Build 命令：`npm run build`，输出目录：`dist`。  
`public/_redirects` 会随构建复制到 `dist`，规则为 `/* /index.html 200`，用于 SPA。

---

若你确定只用其中一家，可告知我平台名称，我可以帮你把仓库里的配置收紧到只保留对应一份，并检查是否还需 `base` 路径等特殊设置。
