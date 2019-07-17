import TeacherLayout from "@/layouts/teacherLayout";

export default {
  name: "teacher",
  path: "/teacher",
  component: TeacherLayout,
  children: [
    {
      name: "teach-home",
      path: "home",
      component: () => import("./home")
    },
    {
      name: "details",
      path: ":name",
      component: () => import("./detail")
    }
  ]
};
