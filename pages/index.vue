<template>
  <div></div>
</template>

<script>
export default {
  beforeCreate() {
    this.$nuxt.$router.replace({ path: '/dashboard' })
  }
}
</script>
