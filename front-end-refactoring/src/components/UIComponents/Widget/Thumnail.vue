<template>
  <div class="thumnail">
    <img :src="img" />
    <div class="thumnail-hover">
      {{ title }}
      <template v-if="date">
        <br />
        {{ date }}
      </template>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    img: {
      type: String,
      default: '',
    },
    date: {
      type: String,
      default: '',
    },
    album_type: {
      type: String,
      default: '',
    },
  },
  created() {
    console.log('------------> thumnail')
    console.log(this.title)
  },
}
</script>
<style lang="scss">
$IU-Thumnail-LightViolet: rgba(183, 150, 200, 0.3);
.thumnail {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    .thumnail-hover {
      height: 100%;
      background: linear-gradient(to top, $IU-LightViolet, $IU-Thumnail-LightViolet);
      transition: 0.25s;
    }
  }

  .thumnail-hover {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 30%;
    border-radius: 10px;
    background: linear-gradient(to top, $IU-LightViolet, transparent);
    color: white;
    text-align: center;
    transition: 0.25s;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
}
</style>
