import Vue from "vue";
import Router from "vue-router";

import store from "./store";

// import layout
import DashBoardLayout from "@/layouts/dashboard.vue";
import AuthLayout from "@/layouts/auth.vue";

// import pages

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
          path: "reports",
          component: () => import("@/pages/dashboard/reports")
        },
        {
          path: "racf/demo",
          component: () => import("@/pages/dashboard/racf/demo")
        },
        {
          path: "racf/intro",
          component: () => import("@/pages/dashboard/racf/intro")
        },
        {
          path: "racf/lab1",
          component: () => import("@/pages/dashboard/racf/lab1")
        },
        {
          path: "dfsms/:lab",
          redirect: "dfsms/:lab/master",
          name: "lab",
          component: () => import("@/pages/dashboard/dfsms/lab"),
          children: [
            {
              path: "master",
              component: () => import("@/components/Console/Panel/MaterPanel")
            },
            {
              path: "ismf",
              component: () => import("@/components/Console/Panel/IsmfPanel")
            },
            {
              path: "pdf",
              component: () => import("@/components/Console/Panel/PdfPanel")
            }
          ]
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
          component: () => import("@/pages/auth/login")
        }
      ]
    },
    {
      path: "*",
      component: () => import("@/pages/404")
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
      next("/auth/login");
    }
  }
  next();
});

export default router;
