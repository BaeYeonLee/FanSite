<template>
  <div class="thumnail">
    <img :src="image" />
    <div class="thumnail-hover" @click="move">
      {{ title }}
      <template v-if="date">
        <br />
        {{ date }} <br />
        {{ type.toUpperCase() }}
      </template>
      <template v-else-if="startDate">
        <br />
        {{ startDate }} - {{ endDate }} <br />
        {{ cast }}<br />
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
    image: {
      type: String,
      default: '',
    },
    date: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
    id: {
      type: Number,
      default: -1,
    },
    cast: {
      type: String,
      default: '',
    },
    startDate: {
      type: String,
      default: '',
    },
    endDate: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
  },
  methods: {
    /* ------------------------------ EVENT METHOD ------------------------------ */
    move() {
      if (this.$route.path.includes('album')) {
        this.$router.push(`/album/${this.id}`)
      } else {
        window.open(this.link)
      }
    },
  },
  created() {
    console.log('------------> thumnail')
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
