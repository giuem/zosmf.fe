<template>
  <div class="dsu-panel">
    <hr />

    <a-card title="Data Set Utility">
      <a-row>
        <a-col :span="12">A Allocate new data set</a-col>
        <a-col :span="12">C Catalog data set</a-col>
      </a-row>
      <a-row>
        <a-col :span="12">R Rename entire data set</a-col>
        <a-col :span="12">U Uncatalog data set</a-col>
      </a-row>
      <a-row>
        <a-col :span="12">D Delete entire data set</a-col>
        <a-col :span="12">S Short data set information</a-col>
      </a-row>
      <a-row>
        <a-col :span="12">blank Data set information</a-col>
        <a-col :span="12">V VSAM Utilities</a-col>
      </a-row>
    </a-card>

    <br />

    <a-card title="Other Partitioned, Sequential or VSAM Data Set">
      <a-form-item
        label="Name: "
        :label-col="{ span: 3 }"
        :wrapper-col="{ span: 21 }"
      >
        <a-input
          placeholder="Input the name of the data set"
          v-model="dataSetName"
        />
      </a-form-item>
      <a-form-item
        label="Volume Serial: "
        :label-col="{ span: 6 }"
        :wrapper-col="{ span: 18 }"
      >
        <a-input
          placeholder="If not cataloged, required for option 'C'"
          v-model="volumeName"
        />
      </a-form-item>
      <a-form-item
        label="Data Set Password: "
        :label-col="{ span: 8 }"
        :wrapper-col="{ span: 16 }"
      >
        <a-input placeholder="If password protected" v-model="password" />
      </a-form-item>
      <a-input
        addonBefore="Option >"
        @keyup.enter="Allocate"
        placeholder="回车提交"
        v-model="option"
      />
    </a-card>

    <br />
  </div>
</template>

<script>
export default {
  name: "dsu-panel",
  data() {
    return {
      option: "",
      dataSetName: "",
      volumeName: "",
      password: ""
    };
  },
  methods: {
    Allocate() {
      // post ...
      if (this.dataSetName.length == 0)
        this.$message.error("Enter required field");
      else if (this.option.toUpperCase() == "A") {
        this.$router.push({
          path: "allocate-dataset",
          query: {
            dataset: this.dataSetName
          }
        });
      }
    }
  }
};
</script>
