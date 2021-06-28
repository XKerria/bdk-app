<template>
  <view class="tag">
    <slot></slot>
  </view>
</template>

<script>
export default {
  name: 'tag'
}
</script>

<style lang="scss" scoped>
.tag {
  display: inline-block;
  height: 32rpx;
  border-radius: 16rpx;
  padding: 0 16rpx;
  font-size: 24rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $primary-color-light;
  color: $primary-color;
}
</style>
