<template>
  <view class="black-view">
    <u-gap height="30" />
    <view class="base">
      <view>{{ black.name }}</view>
      <view>{{ black.phone }}</view>
    </view>

    <u-gap height="60" />
    <ui-title>情况描述</ui-title>
    <u-gap height="30" />

    <view class="desc">{{ black.description }}</view>
  </view>
</template>

<script>
import Black from '@/models/Black'

export default {
  name: 'black-view',
  computed: {
    black () {
      return Black.find(this.id)
    }
  },
  data () {
    return {
      id: null
    }
  },
  onLoad (options) {
    this.id = options.id
    if (!this.black) uni.navigateBack()
  }
}
</script>

<style lang="scss" scoped>
.black-view {
  height: 100vh;
  width: 100vw;
  overflow-y: auto;
  padding: 30rpx;

  .base {
    font-size: 32rpx;
    display: flex;
    justify-content: space-between;
  }

  .desc {
    font-size: 24rpx;
  }
}
</style>
