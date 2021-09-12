<template>
  <div class="selected-tab">
    <div
      v-for="(item, idx) in tabs"
      class="tab-item"
      :class="{ 'selected-tab': selectedIdx == idx }"
      @click="onClickTabs(idx)"
    >
      {{ item.label }}
      <span v-if="item.count != undefined" class="sub-text"> &nbsp;({{ item.count }})</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    /** TODO CHECK :: Data Foramt
      [
        { key: 'All', count: 0 },
        { key: 'Studio', count: 0 },
        { key: 'Mini', count: 0 },
        { key: 'Remake', count: 0 },
        { key: 'Single', count: 0 },
        { key: 'Digital', count: 0 },
      ],
     */
    tabs: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      selectedIdx: -1,
    }
  },
  mounted() {
    if (this.tabs.length > 0) {
      this.selectedIdx = 0
    }
  },
  methods: {
    onClickTabs(idx) {
      this.selectedIdx = idx

      this.$emit('changed', this.tabs[idx].code)
    },
  },
}
</script>
<style lang="scss">
.selected-tab {
  display: flex;

  .tab-item {
    flex: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: $IU-LightViolet;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;

    &.selected-tab {
      color: $IU-DeepViolet;
    }

    .sub-text {
      font-weight: normal;
    }
  }
}
</style>
