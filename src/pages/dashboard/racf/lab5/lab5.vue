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
import content from "./lab5.md";

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
          "以TSOxx04登陆（FUNxxPRD组成员），创建 RESxxPRD.PROD.STUFF 数据集，是否成功？"
        ],
        [
          "以TSOxx03登陆（RESxxPRD组CREATE特权人员，即数据管理人员），为 RESxxPRD.DATA 创建一个全匹配的PROFILE进行保护"
        ],
        [
          "以TSOxx03登陆，把数据集PROFILE的Warning状态打开：把 RESxxTST.PROFILE 的Warning状态打开"
        ],
        [
          "以TSOxx04登陆，浏览‘RESxxTST.DATA’数据集，是否成功，是否收到什么系统信息？"
        ],
        ["以TSOxx03登陆，把‘RESxxTST.’PROFILE的Warning状态关闭"],
        ["以TSOxx04登陆，浏览‘RESxxTST.DATA’数据集，是否成功？"],
        ["RACF代码"],
        [
          "检测哪一个PROFILE在保护‘RESxxPRD.NEWAPPL.FINANCE.DATA’和‘RESxxPRD.NEWAPPL.HR.DATA’"
        ],
        ["检测一个Generic PROFILE  RESxxPRD. 保护了那些数据集"],
        [
          "一个组的group-special用户或者Create/Connect/Join用户是否能够直接访问（比如新建/更新）组文件？"
        ],
        [
          "一个组的group-special用户或者Create用户是对数据集的Profile有操作权限，还是对数据集本身有操作权限？"
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
