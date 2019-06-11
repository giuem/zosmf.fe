<template>
  <div>
    <h2>控制台</h2>
    <a-form :form="form" layout="vertical" @submit="handleSubmit">
      <a-form-item>
        <a-input placeholder="输入命令，回车提交" v-decorator="['code']" />
      </a-form-item>
      <!-- <a-form-item>
        <a-button type="primary" html-type="submit" :loading="isLoading">
          提交
        </a-button>
      </a-form-item> -->
    </a-form>
    <pre v-show="result">{{ result }}</pre>
  </div>
</template>

<script>
export default {
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
      form: this.$form.createForm(this)
    };
  },

  methods: {
    handleSubmit(e) {
      e.preventDefault();
      console.log("command submit");
      this.$emit("submit", this.form.getFieldsValue().code);
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
