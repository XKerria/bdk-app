<template>
  <view class="btn-vehicle">
    <view class="title">汽车服务</view>
    <view class="services">
      <text>汽车美容</text>
      <text>汽车保养</text>
      <text>汽车维修</text>
      <text>紧急救援</text>
    </view>
    <image class="image" src="/static/images/bg-vehicle.png" />
  </view>
</template>

<script>
export default {
  name: 'btn-vehicle'
}
</script>

<style lang="scss" scoped>
.btn-vehicle {
  height: 320rpx;
  width: 330rpx;
  padding: 30rpx;
  background-color: $white;
  border-radius: 18rpx;
  box-shadow: 0 0 14rpx 0 rgba(0, 0, 0, 0.1);
  position: relative;

  .title {
    font-size: 28rpx;
    color: $primary-color;
  }

  .services {
    margin-top: 20rpx;
    display: grid;
    grid-template-columns: repeat(2, auto);
    row-gap: 20rpx;
    column-gap: 60rpx;
    font-size: 24rpx;
  }

  .image {
    height: 157rpx;
    width: 215rpx;
    position: absolute;
    bottom: 0;
    right: 0;
  }
}
</style>
