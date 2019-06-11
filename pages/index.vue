<template>
  <nuxt-link to="/">首页</nuxt-link>
</template>

<script>
export default {
  beforeCreate() {
    this.$nuxt.$router.replace({ path: '/dashboard' })
  }
}
</script>
