<template>
  <div>
    <a-form :form="form" @submit="handleSubmit" style="width: 360px">
      <h1>z/OS MF</h1>
      <a-form-item>
        <a-input
          v-decorator="[
            'account',
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
        <a-input
          v-decorator="[
            'address',
            {
              rules: [{ required: true, message: '地址不能为空' }]
            }
          ]"
          size="large"
          placeholder="10.60.43.8:8800"
        >
          <a-icon slot="prefix" type="cloud" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-button
          type="primary"
          html-type="submit"
          size="large"
          block
          :loading="isLoading"
          >登录</a-button
        >
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import Axios from "axios";
import { Modal } from "ant-design-vue";

export default {
  data() {
    return {
      form: this.$form.createForm(this),
      isLoading: false
    };
  },
  // mounted() {
  //   this.$nextTick(() => {
  //     // To disabled submit button at the beginning.
  //     this.form.validateFields();
  //   });
  // },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields(async err => {
        if (err) return;
        this.doLogin();
      });
    },

    async doLogin() {
      this.isLoading = true;

      try {
        const user = this.form.getFieldsValue();
        user.teacherPass = this.form.getFieldsValue().password;
        const response = await Axios.post("/api/login", user);
        switch (response.status) {
          case 200: {
            this.$store.dispatch("user/login", user);
            const loginState = await Axios.get("/api/login");
            if (loginState.data.role === "teacher") {
              this.$router.push("/teacher");
              return;
            }
            this.$router.push("/");
            return;
          }
          case 401:
            Modal.error({
              title: "登录失败",
              content: "用户名或密码错误",
              centered: true
            });
        }
      } catch (error) {
        Modal.error({
          title: "登录失败",
          content: error.message,
          centered: true
        });
      } finally {
        this.isLoading = false;
      }
    }
  }
};
</script>
