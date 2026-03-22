# GitHub + Vercel 上线指南（仓库内配置已就绪）

本目录已包含 **`vercel.json`**（构建命令、输出目录、`dist`、SPA 路由回退），你只需完成 **GitHub 仓库** 与 **Vercel 导入** 即可得到 `https://xxx.vercel.app`。

---

## 一、你需要在本机完成的（一次性）

### 1. 在 GitHub 上新建空仓库

1. 登录 [https://github.com](https://github.com) → 右上角 **+** → **New repository**。
2. **Repository name** 填例如 `xinwu2ban`（可自定）。
3. 选 **Public**（或 Private 也可，Vercel 需有权限访问）。
4. **不要**勾选「Add a README / .gitignore / license」（保持空仓库，避免与本地历史冲突）。
5. 点 **Create repository**，页面会显示仓库地址，记下 **HTTPS** 地址，形如：  
   `https://github.com/你的GitHub用户名/仓库名.git`

### 2. 本地检查是否已有远程地址

在项目根目录执行：

```bash
cd e:\xinwu2ban
git remote -v
```

- **若没有任何输出**：说明还没绑定 GitHub，继续下面「3. 添加 origin 并推送」。
- **若已存在 `origin`**：不必再 `add`，直接 `git push -u origin main`（或与你的分支名一致）。若要换成新仓库，先执行：  
  `git remote remove origin`  
  再按步骤 3 添加新地址。

### 3. 提交本地改动、添加远程并推送

```bash
cd e:\xinwu2ban
git status
git add -A
git commit -m "chore: sync site copy and deploy docs"
```

若提示 **nothing to commit**，可跳过 commit，直接推送。

绑定远程（**把 URL 换成你在上一步复制的地址**）：

```bash
git branch -M main
git remote add origin https://github.com/你的GitHub用户名/你的仓库名.git
git push -u origin main
```

**首次 `git push` 时**：GitHub 已不支持账户密码，需使用 **Personal Access Token (PAT)** 作为密码，或改用 **SSH**。任选其一：

- **HTTPS + PAT**：GitHub → **Settings** → **Developer settings** → **Personal access tokens**，生成带 `repo` 权限的 token；在密码提示处粘贴 token。
- **SSH**：本机配置 SSH key 后，将 `origin` 设为 `git@github.com:用户名/仓库名.git` 再 `git push`。

推送成功后，GitHub 网页上应能看到本项目的全部文件。

---

## 二、在 Vercel 上部署（连接 GitHub）

1. 打开 [https://vercel.com](https://vercel.com) ，用 **GitHub 账号**登录（或 **Sign up** 后绑定 GitHub）。
2. **Add New…** → **Project** → **Import Git Repository**，选中 **`你的用户名/仓库名`**。
3. 项目设置请确认（一般会自动识别 **Vite**）：

   | 项 | 值 |
   |----|-----|
   | **Framework Preset** | Vite（或 Other，以能构建为准） |
   | **Build Command** | `npm run build` |
   | **Output Directory** | `dist` |
   | **Install Command** | `npm install`（默认） |

   根目录 **`vercel.json`** 已与上述一致；若界面与文件冲突，以 **`vercel.json`** 为准或保持相同即可。

4. 点击 **Deploy**。完成后会得到 **`https://项目名.vercel.app`**（或你改过的项目名），**把该 https 链接发给同学即可**。

5. 之后每次向 `main` 执行 **`git push`**，Vercel 会**自动重新构建并发布**（无需再点 Deploy）。

---

## 三、可选：自定义域名

在 Vercel 该项目 → **Settings** → **Domains** → 添加你的域名，按提示在域名 DNS 处添加 **CNAME**（指向 `cname.vercel.com` 等，以 Vercel 页面说明为准）。

---

## 四、可选：不用 GitHub，仅用 Vercel CLI

若暂时不想用 GitHub，可在本机安装 CLI 后直接上线：

```bash
npm i -g vercel
cd e:\xinwu2ban
vercel login
vercel --prod
```

详见下文「本地自检」；长期维护仍推荐 **GitHub + Vercel 自动部署**。

---

## 五、本地自检（推荐推送前执行）

```bash
cd e:\xinwu2ban
npm install
npm run build
```

能通过则 Vercel 构建成功率更高。Node 建议 **20+**（本仓库 **`.nvmrc`** 为 **22**，可在 Vercel **Settings → Node.js Version** 中选 **22.x**）。

---

## 六、常见问题

| 现象 | 处理 |
|------|------|
| `remote origin already exists` | 使用 `git remote set-url origin <新地址>` 或先 `git remote remove origin` 再 `add`。 |
| 子路由刷新 404 | 确认仓库里的 **`vercel.json`** 已推送，且含 **`rewrites`** 到 `/index.html`。 |
| Vercel 构建失败 | 本地执行 `npm run build` 看报错；核对 Node 版本与依赖安装日志。 |

更多官方文档：[Vercel Docs](https://vercel.com/docs)。
