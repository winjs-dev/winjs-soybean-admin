import path from 'node:path';
import { defineConfig } from '@winner-fed/winjs';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';
import IconsResolver from 'unplugin-icons/resolver';
import { getBuildTime } from './build/time';
import { createProxy } from './build/proxy';

const collectionName = (process.env.VITE_ICON_LOCAL_PREFIX as string).replace(`${process.env.VITE_ICON_PREFIX}-`, '');
const localIconPath = path.join(process.cwd(), 'src/icons');

export default defineConfig({
  npmClient: 'pnpm',
  plugins: ['@winner-fed/plugin-unocss', '@winner-fed/plugin-unicons'],
  /**
   * @name appConfig 配置
   * @description 可以配置前端工程运行的配置文件 `config.local.js` 里内容。
   * @doc https://winjs-dev.github.io/winjs-docs/config/config.html#appconfig
   */
  appConfig: false,
  unocss: {},
  unIcons: {
    compiler: 'vue3',
    customCollections: {
      [collectionName]: FileSystemIconLoader(localIconPath, svg =>
        svg.replace(/^<svg\s/, '<svg width="1em" height="1em" ')
      )
    },
    scale: 1,
    defaultClass: 'inline-block'
  },
  /**
   * @name banner 配置
   * @description 为构建的静态资源（JS、CSS 文件）的头部或尾部注入内容的能力。
   * @doc https://winjs-dev.github.io/winjs-docs/config/config.html#banner
   */
  banner: true,
  targets: { chrome: 51, firefox: 54, safari: 10, edge: 15 },
  jsMinifier: 'terser',
  cssMinifier: 'cssnano',
  // 使用 src/plugins/loading.ts
  preloading: false,
  sassLoader: {
    api: 'modern-compiler',
    sassOptions: {
      silenceDeprecations: ['legacy-js-api']
    },
    additionalData: `@use "@/styles/scss/global.scss" as *;`
  },
  title: process.env.VITE_APP_TITLE,
  mountElementId: 'winjsTemplateDemo1fsksig4x6n',
  // 开发使用内联CSS，生产使用构建的CSS文件
  styleLoader: process.env.NODE_ENV === 'production' ? false : {},
  // 开发使用 cheap-source-map
  devtool: process.env.NODE_ENV === 'development' ? 'source-map' : false,
  mfsu: {
    shared: {
      vue: {
        singleton: true,
        eager: false
      }
    }
  },
  // 使用系统原有路由实现
  routes: [],
  define: {
    BUILD_TIME: JSON.stringify(getBuildTime()),
    // Note: 字符串可以不用 JSON.stringify
    'import.meta.env': {
      DEV: JSON.stringify(process.env.NODE_ENV === 'development'),
      PROD: JSON.stringify(process.env.NODE_ENV === 'production'),
      TEST: JSON.stringify(process.env.NODE_ENV === 'test'),
      VITE_HTTP_PROXY: process.env.VITE_HTTP_PROXY,
      VITE_SERVICE_SUCCESS_CODE: process.env.VITE_SERVICE_SUCCESS_CODE,
      VITE_SERVICE_LOGOUT_CODES: process.env.VITE_SERVICE_LOGOUT_CODES,
      VITE_SERVICE_MODAL_LOGOUT_CODES: process.env.VITE_SERVICE_MODAL_LOGOUT_CODES,
      VITE_SERVICE_EXPIRED_TOKEN_CODES: process.env.VITE_SERVICE_EXPIRED_TOKEN_CODES,
      VITE_STATIC_SUPER_ROLE: process.env.VITE_STATIC_SUPER_ROLE,
      VITE_STORAGE_PREFIX: process.env.VITE_STORAGE_PREFIX,
      VITE_SOURCE_MAP: process.env.VITE_SOURCE_MAP,
      VITE_AUTOMATICALLY_DETECT_UPDATE: process.env.VITE_AUTOMATICALLY_DETECT_UPDATE,
      VITE_PROXY_LOG: process.env.VITE_PROXY_LOG,
      VITE_SERVICE_BASE_URL: process.env.VITE_SERVICE_BASE_URL,
      VITE_OTHER_SERVICE_BASE_URL: process.env.VITE_OTHER_SERVICE_BASE_URL,
      VITE_ICON_PREFIX: process.env.VITE_ICON_PREFIX,
      VITE_ICON_LOCAL_PREFIX: process.env.VITE_ICON_LOCAL_PREFIX,
      VITE_MENU_ICON: process.env.VITE_MENU_ICON,
      VITE_ICONIFY_URL: process.env.VITE_ICONIFY_URL,
      VITE_BASE_URL: process.env.VITE_BASE_URL,
      VITE_APP_TITLE: process.env.VITE_APP_TITLE,
      VITE_APP_DESC: process.env.VITE_APP_DESC,
      VITE_ROUTER_HISTORY_MODE: process.env.VITE_ROUTER_HISTORY_MODE,
      VITE_ROUTE_HOME: process.env.VITE_ROUTE_HOME,
      VITE_AUTH_ROUTE_MODE: process.env.VITE_AUTH_ROUTE_MODE
    }
  },
  autoImport: {
    unComponents: {
      resolvers: [
        NaiveUiResolver(),
        IconsResolver({ customCollections: [collectionName], prefix: process.env.VITE_ICON_PREFIX })
      ]
    }
  },
  proxy: {
    ...createProxy(process.env, true)
  }
});
