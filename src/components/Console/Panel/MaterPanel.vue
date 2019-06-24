<template>
  <div>
    <h3>CUSTOMPAC MASTER APPLICATION MENU</h3>
    <div class="option">
      <a-input
        addonBefore="OPTION >"
        placeholder="请输入命令，回车确认"
        @pressEnter="routerTo"
      />
    </div>
    <div class="master-gutter">
      <a-row :gutter="16" v-for="option in options" :key="option.cmd">
        <a-col class="gutter-row" :span="3">
          <div class="gutter-box">{{ option.cmd }}</div>
        </a-col>
        <a-col class="gutter-row" :span="6">
          <div class="gutter-box">{{ option.name }}</div>
        </a-col>
        <a-col class="gutter-row" :span="15">
          <div class="gutter-box">{{ option.desc }}</div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "sms-console",
  props: {
    isLoading: {
      type: Boolean,
      default: false
    },
    result: {
      type: String,
      default: "这里显示返回结果 \n\nbalbalbl\nbabdba"
    }
  },
  data() {
    return {
      option: "",
      options: [
        {
          cmd: "IS",
          name: "ISMF",
          desc: "- Interactive Storage Management Facility"
        },
        {
          cmd: "P",
          name: "PDF",
          desc: "- ISPF/Program Development Facility"
        },
        {
          cmd: "IP",
          name: "IPCS",
          desc: "- ISPF/Program Development Facility"
        },
        {
          cmd: "R",
          name: "RACF",
          desc: "- Resource Access Control Facility"
        },
        {
          cmd: "DI",
          name: "DITTO",
          desc: "- Data Interfile Transfer, Testing and Operations"
        },
        {
          cmd: "SD",
          name: "SDSF",
          desc: "- System Display and Search Facility"
        },
        {
          cmd: "SM",
          name: "SMP/E",
          desc: "- SMP/E Dialogs"
        },
        {
          cmd: "SA",
          name: "SA",
          desc: "- SA/390 Customization Dialog"
        },
        {
          cmd: "IC",
          name: "ICSF",
          desc: "- Integrated Cryptographic Service Facility"
        }
      ]
    };
  },

  methods: {
    routerTo(e) {
      console.log(e);
      this.$router.push(e.target.value);
    }
  }
};
</script>

<style></style>
