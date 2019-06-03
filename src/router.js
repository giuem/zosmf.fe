import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";

// import layout
import DashBoardLayout from "./components/layouts/DashboardLayout.vue";
import AuthLayout from "./components/layouts/AuthLayout.vue";

// import pages
import Login from "./views/auth/Login";
import RacfDemo from "./views/dashboard/racf/Demo";

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
      component: DashBoardLayout,
      children: [
        {
          path: "racf/demo",
          component: RacfDemo
        }
      ]
    },
    {
      path: "/auth",
      component: AuthLayout,
      redirect: "/auth/login",
      children: [
        {
          path: "login",
          component: Login
        }
      ]
    },
    {
      path: "*",
      component: () => import("./views/notfound")
    }
  ]
});
