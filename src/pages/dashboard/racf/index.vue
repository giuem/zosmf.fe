<template>
  <LabLayout>
    <template slot="left">
      <LabContent :content="content" />
    </template>
    <template slot="right">
      <LabReport :name="'步骤' + currentStep">
        <Question ref="Question" :step="currentStep" :lower_lab="lower_lab" />
        <div>
          <span>
            <a-button
              style="margin-right: 10px"
              :disabled="currentStep === 1"
              @click="currentStep--"
              >上一步</a-button
            >
            <a-button @click="currentStep++">下一步</a-button>
          </span>
          <span style="float: right">
            <a-button
              style="margin-right: 10px"
              type="primary"
              @click="saveCurrent"
              >保存</a-button
            >
            <a-button type="primary" @click="visible = true">提交</a-button>
            <a-modal title="确认提交？" v-model="visible" @ok="submitAll">
              <p>提交报告后老师将可以看到</p>
              <p>同时将不能再对答案进行更改。</p>
              <p>确定提交报告吗</p>
            </a-modal>
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
      lower_lab: 1,
      visible: false
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
      this.lower_lab = parseInt(lab.split("lab")[1]);
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
    saveCurrent() {
      this.$refs.Question.saveCurrent();
    },
    submitAll() {
      this.$refs.Question.submitAll();
    }
  }
};
</script>
