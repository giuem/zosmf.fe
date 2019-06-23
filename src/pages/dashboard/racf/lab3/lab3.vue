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
import content from "./lab3.md";

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
        [
          "TSOxx01(Janet Smith)：该管理员将对DIVxxADM组用户的安全进行管理，包括为用户重置密码，挂起和启用用户，实现的RACF命令是",
          "该用户关联到哪些组？",
          "该用户有哪些用户特权？",
          "该用户是否有类权限（class authorization）？",
          "该用户关联到组DIVxxADM上时是否有什么特权（connect attributes）？",
          "该用户关联到哪些组？",
          "该用户有哪些用户特权？",
          "该用户是否有类权限（class authorization）？",
          "该用户关联到组DIVxxADM上时是否有什么特权（connect attributes）？",
          "该用户关联到哪些组？",
          "该用户有哪些用户特权？",
          "该用户是否有类权限（class authorization）？",
          "该用户关联到组DIVxxADM上时是否有什么特权（connect attributes）？"
        ],
        [
          "以TSOxx01身份登陆TSO，尝试修改用户密码等",
          "以TSOxx02身份登陆TSO，将TSOxx01用户关联到FUNxxPRD和FUNxxTST",
          "以TSOxx02身份登陆TSO，将TSOxx01从FUNxxPRD和FUNxxTST组中移走"
        ],
        ["总结本次实验体会及建议"]
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
