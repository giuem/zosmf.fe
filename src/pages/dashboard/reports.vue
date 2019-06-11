<template>
  <div>
    <h1>我的实验报告</h1>
    <a-table
      :columns="columns"
      :dataSource="data"
      :expandRowByClick="true"
      rowKey="name"
    >
      <span slot="status"> <a-badge status="success" />完成 </span>
      <a-table
        slot="expandedRowRender"
        slot-scope="text"
        :columns="innerColumns"
        :dataSource="text.labs"
        :pagination="false"
        rowKey="name"
      >
        <span slot="status"> <a-badge status="success" />完成 </span>
        <span slot="operation" class="table-operation">
          <a href="javascript:;">查看报告</a>
        </span>
      </a-table>
    </a-table>
  </div>
</template>

<script>
const columns = [
  { title: "实验名称", dataIndex: "name", key: "name" },
  { title: "实验状态", key: "status", scopedSlots: { customRender: "status" } },
  { title: "评分", dataIndex: "score" },
  { title: "评语", dataIndex: "comment" }
];

const innerColumns = [
  { title: "实验名称", dataIndex: "name", key: "name" },
  { title: "实验状态", key: "status", scopedSlots: { customRender: "status" } },
  {
    title: "操作",
    dataIndex: "operation",
    key: "operation",
    scopedSlots: { customRender: "operation" }
  }
];

const data = [
  {
    name: "安全管理（RACF）",
    status: 1,
    score: 5,
    labs: [
      { name: "实验1", status: 2 },
      { name: "实验2", status: 3 },
      { name: "实验3", status: 1 },
      { name: "实验4", status: 1 }
    ]
  },
  { name: "存储管理（DFSMS）", status: 1, score: 5, labs: [] },
  { name: "目录管理（Catalog）", status: 1, score: 5, labs: [] },
  { name: "系统命令（MVS）", status: 1, score: 5, labs: [] },
  { name: "脚本语言（REXX）", status: 1, score: 5, labs: [] }
];

// const innerData = [];
// for (let i = 0; i < 3; ++i) {
//   innerData.push({
//     key: i,
//     date: "2014-12-24 23:12:00",
//     name: "This is production name",
//     upgradeNum: "Upgraded: 56"
//   });
// }

export default {
  data() {
    return {
      columns,
      innerColumns,
      data
      // innerData
    };
  }
};
</script>
