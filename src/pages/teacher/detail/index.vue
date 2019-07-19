<template>
  <div>
    <h1>{{ $route.params.name | formatName }}</h1>
    <a-table
      :columns="columns"
      :dataSource="data"
      :rowKey="record => record.uid"
      :loading="loading"
    >
      <span slot="status" slot-scope="text">
        <!-- 1 已批阅; 0 未批阅 -->
        <a-badge :status="text.status ? 'success' : 'default'" />
        {{ text.status ? "已批阅" : "未批阅" }}
      </span>
      <span slot="action" slot-scope="text, record">
        <a href="javascript:;">
          <span v-if="record.status">
            <a-button type="primary" icon="eye" @click="review(record)"
              >查看</a-button
            >
          </span>
          <span v-else>
            <a-button type="primary" icon="edit" @click="review(record)"
              >批阅</a-button
            >
          </span>
        </a>
        <a-divider type="vertical" />
        <a-button icon="download">下载</a-button>
      </span>
    </a-table>
    <!-- <a-pagination v-model="curPage" :total="total" /> -->
  </div>
</template>

<script>
const columns = [
  { title: "TSO ID", dataIndex: "uid", key: "uid" },
  { title: "实验状态", key: "status", scopedSlots: { customRender: "status" } },
  { title: "评分", dataIndex: "score" },
  // { title: '评语', dataIndex: 'comment', width: '300px' },
  { title: "评语", dataIndex: "comment" },
  {
    title: "操作",
    dataIndex: "action",
    scopedSlots: { customRender: "action" }
  }
];
export default {
  data() {
    return {
      data: [],
      loading: false,
      columns
    };
  },
  created() {
    this.fetch();
  },
  watch: {
    $route() {
      this.fetch();
    }
  },
  methods: {
    fetch() {
      this.loading = true;
      this.$http
        .get(`/api/db/submitted`, {
          params: {
            lab: this.$route.params.name.toUpperCase()
          }
        })
        .then(data => {
          this.loading = false;
          this.data = data.body;
        });
    },
    review(record) {
      this.$http
        .post(`/api/db/downloadPDF`, {
          uid: record.uid,
          lab: this.$route.params.name.toUpperCase()
        })
        .then(res => {
          console.log("POST /db/downloadPDF", res);
          let binaryData = [];
          binaryData.push(res.body);
          let url = window.URL.createObjectURL(
            new Blob(binaryData, { type: "application/pdf" })
          );
          console.log(url);
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
