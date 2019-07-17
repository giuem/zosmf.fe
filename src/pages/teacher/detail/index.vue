<template>
  <div>
    <h1>{{ $route.params.name | formatName }}</h1>
    <a-table
      :columns="columns"
      :dataSource="data"
      :rowKey="record => record.uid"
      :pagination="pagination"
      :loading="loading"
      @change="handleTableChange"
    >
      <span slot="status" slot-scope="text">
        <!-- 1 已批阅; 0 未批阅 -->
        <a-badge :status="text.status ? 'success' : 'default'" />
        {{ text.status ? "已批阅" : "未批阅" }}
      </span>
      <span slot="action" slot-scope="text, record">
        <a href="javascript:;">
          <span v-if="record.status"> <a-icon type="eye" />&nbsp;查看 </span>
          <span v-else> <a-icon type="edit" />&nbsp;批阅 </span>
        </a>
        <a-divider type="vertical" />
        <a href="javascript:;"> <a-icon type="download" />&nbsp;保存为 PDF </a>
      </span>
    </a-table>
  </div>
</template>

<script>
const columns = [
  { title: "TSO ID", dataIndex: "uid", key: "uid" },
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
    uid: "ST007",
    status: 0
  },
  {
    uid: "ST001",
    status: 1,
    score: 90,
    comment:
      "还不错还不错还不错还不错还不错还不错还不错还不错还不错还不错还不错还不错还不错还不错还不错还不错还不错还不错还不错还不错还不错"
  },
  { uid: "ST012", status: 1, score: 90, comment: "还不错" },
  { uid: "ST009", status: 1, score: 90, comment: "还不错" },
  { uid: "ST010", status: 1, score: 90, comment: "还不错" }
];

export default {
  data() {
    return {
      data: [],
      pagination: {},
      loading: false,
      columns
    };
  },
  mounted() {
    this.fetch();
  },
  methods: {
    handleTableChange(pagination, filters, sorter) {
      console.log(pagination);
      const pager = { ...this.pagination };
      pager.current = pagination.current;
      this.pagination = pager;
      this.fetch({
        results: pagination.pageSize,
        page: pagination.current,
        sortField: sorter.field,
        sortOrder: sorter.order,
        ...filters
      });
    },
    fetch() {
      // console.log('params:', params)
      this.loading = true;
      this.$http
        .post(`/api/subCount`, {
          lab: this.$route.params.name
        })
        .then(data => {
          console.log("data", data);
          const pagination = { ...this.pagination };
          // Read total count from server
          pagination.total = data.totalCount;
          this.loading = false;
          this.data = data.results;
          this.pagination = pagination;
        });
    }
  },
  filters: {
    formatName(name) {
      let title = "";
      switch (name) {
        case "racf":
          title = "安全管理（RACF）";
          break;
        case "dfsms":
          title = "存储管理（DFSMS）";
          break;
        case "catalog":
          title = "目录管理（Catalog）";
          break;
        case "mvs":
          title = "系统命令（MVS）";
          break;
        case "rexx":
          title = "脚本语言（REXX）";
          break;
        default:
          break;
      }
      return title;
    },
    stateFormat(state) {
      return state ? "success" : "default";
    }
  }
};
</script>
