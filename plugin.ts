import type { IApi } from '@winner-fed/winjs';
import { getBuildTime } from './build/time';
// import type { RouteMeta } from 'vue-router';
// const ElegantVueRouter = require('@elegant-router/vue/webpack');
// import type { RouteKey } from '@elegant-router/types';

export default (api: IApi) => {
  api.modifyHTML(($) => {
    return $;
  });

  // meta 添加缓存参数
  api.addHTMLMetas(() => [
    {
      'http-equiv': 'Cache-Control',
      content: 'no-store, no-cache, must-revalidate'
    },
    {
      'http-equiv': 'Pragma',
      content: 'no-cache'
    },
    {
      'http-equiv': 'Expires',
      content: '0'
    },
    {
      'name': 'color-schema',
      content: 'light dark'
    },
    {
      'name': 'buildTime',
      content: `${getBuildTime()}`
    }
  ]);

  // 自动生成路由
  // api.modifyWebpackConfig((memo) => {
  //   memo.plugins = (memo.plugins || []).concat(
  //     ElegantVueRouter({
  //       layouts: {
  //         base: 'src/layouts/base-layout/index.vue',
  //         blank: 'src/layouts/blank-layout/index.vue'
  //       },
  //       routePathTransformer(routeName, routePath) {
  //         const key = routeName as RouteKey;
  //
  //         if (key === 'login') {
  //           const modules: UnionKey.LoginModule[] = ['pwd-login', 'code-login', 'register', 'reset-pwd', 'bind-wechat'];
  //
  //           const moduleReg = modules.join('|');
  //
  //           return `/login/:module(${moduleReg})?`;
  //         }
  //
  //         return routePath;
  //       },
  //       onRouteMetaGen(routeName) {
  //         const key = routeName as RouteKey;
  //
  //         const constantRoutes: RouteKey[] = ['login', '403', '404', '500'];
  //
  //         const meta: Partial<RouteMeta> = {
  //           title: key,
  //           i18nKey: `route.${key}` as App.I18n.I18nKey
  //         };
  //
  //         if (constantRoutes.includes(key)) {
  //           meta.constant = true;
  //         }
  //
  //         return meta;
  //       }
  //     })
  //   );
  //
  //   return memo;
  // });

};
