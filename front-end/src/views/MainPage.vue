<template>
  <div class="wrapper">
    <router-link to="/board">board</router-link>
  </div>
</template>

<script>
export default {
  methods: {
    test() {
      this.$api.getUserList();
    },
  },
  created() {
    this.test();
  },
};
</script>
