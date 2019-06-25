<template>
  <div>
    <h3 class="panel-title">
      DSLIST - Data Sets Matching {{ this.$route.query.dsn }}
    </h3>
    <a-table :columns="columns" :dataSource="datasets" class="panel-table">
      <a slot="cmd" slot-scope="record">
        <a-popover title="Enter you command" trigger="click">
          <a slot="content">
            <a-input @keyup.enter="Command(record.key)" v-model="cmd" />
          </a>
          <a-button type="primary" width="10"><a-icon type="edit"/></a-button>
        </a-popover>
      </a>
    </a-table>
  </div>
</template>

<script>
export default {
  name: "dslist-panel",
  data() {
    return {
      columns: [
        {
          title: "Dataset",
          dataIndex: "dataset"
        },
        {
          title: "Message",
          dataIndex: "message"
        },
        {
          title: "Volume",
          dataIndex: "volume"
        },
        {
          title: "Cmd",
          key: "cmd",
          scopedSlots: { customRender: "cmd" }
        }
      ],
      datasets: [
        {
          key: "0",
          dataset: "ST016",
          message: "balabala",
          volume: "ALIAS"
        },
        {
          key: "1",
          dataset: "ST016.CALENDAR.REPORT",
          message: "balabala",
          volume: "BYWK00"
        }
      ],
      cmd: ""
    };
  },
  methods: {
    Command(key) {
      // console.log(key, this.cmd)
      if (this.cmd.toUpperCase() == "D") {
        // post ...
      } else if (this.cmd.toUpperCase() == "E") {
        // post ...
        var type = 1; //0: 顺序 1: 分区
        if (type == 0) {
          this.$router.push({
            path: "jcl",
            query: {
              dsn: this.datasets[key].dataset
            }
          });
        } else if (type == 1) {
          this.$router.push({
            path: "pdslist",
            query: {
              dsn: this.datasets[key].dataset
            }
          });
        }
      }
    }
  }
};
</script>

<style></style>
