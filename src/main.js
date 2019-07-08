import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import "./plugins/ant-design-vue.js";
import axios from "axios";

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.directive("focus", {
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
