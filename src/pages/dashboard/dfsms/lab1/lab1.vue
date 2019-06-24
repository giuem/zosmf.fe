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
  name: "dfsms-lab1",
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
      steps: [6, 7, 8, 10, 11, 12],
      questions: [
        {
          step: 6,
          q: "屏幕上显示的第一个条目是一个数据集吗？",
          a: ""
        },
        {
          step: 6,
          q: "以yourid作为HLQ的编目数据集一共有多少个？",
          a: ""
        },
        {
          step: 6,
          q: "哪些属性列是有内容的？这些属性列的信息是来自于VTOC还是CATALOG？",
          a: ""
        },
        {
          step: 7,
          q:
            "在3.4中观察你的数据集都在哪些盘卷中，选择一个卷上所有以yourid作为HLQ的数据集，继续步骤6，新建一个列表（如下图），执行列表，思考VTOC里存放着数据集的哪些信息？",
          a: ""
        },
        {
          step: 7,
          q:
            "比较步骤6和步骤7的结果，说说VTOC和CATALOG中存放数据集信息的差别。",
          a: ""
        },
        {
          step: 8,
          q: "一共显示了多少个数据集，属性列内容来自于哪里（VTOC/ CATALOG）?",
          a: ""
        },
        {
          step: 10,
          q: "一共显示了多少个SMS卷？",
          a: ""
        },
        {
          step: 11,
          q:
            "为了正确显示系统的非SMS管理的物理卷， ‘Storage Group Name’和‘CDS Name’字段如何赋值？",
          a: ""
        },
        {
          step: 11,
          q: "系统中一共有多少个Volume？",
          a: ""
        },
        {
          step: 11,
          q: "哪些盘卷有超过50%的Free Space？",
          a: ""
        },
        {
          step: 12,
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
