<template>
  <div class="main-panel">
    <router-view />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.main-panel {
  max-width: 1440px;
  min-height: calc(100vh-160px);
  margin: 80px auto 0;
}
</style>
