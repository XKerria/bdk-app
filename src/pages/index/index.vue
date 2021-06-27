<template>
  <view class="content">
    <carousel class="carousel" :images="banners.map(i => i.image)" />
    <image class="logo" src="/static/logo.png"></image>
    <view>
      <text class="title">{{ title }}</text>
    </view>
  </view>
</template>

<script>
import Banner from '@/models/Banner'

export default {
  computed: {
    banners: () => Banner.all()
  },
  data () {
    return {
      title: 'Hello'
    }
  },
  onLoad () {
    Banner.fetch()
  },
  methods: {

  }
}
</script>

<style lang="scss">
.index {
  display: flex;
  flex-direction: column;

  .carousel {
    box-sizing: border-box;
    width: 100%;
    height: 300rpx;
  }
}
</style>
