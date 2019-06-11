// 侧边栏配置
export default [
  {
    name: "安全管理（RACF）",
    path: "racf",
    icon: "safety",
    children: [
      // { name: "Demo", path: "demo" },
      { name: "实验介绍", path: "intro" },
      { name: "Lab1", path: "lab1" }
    ]
  },
  {
    name: "存储管理（DFSMS）",
    path: "dfsms",
    icon: "hdd",
    children: []
  },
  {
    name: "目录管理（Catalog）",
    path: "catalog",
    icon: "inbox",
    children: []
  },
  {
    name: "系统命令（MVS）",
    path: "mvs",
    icon: "code",
    children: []
  },
  {
    name: "脚本语言（REXX）",
    path: "rexx",
    icon: "snippets",
    children: []
  }
];
