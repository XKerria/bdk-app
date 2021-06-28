<template>
  <view class="section-title">
    <view class="dot"></view>
    <view class="title">
      <slot></slot>
    </view>
  </view>
</template>

<script>
export default {
  name: 'section-title'
}
</script>

<style lang="scss" scoped>
.section-title {
  display: flex;
  align-items: center;

  .dot {
    height: 36rpx;
    width: 10rpx;
    border-radius: 5rpx;
    background-color: $primary-color;
  }

  .title {
    margin-left: 14rpx;
    font-size: 34rpx;
    color: $text-color-base;
  }
}
</style>
