# WinJS Soybean Admin

🚀 一个基于 **WinJS** 重构的现代化企业级中后台管理系统，支持多构建工具（Vite 6.x、Webpack、Rsbuild）打包，提供完整的开发工具链和最佳实践配置。

## 📋 项目简介

本项目是基于流行的 [**SoybeanAdmin**](https://github.com/soybeanjs/soybean-admin) 使用 **WinJS** 框架进行重构的企业级中后台管理系统。项目保持了原有的业务逻辑和功能特性，同时利用 WinJS 的多构建工具支持能力，让开发者可以灵活选择 **Vite 6.x**、**Webpack 5** 或 **Rsbuild** 作为构建工具，满足不同项目场景的需求。

### ✨ 重构亮点

- 🔧 **多构建工具支持**：同一套代码，支持 Vite 6.x、Webpack、Rsbuild 三种构建方式
- 📦 **Monorepo 架构**：采用 pnpm workspace 管理多包结构，代码复用性更强
- 🏗️ **WinJS 加持**：享受 WinJS 元框架带来的开发体验提升
- 🔄 **业务代码复用**：保持原有 SoybeanAdmin 的核心功能，无缝迁移

## 🚀 技术栈

### 核心框架

- **Vue 3.x** - 渐进式 JavaScript 框架，使用 Composition API
- **Vue Router 4.x** - 官方路由管理器，支持动态路由
- **Pinia 3.x** - 新一代状态管理库
- **WinJS 0.16.x** - 企业级前端开发框架，支持多构建工具

### UI 组件库

- **Naive UI 2.42.x** - 现代化 Vue 3 组件库
- **UnoCSS** - 原子化 CSS 引擎
- **@iconify/vue** - 图标组件库
- **Echarts 5.6.x** - 数据可视化图表库

### 构建工具（多选一）

- **Vite 6.x** - 极速的前端构建工具（默认）
- **Webpack** - 成熟的模块打包工具
- **Rsbuild** - 基于 Rspack 的构建工具

### 开发语言

- **TypeScript 5.x** - 类型安全的 JavaScript 超集
- **Sass/SCSS** - CSS 预处理器
- **Less** - CSS 预处理器（可选）

### 代码质量

- **ESLint** - JavaScript/TypeScript 代码检查
- **Prettier** - 代码格式化工具
- **Stylelint** - CSS/Sass 样式检查
- **F2ELint 3.x** - 前端代码规范工具
- **Husky** - Git hooks 管理
- **Lint-staged** - 暂存文件检查

### 工程化工具

- **PNPM** - 快速、节省磁盘空间的包管理器
- **Cross-env** - 跨平台环境变量设置
- **Commitlint** - Git 提交信息规范检查
- **@sa/scripts** - 自定义脚本工具集

## ✨ 功能特性

### 🏗️ 架构特性
- 🔧 **多构建工具支持** - 同一套代码支持 Vite、Webpack、Rsbuild 三种构建方式
- 📦 **Monorepo 架构** - 基于 pnpm workspace 的多包管理
- 🎯 **开箱即用** - 预配置完整的开发环境和工具链
- 🔄 **模块联邦** - 支持微前端架构，便于大型项目拆分，基于 umijs 的 mfsu 实现

### 🎨 界面功能
- 📱 **响应式设计** - 完美适配桌面端、平板、移动端
- 🌗 **主题切换** - 支持亮色/暗色主题，多种主题色配置
- 🎭 **布局模式** - 支持垂直、水平、混合等多种布局模式
- 📋 **标签页管理** - Chrome 风格的多标签页，支持缓存和拖拽
- 🔍 **全局搜索** - 快速搜索菜单和功能
- 🌐 **国际化** - 完整的中英文支持

### 🛡️ 权限系统
- 🔐 **用户认证** - 完整的登录、登出、token 刷新机制
- 👥 **角色权限** - 基于角色的权限控制（RBAC）
- 🛣️ **路由守卫** - 动态路由，根据权限生成菜单
- 🔒 **页面权限** - 细粒度的页面访问控制

### 🚀 开发体验
- 🔍 **开发调试** - 完善的 Source Map 和热更新
- 📊 **代码质量** - 集成 ESLint、Prettier、Stylelint 等工具
- 🧪 **类型安全** - 完整的 TypeScript 类型定义
- 🎨 **样式方案** - UnoCSS + Sass/SCSS，支持原子化 CSS
- 🌐 **网络请求** - 基于 axios 的统一请求封装，支持拦截器
- 🚀 **构建优化** - 代码分割、压缩、缓存策略

## 🛠️ 快速开始

### 环境要求

- **Node.js** >= 18.0.0
- **PNPM** >= 10（推荐）或 npm >= 8

### 安装依赖

```bash
# 推荐使用 pnpm（项目采用 monorepo 架构）
pnpm install

# 或使用 npm
npm install
```

### 开发调试

```bash
# 启动开发服务器（默认使用 Vite）
pnpm dev

# 或者
pnpm start
```

访问 http://localhost:8000 查看应用

### 构建工具选择

本项目支持三种构建工具，可根据项目需求选择：

#### 1. 使用 Webpack（默认）
```bash
# 开发
pnpm dev

# 构建
pnpm build

# 预览
pnpm preview
```

#### 2. 使用 Vite
```bash
# 通过 WinJS 配置切换到 Vite
# 在 .winrc.ts 中配置 vite: {}

# 开发
pnpm dev

# 构建
pnpm build
```

#### 3. 使用 Rsbuild
```bash
# 通过 WinJS 配置切换到 Rsbuild
# 在 .winrc.ts 中注释 vite: {} 和 mfsu 相关，然后配置 rsbuild: {}

# 开发
pnpm dev

# 构建
pnpm build
```

### 项目初始化

```bash
# 项目初始化（安装后自动执行）
pnpm setup

# 手动执行初始化
pnpm run setup
```

## 📁 项目结构

```
winjs-soybean-admin/
├── packages/                   # Monorepo 子包
│   ├── alova/                 # Alova 请求库封装
│   ├── axios/                 # Axios 请求库封装
│   ├── color/                 # 颜色工具库
│   ├── hooks/                 # 通用 Hooks
│   ├── materials/             # 物料组件库
│   ├── scripts/               # 脚本工具集
│   ├── uno-preset/            # UnoCSS 预设
│   └── utils/                 # 工具函数库
├── src/                       # 主应用源码
│   ├── assets/               # 静态资源
│   │   ├── imgs/            # 图片资源
│   │   └── js/              # JS 资源
│   ├── components/           # 通用组件
│   │   ├── advanced/        # 高级组件
│   │   ├── common/          # 公共组件
│   │   └── custom/          # 自定义组件
│   ├── constants/           # 常量定义
│   ├── hooks/               # 业务 Hooks
│   │   ├── business/        # 业务逻辑 Hooks
│   │   └── common/          # 通用 Hooks
│   ├── icons/               # SVG 图标
│   ├── layouts/             # 布局组件
│   │   ├── base-layout/     # 基础布局
│   │   ├── blank-layout/    # 空白布局
│   │   └── modules/         # 布局模块
│   ├── locales/             # 国际化
│   │   └── langs/           # 语言包
│   ├── plugins/             # 插件配置
│   ├── router/              # 路由配置
│   │   ├── elegant/         # 优雅路由
│   │   ├── guard/           # 路由守卫
│   │   └── routes/          # 路由定义
│   ├── service/             # 服务层
│   │   ├── api/             # API 接口
│   │   └── request/         # 请求封装
│   ├── store/               # 状态管理
│   │   ├── modules/         # Store 模块
│   │   └── plugins/         # Store 插件
│   ├── styles/              # 样式文件
│   │   ├── css/             # CSS 文件
│   │   └── scss/            # SCSS 文件
│   ├── theme/               # 主题配置
│   ├── typings/             # 类型定义
│   ├── utils/               # 工具函数
│   ├── views/               # 页面组件
│   │   ├── _builtin/        # 内置页面
│   │   └── home/            # 主页
│   ├── app.js               # 应用入口配置
│   └── Main.vue             # 根组件
├── .winrc.ts                  # WinJS 配置文件
├── package.json               # 项目依赖配置
├── pnpm-workspace.yaml        # PNPM 工作区配置
├── tsconfig.json              # TypeScript 配置
├── uno.config.ts              # UnoCSS 配置
├── .eslintrc.js               # ESLint 配置
├── .prettierrc.js             # Prettier 配置
├── .stylelintrc.js            # Stylelint 配置
├── f2elint.config.js          # F2ELint 配置
├── commitlint.config.js       # Commitlint 配置
└── README.md                  # 项目说明文档
```

## 🔧 开发指南

### 代码规范

项目集成了完整的代码规范工具链：

```bash
# 代码检查（ESLint + Stylelint）
pnpm lint

# 代码格式化（Prettier）
pnpm format

# F2ELint 扫描
pnpm f2elint-scan

# F2ELint 修复
pnpm f2elint-fix

# Git 提交（规范化提交信息）
pnpm commit

# 中文提交信息
pnpm commit:zh
```

### WinJS 配置

在 `.winrc.ts` 中进行项目配置：

```typescript
import { defineConfig } from '@winner-fed/winjs';

export default defineConfig({
  // 包管理器
  npmClient: 'pnpm',

  // 插件配置
  plugins: ['@winner-fed/plugin-unocss', '@winner-fed/plugin-unicons'],

  // 构建工具选择（可选：'webpack'(默认) | 'vite' | 'rsbuild'）
  // vite: {}, // 开启 vite
  // rsbuild: {}, // 开启 rsbuild

  // 浏览器兼容性
  targets: { chrome: 51, firefox: 54, safari: 10, edge: 15 },

  // 压缩配置
  jsMinifier: 'terser',
  cssMinifier: 'cssnano',

  // Sass 配置
  sassLoader: {
    api: 'modern-compiler',
    sassOptions: {
      silenceDeprecations: ['legacy-js-api']
    },
    additionalData: `@use "@/styles/scss/global.scss" as *;`
  },

  // 代理配置
  proxy: {
    '/api': {
      target: 'http://localhost:3001',
      changeOrigin: true
    }
  }
});
```

### 环境变量

项目支持多环境配置，在 `.env` 文件中定义：

```bash
# 应用标题
VITE_APP_TITLE=Soybean Admin

# 应用描述
VITE_APP_DESC=A beautiful vue admin template

# 服务端接口地址
VITE_SERVICE_BASE_URL=http://localhost:3001

# 路由历史模式
VITE_ROUTER_HISTORY_MODE=history

# 是否开启请求代理
VITE_HTTP_PROXY=true
```

### 网络请求

项目提供了多种请求库封装：

#### 1. 使用 Axios（推荐）
```typescript
import { request } from '@/service';

// GET 请求
const data = await request.get<ApiResponse>('/api/users');

// POST 请求
const result = await request.post('/api/users', { name: 'John' });
```

#### 2. 使用 Alova
```typescript
import { alova } from '@sa/alova';

// 创建请求方法
const getUserList = () => alova.Get('/api/users');

// 在组件中使用
const { data, loading } = useRequest(getUserList);
```

### 样式开发

项目支持多种样式方案：

#### 1. UnoCSS（原子化 CSS）
```vue
<template>
  <div class="flex items-center justify-center h-screen bg-gray-100">
    <h1 class="text-3xl font-bold text-blue-600">Hello World</h1>
  </div>
</template>
```

#### 2. Sass/SCSS
```scss
// 使用全局变量
.header {
  background-color: $primary-color;
  height: $header-height;

  // 使用 mixins
  @include flex-center;
}
```

#### 3. CSS Modules
```vue
<template>
  <div :class="$style.container">
    <h1 :class="$style.title">Title</h1>
  </div>
</template>

<style module>
.container {
  padding: 20px;
}

.title {
  font-size: 24px;
  color: #333;
}
</style>
```

## 📦 构建配置

### 多构建工具对比

| 特性 | Vite | Webpack | Rsbuild |
|------|------|---------|---------|
| 构建速度 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| 热更新 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| 生态成熟度 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| 配置复杂度 | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐ |
| 适用场景 | 现代项目 | 大型项目 | 性能优先 |

### 浏览器兼容性

```typescript
// .winrc.ts
targets: {
  chrome: 51,
  firefox: 54,
  safari: 10,
  edge: 15
}
```

### 构建优化策略

- **代码分割**: 自动分析依赖关系，按需加载
- **代码压缩**: Terser 压缩 JavaScript，cssnano 压缩 CSS
- **Tree Shaking**: 自动移除未使用的代码
- **模块联邦**: 支持微前端架构，便于大型项目拆分
- **缓存策略**: 智能缓存，提升二次构建速度
- **Source Map**: 开发环境启用，生产环境可配置

### 性能优化

```typescript
// .winrc.ts 性能配置
export default defineConfig({
  // 启用模块联邦缓存
  mfsu: {
    shared: {
      vue: {
        singleton: true,
        eager: false
      }
    }
  },

  // 开发环境内联 CSS，生产环境提取
  styleLoader: process.env.NODE_ENV === 'production' ? false : {},

  // Source Map 配置
  devtool: process.env.NODE_ENV === 'development' ? 'source-map' : false
});
```

## 🔍 调试与测试

### 开发调试

- 🔥 **热更新支持**: 代码修改后自动刷新页面
- 🗺️ **Source Map 调试**: 精确定位源代码位置
- 📊 **详细的错误信息**: 清晰的错误堆栈信息
- 🌐 **代理支持**: 本地开发代理后端接口
- 📱 **移动端调试**: 支持移动端设备调试

### 代码质量保障

项目配置了多层代码质量保障体系：

#### 1. 提交前检查
```json
// .lintstagedrc
{
  "*.{js,jsx,ts,tsx,vue}": ["eslint --fix", "prettier --write"],
  "*.{css,scss,less}": ["stylelint --fix", "prettier --write"],
  "*.{json,md}": ["prettier --write"]
}
```

#### 2. Git Hooks
- **pre-commit**: 提交前自动检查和修复代码
- **commit-msg**: 检查提交信息是否符合规范

#### 3. 编辑器集成
- ESLint、Prettier、Stylelint 实时检查
- TypeScript 类型检查
- Vue 语法高亮和智能提示

## 📚 相关文档

### 核心技术栈
- [WinJS 官方文档](https://winjs-dev.github.io/winjs-docs/) - 企业级前端开发框架
- [Vue 3 官方文档](https://vuejs.org/) - 渐进式 JavaScript 框架
- [Pinia 文档](https://pinia.vuejs.org/) - Vue 状态管理库
- [Vue Router 4 文档](https://router.vuejs.org/) - Vue 官方路由

### UI 和样式
- [Naive UI 文档](https://www.naiveui.com/) - Vue 3 组件库
- [UnoCSS 文档](https://unocss.dev/) - 原子化 CSS 引擎
- [Iconify 文档](https://iconify.design/) - 图标库

### 构建工具
- [Vite 文档](https://vitejs.dev/) - 下一代前端构建工具
- [Webpack 文档](https://webpack.js.org/) - 模块打包工具
- [Rsbuild 文档](https://rsbuild.dev/) - 基于 Rspack 的构建工具

### 开发工具
- [TypeScript 文档](https://www.typescriptlang.org/) - 类型安全的 JavaScript
- [ESLint 文档](https://eslint.org/) - 代码检查工具
- [Prettier 文档](https://prettier.io/) - 代码格式化工具

## 🤝 贡献指南

### 开发流程

1. Fork 本仓库
2. 创建特性分支：`git checkout -b feature/amazing-feature`
3. 提交更改：`git commit -m 'feat: add amazing feature'`
4. 推送分支：`git push origin feature/amazing-feature`
5. 提交 Pull Request

### 提交规范

项目使用 [Conventional Commits](https://conventionalcommits.org/) 规范：

```bash
# 功能
feat: 添加新功能

# 修复
fix: 修复 bug

# 文档
docs: 更新文档

# 样式
style: 代码格式化

# 重构
refactor: 代码重构

# 测试
test: 添加测试

# 构建
build: 构建相关更改
```

## 🆘 问题反馈

如果您在使用过程中遇到问题，请通过以下方式获取帮助：

1. 📖 **查阅文档**: 首先查看相关技术栈的官方文档
2. 🐛 **提交 Issue**: [GitHub Issues](https://github.com/winjs-dev/winjs-soybean-admin/issues)
3. 💬 **讨论区**: [GitHub Discussions](https://github.com/winjs-dev/winjs-soybean-admin/discussions)
4. 📧 **邮件联系**: lwbhtml@163.com

## 📄 许可证

本项目基于 [MIT](./LICENSE) 许可证开源。

---

<div align="center">

**⭐ 如果这个项目对您有帮助，请给它一个 Star！**

**Happy Coding! 🎉**

</div>
