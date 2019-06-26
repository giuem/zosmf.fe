<template>
  <div>
    <p v-if="q.length === 0">暂无问题</p>
    <a-form :form="form" layout="vertical" @submit="handleSubmit">
      <a-form-item v-for="text in q" :key="text" :label="text" :colon="false">
        <a-input></a-input>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  props: {
    questions: {
      type: Array,
      default: () => []
    },
    step: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      form: this.$form.createForm(this)
    };
  },
  computed: {
    q() {
      return this.questions[this.step - 1];
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
    }
  }
};
</script>
