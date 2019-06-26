<template>
  <LabLayout>
    <template slot="left">
      <LabContent :content="content" />
    </template>
    <template slot="right">
      <LabReport :name="'步骤 ' + steps[currentStepIndex]">
        <a-form type="vertical" @submit="handleSubmit">
          <a-form-item
            v-for="(question, index) in questions"
            :key="index"
            :label="question.question"
            :colon="false"
          >
            <a-input v-model="question.answer"></a-input>
          </a-form-item>
          <div>
            <span>
              <a-button
                @click="currentStepIndex -= 1"
                :disabled="currentStepIndex === 0"
                style="margin-right: 10px"
                >上一步</a-button
              >
              <a-button
                @click="currentStepIndex += 1"
                :disabled="currentStepIndex === steps.length - 1"
                >下一步</a-button
              >
            </span>
            <span style="float: right">
              <a-button
                style="margin-right: 10px"
                type="primary"
                @click="handleSubmit($event, 1)"
                >保存</a-button
              >
              <a-button type="primary" html-type="submit">提交</a-button>
            </span>
          </div>
        </a-form>
      </LabReport>
      <a-divider />
      <Console />
    </template>
  </LabLayout>
</template>

<script>
import axios from "axios";
import LabLayout from "@/components/LabLayout";
import LabContent from "@/components/LabContent";
import LabReport from "@/components/LabReport";
import Console from "@/components/Console/SMSConsole";
import content from "./lab1.md";

export default {
  components: {
    LabLayout,
    LabContent,
    LabReport,
    Console
  },
  data() {
    return {
      content,
      labid: 2,
      currentStepIndex: 0,
      steps: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      questions: []
    };
  },
  created() {
    axios
      .get(
        `/api/questions/sms/lab${this.labid}/${
          this.steps[this.currentStepIndex]
        }`
      )
      // .get(`/questions.json`)
      .then(res => {
        console.log(res);
        this.questions = res.data;
      });
  },
  methods: {
    handleSubmit(e, isDraft) {
      e.preventDefault();
      this.$emit(
        "saveOrSubmit",
        this.labid,
        this.steps[this.currentStepIndex],
        isDraft,
        this.questions
      );
      console.log("form submit");
    }
  },
  watch: {
    currentStepIndex: function(newValue) {
      axios
        .get(`/api/questions/sms/lab${this.labid}/${this.steps[newValue]}`)
        .then(res => {
          console.log(res);
          this.questions = res.data;
        });
    }
  }
};
</script>
