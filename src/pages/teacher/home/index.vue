<template>
  <div class="teacher-home">
    <h1>总览</h1>
    <a-list class="overview-list" itemLayout="horizontal" :dataSource="data">
      <a-list-item slot="renderItem" slot-scope="item">
        <!-- <a slot="actions">edit</a> -->
        <a-button slot="actions" type="primary" @click="$router.push(item.path)"
          >查看详情</a-button
        >
        <a-list-item-meta :description="`已有 ${item.submit} 人提交`">
          <a slot="title" :href="`/teacher/${item.path}`">{{ item.name }}</a>
          <!-- <a-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /> -->
        </a-list-item-meta>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          name: "安全管理（RACF）",
          path: "racf",
          submit: 10,
          review: 5
        },
        {
          name: "存储管理（DFSMS）",
          path: "dfsms",
          submit: 10,
          review: 5
        },
        {
          name: "目录管理（Catalog）",
          path: "catalog",
          submit: 10,
          review: 5
        },
        {
          name: "系统命令（MVS）",
          path: "mvs",
          submit: 10,
          review: 5
        },
        {
          name: "脚本语言（REXX）",
          path: "rexx",
          submit: 10,
          review: 5
        }
      ]
    };
  },
  created() {
    this.data.map(lab => {
      this.$http
        .get(`/api/db/submitted`, {
          params: {
            lab: lab.path.toUpperCase()
          }
        })
        .then(res => {
          console.log("GET /db/submitted", res);
          lab.submit = res.body.length;
        });
      // this.$http.get(`/api/db/getStudents`)
    });
    // this.$http.get(`/api/db/getStudents`)
  }
};
</script>
