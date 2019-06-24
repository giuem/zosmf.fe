<template>
  <div class="is00">
    <h3>USER MODE ENTRY PANEL</h3>
    <div class="content">
      <a-row>
        Specify the following:
      </a-row>
      <a-row>
        <a-input addonBefore="User Mode: "></a-input>
      </a-row>
      <a-row>
        <a-col :offset="1" :span="1">1</a-col>
        <a-col :span="21">For an End User (EU)</a-col>
      </a-row>
      <a-row>
        <a-col :offset="1" :span="1">2</a-col>
        <a-col :span="21">For a Storage Administrator (SA)</a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
