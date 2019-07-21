<template>
  <div class="wrapper">
    <div class="pdf">
      <embed :src="url" type="application/pdf" width="100%" height="100%" />
    </div>
    <div class="check">
      <a-form :form="form">
        <a-form-item
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
          label="Name"
        >
          <a-input
            v-decorator="[
              'username',
              { rules: [{ required: true, message: 'Please input your name' }] }
            ]"
            placeholder="Please input your name"
          />
        </a-form-item>
        <a-form-item
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
          label="Nickname"
        >
          <a-input
            v-decorator="[
              'nickname',
              {
                rules: [
                  { required: checkNick, message: 'Please input your nickname' }
                ]
              }
            ]"
            placeholder="Please input your nickname"
          />
        </a-form-item>
        <a-row>
          <a-col :span="24" :style="{ textAlign: 'right' }">
            <a-button @click="$router.go(-1)">返回</a-button>
            <a-button
              type="primary"
              @click="check"
              :style="{ marginLeft: '8px' }"
              >保存</a-button
            >
          </a-col>
        </a-row>
      </a-form>
    </div>
  </div>
</template>
<script>
const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
};
const formTailLayout = {
  // labelCol: { span: 4 },
  wrapperCol: { offset: 8 }
};
export default {
  data() {
    return {
      url: this.$route.params.url,
      uid: this.$route.params.uid,
      checkNick: false,
      formItemLayout,
      formTailLayout,
      form: this.$form.createForm(this)
    };
  },
  methods: {
    check() {
      this.form.validateFields(err => {
        if (!err) {
          console.info("success");
        }
      });
    },
    handleChange(e) {
      this.checkNick = e.target.checked;
      this.$nextTick(() => {
        this.form.validateFields(["nickname"], { force: true });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  width: 100%;
  height: 100%;
}
.pdf {
  height: 100%;
  flex: 3;
}
.check {
  height: 100%;
  flex: 1;
}
</style>
