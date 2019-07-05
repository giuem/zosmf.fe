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
          path: "racf/lab2",
          component: () => import("@/pages/dashboard/racf/lab2")
        },
        {
          path: "racf/lab3",
          component: () => import("@/pages/dashboard/racf/lab3")
        },
        {
          path: "racf/lab4",
          component: () => import("@/pages/dashboard/racf/lab4")
        },
        {
          path: "racf/lab5",
          component: () => import("@/pages/dashboard/racf/lab5")
        },
        {
          path: "racf/lab6",
          component: () => import("@/pages/dashboard/racf/lab6")
        },
        {
          path: "racf/lab7",
          component: () => import("@/pages/dashboard/racf/lab7")
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
          path: "rexx/intro",
          component: () => import("@/pages/dashboard/rexx/intro")
        },
        {
          path: "rexx/lab1",
          component: () => import("@/pages/dashboard/rexx/lab1")
        },
        {
          path: "rexx/lab2",
          component: () => import("@/pages/dashboard/rexx/lab2")
        },
        {
          path: "rexx/lab3",
          component: () => import("@/pages/dashboard/rexx/lab3")
        },
        {
          path: "rexx/lab4",
          component: () => import("@/pages/dashboard/rexx/lab4")
        },
        {
          path: "rexx/lab5",
          component: () => import("@/pages/dashboard/rexx/lab5")
        },
        {
          path: "rexx/lab6",
          component: () => import("@/pages/dashboard/rexx/lab6")
        },
        {
          path: "rexx/lab7",
          component: () => import("@/pages/dashboard/rexx/lab7")
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
