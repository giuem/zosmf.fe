<template>
  <keep-alive>
    <component :is="currentComponent">sdfsdf</component>
  </keep-alive>
</template>

<script>
// import LabLayout from "@/components/LabLayout";
// import LabContent from "@/components/LabContent";
// import LabReport from "@/components/LabReport";
// import Console from "@/components/Console";
// import content from "./lab.md";
import dfsmsIntro from "@/pages/dashboard/dfsms/intro";
import dfsmsLab1 from "@/pages/dashboard/dfsms/lab1";
import dfsmsLab2 from "@/pages/dashboard/dfsms/lab2";
import dfsmsLab3 from "@/pages/dashboard/dfsms/lab3";
import dfsmsLab4 from "@/pages/dashboard/dfsms/lab4";
import dfsmsLab5 from "@/pages/dashboard/dfsms/lab5";
import dfsmsLab6 from "@/pages/dashboard/dfsms/lab6";
import dfsmsLab7 from "@/pages/dashboard/dfsms/lab7";

export default {
  components: {
    dfsmsIntro,
    dfsmsLab1,
    dfsmsLab2,
    dfsmsLab3,
    dfsmsLab4,
    dfsmsLab5,
    dfsmsLab6,
    dfsmsLab7
  },
  data() {
    return {};
  },
  computed: {
    currentComponent() {
      // console.log(this.$route.params.lab)
      return "dfsms-" + this.$route.params.lab;
    }
  }
};
</script>
