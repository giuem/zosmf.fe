<template>
  <div class="is6">
    <h3>STORAGE GROUP APPLICATION SELECTION</h3>
    <div class="content">
      <a-row>To perform Storage Group Operations, Specify: </a-row>
      <a-row>
        <a-col :offset="1">
          <a-input addonBefore="CDS Name"></a-input>
        </a-col>
      </a-row>
      <a-row>
        <a-col :offset="1">
          <a-input addonBefore="Storage Group Name"></a-input>
        </a-col>
      </a-row>
      <a-row>
        <a-col :offset="1">
          <a-input addonBefore="Storage Group Type"></a-input>
        </a-col>
      </a-row>
      <br />
      <a-row>
        <a-input addonBefore="Select one of the following options  :"></a-input>
      </a-row>
      <a-row>
        <a-col :offset="1" :span="1">1</a-col>
        <a-col :span="5">List</a-col>
        <a-col :span="17">- Generate a list of Storage Groups</a-col>
      </a-row>
      <a-row>
        <a-col :offset="1" :span="1">2</a-col>
        <a-col :span="5">Display</a-col>
        <a-col :span="17">- Display a Storage Group</a-col>
      </a-row>
      <a-row>
        <a-col :offset="1" :span="1">3</a-col>
        <a-col :span="5">Define</a-col>
        <a-col :span="17">- Define a Storage Group</a-col>
      </a-row>
      <a-row>
        <a-col :offset="1" :span="1">4</a-col>
        <a-col :span="5">Alter</a-col>
        <a-col :span="17">- Alter a Storage Group</a-col>
      </a-row>
      <a-row>
        <a-col :offset="1" :span="1">5</a-col>
        <a-col :span="5">Volume</a-col>
        <a-col :span="17"
          >- Display, Define, Alter or Delete Volume Information
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
