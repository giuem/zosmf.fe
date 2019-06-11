<template>
  <div class="auth">
    <div class="container">
      <nuxt />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.auth {
  height: 100vh;
  width: 100vw;
  background: #eee;
}
.container {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  // max-width: 400px;
  background: #fff;
  padding: 32px;
}
</style>
