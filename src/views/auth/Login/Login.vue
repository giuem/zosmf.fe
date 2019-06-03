<template>
  <div>
    <a-form :form="form" @submit="handleSubmit" style="width: 360px">
      <h1>z/OS MF</h1>
      <a-form-item>
        <a-input
          v-decorator="[
            'userName',
            {
              rules: [{ required: true, message: '用户名不能为空' }]
            }
          ]"
          placeholder="请输入用户名"
          size="large"
        >
          <a-icon slot="prefix" type="user" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
            'password',
            {
              rules: [{ required: true, message: '密码不能为空' }]
            }
          ]"
          size="large"
          type="password"
          placeholder="请输入密码"
        >
          <a-icon slot="prefix" type="lock" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit" size="large" block>
          登录
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: this.$form.createForm(this)
    };
  },
  // mounted() {
  //   this.$nextTick(() => {
  //     // To disabled submit button at the beginning.
  //     this.form.validateFields();
  //   });
  // },
  methods: {
    userNameError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched("userName") && getFieldError("userName");
    },
    // Only show error after a field is touched.
    passwordError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched("password") && getFieldError("password");
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields(err => {
        if (err) return;
      });
    }
  }
};
</script>
