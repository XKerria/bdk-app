<template>
  <view class="page-footer">
    <view class="action" @click="onClick('/pages/index/index')">
      <image
        class="icon"
        :src="`/static/icons/home${current === 'pages/index/index' ? '-a' : ''}.png`"
        mode="aspectFit"
      />
      <view class="name" :class="{ 'name-active': current === 'pages/index/index' }">首页</view>
    </view>
    <view class="action" @click="onClick('/pages/brands/brands')">
      <image
        class="icon"
        :src="`/static/icons/car${current === 'pages/brands/brands' ? '-a' : ''}.png`"
        mode="aspectFit"
      />
      <view class="name" :class="{ 'name-active': current === 'pages/brands/brands' }">车辆</view>
    </view>
    <view class="action" @click="onClick('/pages/user/user')">
      <image
        class="icon"
        :src="`/static/icons/user${current === 'pages/user/user' ? '-a' : ''}.png`"
        mode="aspectFit"
      />
      <view class="name" :class="{ 'name-active': current === 'pages/user/user' }">我的</view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'page-footer',
  data () {
    return {
      current: 'pages/index/index'
    }
  },
  mounted () {
    const [current] = getCurrentPages().reverse()
    this.current = current.route
  },
  methods: {
    onClick (url) {
      if (url.startsWith(`/${this.current}`)) return
      uni.navigateTo({ url })
    }
  }
}
</script>

<style lang="scss" scoped>
.page-footer {
  width: 100vw;
  height: 110rpx;
  background-color: $white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;

  .action {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .icon {
      width: 48rpx;
      height: 48rpx;
    }

    .name {
      margin-top: 4rpx;
      font-size: 24rpx;
      color: $text-color-base;
    }
    .name-active {
      color: $primary-color;
    }
  }
}
</style>
