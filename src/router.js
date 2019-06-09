import Vue from "vue";
import Router from "vue-router";

import store from "./store";

// import layout
import DashBoardLayout from "./components/layouts/DashboardLayout.vue";
import AuthLayout from "./components/layouts/AuthLayout.vue";

// import pages
import Login from "./views/auth/Login";
import RacfDemo from "./views/dashboard/racf/Demo";
import RacfUserDemo from "./views/dashboard/racf/UserDemo";

Vue.use(Router);

const router = new Router({
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
        },
        {
          path: "racf/user-demo",
          component: RacfUserDemo
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
          name: "login",
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

router.beforeEach((to, from, next) => {
  if (store.getters["user/isLogin"]) {
    if (to.name === "login") {
      next("/");
    }
  } else {
    if (to.name !== "login") {
      console.log(1);
      next("/auth/login");
    }
  }
  next();
});

export default router;
