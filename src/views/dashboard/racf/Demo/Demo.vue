<template>
  <div>
    <h1>RACF Demo</h1>
    <a-form :form="form" layout="inline" @submit="handleSubmit">
      <a-form-item label="命令">
        <a-textarea v-decorator="['code']" autosize />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit">
          提交
        </a-button>
      </a-form-item>
    </a-form>
    <pre>{{ result }}</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: this.$form.createForm(this),
      result: ""
    };
  },

  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.result = `你提交的命令是 ${this.form.getFieldsValue().code}`;
    }
  }
};
</script>

<style>
pre {
  background: #eee;
  padding: 1em;
  margin: 1em 0;

  border: 1px solid #ddd;
}
</style>
