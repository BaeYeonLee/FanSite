<template>
  <div class="wrapper"><Tab /></div>
</template>

<script>
import Tab from "@/Tab.vue";
export default {
  components: {
    Tab,
  },
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
