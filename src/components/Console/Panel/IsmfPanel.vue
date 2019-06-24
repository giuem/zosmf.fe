<template>
  <div class="master-panel">
    <h3>ISMF PRIMARY OPTION MENU</h3>
    <div class="option">
      <a-input
        addonBefore="OPTION >"
        placeholder="请输入命令，回车确认"
        @pressEnter="routerTo"
      />
    </div>
    <div class="master-gutter">
      <a-row :gutter="16" v-for="option in options" :key="option.cmd">
        <a-col class="gutter-row" :span="2">
          <div class="gutter-box">{{ option.cmd }}</div>
        </a-col>
        <a-col class="gutter-row" :span="7">
          <div class="gutter-box">{{ option.name }}</div>
        </a-col>
        <a-col class="gutter-row" :span="15">
          <div class="gutter-box">{{ option.desc }}</div>
        </a-col>
      </a-row>
    </div>
    <!-- 
     <router-link to="master">
      <a-button>F3</a-button>
    </router-link> -->
  </div>
</template>

<script>
export default {
  name: "master-panel",
  data() {
    return {
      option: "",
      options: [
        {
          cmd: 0,
          name: "ISMP Profile",
          desc: "- Specify ISMF User Profile"
        },
        {
          cmd: 1,
          name: "Data Set",
          desc: "- Perform Functions Against Data Sets"
        },
        {
          cmd: 2,
          name: "Volume",
          desc: "- Perform Functions Against Volumes"
        },
        {
          cmd: 3,
          name: "Management Class",
          desc: "- Specify Data Set Backup and Migration Criteria"
        },
        {
          cmd: 4,
          name: "Data Class",
          desc: "- Specify Data Set Allocation Parameters"
        },
        {
          cmd: 5,
          name: "Storage Class",
          desc: "- Specify Data Set Performance and Availability"
        },
        {
          cmd: 6,
          name: "Storage Group",
          desc: "- Specify Volume Names and Free Space Thresholds"
        },
        {
          cmd: 7,
          name: "Automatic Class Selection",
          desc: "- Specify ACS Routines and Test Criteria"
        },
        {
          cmd: 8,
          name: "Control Data Set",
          desc: "- Specify System Names and Default Criteria"
        },
        {
          cmd: 9,
          name: "Aggregate Group",
          desc: "- Specify Data Set Recovery Parameters"
        }
      ]
    };
  },
  methods: {
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
