<template>
  <div class="ui-search">
    <u-icon size="32" name="search" />
    <input
      placeholder-class="input-placeholder"
      class="input"
      type="text"
      confirm-type="搜索"
      :placeholder="placeholder"
      v-bind:value="value"
      v-on:input="onInput"
      v-on:confirm="onConfirm"
    />
  </div>
</template>

<script>
export default {
  name: 'ui-search',
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  methods: {
    onInput (e) {
      this.$emit('input', e.detail.value)
    },
    onConfirm (e) {
      this.$emit('confirm', e.detail.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.ui-search {
  display: flex;
  align-items: center;
  height: 68rpx;
  color: $text-color-placeholder;
  padding: 0 40rpx;
  background-color: $white;
  box-shadow: $shadow;
  border-radius: 34rpx;

  .input {
    margin-left: 12rpx;
    color: $text-color-base;
    font-size: 24rpx;
  }
  .input-placeholder {
    color: $text-color-placeholder;
    font-size: 24rpx;
  }
}
</style>
