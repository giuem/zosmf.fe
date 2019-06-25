<template>
  <div class="pdalist-panel">
    <hr />
    <h3>EDIT {{ this.$route.query.dsn }}</h3>

    <a-table :columns="columns" :dataSource="datasets">
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
  name: "pdslist-panel",
  data() {
    return {
      columns: [
        {
          title: "Name",
          dataIndex: "name"
        },
        {
          title: "Size",
          dataIndex: "size"
        },
        {
          title: "Created",
          dataIndex: "created"
        },
        {
          title: "Changed",
          dataIndex: "changed"
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
          name: "JOB1",
          size: "24",
          created: "2019/05/27",
          changed: "2019/05/27"
        },
        {
          key: "1",
          name: "JOB2",
          size: "25",
          created: "2019/05/27",
          changed: "2019/05/27"
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
        this.$router.push({
          path: "jcl",
          query: {
            dsn: this.$route.query.dsn + "(" + this.datasets[key].name + ")"
          }
        });
      }
    }
  }
};
</script>
