<template>
  <LabLayout>
    <template slot="left">
      <LabContent :content="content" />
    </template>
    <template slot="right">
      <LabReport :name="'步骤 ' + (fuckingnow + 1)">
        <div v-for="(questions, index) in steps" :key="index">
          <a-form
            type="vertical"
            @submit="handleSubmit"
            v-if="index === fuckingnow"
          >
            <a-form-item
              v-for="(question, index) in questions"
              :key="index"
              :label="question"
              :colon="false"
            >
              <a-input></a-input>
            </a-form-item>
            <div>
              <span>
                <a-button
                  style="margin-right: 10px"
                  :disabled="fuckingnow === 0"
                  @click="fuckingnow--"
                  >上一步</a-button
                >
                <a-button
                  :disabled="fuckingnow === steps.length - 1"
                  @click="fuckingnow++"
                  >下一步</a-button
                >
              </span>
              <span style="float: right">
                <a-button style="margin-right: 10px" type="primary"
                  >保存</a-button
                >
                <a-button
                  type="primary"
                  html-type="submit"
                  :disabled="fuckingnow < steps.length - 1"
                  >提交</a-button
                >
              </span>
            </div>
          </a-form>
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
      fuckingnow: 0,
      steps: [
        [],
        [
          "What groups are you connected to?",
          "Do you have any user attributes?",
          "Do you have some class authorization?",
          "Do you have any connect attributes to RACFLAB?"
        ],
        [
          "定义DIVxxADM 用户管理组（相当于公司人事部门），RACF命令",
          "定义DIVxxFUN 功能组（相当于公司各职能部门），后继实验将在该组下定义各个子功能组，RACF命令：",
          "定义DIVxxRES 资源组（为有机组织和保护系统资源—包括数据集/CICS交易/系统和用户程序等资源—而设立的组），后继实验将在该组下定义各个子资源组，RACF命令："
        ],
        [
          "定义FUNxxPRD 功能组，该组将用于对生产系统数据集(Production Data Sets)的访问进行集中授权（即如果该组对生产系统数据集有访问权限，该组的成员将自动继承这一权限）RACF命令：",
          "定义FUNxxTST 功能组，该组将用于对测试系统数据集(Test Data Sets)的访问进行集中授权（即如果该组对测试系统数据集有访问权限，该组的成员将自动继承这一权限）"
        ],
        [
          "定义RESxxPRD 资源组，该组将用于保护生产系统的数据集。RACF命令：",
          "定义RESxxTST 资源组，该组将用于保护测试系统的数据集。RACF命令："
        ],
        ["利用RACF命令(Search)或者RACF面板查找组Profile。RACF命令："],
        ["实验总结"]
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
