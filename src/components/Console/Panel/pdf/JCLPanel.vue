<template>
  <div class="jcl-panel">
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
      //console.log(this.cmd, this.code)
    }
  }
};
</script>
