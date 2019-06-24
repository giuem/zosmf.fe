<template>
  <div class="is5">
    <h3>STORAGE CLASS APPLICATION SELECTION</h3>
    <div class="content">
      <a-row>To perform Storage Class Operations, Specify:</a-row>
      <a-row>
        <a-col :offset="1">
          <a-input addonBefore="CDS Name"></a-input>
        </a-col>
      </a-row>
      <a-row>
        <a-col :offset="1">
          <a-input addonBefore="Storage Class Name"></a-input>
        </a-col>
      </a-row>
      <br />
      <a-row>
        <a-input addonBefore="Select one of the following options  :"></a-input>
      </a-row>
      <a-row>
        <a-col :offset="1" :span="1">1</a-col>
        <a-col :span="5">List</a-col>
        <a-col :span="17">- Generate a list of Storage Classes</a-col>
      </a-row>
      <a-row>
        <a-col :offset="1" :span="1">2</a-col>
        <a-col :span="5">Display</a-col>
        <a-col :span="17">- Display a Storage Class</a-col>
      </a-row>
      <a-row>
        <a-col :offset="1" :span="1">3</a-col>
        <a-col :span="5">Define</a-col>
        <a-col :span="17">- Define a Storage Class</a-col>
      </a-row>
      <a-row>
        <a-col :offset="1" :span="1">4</a-col>
        <a-col :span="5">Alter</a-col>
        <a-col :span="17">- Alter a Storage Class </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
