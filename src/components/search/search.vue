<template>
  <div class="search">
    <u-icon size="32" name="search" />
    <input placeholder-class="input-placeholder" class="input" type="text" :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  name: 'search',
  props: {
    placeholder: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  align-items: center;
  height: 68rpx;
  color: $text-color-placeholder;
  padding: 0 40rpx;
  background-color: $white;
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
