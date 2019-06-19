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
      steps: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      questions: [
        {
          step: 2,
          q: "记录下列表中显示的数据集个数",
          a: ""
        },
        {
          step: 3,
          q: "有多少数据集是顺序数据集（DS ORG=PS）？",
          a: ""
        },
        {
          step: 3,
          q: "数据集的名字等于或多于3段的有几个？",
          a: ""
        },
        {
          step: 4,
          q: "该命令的作用是什么?",
          a: ""
        },
        {
          step: 5,
          q: "隐藏全部数据集，然后恢复显示?",
          a: ""
        },
        {
          step: 5,
          q: "隐藏除了前2个数据集的其它数据集，然后恢复显示?",
          a: ""
        },
        {
          step: 6,
          q: "使用‘VIEW 3 4 10’，看看显示列表有何变化",
          a: ""
        },
        {
          step: 6,
          q: "使用‘VIEW *’，再看看显示列表有何变化",
          a: ""
        },
        {
          step: 7,
          q:
            "使用CATLIST行命令查看列表中某个顺序或分区数据集，该数据集所在的盘卷是什么？其编目信息存放在那个目录中？",
          a: ""
        },
        {
          step: 7,
          q:
            "使用CATLIST行命令查看列表中某个VSAM数据集，该VSAM数据集的数据部分叫什么？索引部分叫什么（如果存在的话）？是哪种类型的VSAM数据集？各部分所在的盘卷是什么？",
          a: ""
        },
        {
          step: 8,
          q: "哪一个VOLUME空闲空间所占的比例最小?",
          a: ""
        },
        {
          step: 8,
          q: "哪一个VOLUME可用的分区（EXTENT）数目最多？",
          a: ""
        },
        {
          step: 8,
          q: "哪一个VOLUME拥有最大的分区？",
          a: ""
        },
        {
          step: 9,
          q: "‘Active’配置中定义了几个‘Data Class’？",
          a: ""
        },
        {
          step: 9,
          q:
            "有没有一个‘Data Class’可以用来新建一个记录长度为80的分区数据集？如果没有请在后面的实验中自己定义一个。",
          a: ""
        },
        {
          step: 10,
          q: "使用DISPLAY行命令，查看上个步骤显示的 ‘Data Class’的具体内容。",
          a: ""
        },
        {
          step: 11,
          q:
            "在ISMF主选项面板中选择‘5  Storage Class’，查看‘Active’配置中的‘Storage Class’的信息。使用DISPLAY行命令，查看每个‘Storage Class’的具体内容。",
          a: ""
        },
        {
          step: 12,
          q:
            "在ISMF主选项面板中选择‘6  Storage Group’，查看‘Active’配置中的‘Storage Group’信息。使用LISTVOL行命令，查看每个‘Storage Group’中的盘卷信息。",
          a: ""
        },
        {
          step: 13,
          q: "配置中默认的‘Management Class’是什么？",
          a: ""
        },
        {
          step: 14,
          q:
            "在ISMF主选项面板中选择‘3  Management Class’，查看‘Active’配置中的‘Management Class’的信息。使用DISPLAY行命令，查看上个步骤中得到的CDS基本配置中默认MC的内容。",
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
