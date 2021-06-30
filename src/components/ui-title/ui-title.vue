<template>
  <view class="ui-title">
    <view class="left">
      <view class="dot"></view>
      <view class="title">
        <slot></slot>
      </view>
    </view>
    <view class="right">
      <slot name="extra"></slot>
    </view>
  </view>
</template>

<script>
export default {
  name: 'ui-title'
}
</script>

<style lang="scss" scoped>
.ui-title {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .left {
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

  .right {
    font-size: 24rpx;
    color: $text-color-base;
  }
}
</style>
