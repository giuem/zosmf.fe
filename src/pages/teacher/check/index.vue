<template>
  <div style="height: 100%" id="teach_check_page">
    <h2>{{ uid }} 的 {{ lab.toUpperCase() }} 实验报告</h2>
    <div class="wrapper">
      <div class="pdf">
        <a-spin :spinning="isLoadingPDF" :style="{ height: '100%' }">
          <embed :src="url" type="application/pdf" width="100%" height="100%" />
        </a-spin>
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
            <a-textarea
              :rows="5"
              v-decorator="[
                'comment',
                { rules: [{ max: 140, message: '字数限制在 140 字以内' }] }
              ]"
            />
          </a-form-item>
          <a-row>
            <a-col :span="24" :style="{ textAlign: 'right' }">
              <a-button @click="$router.go(-1)">返回</a-button>
              <a-button
                type="primary"
                @click="save"
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
import { mapState } from "vuex";
import { setTimeout } from "timers";

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
      formItemLayout,
      formTailLayout,
      form: this.$form.createForm(this),
      isLoadingPDF: true
    };
  },
  computed: {
    ...mapState("report", ["score", "comment", "uid", "url", "lab"])
  },
  mounted() {
    this.form.setFieldsValue({
      score: this.score,
      comment: this.comment
    });
    setTimeout(() => {
      this.isLoadingPDF = false;
    }, 1500);
  },
  methods: {
    save() {
      this.$http
        .post(`/api/db/subScore`, {
          uid: this.uid,
          score: this.form.getFieldValue("score"),
          comment: this.form.getFieldValue("comment"),
          lab: this.lab
        })
        .then()
        .catch();
    }
  }
};
</script>

<style lang="scss">
#teach_check_page {
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
  .ant-spin-container {
    height: 100%;
  }
}
</style>
