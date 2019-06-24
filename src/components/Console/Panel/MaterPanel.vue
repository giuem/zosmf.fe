<template>
  <div>
    <a-button @click="routerTo">ISMF</a-button>
    <a-button @click="routerTo">PDF</a-button>
  </div>
</template>

<script>
// import mainPanel from "./Panel/MasPanel";
// import secondaryPanel from "./Panel/SecondaryPanel";

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
      form: this.$form.createForm(this),
      optionIndex: 0,
      currentPanelComponent: "main-panel"
    };
  },

  methods: {
    routerTo(e) {
      console.log(e.target.innerText);
      this.$router.push(e.target.innerText);
    },
    handleSubmit(e) {
      e.preventDefault();
      console.log("command submit");
      this.$emit("submit", this.form.getFieldsValue().code);
    },
    chooseOption(index) {
      this.currentPanelComponent = "secondary-panel";
      this.optionIndex = index;
    }
  }
};
</script>

<style>
pre {
  background: #eee;
  padding: 1em;
  margin: 1em 0 !important;

  border: 1px solid #ddd;
}
</style>
