<template>
  <div>
    <h1>我的实验报告</h1>
    <a-table :columns="columns" :dataSource="data" rowKey="name">
      <span slot="status"> <a-badge status="success" />已提交 </span>
      <!-- <span slot="action" slot-scope="text, record"> -->
      <span slot="action">
        <a href="javascript:;"> <a-icon type="eye" />&nbsp;预览 </a>
        <a-divider type="vertical" />
        <a href="javascript:;"> <a-icon type="download" />&nbsp;下载 </a>
      </span>
    </a-table>
  </div>
</template>

<script>
const columns = [
  { title: "实验名称", dataIndex: "name", key: "name" },
  { title: "实验状态", key: "status", scopedSlots: { customRender: "status" } },
  { title: "评分", dataIndex: "score" },
  { title: "评语", dataIndex: "comment", width: "300px" },
  {
    title: "操作",
    dataIndex: "action",
    scopedSlots: { customRender: "action" }
  }
];

const data = [
  {
    name: "安全管理（RACF）",
    status: 1,
    score: 5,
    comment: "还不错"
  },
  {
    name: "存储管理（DFSMS）",
    status: 1,
    score: 5,
    comment:
      "还不错还不错还不错还不错还不错还不错还不错还不错还不错还不错还不错还不错还不错还不错还不错还不错还不错还不错还不错还不错还不错"
  },
  { name: "目录管理（Catalog）", status: 1, score: 5, comment: "还不错" },
  { name: "系统命令（MVS）", status: 1, score: 5, comment: "还不错" },
  { name: "脚本语言（REXX）", status: 1, score: 5, comment: "还不错" }
];

export default {
  data() {
    return {
      columns,
      data
    };
  }
};
</script>
