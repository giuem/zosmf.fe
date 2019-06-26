<template>
  <keep-alive>
    <component :is="currentComponent" @saveOrSubmit="saveOrSubmit"></component>
  </keep-alive>
</template>

<script>
import axios from "axios";
import dfsmsIntro from "@/pages/dashboard/dfsms/intro";
import dfsmsLab1 from "@/pages/dashboard/dfsms/lab1";
import dfsmsLab2 from "@/pages/dashboard/dfsms/lab2";
import dfsmsLab3 from "@/pages/dashboard/dfsms/lab3";
import dfsmsLab4 from "@/pages/dashboard/dfsms/lab4";
import dfsmsLab5 from "@/pages/dashboard/dfsms/lab5";
import dfsmsLab6 from "@/pages/dashboard/dfsms/lab6";
import dfsmsLab7 from "@/pages/dashboard/dfsms/lab7";

export default {
  components: {
    dfsmsIntro,
    dfsmsLab1,
    dfsmsLab2,
    dfsmsLab3,
    dfsmsLab4,
    dfsmsLab5,
    dfsmsLab6,
    dfsmsLab7
  },
  data() {
    return {};
  },
  computed: {
    currentComponent() {
      // console.log(this.$route.params.lab)
      return "dfsms-" + this.$route.params.lab;
    }
  },
  methods: {
    saveOrSubmit(labid, step, isDraft, questions) {
      let reqBody = {
        lab: "sms/lab" + labid,
        step: step,
        isDraft: isDraft ? true : false,
        questions: questions
      };
      console.log(reqBody);
      axios
        .post(`/api/questions`, reqBody)
        .then(() => {
          this.$message.success("报告保存 / 提交成功");
        })
        .catch(err => {
          this.$message.error("报告保存 / 提交失败");
          console.log(err);
        });
    }
  }
};
</script>
