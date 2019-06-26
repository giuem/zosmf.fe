<template>
  <LabLayout>
    <template slot="left">
      <LabContent :content="content" />
    </template>
    <template slot="right">
      <LabReport :name="'步骤' + currentStep">
        <Question :questions="questions" :step="currentStep" />
        <div>
          <span>
            <a-button
              style="margin-right: 10px"
              :disabled="currentStep === 1"
              @click="currentStep--"
              >上一步</a-button
            >
            <a-button
              :disabled="currentStep === questions.length - 1"
              @click="currentStep++"
              >下一步</a-button
            >
          </span>
          <span style="float: right">
            <a-button style="margin-right: 10px" type="primary">保存</a-button>
            <a-button
              type="primary"
              html-type="submit"
              :disabled="currentStep < questions.length - 1"
              >提交</a-button
            >
          </span>
        </div>
      </LabReport>
      <a-divider />
      <Console />
    </template>
  </LabLayout>
</template>

<script>
import LabLayout from "@/components/LabLayout";
import LabContent from "@/components/LabContent";
import LabReport from "@/components/LabReport";
import Console from "./components/Console";
import Question from "./components/Question";

import allQuestion from "./question.json";

import Axios from "axios";

export default {
  components: {
    LabLayout,
    LabContent,
    LabReport,
    Console,
    Question
  },

  data() {
    return {
      content: "",
      result: "",
      currentStep: 1,
      isSubmitLoading: false,
      allQuestion
    };
  },

  computed: {
    lab() {
      return this.$route.params.lab;
    },
    questions() {
      return allQuestion[this.lab];
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
