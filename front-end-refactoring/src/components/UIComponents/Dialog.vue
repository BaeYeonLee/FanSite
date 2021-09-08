<template>
  <div v-show="modelValue" class="overlay flex-box center-contents">
    <div class="dialog">
      <div class="dialog__header">
        <slot name="title">
          <span class="dialog__title">
            {{ title }}
          </span>
        </slot>
        <button type="button" class="dialog__close-btn" @click="handleClose">&times;</button>
      </div>
      <div class="dialog__body">
        <slot />
      </div>
      <div v-if="footer" class="dialog__footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      default: '',
    },
    footer: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    handleClose() {
      this.$emit('closeDialog')
    },
  },
}
</script>

<style lang="scss" scope>
.overlay {
  position: fixed;
  z-index: 3001;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: $IU-Dialog-Black;

  .dialog {
    position: relative;
    width: 40%;
    background: #fefefe;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgb(0 0 0 / 30%);
    box-sizing: border-box;

    .dialog__header {
      padding: 16px 16px 8px;

      .dialog__title {
        font-size: 16px;
        color: $IU-BlueViolet;
      }

      .dialog__close-btn {
        position: absolute;
        top: 16px;
        right: 16px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        color: $IU-BlueViolet;
        line-height: 32px;
        font-size: 32px;
        font-weight: bold;
        cursor: pointer;

        &:hover {
          color: $IU-DeepViolet;
          cursor: pointer;
        }
      }
    }

    .dialog__body {
      padding: 16px 24px;
      font-size: 16px;
      word-break: break-all;
    }

    .dialog__footer {
      padding: 16px 16px 8px;
    }
  }
}
</style>
