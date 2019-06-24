<template>
  <div class="is0">
    <h3>ISMF PROFILE OPTION MENU</h3>
    <div class="content">
      <a-row>
        <a-input
          addonBefore="Select one of the following options and Press Enter: "
          @pressEnter="routerTo"
        ></a-input>
      </a-row>
      <a-row>
        <a-col :offset="1" :span="1">0</a-col>
        <a-col :span="21">User Mode Selection</a-col>
      </a-row>
      <a-row>
        <a-col :offset="1" :span="1">1</a-col>
        <a-col :span="21">Logging and Abend Control</a-col>
      </a-row>
      <a-row>
        <a-col :offset="1" :span="1">2</a-col>
        <a-col :span="21">ISMF Job Statement</a-col>
      </a-row>
      <a-row>
        <a-col :offset="1" :span="1">3</a-col>
        <a-col :span="21">DFSMSdss Execute Statement</a-col>
      </a-row>
      <a-row>
        <a-col :offset="1" :span="1">4</a-col>
        <a-col :span="21">ICKDSF Execute Statement</a-col>
      </a-row>
      <a-row>
        <a-col :offset="1" :span="1">5</a-col>
        <a-col :span="21">Data Set Print Execute Statement</a-col>
      </a-row>
      <a-row>
        <a-col :offset="1" :span="1">6</a-col>
        <a-col :span="21">IDCAMS Execute Statement</a-col>
      </a-row>
      <a-row>
        <a-col :offset="1" :span="1">X</a-col>
        <a-col :span="21">Exit</a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    routerTo(e) {
      this.$router.push("0/" + e.target.value);
    }
  }
};
</script>

<style scoped></style>
