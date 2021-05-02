<template>
  <header>
    <div class="title" @click="goToMain">A Flower That Never Fades</div>
  </header>
</template>

<script>
export default {
  methods: {
    goToMain() {
      this.$router.push("/");
    },
  },
};
</script>
<style lang="scss" scoped>
header {
  margin-bottom: 20px;
  display: flex;
  height: 100px;
  justify-content: center;
  align-items: center;
  background-image: url("../../assets/img/header.jpg");
  background-position: bottom;
  font-style: italic;
  font-weight: bold;
  color: white;
  z-index: 2;
}
.title:hover {
  cursor: pointer;
}
</style>
