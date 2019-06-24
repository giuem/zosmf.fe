<template>
  <div class="is8">
    <h3>CDS APPLICATION SELECTION</h3>
    <div class="content">
      <a-row>To Perform Control Data Set Operations, Specify:</a-row>

      <a-row>
        <a-col :offset="1">
          <a-input
            addonBefore="CDS Name"
            placeholder="1 to 44 Character Data Set Name or 'Active'"
          ></a-input>
        </a-col>
      </a-row>
      <br />
      <a-row>
        <a-input addonBefore="Select one of the following Options: "></a-input>
      </a-row>
      <a-row>
        <a-col :offset="1" :span="1">1</a-col>
        <a-col :span="5">Display</a-col>
        <a-col :span="17">- Display the Base Configuration</a-col>
      </a-row>
      <a-row>
        <a-col :offset="1" :span="1">2</a-col>
        <a-col :span="5">Define</a-col>
        <a-col :span="17">- Define the Base Configuration</a-col>
      </a-row>
      <a-row>
        <a-col :offset="1" :span="1">3</a-col>
        <a-col :span="5">Alter</a-col>
        <a-col :span="17">- Alter the Base Configuration</a-col>
      </a-row>
      <a-row>
        <a-col :offset="1" :span="1">4</a-col>
        <a-col :span="5">Validate</a-col>
        <a-col :span="17">- Validate the SCDS</a-col>
      </a-row>
      <a-row>
        <a-col :offset="1" :span="1">5</a-col>
        <a-col :span="5">Activate</a-col>
        <a-col :span="17">- Activate the CDS</a-col>
      </a-row>
      <a-row>
        <a-col :offset="1" :span="1">6</a-col>
        <a-col :span="5">Cache Display</a-col>
        <a-col :span="17"
          >- Display CF Cache Structure Names for all CF Cache Sets</a-col
        >
      </a-row>
      <a-row>
        <a-col :offset="1" :span="1">7</a-col>
        <a-col :span="5">Cache Update</a-col>
        <a-col :span="17">- Define/Alter/Delete CF Cache Sets</a-col>
      </a-row>
      <a-row>
        <a-col :offset="1" :span="1">8</a-col>
        <a-col :span="5">Lock Display</a-col>
        <a-col :span="17"
          >- Display CF Lock Structure Names for all CF Lock Sets</a-col
        >
      </a-row>
      <a-row>
        <a-col :offset="1" :span="1">9</a-col>
        <a-col :span="5">Lock Update</a-col>
        <a-col :span="17">- Define/Alter/Delete CF Lock Sets</a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
