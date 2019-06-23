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
import content from "./lab4.md";

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
        ["保护题中五位用户的数据集"],
        ["PROFILE的ACCESS LIST是否有内容？", "PROFILE的OWNER是谁？"],
        ["对RESxxTST数据集进行题述保护的RACF指令"],
        [
          "修改上面定义的 RESxxTST.PORFILE的访问列表，给FUNxxTST组赋予ALTER访问权限"
        ],
        ["定义RESxxPRD组数据集的RPOFILE，进行题述保护的RACF指令"],
        [
          "修改上面定义的RESxxPRD.PORFILE的访问列表，给FUNxxPRD组赋予ALTER访问权限"
        ],
        ["确定组数据集PROFIEL是否创建并按照预定的要求保护成功"],
        ["创建ALIAS：RESxxTST和RESxxPRD", "测试是否成功"],
        [
          "创建一个顺序数据集RESxxPRD.DATA (RECFM=FB, LRECL=80, VOLUME=USER01)",
          "创建一个顺序数据集RESxxTST.DATA (RECFM=FB, LRECL=80, VOLUME=USER01)"
        ],
        [
          "以TSOxx04用户登陆，编辑以RESxxPRD为HLQ的数据集(如RESxxPRD.DATA)，看是否成功，为什么？"
        ],
        [
          "以TSOxx04用户登陆，执行RACF命令 'PROFILE WTPMSG'。然后编辑以RESxxTST为HLQ的数据集(如RESxxTST.DATA)，看是否成功，为什么？"
        ],
        [
          "以TSOxx05用户登陆TSO(从上面的实验中可以看出TSOxx05是FUNxxTST的成员)。对以RESxxTST为HLQ的数据集(如RESxxTST.DATA)进行编辑，测试对数据集的保护是否成功，为什么？"
        ],
        [
          "以TSOxx01登陆，删除RESxxPRD打头的数据集(如RESxxPRD.DATA)，看是否成功？考虑为什么。"
        ],
        [
          "保留TSOxx01登陆的Session，再打开一个新的Session，以TSOxx03登陆TSO，修改 RESxxPRD.Profile，给TSOxx01赋ALTER权限"
        ],
        ["再尝试用TSOxx01用户删除RESxxPRD.DATA，看是否成功？"],
        ["TSOxx01重新登陆后再尝试删除RESxxPRD.DATA，看是否成功？"],
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
