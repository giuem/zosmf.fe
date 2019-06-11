<template>
  <LabLayout>
    <template slot="left">
      <LabContent :content="content" />
    </template>
    <template slot="right">
      <LabReport name="步骤 1">
        <a-form type="vertical" @submit="handleSubmit">
          <a-form-item label="What groups are you connected to?" :colon="false">
            <a-input></a-input>
          </a-form-item>
          <a-form-item label="Do you have any user attributes?" :colon="false">
            <a-input></a-input>
          </a-form-item>
          <a-form-item
            label="Do you have some class authorization?"
            :colon="false"
          >
            <a-input></a-input>
          </a-form-item>
          <a-form-item
            label="Do you have any connect attributes to RACFLAB?"
            :colon="false"
          >
            <a-input></a-input>
          </a-form-item>
          <div>
            <span>
              <a-button style="margin-right: 10px" disabled>上一步</a-button>
              <a-button>下一步</a-button>
            </span>
            <a-button style="float: right" type="primary" html-type="submit">
              提交
            </a-button>
          </div>
        </a-form>
      </LabReport>
      <a-divider />
      <Console />
    </template>
  </LabLayout>
</template>

<script>
import LabLayout from "@/components/LabLayout";
import LabContent from "@/components/LabContent";
import LabReport from "@/components/LabReport";
import Console from "@/components/Console";
import content from "./lab1.md";

export default {
  components: {
    LabLayout,
    LabContent,
    LabReport,
    Console
  },
  data() {
    return {
      content
    };
  },

  methods: {
    handleSubmit(e) {
      e.preventDefault();
      console.log("form submit");
    }
  }
};
</script>
