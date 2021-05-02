<template>
  <div>
    <Tab></Tab>
  </div>
</template>

<script>
import Tab from "../components/UIComponents/Tab.vue";
export default {
  components: { Tab },
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
