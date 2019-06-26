<template>
  <div class="jcl-panel" @keyup.114="goBackSave">
    <h3 class="panel-title">EDIT {{ this.$route.query.dsn }}</h3>
    <a-textarea :rows="15" v-model="code" />
    <br />
    <br />
    <div v-focus class="input">
      <a-input addonBefore="Command >" @keyup.enter="Command" v-model="cmd" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "jcl-panel",
  data() {
    return {
      cmd: "",
      code: ""
    };
  },

  methods: {
    Write() {
      // 写入 JCL
      axios
        .post("/sms/wirteds", {
          dsName: this.$route.query.dsn,
          jclStr: this.code.split("\n")
        })
        .then(res => {
          console.log("JCLPanel Post '/sms/writeds' Success:", res);
          if (res.data.errmsg != "") this.$message.error(res.data.errmsg);
        })
        .catch(err => {
          console.log("JCLPanel Post '/sms/writeds' Error: ", err);
        });
    },
    Submit() {
      // 提交 JCL
      axios
        .post("/sms/submit", {
          jclStr: this.code.split("\n")
        })
        .then(res => {
          console.log("JCLPanel Post '/sms/submit' Success:", res);
          this.$message.info("Job Submitted");
        })
        .catch(err => {
          console.log("JCLPanel Post '/sms/submit' Error: ", err);
        });
    },
    Command() {
      // post
      if (this.cmd.toUpperCase() == "SUBMIT") {
        this.Write();
        this.Submit();
      } else
        this.$message.error("Command " + this.cmd.toUpperCase() + " Not Found");
      //console.log(this.cmd, this.code)
    },
    goBackSave() {
      // TODO: 点击 F3 按钮的时候该怎么保存
      this.Write();
    }
  }
};
</script>
