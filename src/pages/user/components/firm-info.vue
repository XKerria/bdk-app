<template>
  <view class="firm-info">
    <view class="adjust">
      <text>{{ firm.name }}</text>
    </view>
    <view class="nums">
      <view class="num">
        <text>车辆总数</text>
        <u-gap height="14" />
        <text>{{ firm.amount }} 辆</text>
      </view>
      <view class="divider"></view>
      <view class="num">
        <text>车辆剩余</text>
        <u-gap height="14" />
        <text>{{ firm.remain }} 辆</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'firm-info',
  props: {
    firm: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.firm-info {
  padding: 0 30rpx;
  border-radius: 18rpx;
  background-color: $primary-color;
  color: $white;
  box-shadow: $shadow;

  .adjust {
    padding: 20rpx 0;
    border-bottom: 1rpx solid rgba(255, 255, 255, 0.2);
    font-size: 32rpx;
    text-align: center;
  }

  .nums {
    padding-top: 20rpx;
    padding-bottom: 28rpx;
    padding-left: 50rpx;
    padding-right: 50rpx;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .num {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .divider {
      width: 1rpx;
      height: 58rpx;
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
}
</style>
