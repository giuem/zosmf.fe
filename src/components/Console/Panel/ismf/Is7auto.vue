<template>
  <div class="is7">
    <h3>ACS APPLICATION SELECTION</h3>
    <div class="content">
      <a-row>
        <a-input addonBefore=" Select one of the following options:"></a-input>
      </a-row>
      <a-row>
        <a-col :offset="1" :span="1">1</a-col>
        <a-col :span="5">Edit</a-col>
        <a-col :span="17">- Edit ACS Routine source code</a-col>
      </a-row>
      <a-row>
        <a-col :offset="1" :span="1">2</a-col>
        <a-col :span="5">Translate</a-col>
        <a-col :span="17">- Translate ACS Routines to ACS Object Form</a-col>
      </a-row>
      <a-row>
        <a-col :offset="1" :span="1">3</a-col>
        <a-col :span="5">Validate</a-col>
        <a-col :span="17"
          >- Validate ACS Routines Against Storage Constructs</a-col
        >
      </a-row>
      <a-row>
        <a-col :offset="1" :span="1">4</a-col>
        <a-col :span="5">Test</a-col>
        <a-col :span="17"
          >- Define/Alter Test Cases and Test ACS Routines</a-col
        >
      </a-row>
      <a-row>
        <a-col :offset="1" :span="1">5</a-col>
        <a-col :span="5">Display</a-col>
        <a-col :span="17">- Display ACS Object Information</a-col>
      </a-row>
      <a-row>
        <a-col :offset="1" :span="1">6</a-col>
        <a-col :span="5">Delete</a-col>
        <a-col :span="17"
          >- Delete an ACS Object from a Source Control Data Set</a-col
        >
      </a-row>
      <br />
      <a-row>If Display Option is Chosen, Specify:</a-row>
      <a-row>
        <a-col :offset="1">
          <a-input addonBefore="CDS Name"></a-input>
        </a-col>
      </a-row>
      <br />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
