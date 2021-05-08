<template>
  <div class="page-name">
    {{ pageName.split('/')[0].toUpperCase() }} <span> ( 28 )</span>
    <span class="album-title" v-if="pageName.includes('/')"> > &nbsp;&nbsp;&nbsp;Lilac</span>
  </div>
</template>
<script>
export default {
  props: {
    pageName: {
      type: String,
      default: '',
    },
  },
}
</script>
<style lang="scss" scoped>
.page-name {
  font-size: 16px;
  font-weight: bold;
  color: $IUDeepViolet;
  padding-left: 20px;
  grid-area: page-name;
  .album-title {
    padding-left: 20px;
    font-size: 14px;
  }
}
</style>
