<template>
  <LabLayout>
    <template slot="left">
      <LabContent :content="content" />
    </template>
    <template slot="right">
      <div>TODO</div>
      <a-divider />
      <Console
        :result="result"
        :isLoading="isSubmitLoading"
        @submit="handleSubmit"
      />
    </template>
  </LabLayout>
</template>

<script>
import LabLayout from "@/components/LabLayout";
import LabContent from "@/components/LabContent";
// import LabReport from "@/components/LabReport";
import Console from "./components/Console";
import Axios from "axios";

export default {
  components: {
    LabLayout,
    LabContent,
    // LabReport,
    Console
  },

  data() {
    return {
      content: "",
      result: "",
      isSubmitLoading: false
    };
  },

  created() {
    const lab = this.$route.params.lab;
    this.getDoc(lab);
  },

  watch: {
    $route(to) {
      const lab = to.params.lab;
      this.getDoc(lab);
    }
  },

  methods: {
    getDoc(lab) {
      Axios.get(`/docs/racf/${lab}.md`)
        .then(response => {
          this.content = response.data;
        })
        .catch(e => {
          if (e.response.status === 404) {
            this.$router.replace("/404");
          } else {
            this.$message.error("获取实验说明失败");
          }
        });
    },
    async handleSubmit(data) {
      this.isSubmitLoading = true;
      try {
        const response = await Axios.post("/api/racf/inputCommand", data);
        this.result = response.data;
      } catch (error) {
        this.$message.error("服务器错误");
      } finally {
        this.isSubmitLoading = false;
      }
      console.log(data);
    }
  }
};
</script>
