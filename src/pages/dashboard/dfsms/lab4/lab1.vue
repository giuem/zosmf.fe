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
            :label="question.q"
            :colon="false"
            v-if="question.step === steps[currentStepIndex]"
          >
            <a-input v-model="question.a"></a-input>
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
              <a-button style="margin-right: 10px" type="primary">
                保存
              </a-button>
              <a-button type="primary" html-type="submit">
                提交
              </a-button>
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
import LabLayout from "@/components/LabLayout";
import LabContent from "@/components/LabContent";
import LabReport from "@/components/LabReport";
import Console from "@/components/Console";
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
      currentStepIndex: 0,
      steps: [6, 7],
      questions: [
        {
          step: 6,
          q: "所有的数据集都成功转换了吗？‘是’还是‘不是’？",
          a: ""
        },
        {
          step: 6,
          q:
            "如果答案是‘不是’，那么哪些数据集没有转换成功？为什么没有转换成功？",
          a: ""
        },
        {
          step: 6,
          q:
            "ACS Routine是否对每一个转换成功的数据集赋予了一个Storage Class？请记录下Storage Class的名字。",
          a: ""
        },
        {
          step: 6,
          q:
            "ACS Routine是否对每一个转换成功的数据集赋予了一个Management Class？请记录下Management Class的名字。",
          a: ""
        },
        {
          step: 7,
          q: "总结本次实验体会及建议",
          a: ""
        }
      ]
    };
  },

  methods: {
    handleSubmit(e) {
      e.preventDefault();
      console.log("form submit");
    }
  }
};
</script>
