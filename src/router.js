import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";

import DashBoardLayout from "./components/layouts/DashboardLayout.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/dashboard"
    },
    {
      path: "/dashboard",
      name: "DashBoardLayout",
      component: DashBoardLayout
    }
  ]
});
