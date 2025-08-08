import './plugins/assets';
import { setupAppVersionNotification, setupDayjs, setupLoading, setupNProgress } from './plugins';
import { setupI18n } from './locales';
import { setupStore } from './store';
import { setupRouter, router } from './router';

import Main from './Main.vue';

setupLoading();

export function render (oldRender) {
  setupNProgress();
  setupDayjs();

  setTimeout(() => {
    oldRender();
  }, 1000);
}


export async function onAppCreated ({ app }) {
  setupStore(app);

  await setupRouter(app);
}

export function onMounted ({ app, router }) {
  // 支持 i18n
  // 放到 app 里偶现问题
  setupI18n(app);

  setupAppVersionNotification();
}

export function modifyClientRenderOpts (opts)  {
  return {
    router: router,
    ...opts
  };
}

export function rootContainer(container, args) {
  return h(Main, null, container);
}
