<template>
  <div class="is1">
    <h3>DATA SET SELECTION ENTRY PANEL</h3>

    <div class="master-gutter">
      <a-row>
        <a-col class="gutter-row" :span="24">
          <div class="gutter-box">
            For a Data Set List, Select Source of Generated List . . 2 (1 or 2)
          </div>
        </a-col>
      </a-row>
      <a-row :gutter="16">
        <a-col class="gutter-row" :span="1" :offset="1">
          <div class="gutter-box">1</div>
        </a-col>
        <a-col class="gutter-row" :span="9">
          <div class="gutter-box">
            Generate from a Saved List List Name . . .
          </div>
        </a-col>
        <a-col class="gutter-row" :span="9">
          <div class="gutter-box">Query Name To Save or Retrieve . . .</div>
        </a-col>
      </a-row>

      <a-row>
        <a-col class="gutter-row" :span="1" :offset="1">
          <div class="gutter-box">2</div>
        </a-col>
        <a-col class="gutter-row" :span="22">
          <div class="gutter-box">Generate a new list from criteria below</div>
        </a-col>
      </a-row>

      <a-row>
        <a-col class="gutter-row" :span="22" :offset="2">
          <a-input
            addonBefore="Data Set Name"
            @pressEnter="datasetApp"
            v-model="dataSetName"
          />
        </a-col>
      </a-row>

      <a-row>
        <a-col class="gutter-row" :span="22" :offset="2">
          <a-input
            addonBefore="Specify Source of the new list"
            placeholder="1 - VTOC, 2 - Catalog"
            @pressEnter="datasetApp"
            v-model="source"
          />
        </a-col>
      </a-row>

      <a-row>
        <a-col class="gutter-row" :span="1" :offset="2">
          <div class="gutter-box">1</div>
        </a-col>
        <a-col class="gutter-row" :span="21">
          <div class="gutter-box">Generate list from VTOC</div>
        </a-col>
      </a-row>

      <a-row>
        <a-col class="gutter-row" :span="21" :offset="3">
          <a-input
            addonBefore="Volume Serial Number"
            placeholder="fully or partially specified"
            @pressEnter="datasetApp"
            v-model="volume"
          />
        </a-col>
      </a-row>

      <a-row>
        <a-col :span="21" :offset="3">Storage Group Name . . .</a-col>
      </a-row>

      <a-row>
        <a-col class="gutter-row" :span="1" :offset="2">
          <div class="gutter-box">2</div>
        </a-col>
        <a-col class="gutter-row" :span="21">
          <div class="gutter-box">Generate list from Catalog</div>
        </a-col>
      </a-row>

      <a-row>
        <a-col :span="21" :offset="3">Catalog Name . . .</a-col>
      </a-row>
      <a-row>
        <a-col :span="21" :offset="3">Volume Serial Number . . .</a-col>
      </a-row>
      <a-row>
        <a-col :span="21" :offset="3">
          <a-input
            addonBefore="Acquire Data from Volume"
            placeholder="Y or N"
            @pressEnter="datasetApp"
            v-model="acquireVolume"
          />
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="21" :offset="3"
          >Acquire Data if DFSMShsm Migrated . . . N (Y or N)</a-col
        >
      </a-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "is1",
  data() {
    return {
      dataSetName: "",
      source: "",
      volume: "",
      acquireVolume: "N"
    };
  },
  methods: {
    datasetApp() {
      console.log({
        dataSetName: this.dataSetName,
        source: this.source,
        volume: this.volume,
        acquireVolume: this.acquireVolume
      });
    },
    routerTo(e) {
      console.log(e);
      this.$router.push({
        name: "isoption",
        params: { option: e.target.value }
      });
    }
  }
};
</script>
