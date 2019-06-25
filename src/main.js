import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import "./plugins/ant-design-vue.js";
import axios from "axios";

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.prototype.HOST = "/api";
axios.defaults.baseURL = "http://139.199.75.41:3000/mock/11";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-fromurlencodeed;charset=UTF-8";

Vue.directive("focus", {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function(el) {
    el = el.getElementsByTagName("input")[0];
    el.focus();
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
