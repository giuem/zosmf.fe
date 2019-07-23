<template>
  <div style="height: 100%">
    <h1>{{ uid }} 的实验报告</h1>
    <div class="wrapper">
      <div class="pdf">
        <embed :src="url" type="application/pdf" width="100%" height="100%" />
      </div>
      <div class="check">
        <a-form :form="form">
          <a-form-item
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
            label="分数"
          >
            <a-input-number
              :min="0"
              :max="100"
              v-decorator="[
                'score',
                { rules: [{ required: true, message: '分数不能为空' }] }
              ]"
            />
          </a-form-item>
          <a-form-item
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
            label="评价"
          >
            <a-textarea :rows="5" />
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
      formItemLayout,
      formTailLayout,
      form: this.$form.createForm(this)
    };
  },
  created() {
    // 上一页离开之前用 mapstate 保存表单内容
  },
  methods: {
    check() {
      this.form.validateFields(err => {
        if (!err) {
          console.info("success");
        }
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
