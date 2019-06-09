<template>
  <div>
    <h1>用户管理</h1>
    <a-button @click="changeVisible(true)">添加用户</a-button>

    <a-modal
      title="添加用户"
      :visible="visible"
      @cancel="changeVisible(false)"
      @ok="handleSubmit"
    >
      <a-form :form="form">
        <a-form-item label="用户名">
          <a-input
            v-decorator="[
              'username',
              {
                rules: [{ required: true, message: '请输入用户名' }]
              }
            ]"
          ></a-input>
        </a-form-item>
        <a-form-item label="密码">
          <a-input
            type="password"
            v-decorator="[
              'password',
              {
                rules: [{ required: true, message: '请输入密码' }]
              }
            ]"
          ></a-input>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      form: this.$form.createForm(this)
    };
  },

  methods: {
    changeVisible(val) {
      this.visible = val;
    },

    handleSubmit() {
      this.form.validateFields((err, values) => {
        if (err) return;
        // login
        console.log(values);
      });
    }
  }
};
</script>
