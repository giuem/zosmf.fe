<template>
  <div class="master-panel">
    <h3>ISMF PRIMARY OPTION MENU</h3>
    <router-link to="master"><a-button>返回</a-button></router-link>
    <a-button
      block
      v-for="option in mainOptions"
      :key="option.index"
      @click="$emit('chooseOption', option.index)"
      >{{ `${option.index} ${option.content}` }}</a-button
    >
  </div>
</template>

<script>
export default {
  name: "master-panel",
  data() {
    return {
      mainOptions: [
        {
          index: 0,
          content: "ISMP Profile"
        },
        {
          index: 1,
          content: "Data Set"
        },
        {
          index: 2,
          content: "Volume"
        },
        {
          index: 3,
          content: "Management Class"
        },
        {
          index: 4,
          content: "Data Class"
        },
        {
          index: 5,
          content: "Storage Class"
        },
        {
          index: 6,
          content: "Storage Group"
        },
        {
          index: 7,
          content: "Automatic Class Selection"
        },
        {
          index: 8,
          content: "Control Data Set"
        },
        {
          index: 9,
          content: "Aggregate Group"
        }
      ]
    };
  }
};
</script>
