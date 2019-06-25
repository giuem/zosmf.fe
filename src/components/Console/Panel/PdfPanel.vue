<template>
  <div class="pdf-panel">
    <hr />
    <h3>ISPF Primary Option Menu</h3>
    <a-button
      block
      v-for="option in mainOptions"
      :key="option.index"
      @click="chooseOption(option.index)"
    >
      {{ `${option.content}` }}
    </a-button>
    <hr />
  </div>
</template>

<script>
export default {
  name: "pdf-panel",
  data() {
    return {
      mainOptions: [
        {
          index: 0,
          content: "3.2 Data Set Utility"
        },
        {
          index: 1,
          content: "3.4 Data Set List Utility"
        }
      ]
    };
  },
  methods: {
    chooseOption(index) {
      if (index == 0) this.$router.push("data-set-utility");
      else if (index == 1) this.$router.push("data-set-list-utility");
    }
  }
};
</script>
