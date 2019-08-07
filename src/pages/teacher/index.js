import TeacherLayout from "@/layouts/teacherLayout";

export default {
  name: "teacher",
  path: "/teacher",
  redirect: "/teacher/home",
  component: TeacherLayout,
  children: [
    {
      path: "home",
      name: "teach-home",
      component: () => import("./home")
    },
    {
      path: "check",
      name: "teach-check",
      component: () => import("./check")
    },
    {
      path: ":name",
      name: "details",
      component: () => import("./detail")
    }
  ]
};
