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
      steps: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      questions: [
        {
          step: 1,
          q: "SMS使用的SCDS，ACDS，COMMDS控制数据集均是什么？",
          a: ""
        },
        {
          step: 2,
          q: "该Storage Group在哪几个系统中可用？状态如何？",
          a: ""
        },
        {
          step: 3,
          q:
            "SMS中一共有几个Storage Group，他们可以用在哪几个系统中？状态如何？",
          a: ""
        },
        {
          step: 4,
          q: "该Storage Group中有哪些盘卷？",
          a: ""
        },
        {
          step: 5,
          q: "该卷可以在哪些系统中使用？状态如何？",
          a: ""
        },
        {
          step: 6,
          q: "该VARY命令的作用是什么？",
          a: ""
        },
        {
          step: 7,
          q:
            "如果系统目前只有该Storage Group（本例中采用了PRIMARY）可用，那么哪些盘卷可以用来分配新的数据集？",
          a: ""
        },
        {
          step: 8,
          q:
            "目前SMS的Storage Group又发生了一些变化，如果系统目前仍然只有该Storage Group（本例中采用了PRIMARY）可用，那么哪些盘卷可以用来分配新的数据集？",
          a: ""
        },
        {
          step: 9,
          q: "该卷在SMS下的状态如何？",
          a: ""
        },
        {
          step: 10,
          q: "为什么该设备不被SMS管理？",
          a: ""
        },
        {
          step: 11,
          q: "为什么UNIT参数是空的?",
          a: ""
        },
        {
          step: 11,
          q: "该卷的SMS状态是什么？",
          a: ""
        },
        {
          step: 11,
          q: "该卷目前可以用来新建数据集吗？",
          a: ""
        },
        {
          step: 12,
          q: "上图中重新上线的卷的SMS状态是什么？",
          a: ""
        },
        {
          step: 12,
          q: "该卷目前可以用来新建数据集吗？",
          a: ""
        },
        {
          step: 13,
          q: "哪些路径(PATH)可以用来访问该设备地址？",
          a: ""
        },
        {
          step: 14,
          q: "该设备是由SMS控制的?",
          a: ""
        },
        {
          step: 15,
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
