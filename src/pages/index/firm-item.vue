<template>
  <view class="firm-item">
    <image class="image" :src="item.image" />
    <view class="wrapper">
      <view class="name">
        <clamp>{{ item.name }}</clamp>
      </view>
      <view class="brands">
        <tag class="tag" v-for="(brand, index) of item.brands.slice(0, 3)" :key="index">
          {{ brand }}
        </tag>
      </view>
      <view class="remain">
        <text>今日余车：</text>
        <text class="num">{{ item.remain }}</text>
      </view>
    </view>
  </view>
</template>

<script>

export default {
  name: 'firm-item',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.firm-item {
  display: flex;
  padding: 30rpx;
  align-items: center;

  .image {
    object-fit: cover;
    object-position: center;
    width: 140rpx;
    height: 140rpx;
    border-radius: 6rpx;
  }

  .wrapper {
    flex: 1;
    padding-left: 33rpx;
    .name {
      font-size: 32rpx;
    }

    .brands {
      margin: 12rpx 0;
      display: flex;
      .tag + .tag {
        margin-left: 16rpx;
      }
    }

    .remain {
      font-size: 28rpx;
      .num {
        font-size: 36rpx;
        color: $primary-color;
        letter-spacing: 4rpx;
      }
    }
  }
}
</style>
