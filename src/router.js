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
          path: "racf/:lab",
          component: () => import("@/pages/dashboard/racf")
        },
        {
          path: "dfsms/demo",
          component: () => import("@/pages/dashboard/dfsms/demo")
        },
        {
          path: "dfsms/intro",
          component: () => import("@/pages/dashboard/dfsms/intro")
        },
        {
          path: "dfsms/lab1",
          component: () => import("@/pages/dashboard/dfsms/lab1")
        },
        {
          path: "dfsms/lab2",
          component: () => import("@/pages/dashboard/dfsms/lab2")
        },
        {
          path: "dfsms/lab3",
          component: () => import("@/pages/dashboard/dfsms/lab3")
        },
        {
          path: "dfsms/lab4",
          component: () => import("@/pages/dashboard/dfsms/lab4")
        },
        {
          path: "dfsms/lab5",
          component: () => import("@/pages/dashboard/dfsms/lab5")
        },
        {
          path: "dfsms/lab6",
          component: () => import("@/pages/dashboard/dfsms/lab6")
        },
        {
          path: "dfsms/lab7",
          component: () => import("@/pages/dashboard/dfsms/lab7")
        },
        {
          path: "catalog/intro",
          component: () => import("@/pages/dashboard/catalog/intro")
        },
        {
          path: "catalog/lab1",
          component: () => import("@/pages/dashboard/catalog/lab1")
        },
        {
          path: "catalog/lab2",
          component: () => import("@/pages/dashboard/catalog/lab2")
        },
        {
          path: "catalog/lab3",
          component: () => import("@/pages/dashboard/catalog/lab3")
        },
        {
          path: "catalog/lab4",
          component: () => import("@/pages/dashboard/catalog/lab4")
        },
        {
          path: "catalog/lab5",
          component: () => import("@/pages/dashboard/catalog/lab5")
        },
        {
          path: "catalog/lab6",
          component: () => import("@/pages/dashboard/catalog/lab6")
        },
        {
          path: "catalog/lab7",
          component: () => import("@/pages/dashboard/catalog/lab7")
        },
        {
          path: "catalog/lab8",
          component: () => import("@/pages/dashboard/catalog/lab8")
        },
        {
          path: "catalog/lab9",
          component: () => import("@/pages/dashboard/catalog/lab9")
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

