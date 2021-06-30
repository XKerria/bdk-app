<template>
  <view class="btn-blacklist" @click="onClick">
    <view class="title">黑名单</view>
    <view class="services">
      <text>添加黑名单</text>
      <text>搜索联系人</text>
    </view>
    <image class="image" src="/static/images/bg-blacklist.png" />
  </view>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'btn-vehicle',
  computed: {
    ...mapState('auth', ['user'])
  },
  methods: {
    onClick () {
      if (this.user) {
        uni.navigateTo({ url: '/pages/black/list' })
      } else {
        uni.navigateTo({ url: '/pages/login/login' })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-blacklist {
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
    column-gap: 30rpx;
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
