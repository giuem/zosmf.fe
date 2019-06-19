// 侧边栏配置
export default [
  {
    name: "安全管理（RACF）",
    path: "racf",
    icon: "safety",
    children: [
      // { name: "Demo", path: "demo" },
      { name: "实验介绍", path: "intro" },
      { name: "实验一", path: "lab1" }
    ]
  },
  {
    name: "存储管理（DFSMS）",
    path: "dfsms",
    icon: "hdd",
    children: [
      { name: "实验介绍", path: "intro" },
      { name: "实验 1：初次接触 ISMF 实验", path: "lab1" },
      { name: "实验 2：使用 ISMF 命令实验（可选）", path: "lab2" },
      { name: "实验 3：提交实验：创建一个简单的 SMS 环境实验", path: "lab3" },
      { name: "实验 4：盘卷和数据集 SMS 转换实验", path: "lab4" },
      { name: "实验 5：SMS 系统命令实验（可选）", path: "lab5" },
      { name: "实验 6：空间管理实验", path: "lab6" },
      { name: "实验 7：复制/移动/删除数据集实验", path: "lab7" }
    ]
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
