import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import 'normalize.css/normalize.css' // 一个替代 CSS 重置的现代方法
import '@/styles/index.scss' // 全局样式引入

Vue.config.productionTip = false;

Vue.use(ElementUI)

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
