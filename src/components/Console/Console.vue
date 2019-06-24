<template>
  <div>
    <h2>控制台</h2>

    <router-view></router-view>

    <a-divider />
    <a-button>F1</a-button>
    <a-button>F2</a-button>
    <a-button @click="goBack">F3</a-button>
    <a-button>F4</a-button>
    <a-button>F5</a-button>
    <a-button>F6</a-button>
    <br />
    <br />

    <!-- <a-form :form="form" layout="vertical" @submit="handleSubmit">
      <a-form-item>
       a-input placeholder="输入命令，回车提交" v-decorator="['code']" />
      </a-form-item>
    </a-form>
    <pre v-show="result">{{ result }}</pre>-->
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
    goBack() {
      if (!this.$route.path.endsWith("master")) {
        this.$router.go(-1);
      }
    },
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
