<template>
  <a-form :form="form" layout="vertical" @submit="handleSubmit"> </a-form>
</template>

<script>
export default {
  props: {
    questions: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      form: this.$form.createForm(this)
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
    }
  }
};
</script>
