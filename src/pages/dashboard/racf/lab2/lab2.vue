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
import content from "./lab2.md";

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
          "新增 TSOxx01  for user Janet Smith",
          "新增 TSOxx02  for user Robert Anderson",
          "新增 TSOxx03  for user Leslie Brown",
          "新增 TSOxx04  for user Arthur Fielding",
          "新增 TSOxx05  for user Susan Johnson"
        ],
        ["为 Janet Smith(TSOxx01) 指定一个新的临时密码的RACF命令?"],
        ["将 Arthur Fielding(TSOxx04)的帐号挂起，RACF命令是什么"],
        [
          "Arthur Fielding(TSOxx04)出差回来，希望能够继续使用以前的帐号，RACF命令是什么"
        ],
        ["请设置挂起日期为实验的第二天，启用日期为1个月后"],
        ["查看是否生效，考虑如何撤销"],
        ["使用Search命令查找以上新建的用户Profile"],
        [
          "系统规定密码多长时间更换一次？",
          "系统记录过去的密码吗？如果记录，记录多少个？",
          "在密码过期之前系统会发送警告信息给用户吗？                                                                           ",
          "系统有规定密码设置规则吗？"
        ],
        [
          "将用户Arthur Fielding(TSOxx04)连接到组FUNxxPRD，实现其对生产数据集的访问",
          "将用户Susan Johnson (TSOxx05)连接到组FUNxxTST，实现其对测试数据集的访问"
        ],
        ["使用什么RACF命令可以验证用户是否关联到组？"],
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
