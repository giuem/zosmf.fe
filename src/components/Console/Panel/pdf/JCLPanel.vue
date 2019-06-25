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
