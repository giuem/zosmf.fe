<template>
  <div class="allocate-panel">
    <hr />

    <a-card title="Allocate New Data Set">
      <a-form-item
        label="Data Set Name: "
        :label-col="{ span: 8 }"
        :wrapper-col="{ span: 16 }"
      >
        {{ this.$route.query.dataset.replace("'", "").replace("'", "") }}
      </a-form-item>
      <a-form-item
        label="Volume Serial: "
        :label-col="{ span: 8 }"
        :wrapper-col="{ span: 16 }"
      >
        <a-input
          placeholder="Blank for system default volume"
          v-model="volumeName"
        />
      </a-form-item>
      <a-form-item
        label="Space units: "
        :label-col="{ span: 8 }"
        :wrapper-col="{ span: 16 }"
      >
        <a-input
          placeholder="BLKS, TRKS, CYLS, KB, MB, BYTES or RECORDS"
          v-model="spaceUnits"
        />
      </a-form-item>
      <a-form-item
        label="Primary quantity: "
        :label-col="{ span: 8 }"
        :wrapper-col="{ span: 16 }"
      >
        <a-input placeholder="In above units" v-model="priQuantity" />
      </a-form-item>

      <a-form-item
        label="Secondary quantity: "
        :label-col="{ span: 8 }"
        :wrapper-col="{ span: 16 }"
      >
        <a-input placeholder="In above units" v-model="secQuantity" />
      </a-form-item>
      <a-form-item
        label="Directory blocks: "
        :label-col="{ span: 8 }"
        :wrapper-col="{ span: 16 }"
      >
        <a-input
          placeholder="Zero for sequential data set"
          v-model="dirBlocks"
        />
      </a-form-item>
      <a-form-item
        label="Record format: "
        :label-col="{ span: 8 }"
        :wrapper-col="{ span: 16 }"
      >
        <a-input v-model="recordFormat" />
      </a-form-item>
      <a-form-item
        label="Record length: "
        :label-col="{ span: 8 }"
        :wrapper-col="{ span: 16 }"
      >
        <a-input v-model="recordLen" />
      </a-form-item>
      <a-form-item
        label="Block size: "
        :label-col="{ span: 8 }"
        :wrapper-col="{ span: 16 }"
      >
        <a-input v-model="blockSize" />
      </a-form-item>

      <a-input
        addonBefore="Command >"
        @keyup.enter="Allocate"
        placeholder="回车提交"
      />
    </a-card>

    <br />
  </div>
</template>

<script>
export default {
  name: "allocate-panel",
  data() {
    return {
      volumeName: "",
      spaceUnits: "",
      priQuantity: "",
      secQuantity: "",
      dirBlocks: "",
      recordFormat: "",
      recordLen: "",
      blockSize: ""
    };
  },
  methods: {
    Allocate() {
      // post ...
      this.$router.push("data-set-utility");
    }
  }
};
</script>
