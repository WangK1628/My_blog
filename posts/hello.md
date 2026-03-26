第一篇技术博客

搭建一个基于 Vue (VitePress) + Serverless (Vercel) 的技术博客，是目前成本最低、性能最强的方案。以下是分步实操指南：
第一阶段：本地环境准备 (The Setup)
安装 Node.js：确保电脑有 Node 环境（建议 v18+）。
创建项目文件夹：
bash
mkdir my-blog && cd my-blog
npm init -y
请谨慎使用此类代码。

安装 VitePress（Vue 官方推荐的博客/文档框架）：
bash
npm add -D vitepress vue
请谨慎使用此类代码。

初始化项目结构：
bash
npx vitepress init
请谨慎使用此类代码。

Where should VitePress initialize? → 输入 ./
Site title → 你的博客名字
Site description → 你的简介
Theme → 选择 Default Theme
Use TypeScript? → Yes
第二阶段：内容编写与装修 (The Content)
首页美化：打开 index.md，模仿大佬的极简风格修改 YAML 配置：
markdown
---
layout: home
hero:
  name: "Your Name"
  text: "前端 & Serverless 探索者"
  tagline: 简单的代码，深刻的逻辑
  actions:
    - theme: brand
      text: 开启阅读
      link: /posts/hello
---
请谨慎使用此类代码。

创建文章目录：新建 posts 文件夹，里面写你的第一篇博客 hello.md。
markdown
# 我的第一篇 Serverless 博客
在这里记录我的技术心得...
请谨慎使用此类代码。

本地预览：
bash
npm run dev
请谨慎使用此类代码。

访问 http://localhost:5173 就能看到你的博客雏形了。
第三阶段：集成 Serverless 功能 (The API)
为了体现 Serverless 的优势，我们加一个自动获取 GitHub 粉丝数的动态功能：
在根目录创建 api 文件夹（Vercel 约定在这个文件夹写后端逻辑）。
新建 api/github-info.ts：
typescript
// 这是一个 Serverless 函数
export default async function handler(req, res) {
  const response = await fetch('https://api.github.com');
  const data = await response.json();
  res.status(200).json({ followers: data.followers });
}
请谨慎使用此类代码。

第四阶段：代码托管到 GitHub (The Bridge)
在 GitHub 上新建一个仓库，名字叫 my-blog。
本地初始化 Git 并推送到云端：
bash
git init
git add .
git commit -m "feat: initial blog"
git remote add origin https://github.com
git push -u origin main
请谨慎使用此类代码。

第五阶段：部署到 Vercel (The Deployment)
这是最关键的一步，完成“无服务器”上线：
登录 Vercel 官网 (用 GitHub 账号直接登录)。
点击 "Add New" -> "Project"。
在列表中找到你刚才建立的 my-blog 仓库，点击 "Import"。
框架预设：Vercel 会自动识别出是 VitePress。
点击 "Deploy"：等待约 1 分钟。
完成！ Vercel 会给你一个 xxx.vercel.app 的永久域名，你的博客就全球发布了。
方案亮点总结：
全自动化：以后你只要在本地写完 .md 文章并 git push，网站就会自动更新。
极致性能：静态页面由全球 CDN 承载，访问速度极快。
真·零成本：Vercel 的免费额度对于个人博客来说，只要不是日活几十万，基本是永久免费。
