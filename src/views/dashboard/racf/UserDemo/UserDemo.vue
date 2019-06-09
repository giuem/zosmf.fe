<template>
  <div>
    <h1>用户管理</h1>
    <a-button @click="changeVisible(true)">添加用户</a-button>

    <a-modal
      title="添加用户"
      :visible="visible"
      :confirmLoading="isLoading"
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
        <a-form-item label="OWNER">
          <a-input
            v-decorator="[
              'owner',
              {
                rules: [{ required: true, message: '请输入 OWNER' }]
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
      form: this.$form.createForm(this),
      isLoading: false
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
        this.isLoading = true;
        setTimeout(() => {
          this.visible = false;
          this.isLoading = false;
          this.$message.success("添加成功");
        }, 2000);
      });
    }
  }
};
</script>
