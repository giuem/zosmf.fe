<template>
  <div>
    <h2>REXX</h2>
    <a-input v-model="rexxName" placeholder="请输入Rexx文件名" />
    <a-form :form="form" layout="vertical" @submit="handleSubmit">
      <!-- <a-form-item>
        <a-input placeholder="输入命令，回车提交" v-decorator="['code']" />
      </a-form-item> -->
      <a-textarea placeholder="请输入Rexx代码" :rows="14" v-model="rexxCode" />
      <a-input v-model="param" placeholder="请输入参数，中间用空格隔开" />
      <a-button type="primary" html-type="submit" style="margin-top: 5px"
        >EXEC</a-button
      >
    </a-form>
    <pre v-show="result">{{ result }}</pre>
  </div>
</template>

<script>
import axios from "axios";
// import qs from "qs";

export default {
  props: {
    isLoading: {
      type: Boolean,
      default: false
    },
    result: {
      type: String,
      default: "这里显示返回结果..."
    }
  },
  data() {
    return {
      form: this.$form.createForm(this),
      rexxName: null,
      param: null,
      rexxCode: null
    };
  },
  methods: {
    //向分区数据集中写入文件
    writeDatasetP() {
      var _this = this;
      var data2 = {
        rexxName: this.rexxName,
        rexxCode: this.rexxCode
      };
      console.log(data2);
      axios({
        async: false,
        method: "post",
        url: "/api/writeDataset",
        data: data2
      })
        .then(response => {
          console.log(response);
          console.log("write success");
          _this.rexx();
        })
        .catch(error => {
          console.log(error);
          _this.rexx();
        });
    },
    //打包并运行分区数据集
    rexx() {
      var _this = this;
      var arr = this.rexxName.split("(");
      var num = this.rexxName.indexOf("(");
      console.log("ready to run");
      var len = this.rexxName.length;
      var data3 = {
        libName: arr[0],
        rexxName: this.rexxName.substring(num + 1, len - 1),
        rexxPut: this.param
      };
      console.log(data3);
      //打包并运行jcl
      axios({
        async: false,
        method: "post",
        url: "/api/rexx",
        data: data3
      })
        .then(response => {
          _this.result = response.data;
          console.log("run success");
        })
        .catch(error => {
          console.log(error);
        });
    },
    //向顺序数据集写入文件
    writeDataset() {
      var _this = this;
      var data2 = {
        rexxName: _this.rexxName,
        rexxCode: _this.rexxCode
      };
      console.log(data2);
      //写入数据集
      axios({
        method: "post",
        url: "/api/writeDataset",
        data: data2
      })
        .then(response => {
          console.log(response);
          console.log("write success");
          _this.rexx2();
        })
        .catch(error => {
          console.log(error);
          _this.rexx2();
        });
    },
    //打包并运行顺序数据集
    rexx2() {
      var _this = this;
      var data3 = {
        rexxName: this.rexxName
      };
      axios({
        method: "post",
        url: "/api/rexx2",
        data: data3
      })
        .then(response => {
          console.log(response);
          _this.result = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },

    handleSubmit(e) {
      e.preventDefault();
      console.log("command submit");
      var _this = this;

      var arr = this.rexxName.split("(");
      if (this.rexxName.indexOf("(") != -1) {
        //新建分区数据集
        var num = this.rexxName.indexOf("(");
        console.log(num);
        var data1 = {
          rexxName: arr[0]
        };
        axios({
          async: false,
          method: "post",
          url: "/api/createDatasetP",
          data: data1
        })
          .then(response => {
            console.log(response);
            console.log("create success");
            _this.writeDatasetP();
          })
          .catch(error => {
            console.log(error);
            _this.writeDatasetP();
          });
      } else {
        //新建数据集
        var data2 = {
          rexxName: this.rexxName
        };
        console.log(data2);
        axios({
          method: "post",
          url: "/api/createDataset",
          data: data2
        })
          .then(response => {
            console.log(response);
            console.log("create success");
            _this.writeDataset();
          })
          .catch(error => {
            console.log(error);
            _this.writeDataset();
          });
      }
    }
  }
};
</script>

<style>
pre {
  background: #eee;
  padding: 1em;
  margin: 1em 0 !important;

  border: 1px solid #ddd;
}
</style>
