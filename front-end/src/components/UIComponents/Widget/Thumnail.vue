<template>
  <div>
    <div class="crop" v-for="(item, idx) in list" :key="idx">
      <div class="gra" :key="idx">
        <span>
          {{ item.title }}<br />
          {{ item.date }}
        </span>
        <img :src="item.img" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      default: '',
    },
  },
  data() {
    return {}
  },
  methods: {},
  created() {},
}
</script>
<style lang="scss">
.crop {
  .gra {
    span {
      font-size: 14px;
      color: #ffffffa3;
      position: absolute;
      font-style: italic;
      bottom: 20px;
      //absolute 요소 중앙정렬
      transform: translateX(-50%);
      left: 50%;
    }
    &:before {
      position: absolute;
      bottom: 0;
      content: '';
      width: 100%;
      height: 50%;
      background: linear-gradient(to top, black, transparent);
    }
    img {
      width: 100%;
    }
    text-align: center;
  }
  height: 300px;
  width: 250px;
  overflow: hidden;
  display: inline-block;
  position: relative;
  margin: 0 40px;
}
</style>
