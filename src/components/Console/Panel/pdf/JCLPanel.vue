<template>
  <div class="jcl-panel">
    <hr />
    <h3>EDIT {{ this.$route.query.dsn }}</h3>
    <a-textarea :rows="15" v-model="code" />

    <hr />
    <a-input addonBefore="Command >" @keyup.enter="Command" v-model="cmd" />
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
    Command() {
      // post
      if (this.cmd.toUpperCase() == "SUBMIT") {
        // 写入 JCL
        axios
          .post("/api/write/", {
            dsName: this.$route.query.dsn,
            jcl: this.code.split("\n")
          })
          .then(res => {
            console.log("JCLPanel Post 'write/' Success:", res);
          })
          .catch(err => {
            console.log("JCLPanel Post 'write/' Error: ", err);
          });

        // 提交 JCL
        axios
          .post("/api/submit/", {
            jcl: this.code.split("\n")
          })
          .then(res => {
            console.log("JCLPanel Post 'submit/' Success:", res);
            this.$message.info("JOB SUBMITTED");
          })
          .catch(err => {
            console.log("JCLPanel Post 'submit/' Error: ", err);
          });
      } else
        this.$message.error("Command " + this.cmd.toUpperCase() + " Not Found");
      //console.log(this.cmd, this.code)
    }
  }
};
</script>
