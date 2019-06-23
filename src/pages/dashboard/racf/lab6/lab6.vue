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
import content from "./lab6.md";

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
          "什么给你权限让你能够为 RACF 定义新的 User Profile?",
          "是否足以定义TSO段?",
          "什么让你能定义 profiles 去控制 TSO 用户的登录过程?",
          "是什么让您能够定义 profile 来控制对帐号的访问?"
        ],
        [
          "在DIVxxFUN下创建子组FUNxxAP",
          "在DIVxxFUN下创建子组FUNxxSP",
          "在DIVxxRES下创建子组RESxxTSO，用以管理TSO资源授权"
        ],
        ["新增SP用户TSOxx06", "新增AP用户TSOxx07"],
        ["为TSO用户创建一个新的登陆过程PROC#Sxx和PROC#Axx"],
        ["测试TSOxx06和TSOxx07登陆TSO，成功吗？出现什么信息？"],
        [
          "创建通用资源TSOPROC的RPOFILE，保护AP和SP的TSO登陆过程",
          "浏览PROC#Sxx和PROC#Axx PROFILE，它们用于保护不同的TSO登陆服务"
        ],
        ["刷新TSOPROC类在内存中的Profile"],
        [
          "创建RPOFILE：ACCT#Sxx 该ACCTNUM为SP用户组提供TSO登陆服务",
          "创建PROFILE：ACCT#Axx 该ACCTNUM为AP用户组提供TSO登陆服务",
          "浏览PROFILE：ACCT#Sxx和ACCT#Axx"
        ],
        ["查看SP和AP用户是否拥有提交JCL作业的权利"],
        ["保护TSOxx06的用户数据集", "保护TSOxx07的用户数据集"],
        [
          "为TSOxx06创建别名",
          "测试是否成功",
          "为TSOxx07创建别名",
          "测试是否成功"
        ],
        [
          "以TSOxx06和TSOxx07登陆TSO，测试是否成功",
          "在登陆过程中，删除TSOPROC和ACCTNUM",
          "在登陆过程中，键入不存在的TSOPROC和ACCTNUM",
          "在登陆过程中，输入Region大小值大于4096，或者小于4096",
          "以yourid登陆TSO，删除TSOxx06用户RPOFILE的TSO段，然后再尝试以TSOxx06登陆，看系统怎么反应？",
          "为TSOxx06重新赋值TSO段",
          "以yourid登陆TSO，取消TSOxx07用户RPOFILE的TSOPROC赋值或者ACCTNUM赋值，然后再尝试以TSOxx07登陆，看系统怎么反应？"
        ],
        ["如果想为TSO资源的保护指定一个管理员，如何操作比较简单高效？"],
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
