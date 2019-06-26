<template>
  <div class="master-panel" @keyup.114="goBackSave">
    <h3 class="panel-title">EDIT {{ this.$route.query.dsn }}</h3>

    <a-textarea class="panel-text" :rows="15" v-model="jclText" />
    <br />
    <br />

    <a-row>
      <a-col :span="21">
        <div v-focus class="input">
          <a-input
            class="panel-option"
            addonBefore="Command >"
            @keyup.enter="Command"
            v-model="cmd"
          />
        </div>
      </a-col>
      <a-col :span="3">
        <a-button class="save-button" type="primary" @click="Save"
          >Save</a-button
        >
      </a-col>
    </a-row>
    <hr />
  </div>
</template>

<script>
export default {
  name: "jcl-panel",
  data() {
    return {
      cmd: "",
      jclText: ""
    };
  },
  created() {
    this.getDsContent();
  },
  methods: {
    getDsContent() {
      // 获取数据集（成员）内容
      this.$http
        .get("/sms/getds", this.$route.query.dsn)
        .then(res => {
          console.log("JCLPanel Put '/sms/getds' Success:", res);

          var jclList = res.data.split("\n");
          this.jclText = "";

          for (let i = 0; i < jclList.length; i++) {
            this.jclText += jclList[i].substr(0, jclList[i].length - 8) + "\n";
          }
          //console.log(this.jclText)
        })
        .catch(err => {
          console.log("JCLPanel Put '/sms/getds' Error: ", err);
        });
    },
    Write() {
      // 写入 JCL
      this.$http
        .put("/sms/wirteds", {
          dsName: this.$route.query.dsn,
          jclStr: this.jclText.split("\n")
        })
        .then(res => {
          console.log("JCLPanel Put '/sms/writeds' Success:", res);
          this.$message.success("Saved");
        })
        .catch(err => {
          console.log("JCLPanel Put '/sms/writeds' Error: ", err);
        });
    },
    Submit() {
      // 提交 JCL
      this.$http
        .put("/sms/submit", {
          jclStr: this.jclText.split("\n")
        })
        .then(res => {
          console.log("JCLPanel Put '/sms/submit' Success:", res);
          this.$message.info("Job " + res.data.jobid + " Submitted");
          this.jclResult(
            res.data.jobid + res.data.type + res.data.jobname + res.data.status
          );
        })
        .catch(err => {
          console.log("JCLPanel Put '/sms/submit' Error: ", err);
        });
    },
    Command() {
      if (this.cmd.toUpperCase() == "SUBMIT") {
        this.Write();
        this.Submit();
      } else
        this.$message.error("Command " + this.cmd.toUpperCase() + " Not Found");
      //console.log(this.cmd, this.jclText)
    },
    goBackSave() {
      this.Write();
    },
    Save() {
      this.Write();
    },
    jclResult(result) {
      const h = this.$createElement;
      this.$info({
        title: "Job Result",
        content: h("div", {}, [h("p", result)]),
        onOk() {}
      });
    }
  }
};
</script>

<style>
.panel-text {
  background-color: black;
  color: greenyellow;
}

.save-button {
  margin-top: 10px;
  margin-left: 2px;
  width: 60px;
  background-color: black;
}
</style>
