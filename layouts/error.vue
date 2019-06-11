<template>
  <div id="error">
    <div class="container">
      <div>
        <template v-if="error.statusCode === 404">
          <h1><a-icon type="stop" /> 404</h1>
          <h2>你访问的页面不存在！</h2>
        </template>
        <template v-else>
          <h1><a-icon type="stop" /> 应用发生错误异常</h1>
        </template>
        <nuxt-link to="/dashboard">返回首页</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['error']
  // data() {
  //   return {
  //     from: null
  //   }
  // },
  // beforeRouteEnter(to, from, next) {
  //   next(vm => {
  //     vm.from = from
  //   })
  // }
}
</script>

<style lang="scss">
#error {
  height: 100vh;
  width: 100vw;
  position: relative;
  .container {
    padding: 2em;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  h1 {
    font-size: 8em;
    margin: 0;
  }
  h2 {
    font-size: 3em;
    color: rgba($color: #000000, $alpha: 0.7);
  }
}
</style>
