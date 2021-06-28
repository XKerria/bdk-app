<template>
  <button
    class="ui-button"
    :class="{ disabled: disabled }"
    :open-type="phone ? 'getPhoneNumber' : null"
    :style="{
      height: `${height}rpx`,
      width: width ? `${width}rpx` : 'auto',
      fontSize: `${fontSize}rpx`,
      borderRadius: `${radius}rpx`,
      letterSpacing: `${letterSpacing}rpx`
    }"
    @click="onClick"
    @getphonenumber="onGetPhoneNumber"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ui-button',
  props: {
    phone: {
      type: Boolean,
      default: false
    },
    height: {
      type: [String, Number],
      default: 88
    },
    width: {
      type: [String, Number],
      default: 0
    },
    fontSize: {
      type: [String, Number],
      default: 32
    },
    shape: {
      type: [String],
      default: 'circle',
      validator: (val) => ['round', 'circle', 'square'].includes(val)
    },
    letterSpacing: {
      type: [String, Number],
      default: 4
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    radius () {
      if (this.shape === 'circle') return parseInt(this.height / 2)
      if (this.shape === 'round') return 8
      if (this.shape === 'square') return 0
      return this.height / 2
    }
  },
  methods: {
    onClick (e) {
      if (this.disabled) return
      this.$emit('click', e)
    },
    onGetPhoneNumber (e) {
      if (this.disabled) return
      this.$emit('getPhoneNumber', e)
    }
  }
}
</script>

<style lang="scss" scoped>
.ui-button {
  background-image: $primary-gradient;
  display: flex;
  justify-content: center;
  align-items: center;
  color: $white;
}
.disabled {
  background-image: none;
  background-color: $disabled-color;
}
</style>
