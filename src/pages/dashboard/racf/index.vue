<template>
  <LabLayout>
    <template slot="left">
      <LabContent :content="content" />
    </template>
    <template slot="right">
      <div>TODO</div>
      <a-divider />
      <Console />
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
      currentStep: 1,
      isSubmitLoading: false
    };
  },

  computed: {
    lab() {
      return this.$route.params.lab;
    }
  },

  created() {
    this.getDoc(this.lab);
  },

  watch: {
    lab(lab) {
      this.currentStep = 1;
      this.getDoc(lab);
      this.getQuestions();
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

    getQuestions() {
      this.lab;
      this.currentStep;
    }
  }
};
</script>
