<template>
  <view class="vehicle-item" @click="onClick">
    <view class="wrapper">
      <image class="image" :src="vehicle.series.image" mode="aspectFill" />
      <view class="info">
        <view class="name">{{ vehicle.series.name }}</view>
        <view class="remain">
          <text>今日余车：</text>
          <text class="num">{{ vehicle.remain }}</text>
        </view>
      </view>
    </view>
    <u-icon name="arrow-right" color="#999" />
  </view>
</template>

<script>
export default {
  name: 'vehicle-item',
  props: {
    vehicle: {
      type: Object,
      required: true
    }
  },
  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
.vehicle-item {
  padding: 20rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0 14rpx 0 rgba(0, 0, 0, 0.1);
  border-radius: 18rpx;
  background-color: $white;

  .wrapper {
    display: flex;
    align-items: center;

    .image {
      width: 237rpx;
      height: 100rpx;
      border-radius: 8rpx;
    }

    .info {
      margin-left: 20rpx;
      display: flex;
      flex-direction: column;

      .name {
        font-size: 32rpx;
      }
      .remain {
        margin-top: 17rpx;
        font-size: 28rpx;

        .num {
          color: $primary-color;
          font-size: 36rpx;
        }
      }
    }
  }
}
</style>
